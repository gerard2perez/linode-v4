export interface CollectionSpec {
	collectionName?:string,
	actions:string[]
	query:string[]
	appendCollections: boolean
	collections:any
}
export default {
	linode: {
		collectionName: 'linodes',
		appendCollections: true,
		collections: {
			instances: {
				actions: ['list', 'get', 'create', 'update', 'delete', 'boot:post:single:hasargs', 'clone:post:single:hasargs', 'mutate:post:single:hasargs', 'reboot:post:single:hasargs', 'rebuild:post:single:hasargs', 'rescue:post:single:hasargs', 'resize:post:single:hasargs', 'shutdown:post:single:hasargs', 'volumes:get:single'],
				collections: {
					backups: {
						actions: ['list', 'create', 'restore:post:single', 'cancel:post', 'enable:post']
					},
					configs: {
						actions: ['list', 'get', 'create', 'update', 'delete']
					},
					disks: {
						actions: ['list', 'get', 'create', 'update', 'delete', 'clone:post:noargs:single','password:post:single:hasargs', 'resize:post:single:hasargs']
					},
					ips: {
						paramname: 'ip_address',
						actions: ['list', 'get', 'create', 'update', 'delete'],
					},
					stats: {
						actions: ['list'],
						query: ['year', 'month']
					}
				}
			},
			kernels: {
				actions: ['list', 'get']
			},
			stackscripts: {
				actions: ['list', 'get', 'create', 'update', 'delete']
			},
			types: {
				actions: ['list', 'get']
			}
		}
	},
	domains: {
		actions: ['list', 'get', 'create', 'update', 'delete', 'clone:post:single:hasargs'],
		collections: {
			records: {
				actions: ['list', 'get', 'create', 'update', 'delete']
			}
		}
	},
	nodebalancers: {
		actions: ['list', 'create', 'get', 'update', 'delete'],
		collections: {
			configs: {
				actions: ['list', 'create', 'get', 'delete'],
				collections: {
					nodes: {
						actions: ['list', 'get', 'create', 'update', 'delete']
					}
				}
			}
		}
	},
	networking: {
		appendCollections: true,
		collections: {
			ips: {
				paramname: 'address',
				actions:['list','create', 'get','update', 'delete']
			},
			ipv4: {
				// flatten: true,
				paramname: 'address',
				actions: ['assign:post:hasargs', 'share:post:hasargs']
			},
			ipv6: {
				// flatten: true,
				paramname: 'address',
				actions: ['pools:get', 'ranges:get']
			}
		}
	},
	regions: {
		actions: ['list', 'get']
	},
	support: {
		appendCollections: true,
		collections: {
			tickets: {
				actions: ['list', 'get', 'create', 'attachments:post:single:hasargs', 'replies:post:single:hasargs']
			}
		}
	},
	account: {
		actions:['get:get:noargs:nopath','update:put:nopath:hasargs'],
		appendCollections: true,
		collections: {
			events: {
				actions: ['list', 'get', 'read:post:single', 'seen:post:single']
			},
			invoices: {
				actions: ['list', 'get', 'items:get:single']
			},
			notifications: {
				actions: ['list']
			},
			'oauth-clients': {
				appendCollections: true,
				actions: ['list', 'get', 'create', 'update', 'delete', 'reset-secret:post:single'],
				collections: {
					thumbnail: {
						actions: ['get:get:nopath:noargs', 'update:put:nopath:hasargs']
					}
				}
			},
			payments: {
				actions:['list', 'create', 'get'],
				appendCollections: true,
				collections: {
					paypal: {
						actions: [ 'post:post:hasargs:nopath', 'execute:post:hasargs' ]
					}
				}
			},
			settings: {
				actions: ['list', 'update:put:nopath:hasargs', 'managed-enable:post:noargs']
			},
			transfer: {
				actions: ['get:get:nopath:noargs']
			},
			users: {
				paramname: 'username',
				actions: ['list', 'get', 'create', 'update', 'delete'],
				collections: {
					grants: {
						actions: ['get:get:noargs:nopath', 'update:put:nopath:hasargs']
					}
				}
			}
		}
	},
	profile: {
		appendCollections: true,
		actions: ['update:put:hasargs:nopath', 'get:get:nopath:noargs', 'grants:get:noargs', 'password:post:noargs', 'tfa-disable:post:noargs', 'tfa-enable:post:noargs', 'tfa-enable-confirm:post:noargs'],
		collections:{
			apps:{
				actions: ['list', 'get', 'delete']
			},
			tokens: {
				actions: ['list', 'get', 'create', 'update', 'delete']
			},
			whitelist: {
				actions:['list', 'create', 'get', 'delete']
			}
		}
	},
	images: {
		actions: ['list', 'get','create', 'update', 'delete']
	},
	volumes: {
		actions: ['list', 'get', 'create', 'update', 'delete',
			'attach:post:single:hasargs',
			'clone:post:single:hasargs',
			'detach:post:single',
			'resize:post:single:hasargs',
		]
	},
	managed: {

		appendCollections: true,
		collections:{
			contacts: {
				actions: ['list', 'get', 'create', 'update', 'delete'],
			},
			credentials:{
				actions: ['list', 'get', 'create', 'update']
			},
			issues: {
				actions:['list', 'get']
			},
			'linode-settings': {
				actions:['list', 'get', 'update']
			},
			services:{
				actions: ['list', 'get', 'create', 'update', 'delete', 'disable:post:single:noargs', 'enable:post:single:noargs']
			},
			stats: {
				actions:['list']
			},
		}

	}
};
