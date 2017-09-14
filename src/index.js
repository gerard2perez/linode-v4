import { createJsonClient } from 'restify-clients';
import sanitize from './sanitize';
import spec from './spec';
function makerequest (client, method, path, hasparams = false, data) {
	if (hasparams && data) {
		throw new Error(`this function requires some argumes. Check: https://developers.linode.com/v4/reference/${path}`);
	}
	return new Promise(function (resolve) {
		let args = [path, data].filter(f => f);
		client[method](...args, response.bind(null, resolve));
	});
}
function response (resolve, err, req, res, obj) {
	resolve(obj);
}
function appendcustom (id, actions, target, route, client) {
	for (let custom of actions) {
		if (custom.indexOf(':') > -1) {
			let single = custom.includes('single');
			if ((single && id) || !id) {
				let noargs = custom.includes('noargs');
				let nopath = custom.includes('nopath');
				let [rawcommand, method] = custom.split(':');
				let command = sanitize(rawcommand);
				let path = route;
				if (!noargs && id) {
					path += `/${id}`;
				}
				if (!nopath) {
					path += `/${rawcommand}`;
				}
				target[command] = makerequest.bind(null, client, method, path, !noargs);
			}
		}
	}
}
function makeapi (route, collection) {
	collection.actions = collection.actions || [];
	let client = this.client;
	let handler = (id) => {
		let res = {};
		if (id) {
			if (collection.actions.indexOf('get') > -1) {
				res.get = makerequest.bind(null, client, 'get', `${route}/${id}`, false);
				// function () {
				// 	return new Promise(function (resolve) {
				// 		client.get(`${route}/${id}`, response.bind(null, resolve));
				// 	});
				// };
			}
			if (collection.actions.indexOf('delete') > -1) {
				res.delete = makerequest.bind(null, client, 'del', `${route}/${id}`, false);
			}
			if (collection.actions.indexOf('update') > -1) {
				res.update = function (data = {}) {
					return new Promise(function (resolve) {
						client.put(`${route}/${id}`, data, response.bind(null, resolve));
					});
				};
			}
			appendcustom(id, collection.actions, res, route, client);
		}
		for (const k in collection.collections) {
			res[sanitize(k)] = makeapi.bind(this)(`${route}/${id}/${k}`, collection.collections[k]);
		}
		return res;
	};
	if (collection.actions.indexOf('create') > -1) {
		handler.create = (data) => {
			return new Promise(function (resolve) {
				client.post(`${route}`, data, response.bind(null, resolve));
			});
		};
	}
	if (collection.actions.indexOf('list') > -1) {
		handler.list = () => {
			return new Promise(function (resolve) {
				client.get(`${route}`, response.bind(null, resolve));
			});
		};
	}

	if (collection.query) {
		let root = handler;
		let send = route;
		for (const query of collection.query) {
			let current;
			root[query] = function (data) {
				send += `/${data}`;
				return current;
			};
			current = root[query];
			root = root[query];
		}
		root.get = () => {
			return new Promise(function (resolve) {
				client.get(`${send}`, response.bind(null, resolve));
			});
		};
	}
	if (collection.actions.length < 2 || collection.appendCollections) {
		for (const k in collection.collections) {
			handler[k] = makeapi.bind(this)(`${route}/${k}`, collection.collections[k]);
		}
	}
	appendcustom(null, collection.actions, handler, route, client);
	return handler;
}

export default class Linode {
	constructor (token) {
		Object.defineProperty(this, 'client', {
			enumerable: false,
			writable: false,
			configurable: false,
			value: createJsonClient({
				url: 'https://api.linode.com',
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
		});
		for (const key in spec) {
			this[key] = makeapi.bind(this)('/v4/' + key, spec[key]);
		}
	}
}
