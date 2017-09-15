
import { app, assert } from './instance';

describe('Linodes', function () {
	it('Instances', async function () {
		assert.equal(await app.linode.instances.list(), '/v4/linode/instances#get');
		assert.equal(await app.linode.instances.create({}), '/v4/linode/instances#post');
		assert.equal(await app.linode.instances(1).update({}), '/v4/linode/instances/1#put');
		assert.equal(await app.linode.instances(1).delete(), '/v4/linode/instances/1#del');
		assert.equal(await app.linode.instances(1).get(), '/v4/linode/instances/1#get');
		assert.equal(await app.linode.instances(1).update({}), '/v4/linode/instances/1#put');
		assert.equal(await app.linode.instances(1).boot(), '/v4/linode/instances/1/boot#post');
		assert.equal(await app.linode.instances(1).kvmify(), '/v4/linode/instances/1/kvmify#post');
		assert.equal(await app.linode.instances(1).mutate(), '/v4/linode/instances/1/mutate#post');
		assert.equal(await app.linode.instances(1).reboot(), '/v4/linode/instances/1/reboot#post');
		assert.equal(await app.linode.instances(1).rebuild(), '/v4/linode/instances/1/rebuild#post');
		assert.equal(await app.linode.instances(1).rescue(), '/v4/linode/instances/1/rescue#post');
		assert.equal(await app.linode.instances(1).resize(), '/v4/linode/instances/1/resize#post');
		assert.equal(await app.linode.instances(1).shutdown(), '/v4/linode/instances/1/shutdown#post');
		assert.equal(await app.linode.instances(1).volumes(), '/v4/linode/instances/1/volumes#get');
	});
	it('Backups', async function () {
		assert.equal(await app.linode.instances(1).backups.list(), '/v4/linode/instances/1/backups#get');
		assert.equal(await app.linode.instances(1).backups.create({}), '/v4/linode/instances/1/backups#post');
		assert.equal(await app.linode.instances(1).backups(1).restore(), '/v4/linode/instances/1/backups/1/restore#post');
		assert.equal(await app.linode.instances(1).backups.cancel(), '/v4/linode/instances/1/backups/cancel#post');
		assert.equal(await app.linode.instances(1).backups.enable(), '/v4/linode/instances/1/backups/enable#post');
	});
	it('Configs', async function () {
		assert.equal(await app.linode.instances(1).configs.list(), '/v4/linode/instances/1/configs#get');
		assert.equal(await app.linode.instances(1).configs.create({}), '/v4/linode/instances/1/configs#post');
		assert.equal(await app.linode.instances(1).configs(1).get(), '/v4/linode/instances/1/configs/1#get');
		assert.equal(await app.linode.instances(1).configs(1).update({}), '/v4/linode/instances/1/configs/1#put');
		assert.equal(await app.linode.instances(1).configs(1).delete(), '/v4/linode/instances/1/configs/1#del');
	});
	it('Disks', async function () {
		assert.equal(await app.linode.instances(1).disks.list(), '/v4/linode/instances/1/disks#get');
		assert.equal(await app.linode.instances(1).disks.create({}), '/v4/linode/instances/1/disks#post');
		assert.equal(await app.linode.instances(1).disks(1).get(), '/v4/linode/instances/1/disks/1#get');
		assert.equal(await app.linode.instances(1).disks(1).update({}), '/v4/linode/instances/1/disks/1#put');
		assert.equal(await app.linode.instances(1).disks(1).duplicate(), '/v4/linode/instances/1/disks/1#post');
		assert.equal(await app.linode.instances(1).disks(1).delete(), '/v4/linode/instances/1/disks/1#del');
		assert.equal(await app.linode.instances(1).disks(1).password(), '/v4/linode/instances/1/disks/1/password#post');
		assert.equal(await app.linode.instances(1).disks(1).resize(), '/v4/linode/instances/1/disks/1/resize#post');
	});
	it('Distributions', async function () {
		assert.equal(await app.linode.distributions.list(), '/v4/linode/distributions#get');
		assert.equal(await app.linode.distributions(1).get(), '/v4/linode/distributions/1#get');
		assert.ok(await app.linode.distributions('linode/slackware14.1').get());
	});
	it('IPs', async function () {
		assert.equal(await app.linode.instances(1).ips.list(), '/v4/linode/instances/1/ips#get');
		assert.equal(await app.linode.instances(1).ips(1).get(), '/v4/linode/instances/1/ips/1#get');
		assert.equal(await app.linode.instances(1).ips.sharing.list(), '/v4/linode/instances/1/ips/sharing#get');
		assert.equal(await app.linode.instances(1).ips.sharing.update({}), '/v4/linode/instances/1/ips/sharing#put');
		assert.equal(await app.linode.instances(1).ips.sharing.delete(), '/v4/linode/instances/1/ips/sharing#del');
	});
	it('Kernels', async function () {
		assert.equal(await app.linode.kernels.list(), '/v4/linode/kernels#get');
		assert.equal(await app.linode.kernels(1).get(), '/v4/linode/kernels/1#get');
	});
	it('StackScripts', async function () {
		assert.equal(await app.linode.stackscripts.list(), '/v4/linode/stackscripts#get');
		assert.equal(await app.linode.stackscripts.create({}), '/v4/linode/stackscripts#post');
		assert.equal(await app.linode.stackscripts(1).get(), '/v4/linode/stackscripts/1#get');
		assert.equal(await app.linode.stackscripts(1).update({}), '/v4/linode/stackscripts/1#put');
		assert.equal(await app.linode.stackscripts(1).delete(), '/v4/linode/stackscripts/1#del');
	});
	it('Stats', async function () {
		assert.equal(await app.linode.instances(1).stats.list(), '/v4/linode/instances/1/stats#get');
		assert.equal(await app.linode.instances(1).stats.year(1).month(1).get(), '/v4/linode/instances/1/stats/1/1#get');
		assert.equal(await app.linode.instances(1).stats.year(1).month(1).get(), '/v4/linode/instances/1/stats/1/1#get');
	});
	it('Types', async function () {
		assert.equal(await app.linode.types.list(), '/v4/linode/types#get');
		assert.equal(await app.linode.types(1).get(), '/v4/linode/types/1#get');
	});
	it('Volumes', async function () {
		assert.equal(await app.linode.volumes.list(), '/v4/linode/volumes#get');
		assert.equal(await app.linode.volumes.create({}), '/v4/linode/volumes#post');
		assert.equal(await app.linode.volumes(1).get(), '/v4/linode/volumes/1#get');
		assert.equal(await app.linode.volumes(1).update({}), '/v4/linode/volumes/1#put');
		assert.equal(await app.linode.volumes(1).delete(), '/v4/linode/volumes/1#del');

		assert.equal(await app.linode.volumes(1).attach(), '/v4/linode/volumes/1/attach#post');
		assert.equal(await app.linode.volumes(1).detach(), '/v4/linode/volumes/1/detach#post');
	});
});
