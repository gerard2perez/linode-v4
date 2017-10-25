import { createJsonClient } from 'restify-clients';
import sanitize from './sanitize';
import spec from './spec';
let customFn = null;
let mapme = {
	get: 'get',
	delete: 'del',
	update: 'put'
};

Object.defineProperty(Array.prototype, 'peek', { // eslint-disable-line
	enumerable: false,
	writable: false,
	configurable: false,
	value: function (item) {
		let index = this.indexOf(item);
		if (index > -1) {
			this.splice(index, 1);
		}
		return item;
	}
});
function makerequest (client, method, path, hasparams, data) {
	if (hasparams && !data) {
		throw new Error(`this function requires some arguments. Check: https://developers.linode.com/v4/reference/endpoints${path.replace('v4/', '')}#${method}`);
	} else if (!hasparams && data) {
		throw new Error(`this function cannot have arguments. Check: https://developers.linode.com/v4/reference/endpoints${path.replace('v4/', '')}#${method}`);
	}
	return new Promise(function (resolve) {
		let args = [path, data].filter(f => f);
		if (customFn) {
			return customFn(client, method, path, hasparams, data, resolve);
		} else {
			client[method](...args, response.bind(null, resolve));
		}
	});
}
function response (resolve, ...args) {
	resolve(args.pop());
}
function appendcustom (id, actions, target, route) {
	for (let custom of actions) {
		if (custom.indexOf(':') > -1) {
			let single = custom.includes('single');
			if ((single && id) || !id) {
				let noargs = single || custom.includes('noargs') || (!single && !id);
				noargs = noargs && !custom.includes('hasargs');
				let nopath = custom.includes('nopath');
				let [rawcommand, method] = custom.split(':');
				let command = sanitize(rawcommand);
				let path = route;
				if (!nopath) {
					path += `/${rawcommand}`;
				}
				target[command] = makerequest.bind(target[command], this, method, path, !noargs);
			}
		}
	}
}
function makeapi (route, collection) {
	collection.actions = collection.actions || [];
	let raw1, raw2;
	let client = this.client;
	let handler = (id) => {
		let res = {};
		let url = `${route}/${id}`;
		raw1.forEach(ac => {
			let method = mapme[ac];
			/* istanbul ignore else */
			if (method) {
				res[ac] = makerequest.bind(null, client, method, url, method === 'put');
				res[ac].url = url;
				res[ac].method = method;
			}
		});
		appendcustom.bind(client)(id, raw2, res, url);
		for (const k in collection.collections) {
			res[sanitize(k)] = makeapi.bind(this)(`${route}/${id}/${k}`, collection.collections[k]);
		}
		return res;
	};
	if (collection.actions.indexOf('create') > -1) {
		handler.create = makerequest.bind(null, client, 'post', `${route}`, true);
	}
	if (collection.actions.indexOf('list') > -1) {
		handler.list = makerequest.bind(null, client, 'get', `${route}`, false);
	}
	raw1 = collection.actions.filter(d => !d.includes(':'));
	raw2 = collection.actions.filter(d => d.includes(':'));
	// console.log('---');
	// console.log(raw1);
	// console.log(raw2);
	// console.log(collection.actions);
	// console.log('---');
	raw1.peek('list');
	raw1.peek('create');
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
			return makerequest.bind(null, client, 'get', send, false)();
		};
		//  = () => {
		// 	return new Promise(function (resolve) {
		// 		client.get(`${send}`, response.bind(null, resolve));
		// 	});
		// };
	}
	if (collection.appendCollections) {
		for (const k in collection.collections) {
			handler[k] = makeapi.bind(this)(`${route}/${k}`, collection.collections[k]);
		}
	}
	appendcustom.bind(client)(null, collection.actions, handler, route);
	return handler;
}

export default class Linode {
	constructor (token, fn = null) {
		customFn = fn;
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
