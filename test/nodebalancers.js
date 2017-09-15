import * as assert from 'assert';
import app from './instance';

describe('NodeBalancer', function () {
	it('/', async function () {
		assert.ok(await app.nodebalancers);
		assert.equal(await app.nodebalancers.list(), 'get /v4/nodebalancers');
		assert.equal(await app.nodebalancers.create({}), 'post /v4/nodebalancers');
		assert.equal(await app.nodebalancers(1).get(), 'get /v4/nodebalancers/1');
		assert.equal(await app.nodebalancers(1).update({}), 'put /v4/nodebalancers/1');
		assert.equal(await app.nodebalancers(1).delete(), 'del /v4/nodebalancers/1');
	});
	it('Configs', async function () {
		assert.equal(await app.nodebalancers(1).configs.list(), 'get /v4/nodebalancers/1/configs');
		assert.equal(await app.nodebalancers(1).configs.create({}), 'post /v4/nodebalancers/1/configs');
		assert.equal(await app.nodebalancers(1).configs(1).get(), 'get /v4/nodebalancers/1/configs/1');
		assert.equal(await app.nodebalancers(1).configs(1).delete(), 'del /v4/nodebalancers/1/configs/1');
		assert.equal(await app.nodebalancers(1).configs(1).ssl(), 'post /v4/nodebalancers/1/configs/1/ssl');
	});
	it('Configs/Nodes', async function () {
		assert.equal(await app.nodebalancers(1).configs(1).nodes.list(), 'get /v4/nodebalancers/1/configs/1/nodes');
		assert.equal(await app.nodebalancers(1).configs(1).nodes.create({}), 'post /v4/nodebalancers/1/configs/1/nodes');

		assert.equal(await app.nodebalancers(1).configs(1).nodes(1).get(), 'get /v4/nodebalancers/1/configs/1/nodes/1');
		assert.equal(await app.nodebalancers(1).configs(1).nodes(1).update({}), 'put /v4/nodebalancers/1/configs/1/nodes/1');
		assert.equal(await app.nodebalancers(1).configs(1).nodes(1).delete(), 'del /v4/nodebalancers/1/configs/1/nodes/1');
	});
});
