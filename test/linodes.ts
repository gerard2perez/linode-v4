import { app, assert } from './instance';
import Linode from '../src';

process.on('unhandledRejection', (reason, p) => {
	console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
	// application specific logging, throwing an error, or other logic here
  });

describe('Linodes', function () {
	it('Instances', async function () {
		assert.equal(await app.linodes.instances.list(), '/v4/linode/instances#get');
		assert.equal(await app.linodes.instances.list(10), '/v4/linode/instances?page=10#get');
		assert.equal(await app.linodes.instances.list(1,{recomended:true}), '/v4/linode/instances?page=1#get%filter');
		assert.equal(await app.linodes.instances.create({}), '/v4/linode/instances#post');
		assert.equal(await app.linodes.instances(1).update({}), '/v4/linode/instances/1#put');
		assert.equal(await app.linodes.instances(1).delete(), '/v4/linode/instances/1#del');
		assert.equal(await app.linodes.instances(1).get(), '/v4/linode/instances/1#get');
		assert.equal(await app.linodes.instances(1).update({}), '/v4/linode/instances/1#put');
		assert.equal(await app.linodes.instances(1).boot(), '/v4/linode/instances/1/boot#post');
		assert.equal(await app.linodes.instances(1).mutate(), '/v4/linode/instances/1/mutate#post');
		assert.equal(await app.linodes.instances(1).reboot(), '/v4/linode/instances/1/reboot#post');
		assert.equal(await app.linodes.instances(1).rebuild(), '/v4/linode/instances/1/rebuild#post');
		assert.equal(await app.linodes.instances(1).rescue(), '/v4/linode/instances/1/rescue#post');
		assert.equal(await app.linodes.instances(1).resize(), '/v4/linode/instances/1/resize#post');
		assert.equal(await app.linodes.instances(1).shutdown(), '/v4/linode/instances/1/shutdown#post');
		assert.equal(await app.linodes.instances(1).volumes(), '/v4/linode/instances/1/volumes#get');
	});
	it('Backups', async function () {
		assert.equal(await app.linodes.instances(1).backups.list(), '/v4/linode/instances/1/backups#get');
		assert.equal(await app.linodes.instances(1).backups.create({}), '/v4/linode/instances/1/backups#post');
		assert.equal(await app.linodes.instances(1).backups(1).restore(), '/v4/linode/instances/1/backups/1/restore#post');
		assert.equal(await app.linodes.instances(1).backups.cancel(), '/v4/linode/instances/1/backups/cancel#post');
		assert.equal(await app.linodes.instances(1).backups.enable(), '/v4/linode/instances/1/backups/enable#post');
	});
	it('Configs', async function () {
		assert.equal(await app.linodes.instances(1).configs.list(), '/v4/linode/instances/1/configs#get');
		assert.equal(await app.linodes.instances(1).configs.create({}), '/v4/linode/instances/1/configs#post');
		assert.equal(await app.linodes.instances(1).configs(1).get(), '/v4/linode/instances/1/configs/1#get');
		assert.equal(await app.linodes.instances(1).configs(1).update({}), '/v4/linode/instances/1/configs/1#put');
		assert.equal(await app.linodes.instances(1).configs(1).delete(), '/v4/linode/instances/1/configs/1#del');
	});
	it('Disks', async function () {
		assert.equal(await app.linodes.instances(1).disks.list(), '/v4/linode/instances/1/disks#get');
		assert.equal(await app.linodes.instances(1).disks.create({}), '/v4/linode/instances/1/disks#post');
		assert.equal(await app.linodes.instances(1).disks(1).get(), '/v4/linode/instances/1/disks/1#get');
		assert.equal(await app.linodes.instances(1).disks(1).update({}), '/v4/linode/instances/1/disks/1#put');
		assert.equal(await app.linodes.instances(1).disks(1).clone(), '/v4/linode/instances/1/disks/1/clone#post');
		assert.equal(await app.linodes.instances(1).disks(1).delete(), '/v4/linode/instances/1/disks/1#del');
		assert.equal(await app.linodes.instances(1).disks(1).password({}), '/v4/linode/instances/1/disks/1/password#post%data');
		assert.equal(await app.linodes.instances(1).disks(1).resize({}), '/v4/linode/instances/1/disks/1/resize#post%data');
	});
	it('IPs', async function () {
		assert.equal(await app.linodes.instances(1).ips.list(), '/v4/linode/instances/1/ips#get');
		assert.equal(await app.linodes.instances(1).ips.create({}), '/v4/linode/instances/1/ips#post');
		assert.equal(await app.linodes.instances(1).ips(1).get(), '/v4/linode/instances/1/ips/1#get');
		assert.equal(await app.linodes.instances(1).ips(1).update({}), '/v4/linode/instances/1/ips/1#put');
		assert.equal(await app.linodes.instances(1).ips(1).delete(), '/v4/linode/instances/1/ips/1#del');
	});
	it('Kernels', async function () {
		assert.equal(await app.linodes.kernels.list(), '/v4/linode/kernels#get');
		assert.equal(await app.linodes.kernels(1).get(), '/v4/linode/kernels/1#get');
	});
	it('StackScripts', async function () {
		assert.equal(await app.linodes.stackscripts.list(), '/v4/linode/stackscripts#get');
		assert.equal(await app.linodes.stackscripts.create({}), '/v4/linode/stackscripts#post');
		assert.equal(await app.linodes.stackscripts(1).get(), '/v4/linode/stackscripts/1#get');
		assert.equal(await app.linodes.stackscripts(1).update({}), '/v4/linode/stackscripts/1#put');
		assert.equal(await app.linodes.stackscripts(1).delete(), '/v4/linode/stackscripts/1#del');
	});
	it('Stats', async function () {
		assert.equal(await app.linodes.instances(1).stats.list(), '/v4/linode/instances/1/stats#get');
		assert.equal(await app.linodes.instances(1).stats.year(1).month(1).get(), '/v4/linode/instances/1/stats/1/1#get');
		assert.equal(await app.linodes.instances(1).stats.year(1).month(1).get(), '/v4/linode/instances/1/stats/1/1#get');
	});
	it('Types', async function () {
		assert.equal(await app.linodes.types.list(), '/v4/linode/types#get');
		assert.equal(await app.linodes.types(1).get(), '/v4/linode/types/1#get');
	});
});
