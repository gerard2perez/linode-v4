export default {
	linode: {
		collections: {
			distributions: { actions: ['list', 'get'] },
			kernels: { actions: ['list', 'get'] },
			stackscripts: { actions: ['list', 'get', 'create', 'update', 'delete'] },
			types: { actions: ['list', 'get'] },
			volumes: { actions: ['list', 'get', 'create', 'update', 'delete', 'single:attach:post', 'single:detach:post'] },
			instances: {
				actions: ['list', 'get', 'create', 'update', 'delete', 'single:boot:post', 'single:clone:post', 'single:kvmify:post', 'single:mutate:post', 'single:reboot:post', 'single:rebuild:post', 'single:rescue:post', 'single:resize:post', 'single:shutdown:post', 'single:volumes:post'],
				collections: {
					backups: { actions: ['list', 'get', 'create', 'single:restore:post', 'cancel:post', 'enable:post'] },
					configs: { actions: ['list', 'get', 'create', 'update', 'delete'] },
					disks: { actions: ['list', 'get', 'single:duplicate:post:noargs', 'create', 'update', 'delete', 'single:password:post', 'single:resize:post'] },
					ips: {actions: ['list', 'get', 'create', 'update', 'delete', 'sharing:post']},
					stats: { actions: ['list'], query: ['year', 'month'] }
				}
			}
		}
	},
	domains: {
		actions: ['list', 'get', 'create', 'update', 'delete'],
		collections: {
			records: {actions: ['list', 'get', 'create', 'update', 'delete']}
		}
	}
};
