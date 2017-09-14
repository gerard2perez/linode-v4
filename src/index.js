import { createJsonClient } from 'restify-clients';
import sanitize from './sanitize';
import spec from './spec';

function response (resolve, err, req, res, obj) {
	resolve(obj);
}
function appendcustom (id, actions, target, route, client) {
	for (let custom of actions) {
		if (custom.indexOf(':') > -1) {
			let ar = custom.split(':');
			if (ar.length >= 3 && ar[0] === 'single' && id) {
				let path = `${route}/${id}/${ar[1]}`;
				let command = sanitize(ar[1]);
				if (ar[3] && ar[3] === 'noargs') {
					path = `${route}/${id}}`;
				}
				target[command] = function (data) {
					return new Promise(function (resolve) {
						if (data) {
							client[ar[2]](path, data, response.bind(null, resolve));
						} else {
							client[ar[2]](path, response.bind(null, resolve));
						}
					});
				};
			} else if (ar.length === 2 && !id) {
				target[sanitize(ar[0])] = function (data) {
					return new Promise(function (resolve) {
						if (data) {
							client[ar[1]](`${route}/${ar[0]}`, data, response.bind(null, resolve));
						} else {
							client[ar[1]](`${route}/${ar[0]}`, response.bind(null, resolve));
						}
					});
				};
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
				res.get = function () {
					return new Promise(function (resolve) {
						client.get(`${route}/${id}`, response.bind(null, resolve));
					});
				};
			}
			if (collection.actions.indexOf('delete') > -1) {
				res.delete = function () {
					return new Promise(function (resolve) {
						client.del(`${route}/${id}`, response.bind(null, resolve));
					});
				};
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

	if (collection.actions.length < 2) {
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
