import { createJsonClient } from 'restify-clients';
import { join } from 'path';
class Linode {
	constructor(methods, collections = {}, path=null) {
		this.methods = methods;
		this.collections = collections;
		this.path = path;
	}
	url( url ) {
		if (this.path === null) {
			this.path = url;
		}
		return this.path;
	}
	toString() {
		return this.inspect();
	}
	valueOf(){
		return this.inspect();
	}
	// inspect(){
	// 	return `Linode {${Object.keys(this.collections).map(c=>`${c}: ${this.collections[c].inspect()}`).join(',')}}`;
	// }
}
let client = createJsonClient({
	url: 'https://api.linode.com'
});
let level;
let target = {
	domains: new Linode(['get', 'post'], { records: new Linode(['get', 'post']) })
};

let API = {
	domains: {
		actions:['get', 'post', 'put', 'delete'],
		collections: {
			records:{actions: ['get', 'post', 'put', 'delete']}
		}
	}
}
let TREE = {};
function buildtree (path, tree, api) {
	for(const object in api) {
		tree[object] = new Linode(api[object].actions, api[object].collections, path+'/'+object);
	}
}

buildtree('/v4', TREE, API);
console.log(TREE);
let internal = {};
let callable = {
	get: function (target, property, receiver) {
		if (target[property] instanceof Linode) {
			return function ( id = '' ) {
				return new Promise((resolve) => {
					client.get(target[property].url(`/v4/${property}/${id}`), function (err, req, res, obj) {
						if (target[property].collections) {
							for (const prop in target[property].collections) {
								Object.defineProperty(obj, prop, {
									enumerable: false,
									writable: false,
									configurable: false,
									value: target[property].collections[prop]
								});
								obj[prop].url(target[property].url() + `/${prop}/`);
							}
						}
						if(id && obj) {
							obj.update= function () {
								
							};
							obj.delete = function() {
								
							};
						} else if (obj) {
							obj.create = function() {
								
							};
						}
						resolve(new Proxy(obj, callable));
					});
				});
			};
		} else {
			return target[property];
		}
	}
};

export default function linode (token) {
	client.headers = {
		Authorization: `Bearer ${token}`
	};
	return new Proxy(target, callable);
}

//
// function domains (id = null) {
// 	return this.methods;
// }
//
// function records ( id = null)  {
//
// }
function isTestable (value) {
	return function (target) {
		target.isTestable = value;
	};
}

function list (collection) {
	return function decorator (target) {
		target[collection] = function get ( id = '' ) {
			return new Promise((resolve) => {
				client.get(`/v4/${collection}/${id}`, function (err, req, res, obj) {
					resolve(obj);
				});
			});
		};
		// let overloaded
		// descriptor.value = function ( id = '' ) {
		// 	// console.log(target);
		// 	
		// };
		// if (collection) {
		// 	descriptor.value[collection] = function ( id = '' ) {
		// 		// console.log(this);
		// 		return new Promise((resolve) => {
		// 			client.get(`/v4/${key}/${collection}/${id}`, function (err, req, res, obj) {
		// 				resolve(obj);
		// 			});
		// 		});
		// 	};
		// }
		// descriptor.value.caca=()=>{};
		// // console.log(descriptor.value[collection]);
		// console.log(descriptor);

	};
}

// export default function linode (token) {
//   const client = 
//   return new Linode(client);
// }

// export default p;
