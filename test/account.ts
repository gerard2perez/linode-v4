
import { app, assert } from './instance';

describe('Account', function () {
	it('/', async ()=>{
		assert.equal(await app.account.list(), '/v4/account#get');
		assert.equal(await app.account.update({}), '/v4/account#put%data');
	});
	it('Events', async function () {
		assert.equal(await app.account.events.list(), '/v4/account/events#get');
		assert.equal(await app.account.events(1).get(), '/v4/account/events/1#get');
		assert.equal(await app.account.events(1).read(), '/v4/account/events/1/read#post');
		assert.equal(await app.account.events(1).seen(), '/v4/account/events/1/seen#post');
	});
	it('Invoices', async function () {
		assert.equal(await app.account.invoices.list(), '/v4/account/invoices#get');
		assert.equal(await app.account.invoices(1).get(), '/v4/account/invoices/1#get');
		assert.equal(await app.account.invoices(1).items(), '/v4/account/invoices/1/items#get');
	});
	it('Notifications', async function () {
		assert.equal(await app.account.notifications.list(), '/v4/account/notifications#get');
	});
	it('OAuth Clients', async function () {
		assert.equal(await app.account.oauthClients.list(), '/v4/account/oauth-clients#get');
		assert.equal(await app.account.oauthClients.create({}), '/v4/account/oauth-clients#post');
		assert.equal(await app.account.oauthClients(1).get(), '/v4/account/oauth-clients/1#get');
		assert.equal(await app.account.oauthClients(1).update({}), '/v4/account/oauth-clients/1#put');
		assert.equal(await app.account.oauthClients(1).delete(), '/v4/account/oauth-clients/1#del');
		assert.equal(await app.account.oauthClients(1).resetSecret(), '/v4/account/oauth-clients/1/reset-secret#post');
		assert.equal(await app.account.oauthClients(1).thumbnail.get(), '/v4/account/oauth-clients/1/thumbnail#get');
		assert.equal(await app.account.oauthClients(1).thumbnail.update({}), '/v4/account/oauth-clients/1/thumbnail#put%data');
	});
	it('Payments', async function () {
		assert.equal(await app.account.payments.list(), '/v4/account/payments#get');
		assert.equal(await app.account.payments.create({}), '/v4/account/payments#post');
		assert.equal(await app.account.payments(1).get(), '/v4/account/payments/1#get');

		assert.equal(await app.account.payments.paypal.post({}), '/v4/account/payments/paypal#post%data');
		assert.equal(await app.account.payments.paypal.execute({}), '/v4/account/payments/paypal/execute#post%data');
	});
	it('Settings', async function () {
		assert.equal(await app.account.settings.list(), '/v4/account/settings#get');
		assert.equal(await app.account.settings.update({}), '/v4/account/settings#put%data');
		assert.equal(await app.account.settings.managedEnable(), '/v4/account/settings/managed-enable#post');
	});
	it('Transfer', async function () {
		assert.equal(await app.account.transfer.get(), '/v4/account/transfer#get');
	});
	it('Users', async function () {
		assert.equal(await app.account.users.list(), '/v4/account/users#get');
		assert.equal(await app.account.users.create({}), '/v4/account/users#post');
		assert.equal(await app.account.users(1).get(), '/v4/account/users/1#get');
		assert.equal(await app.account.users(1).update({}), '/v4/account/users/1#put');
		assert.equal(await app.account.users(1).delete(), '/v4/account/users/1#del');
		assert.equal(await app.account.users(1).grants.get(), '/v4/account/users/1/grants#get');
		assert.equal(await app.account.users(1).grants.update({}), '/v4/account/users/1/grants#put%data');
	});
});
