import Linode from '../src';
import * as assert from 'assert';

const app = new Linode('abc_token');

describe('NodeBalancer', function () {
	it('/', async function () {
		assert.ok(app.nodebalancers);
		assert.ok(app.nodebalancers.list);
		assert.ok(app.nodebalancers.create);
		assert.ok(app.nodebalancers(1).get);
		assert.ok(app.nodebalancers(1).update);
		assert.ok(app.nodebalancers(1).delete);
	});
	it('Configs', async function () {
		assert.ok(app.nodebalancers(1).configs.list, 'get /nodebalancers/:id/configs');
		assert.ok(app.nodebalancers(1).configs.create, 'post /nodebalancers/:id/configs');
		assert.ok(app.nodebalancers(1).configs(1).get, 'get /nodebalancers/:id/configs/:id');
		assert.ok(app.nodebalancers(1).configs(1).delete, 'del /nodebalancers/:id/configs/:id');
		assert.ok(app.nodebalancers(1).configs(1).ssl, 'del /nodebalancers/:id/configs/:id');
	});
	it('Configs/Nodes', async function () {
		assert.ok(app.nodebalancers(1).configs(1).nodes.list, 'get /nodebalancers/:id/configs/:id/nodes');
		assert.ok(app.nodebalancers(1).configs(1).nodes.create, 'get /nodebalancers/:id/configs/:id/nodes');
		assert.ok(app.nodebalancers(1).configs(1).nodes.list, 'get /nodebalancers/:id/configs/:id/nodes');

		assert.ok(app.nodebalancers(1).configs(1).nodes(1).get, 'get /nodebalancers/:id/configs/:id/nodes/:id');
		assert.ok(app.nodebalancers(1).configs(1).nodes(1).update, 'post /nodebalancers/:id/configs/:id/nodes/:id');
		assert.ok(app.nodebalancers(1).configs(1).nodes(1).delete, 'del /nodebalancers/:id/configs/:id/nodes/:id');
	});
});
