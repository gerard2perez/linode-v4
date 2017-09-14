import Linode from '../src';
import * as assert from 'assert';

const app = new Linode('abc_token');

describe('Domains', function () {
	it('Domain', async function () {
		assert.ok(app.domains);
		assert.ok(app.domains.list);
		assert.ok(app.domains.create);
		assert.ok(app.domains(1).get);
		assert.ok(app.domains(1).update);
		assert.ok(app.domains(1).delete);
	});
	it('Records', async function () {
		assert.ok(app.domains(1).records.list, 'get /domains/:id/records');
		assert.ok(app.domains(1).records.create, 'post /domains/:id/records');
		assert.ok(app.domains(1).records(1).get, 'get /domains/:id/records/:id');
		assert.ok(app.domains(1).records(1).update, 'put /domains/:id/records/:id');
		assert.ok(app.domains(1).records(1).delete, 'del /domains/:id/records/:id');
	});
});
