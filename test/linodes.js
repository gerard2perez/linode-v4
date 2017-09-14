import Linode from '../src';
import * as assert from 'assert';

const app = new Linode('abc_token');

describe('Linodes', function () {
	it('Instances', async function () {
		assert.ok(app.linode.instances.list());
		assert.ok(app.linode.instances.create({}));

		// assert.ok(await app.linode.instances.create({}));
		assert.ok(await app.linode.instances(1).update({}));
		assert.ok(await app.linode.instances(1).delete());

		assert.ok(app.linode.instances(1).get());
		assert.ok(app.linode.instances(1).update());
		assert.ok(app.linode.instances(1).delete());
		assert.ok(app.linode.instances(1).boot());
		assert.ok(app.linode.instances(1).kvmify());
		assert.ok(app.linode.instances(1).mutate());
		assert.ok(app.linode.instances(1).reboot());
		assert.ok(app.linode.instances(1).rebuild());
		assert.ok(app.linode.instances(1).rescue());
		assert.ok(app.linode.instances(1).resize());
		assert.ok(app.linode.instances(1).shutdown());
		assert.ok(app.linode.instances(1).volumes());

		assert.ok(app.linode.instances.volumes().list);
		assert.ok(app.linode.instances.volumes({}));
	});
	it('Backups', async function () {
		assert.ok(app.linode.instances(1).backups.list(), 'get /linode/instances/:id/backups');
		assert.ok(app.linode.instances(1).backups.create(), 'post /linode/instances/:id/backups');
		assert.ok(app.linode.instances(1).backups(1).restore(), 'post /linode/instances/:id/backups/:id/restore');
		assert.ok(app.linode.instances(1).backups.cancel());
		assert.ok(app.linode.instances(1).backups.enable());
	});
	it('Configs', async function () {
		assert.ok(app.linode.instances(1).configs(), 'get /linode/instances/:id/configs');
		assert.ok(app.linode.instances(1).configs.create(), 'post /linode/instances/:id/configs');
		assert.ok(app.linode.instances(1).configs(1).get(), 'post /linode/instances/:id/configs/:id');
		assert.ok(app.linode.instances(1).configs(1).update(), 'post /linode/instances/:id/configs/:id');
		assert.ok(app.linode.instances(1).configs(1).delete(), 'post /linode/instances/:id/configs/:id');
	});
	it('Disks', async function () {
		assert.ok(app.linode.instances(1).disks, 'get /linode/instances/:id/disks');
		assert.ok(app.linode.instances(1).disks.create, 'post /linode/instances/:id/disks');
		assert.ok(app.linode.instances(1).disks(1).get, 'get /linode/instances/:id/disks/:id');
		assert.ok(app.linode.instances(1).disks(1).update, 'put /linode/instances/:id/disks/:id');
		assert.ok(app.linode.instances(1).disks(1).duplicate, 'post /linode/instances/:id/disks/:id');
		assert.ok(app.linode.instances(1).disks(1).delete, 'del /linode/instances/:id/disks/:id');
		assert.ok(app.linode.instances(1).disks(1).password, 'post /linode/instances/:id/disks/:id/password');
		assert.ok(app.linode.instances(1).disks(1).resize, 'post /linode/instances/:id/disks/:id/password');
	});
	it('Distributions', async function () {
		assert.ok(app.linode.distributions());
		assert.ok(app.linode.distributions.list, 'get /linode/distributions');
		assert.ok(app.linode.distributions(1).get, 'get /linode/distributions/:id');
		assert.ok(await app.linode.distributions.list());
		assert.ok(await app.linode.distributions('linode/slackware14.1').get());
		assert.ok(await app.linode.distributions());
	});
	it('IPs', async function () {
		assert.ok(app.linode.instances(1).ips());
		assert.ok(app.linode.instances(1).ips.list, 'get /linode/instances/:id/ips');
		assert.ok(app.linode.instances(1).ips(1).get, 'put /linode/instances/:id/ips/:ip_address');
		assert.ok(app.linode.instances(1).ips.sharing.list, 'get /linode/instances/:id/ips/sharing');
		assert.ok(app.linode.instances(1).ips.sharing.update, 'put /linode/instances/:id/ips/sharing');
		assert.ok(app.linode.instances(1).ips.sharing.delete, 'delete /linode/instances/:id/ips/sharing');
	});
	it('Kernels', async function () {
		assert.ok(app.linode.kernels());
		assert.ok(app.linode.kernels.list, 'get /linode/kernels');
		assert.ok(app.linode.kernels(1).get, 'get /linode/kernels/:id');
	});
	it('StackScripts', async function () {
		assert.ok(app.linode.stackscripts());
		assert.ok(app.linode.stackscripts.list, 'get /linode/stackscripts');
		assert.ok(app.linode.stackscripts.create, 'get /linode/stackscripts');
		assert.ok(app.linode.stackscripts(1).get, 'get /linode/stackscripts/:id');
		assert.ok(app.linode.stackscripts(1).update, 'put /linode/stackscripts/:id');
		assert.ok(app.linode.stackscripts(1).delete, 'del /linode/stackscripts/:id');
	});
	it('Stats', async function () {
		assert.ok(app.linode.instances(1).stats, 'get /linode/instances/:id/stats');
		assert.ok(app.linode.instances(1).stats.year(1).month(1).get, 'get /linode/instances/:id/stats/:year/:month');
		assert.ok(app.linode.instances(1).stats.year(1).month(1).get());
	});
	it('Types', async function () {
		assert.ok(app.linode.types());
		assert.ok(app.linode.types.list, 'get /linode/types');
		assert.ok(app.linode.types(1).get, 'get /linode/types/:id');
	});
	it('Volumes', async function () {
		assert.ok(app.linode.volumes());
		assert.ok(app.linode.volumes.list, 'get /linode/volumes');
		assert.ok(app.linode.volumes.create, 'get /linode/volumes');
		assert.ok(app.linode.volumes(1).get, 'get /linode/volumes/:id');
		assert.ok(app.linode.volumes(1).update, 'put /linode/volumes/:id');
		assert.ok(app.linode.volumes(1).delete, 'del /linode/volumes/:id');

		assert.ok(app.linode.volumes(1).attach, 'del /linode/volumes/:id/attach');
		assert.ok(app.linode.volumes(1).detach, 'del /linode/volumes/:id/detach');
	});
});
