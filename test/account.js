
import { app, assert } from './instance';

describe('Account', function () {
	it('Clients', async function () {
		assert.equal(await app.account.clients.list(), '/v4/account/clients#get');
		assert.equal(await app.account.clients.create({}), '/v4/account/clients#post');
		assert.equal(await app.account.clients(1).get(), '/v4/account/clients/1#get');
		assert.equal(await app.account.clients(1).update({}), '/v4/account/clients/1#put');
		assert.equal(await app.account.clients(1).delete(), '/v4/account/clients/1#del');
		assert.equal(await app.account.clients(1).reset_secret(), '/v4/account/clients/1/reset_secret#post');
		assert.equal(await app.account.clients(1).thumbnail.list(), '/v4/account/clients/1/thumbnail#get');
		assert.equal(await app.account.clients(1).thumbnail.update({}), '/v4/account/clients/1/thumbnail#put');
	});
	it('Events', async function () {
		assert.equal(await app.account.events.list(), '/v4/account/events#get');
		assert.equal(await app.account.events(1).get(), '/v4/account/events/1#get');
		assert.equal(await app.account.events(1).read(), '/v4/account/events/1/read#post');
		assert.equal(await app.account.events(1).seen(), '/v4/account/events/1/seen#post');
	});
	it('Settings', async function () {
		assert.equal(await app.account.settings.list(), '/v4/account/settings#get');
		assert.equal(await app.account.settings.update({}), '/v4/account/settings#put');
	});
	it('Tokens', async function () {
		assert.equal(await app.account.tokens.list(), '/v4/account/tokens#get');
		assert.equal(await app.account.tokens.create({}), '/v4/account/tokens#post');
		assert.equal(await app.account.tokens(1).get(), '/v4/account/tokens/1#get');
		assert.equal(await app.account.tokens(1).update({}), '/v4/account/tokens/1#put');
		assert.equal(await app.account.tokens(1).delete(), '/v4/account/tokens/1#del');
	});
	it('Users', async function () {
		assert.equal(await app.account.users.list(), '/v4/account/users#get');
		assert.equal(await app.account.users.create({}), '/v4/account/users#post');
		assert.equal(await app.account.users(1).get(), '/v4/account/users/1#get');
		assert.equal(await app.account.users(1).update({}), '/v4/account/users/1#put');
		assert.equal(await app.account.users(1).delete(), '/v4/account/users/1#del');
		assert.equal(await app.account.users(1).grants.get(), '/v4/account/users/1/grants#get');
		assert.equal(await app.account.users(1).grants.update({}), '/v4/account/users/1/grants#put');
		assert.equal(await app.account.users(1).password(), '/v4/account/users/1/password#post');
	});
});
