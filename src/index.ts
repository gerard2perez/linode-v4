import sanitize from './sanitize';
import spec, { CollectionSpec } from './spec';
import { join } from 'path';
import { ExtendedClient } from './extended-client';
import { HTTPVerb } from './enumerations';

const specification = spec as any;
let customFn = null;
declare global{
	interface Array<T> {
		peek(o: T): Array<T>;
	}
}
interface Handler {
	[property:string]:any
	(id?:string | number):any;
	get: ()=>void
	update: (id?:string | number)=>void
}
interface MutableFunction {
	(id?:string | number): MutableFunction;
	[property:string]: any;
}
export type LinodeMakeRequest = (client:ExtendedClient,method:HTTPVerb, path:string,hasparams:boolean,canpaginate:boolean, data:any,filter:any, isCustom:boolean) => Promise<any>;
// istanbul ignore next
if(!Array.prototype.peek)
Object.defineProperty(Array.prototype, 'peek', { // eslint-disable-line
	enumerable: false,
	writable: false,
	configurable: false,
	value: function (item:any) {
		let array:any = this;
		let index = array.indexOf(item);
		/* istanbul ignore else */
		if (index > -1) {
			array.splice(index, 1);
			return true;
		}
		return false;
	}
});
function makerequest (instance:Linode, method:HTTPVerb, path:string, hasparams:boolean, canpaginate:boolean, data:any, filter:any) {
	// @ts-ignore
	let root:any = this;
	if(canpaginate && typeof data === 'object' && !filter) {
		filter = data;
		data = undefined;
	}
	if(canpaginate && data && typeof data !== 'number') {
		throw new Error(`Pagination value must be a number. Check: https://developers.linode.com/v4/reference/endpoints${path.replace('v4/', '')}#${method}`);
	}
	if(canpaginate && data && typeof data === 'number') {
		path += `?page=${data}`;
		data = undefined;
	}
	if (hasparams && !data) {
		throw new Error(`this function requires some arguments. Check: https://developers.linode.com/v4/reference/endpoints${path.replace('v4/', '')}#${method}`);
	} else if (!hasparams && data) {
		throw new Error(`this function cannot have arguments. Check: https://developers.linode.com/v4/reference/endpoints${path.replace('v4/', '')}#${method}`);
	}
	let args = [path, data, filter]; // .filter(f => f);

	if (instance.callback) {
		// return new Promise((resolve) => {
		return instance.callback(instance.client, method, path, hasparams,canpaginate, data,filter, root !== null);
		// });
	} else {
		return instance.client[method](...args);
	}
}
function appendcustom (instance:Linode, id: string | number | undefined, actions:string[], target:MutableFunction, route:string) {
	for (let custom of actions) {
		if (custom.indexOf(':') > -1) {
			let single = custom.includes('single');
			let singleId = single && id;
			if (singleId || !id) {
				let noargs = (single || custom.includes('noargs') || !singleId) && !custom.includes('hasargs');
				let nopath = custom.includes('nopath');
				let [rawcommand, method] = custom.split(':');
				let command = sanitize(rawcommand);
				let path = route;
				if (!nopath) {
					path += `/${rawcommand}`;
				}
				target[command] = makerequest.bind({custom: true}, instance, method, path, !noargs, false);
			}
		}
	}
}
function createHandler (instance: Linode, client:ExtendedClient, route:string, collection:CollectionSpec) {
	let simpleFnSet = collection.actions.filter(d => !d.includes(':')), complexFnSet = collection.actions.filter(d => d.includes(':'));
	let handler:MutableFunction = (id?:string | number) => {
		let res:any = {}, url = `${route}/${id}`;
		simpleFnSet.forEach(ac => {
			let method = HTTPVerb[ac as any];
			/* istanbul ignore else */
			if (method) {
				res[ac] = makerequest.bind(null, instance, method, url, method === 'put', false);
				res[ac].url = url;
				res[ac].method = method;
			}
		});
		appendcustom(instance,id, complexFnSet, res, url);
		for (const k in collection.collections) {
			res[sanitize(k)] = makeapi(instance,`${route}/${id}/${k}`, collection.collections[k]);
		}
		return res;
	};
	for (const [mname, method, hasparams, canpaginate] of [['create', HTTPVerb.post, true, false], ['list', HTTPVerb.get, false, true]]) {
		let casa:Array<string> = [];
		if (simpleFnSet.peek(mname as string)) {
			handler[mname as string] = makerequest.bind(null, instance, method, `${route}`, hasparams, canpaginate);
		}
	}
	return handler as Handler;
}
function makeapi (instance:Linode, route:string, collection:CollectionSpec) {
	collection.actions = collection.actions || [];
	let client = instance.client;
	let handler = createHandler(instance, client, route, collection);
	if (collection.query) {
		let root = handler, send = route;
		for (const query of collection.query) {
			let current:(data:string)=>string;
			root[query] = function (data:string) {
				send += `/${data}`;
				return current;
			};
			current = root[query];
			root = root[query];
		}
		root.get = () => makerequest.bind(null, instance, HTTPVerb.get, send, false)();
	}
	if (collection.appendCollections) {
		for (const k in collection.collections) {
			handler[sanitize(k)] = makeapi(instance,`${route}/${k}`, collection.collections[k]);
		}
	}
	appendcustom(instance, undefined, collection.actions, handler, route);
	return handler;
}
export default class Linode {
	callback?: LinodeMakeRequest
	client: ExtendedClient;
	[property:string]:any
	constructor (token:string, fn?:LinodeMakeRequest) {
		this.callback = fn;
		this.client = new ExtendedClient('https://api.linode.com', `Bearer ${token}`);
		Object.defineProperty(this, 'client', {
			enumerable: false,
			writable: false,
			configurable: false,
			value: this.client
		});
		for (const key in specification) {
			let KeyName = sanitize(specification[key].collectionName || key);
			this[KeyName] = makeapi(this,'/v4/' + key, specification[key]);
		}
	}
}
