export default {
	linode: {
		collections: {
			distributions: {
				actions: ['list', 'get']
			},
			kernels: {
				actions: ['list', 'get']
			},
			stackscripts: {
				actions: ['list', 'get', 'create', 'update', 'delete']
			},
			types: {
				actions: ['list', 'get']
			},
			volumes: {
				actions: ['list', 'get', 'create', 'update', 'delete', 'attach:post:single', 'detach:post:single']
			},
			instances: {
				actions: ['list', 'get', 'create', 'update', 'delete', 'boot:post:single', 'clone:post:single', 'kvmify:post:single', 'mutate:post:single', 'reboot:post:single', 'rebuild:post:single', 'rescue:post:single', 'resize:post:single', 'shutdown:post:single', 'volumes:post:single'],
				collections: {
					backups: {
						actions: ['list', 'create', 'restore:post:single', 'cancel:post', 'enable:post']
					},
					configs: {
						actions: ['list', 'get', 'create', 'update', 'delete']
					},
					disks: {
						actions: ['list', 'get', 'duplicate:post:noargs:single', 'create', 'update', 'delete', 'password:post:single', 'resize:post:single']
					},
					ips: {
						paramname: 'ip_address',
						actions: ['list', 'get', 'create', 'update', 'delete'],
						appendCollections: true,
						collections: {
							sharing: {
								actions: ['list', 'update:put:noargs', 'delete:del:noargs']
							}
						}
					},
					stats: {
						actions: ['list'],
						query: ['year', 'month']
					}
				}
			}
		}
	},
	domains: {
		actions: ['list', 'get', 'create', 'update', 'delete'],
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
				actions: ['list', 'create', 'get', 'delete', 'ssl:post:single'],
				collections: {
					nodes: {
						actions: ['list', 'get', 'create', 'update', 'delete']
					}
				}
			}
		}
	},
	networking: {
		actions: ['ip-assign:post'],
		collections: {
			ipv4: {
				flatten: true,
				paramname: 'address',
				actions: ['list', 'get', 'create', 'update', 'delete']
			},
			ipv6: {
				flatten: true,
				paramname: 'address',
				actions: ['list', 'get', 'update']
			}
		}
	},
	regions: {
		actions: ['list', 'get']
	},
	support: {
		collections: {
			tickets: {
				actions: ['list', 'get', 'create', 'update', 'delete', 'attachments:post:single', 'replies:post:single']
			}
		}
	},
	account: {
		collections: {
			clients: {
				actions: ['list', 'get', 'create', 'update', 'delete', 'reset_secret:post:single', 'thumbnai:post:single']
			},
			events: {
				actions: ['list', 'get', 'read:post:single', 'seen:post:single']
			},
			settings: {
				actions: ['list', 'update:put:noargs']
			},
			tokens: {
				actions: ['list', 'get', 'create', 'update', 'delete']
			},
			users: {
				paramname: 'username',
				actions: ['list', 'get', 'create', 'update', 'delete', 'password:post:single'],
				collections: {
					grants: {
						paramname: 'username',
						actions: ['list', 'update:put:nopath:noargs']
					}
				}
			}
		}
	},
	profile: {
		actions: ['get:get:nopath:noargs', 'grants:get:noargs', 'password:post:noargs', 'tfa-disable:post:noargs', 'tfa-enable:post:noargs', 'tfa-enable-confirm:post:noargs']
	}

};
