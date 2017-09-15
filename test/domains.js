import * as assert from 'assert';
import app from './instance';

describe('Domains', function () {
	it('Domain', async function () {
		assert.equal(await app.domains.list(), 'get /v4/domains');
		assert.equal(await app.domains.create({}), 'post /v4/domains');
		assert.equal(await app.domains(1).get(), 'get /v4/domains/1');
		assert.equal(await app.domains(1).update({}), 'put /v4/domains/1');
		assert.equal(await app.domains(1).delete(), 'del /v4/domains/1');
	});
	it('Records', async function () {
		assert.equal(await app.domains(1).records.list(), 'get /v4/domains/1/records');
		assert.equal(await app.domains(1).records.create({}), 'post /v4/domains/1/records');
		assert.equal(await app.domains(1).records(1).get(), 'get /v4/domains/1/records/1');
		assert.equal(await app.domains(1).records(1).update({}), 'put /v4/domains/1/records/1');
		assert.equal(await app.domains(1).records(1).delete(), 'del /v4/domains/1/records/1');
	});
});
