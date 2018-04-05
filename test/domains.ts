
import { app, assert } from './instance';

describe('Domains', function () {
	it('Domain', async function () {
		assert.equal(await app.domains.list(), '/v4/domains#get');
		assert.equal(await app.domains.create({}), '/v4/domains#post');
		assert.equal(await app.domains(1).get(), '/v4/domains/1#get');
		assert.equal(await app.domains(1).update({}), '/v4/domains/1#put');
		assert.equal(await app.domains(1).delete(), '/v4/domains/1#del');
		assert.equal(await app.domains(1).clone({}), '/v4/domains/1/clone#post%data');
	});
	it('Records', async function () {
		assert.equal(await app.domains(1).records.list(), '/v4/domains/1/records#get');
		assert.equal(await app.domains(1).records.create({}), '/v4/domains/1/records#post');
		assert.equal(await app.domains(1).records(1).get(), '/v4/domains/1/records/1#get');
		assert.equal(await app.domains(1).records(1).update({}), '/v4/domains/1/records/1#put');
		assert.equal(await app.domains(1).records(1).delete(), '/v4/domains/1/records/1#del');
	});
});
