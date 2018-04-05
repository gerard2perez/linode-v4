import { app, assert } from './instance';

describe('Managed', function () {
	it('Contacts', async function () {
		assert.equal(await app.managed.contacts.list(), '/v4/managed/contacts#get');
		assert.equal(await app.managed.contacts.create({}), '/v4/managed/contacts#post');
		assert.equal(await app.managed.contacts(1).get(), '/v4/managed/contacts/1#get');
		assert.equal(await app.managed.contacts(1).update({}), '/v4/managed/contacts/1#put');
		assert.equal(await app.managed.contacts(1).delete(), '/v4/managed/contacts/1#del');
	});
	it('Credentials', async function () {
		assert.equal(await app.managed.credentials.list(), '/v4/managed/credentials#get');
		assert.equal(await app.managed.credentials.create({}), '/v4/managed/credentials#post');
		assert.equal(await app.managed.credentials(1).get(), '/v4/managed/credentials/1#get');
		assert.equal(await app.managed.credentials(1).update({}), '/v4/managed/credentials/1#put');
	});
	it('Issues', async function () {
		assert.equal(await app.managed.issues.list(), '/v4/managed/issues#get');
		assert.equal(await app.managed.issues(1).get(), '/v4/managed/issues/1#get');
	});
	it('Linode Settings', async function () {
		assert.equal(await app.managed.linodeSettings.list(), '/v4/managed/linode-settings#get');
		assert.equal(await app.managed.linodeSettings(1).get(), '/v4/managed/linode-settings/1#get');
		assert.equal(await app.managed.linodeSettings(1).update({}), '/v4/managed/linode-settings/1#put');
	});
	it('Services', async function () {
		assert.equal(await app.managed.services.list(), '/v4/managed/services#get');
		assert.equal(await app.managed.services.create({}), '/v4/managed/services#post');
		assert.equal(await app.managed.services(1).get(), '/v4/managed/services/1#get');
		assert.equal(await app.managed.services(1).update({}), '/v4/managed/services/1#put');
		assert.equal(await app.managed.services(1).delete(), '/v4/managed/services/1#del');

		assert.equal(await app.managed.services(1).enable(), '/v4/managed/services/1/enable#post');
		assert.equal(await app.managed.services(1).disable(), '/v4/managed/services/1/disable#post');
	});
	it('Stats', async function () {
		assert.equal(await app.managed.stats.list(), '/v4/managed/stats#get');
	});
});
