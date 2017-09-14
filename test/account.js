import Linode from '../src';
import * as assert from 'assert';

const app = new Linode('abc_token');

describe('Account', function () {
	it('Clients', async function () {
		assert.ok(app.account.clients.list);
		assert.ok(app.account.clients.create);
		assert.ok(app.account.clients(1).get);
		assert.ok(app.account.clients(1).update);
		assert.ok(app.account.clients(1).delete);
		assert.ok(app.account.clients(1).reset_secret);
		assert.ok(app.account.clients(1).thumbnai);
	});
	it('Events', async function () {
		assert.ok(app.account.events.list);
		assert.ok(app.account.events(1).get);
		assert.ok(app.account.events(1).read);
		assert.ok(app.account.events(1).seen);
	});
	it('Settings', async function () {
		assert.ok(app.account.settings.list);
		assert.ok(app.account.settings.update);
	});
	it('Tokens', async function () {
		assert.ok(app.account.tokens.list);
		assert.ok(app.account.tokens.create);
		assert.ok(app.account.tokens(1).get);
		assert.ok(app.account.tokens(1).update);
		assert.ok(app.account.tokens(1).delete);
	});
	it('Users', async function () {
		assert.ok(app.account.users.list);
		assert.ok(app.account.users.create);
		assert.ok(app.account.users(1).get);
		assert.ok(app.account.users(1).update);
		assert.ok(app.account.users(1).delete);
		assert.ok(app.account.users(1).grants.list);
		assert.ok(app.account.users(1).grants.update);
		assert.ok(app.account.users(1).password);
	});
});
