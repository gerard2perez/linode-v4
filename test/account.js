import * as assert from 'assert';
import app from './instance';

describe('Account', function () {
	it('Clients', async function () {
		assert.equal(await app.account.clients.list(), 'get /v4/account/clients');
		assert.equal(await app.account.clients.create({}), 'post /v4/account/clients');
		assert.equal(await app.account.clients(1).get(), 'get /v4/account/clients/1');
		assert.equal(await app.account.clients(1).update({}), 'put /v4/account/clients/1');
		assert.equal(await app.account.clients(1).delete(), 'del /v4/account/clients/1');
		assert.equal(await app.account.clients(1).reset_secret(), 'post /v4/account/clients/1/reset_secret');
		assert.equal(await app.account.clients(1).thumbnail.get(), 'get /v4/account/clients/1/thumbnail');
		assert.equal(await app.account.clients(1).thumbnail.update({}), 'put /v4/account/clients/1/thumbnail');
	});
	it('Events', async function () {
		assert.equal(await app.account.events.list(), 'get /v4/account/events');
		assert.equal(await app.account.events(1).get(), 'get /v4/account/events/1');
		assert.equal(await app.account.events(1).read(), 'post /v4/account/events/1/read');
		assert.equal(await app.account.events(1).seen(), 'post /v4/account/events/1/seen');
	});
	it('Settings', async function () {
		assert.equal(await app.account.settings.list(), 'get /v4/account/settings');
		assert.equal(await app.account.settings.update({}), 'put /v4/account/settings');
	});
	it('Tokens', async function () {
		assert.equal(await app.account.tokens.list(), 'get /v4/account/tokens');
		assert.equal(await app.account.tokens.create({}), 'post /v4/account/tokens');
		assert.equal(await app.account.tokens(1).get(), 'get /v4/account/tokens/1');
		assert.equal(await app.account.tokens(1).update({}), 'put /v4/account/tokens/1');
		assert.equal(await app.account.tokens(1).delete(), 'del /v4/account/tokens/1');
	});
	it('Users', async function () {
		assert.equal(await app.account.users.list(), 'get /v4/account/users');
		assert.equal(await app.account.users.create({}), 'post /v4/account/users');
		assert.equal(await app.account.users(1).get(), 'get /v4/account/users/1');
		assert.equal(await app.account.users(1).update({}), 'put /v4/account/users/1');
		assert.equal(await app.account.users(1).delete(), 'del /v4/account/users/1');
		assert.equal(await app.account.users(1).grants.get(), 'get /v4/account/users/1/grants');
		assert.equal(await app.account.users(1).grants.update({}), 'put /v4/account/users/1/grants');
		assert.equal(await app.account.users(1).password(), 'post /v4/account/users/1/password');
	});
});
