
import { app, assert } from './instance';

describe('NodeBalancer', function () {
	it('/', async function () {
		assert.ok(await app.nodebalancers);
		assert.equal(await app.nodebalancers.list(), '/v4/nodebalancers#get');
		assert.equal(await app.nodebalancers.create({}), '/v4/nodebalancers#post');
		assert.equal(await app.nodebalancers(1).get(), '/v4/nodebalancers/1#get');
		assert.equal(await app.nodebalancers(1).update({}), '/v4/nodebalancers/1#put');
		assert.equal(await app.nodebalancers(1).delete(), '/v4/nodebalancers/1#del');
	});
	it('Configs', async function () {
		assert.equal(await app.nodebalancers(1).configs.list(), '/v4/nodebalancers/1/configs#get');
		assert.equal(await app.nodebalancers(1).configs.create({}), '/v4/nodebalancers/1/configs#post');
		assert.equal(await app.nodebalancers(1).configs(1).get(), '/v4/nodebalancers/1/configs/1#get');
		assert.equal(await app.nodebalancers(1).configs(1).delete(), '/v4/nodebalancers/1/configs/1#del');
		assert.equal(await app.nodebalancers(1).configs(1).ssl(), '/v4/nodebalancers/1/configs/1/ssl#post');
	});
	it('Configs/Nodes', async function () {
		assert.equal(await app.nodebalancers(1).configs(1).nodes.list(), '/v4/nodebalancers/1/configs/1/nodes#get');
		assert.equal(await app.nodebalancers(1).configs(1).nodes.create({}), '/v4/nodebalancers/1/configs/1/nodes#post');

		assert.equal(await app.nodebalancers(1).configs(1).nodes(1).get(), '/v4/nodebalancers/1/configs/1/nodes/1#get');
		assert.equal(await app.nodebalancers(1).configs(1).nodes(1).update({}), '/v4/nodebalancers/1/configs/1/nodes/1#put');
		assert.equal(await app.nodebalancers(1).configs(1).nodes(1).delete(), '/v4/nodebalancers/1/configs/1/nodes/1#del');
	});
});
