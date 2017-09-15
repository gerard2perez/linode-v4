import * as assert from 'assert';
import app from './instance';

describe('Linodes', function () {
	it('Instances', async function () {
		assert.equal(await app.linode.instances.list(), 'get /v4/linode/instances');
		assert.equal(await app.linode.instances.create({}), 'post /v4/linode/instances');
		assert.equal(await app.linode.instances(1).update({}), 'put /v4/linode/instances/1');
		assert.equal(await app.linode.instances(1).delete(), 'del /v4/linode/instances/1');
		assert.equal(await app.linode.instances(1).get(), 'get /v4/linode/instances/1');
		assert.equal(await app.linode.instances(1).update({}), 'put /v4/linode/instances/1');
		assert.equal(await app.linode.instances(1).delete(), 'del /v4/linode/instances/1');
		assert.equal(await app.linode.instances(1).boot(), 'post /v4/linode/instances/1/boot');
		assert.equal(await app.linode.instances(1).kvmify(), 'post /v4/linode/instances/1/kvmify');
		assert.equal(await app.linode.instances(1).mutate(), 'post /v4/linode/instances/1/mutate');
		assert.equal(await app.linode.instances(1).reboot(), 'post /v4/linode/instances/1/reboot');
		assert.equal(await app.linode.instances(1).rebuild(), 'post /v4/linode/instances/1/rebuild');
		assert.equal(await app.linode.instances(1).rescue(), 'post /v4/linode/instances/1/rescue');
		assert.equal(await app.linode.instances(1).resize(), 'post /v4/linode/instances/1/resize');
		assert.equal(await app.linode.instances(1).shutdown(), 'post /v4/linode/instances/1/shutdown');
		assert.equal(await app.linode.instances(1).volumes(), 'get /v4/linode/instances/1/volumes');
	});
	it('Backups', async function () {
		assert.equal(await app.linode.instances(1).backups.list(), 'get /v4/linode/instances/1/backups');
		assert.equal(await app.linode.instances(1).backups.create({}), 'post /v4/linode/instances/1/backups');
		assert.equal(await app.linode.instances(1).backups(1).restore(), 'post /v4/linode/instances/1/backups/1/restore');
		assert.equal(await app.linode.instances(1).backups.cancel(), 'post /v4/linode/instances/1/backups/cancel');
		assert.equal(await app.linode.instances(1).backups.enable(), 'post /v4/linode/instances/1/backups/enable');
	});
	it('Configs', async function () {
		assert.equal(await app.linode.instances(1).configs.list(), 'get /v4/linode/instances/1/configs');
		assert.equal(await app.linode.instances(1).configs.create({}), 'post /v4/linode/instances/1/configs');
		assert.equal(await app.linode.instances(1).configs(1).get(), 'get /v4/linode/instances/1/configs/1');
		assert.equal(await app.linode.instances(1).configs(1).update({}), 'put /v4/linode/instances/1/configs/1');
		assert.equal(await app.linode.instances(1).configs(1).delete(), 'del /v4/linode/instances/1/configs/1');
	});
	it('Disks', async function () {
		assert.equal(await app.linode.instances(1).disks.list(), 'get /v4/linode/instances/1/disks');
		assert.equal(await app.linode.instances(1).disks.create({}), 'post /v4/linode/instances/1/disks');
		assert.equal(await app.linode.instances(1).disks(1).get(), 'get /v4/linode/instances/1/disks/1');
		assert.equal(await app.linode.instances(1).disks(1).update({}), 'put /v4/linode/instances/1/disks/1');
		assert.equal(await app.linode.instances(1).disks(1).duplicate(), 'post /v4/linode/instances/1/disks/1/duplicate');
		assert.equal(await app.linode.instances(1).disks(1).delete(), 'del /v4/linode/instances/1/disks/1');
		assert.equal(await app.linode.instances(1).disks(1).password(), 'post /v4/linode/instances/1/disks/1/password');
		assert.equal(await app.linode.instances(1).disks(1).resize(), 'post /v4/linode/instances/1/disks/1/resize');
	});
	it('Distributions', async function () {
		assert.equal(await app.linode.distributions.list(), 'get /v4/linode/distributions');
		assert.equal(await app.linode.distributions(1).get(), 'get /v4/linode/distributions/1');
		assert.ok(await app.linode.distributions('linode/slackware14.1').get());
	});
	it('IPs', async function () {
		assert.equal(await app.linode.instances(1).ips.list(), 'get /v4/linode/instances/1/ips');
		assert.equal(await app.linode.instances(1).ips(1).get(), 'get /v4/linode/instances/1/ips/1');
		assert.equal(await app.linode.instances(1).ips.sharing.list(), 'get /v4/linode/instances/1/ips/sharing');
		assert.equal(await app.linode.instances(1).ips.sharing.update({}), 'put /v4/linode/instances/1/ips/sharing');
		assert.equal(await app.linode.instances(1).ips.sharing.delete(), 'del /v4/linode/instances/1/ips/sharing');
	});
	it('Kernels', async function () {
		assert.equal(await app.linode.kernels.list(), 'get /v4/linode/kernels');
		assert.equal(await app.linode.kernels(1).get(), 'get /v4/linode/kernels/1');
	});
	it('StackScripts', async function () {
		assert.equal(await app.linode.stackscripts.list(), 'get /v4/linode/stackscripts');
		assert.equal(await app.linode.stackscripts.create({}), 'post /v4/linode/stackscripts');
		assert.equal(await app.linode.stackscripts(1).get(), 'get /v4/linode/stackscripts/1');
		assert.equal(await app.linode.stackscripts(1).update({}), 'put /v4/linode/stackscripts/1');
		assert.equal(await app.linode.stackscripts(1).delete(), 'del /v4/linode/stackscripts/1');
	});
	it('Stats', async function () {
		assert.equal(await app.linode.instances(1).stats.list(), 'get /v4/linode/instances/1/stats');
		assert.equal(await app.linode.instances(1).stats.year(1).month(1).get(), 'get /v4/linode/instances/1/stats/1/1');
		assert.equal(await app.linode.instances(1).stats.year(1).month(1).get(), 'get /v4/linode/instances/1/stats/1/1');
	});
	it('Types', async function () {
		assert.equal(await app.linode.types.list(), 'get /v4/linode/types');
		assert.equal(await app.linode.types(1).get(), 'get /v4/linode/types/1');
	});
	it('Volumes', async function () {
		assert.equal(await app.linode.volumes.list(), 'get /v4/linode/volumes');
		assert.equal(await app.linode.volumes.create({}), 'post /v4/linode/volumes');
		assert.equal(await app.linode.volumes(1).get(), 'get /v4/linode/volumes/1');
		assert.equal(await app.linode.volumes(1).update({}), 'put /v4/linode/volumes/1');
		assert.equal(await app.linode.volumes(1).delete(), 'del /v4/linode/volumes/1');

		assert.equal(await app.linode.volumes(1).attach(), 'post /v4/linode/volumes/1/attach');
		assert.equal(await app.linode.volumes(1).detach(), 'post /v4/linode/volumes/1/detach');
	});
});
