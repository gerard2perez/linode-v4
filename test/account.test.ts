import * as Mocha from 'mocha';
import { expect, assert } from 'chai';
import { Filter, Account, AccountSettings, AuthorizedApp, Backup, CreditCard, Device, Devices, Disk, DiskRequest, Domain, DomainRecord, ErrorObject, Event, Grant, GrantsResponse, ImagePrivate, ImagePublic, Invoice, InvoiceItem, IPAddress, IPAddressPrivate, IPAddressV6LinkLocal, IPAddressV6Slaac, IPv6Pool, IPv6Range, Kernel, Linode, LinodeBase, LinodeConfig, LinodeRequest, LinodeStats, LinodeType, LongviewClient, LongviewSubscription, ManagedContact, ManagedCredential, ManagedIssue, ManagedLinodeSettings, ManagedService, NodeBalancer, NodeBalancerConfig, NodeBalancerNode, Notification, OAuthClient, PaginationEnvelope, Payment, PaymentRequest, PayPal, PayPalExecute, PersonalAccessToken, Profile, Region, RescueDevices, StackScript, SupportTicket, SupportTicketReply, SupportTicketRequest, Transfer, User, UserDefinedField, Volume, AuthorizedAppFilter, DiskFilter, DiskRequestFilter, DomainFilter, ImagePrivateFilter, ImagePublicFilter, IPAddressFilter, IPAddressPrivateFilter, IPAddressV6LinkLocalFilter, IPAddressV6SlaacFilter, KernelFilter, LinodeFilter, LinodeBaseFilter, LinodeConfigFilter, LinodeTypeFilter, LongviewClientFilter, ManagedContactFilter, NodeBalancerFilter, OAuthClientFilter, PersonalAccessTokenFilter, StackScriptFilter, SupportTicketFilter, UserFilter, VolumeFilter } from '../src/interfaces';
import { Linodev4 } from '../src/';
const server = new Linodev4('personal-key-secured', async (data) => Promise.resolve(data) );
describe('/account', () => {
	it('account', async ()=>{
		expect(await server.account.get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.update({} as Account)).to.deep.equal({"verb":"put","route":"https://api.linode.com/v4/account","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.creditCard({} as CreditCard)).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/account/credit-card","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.transfer()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/transfer","headers":{"Authorization":"Bearer personal-key-secured"}});
	});
	it('events', async ()=>{
		expect(await server.account.events.list()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/events","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.events.list(1)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/events","query":"?page=1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.events.list(1, 50)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/events","query":"?page=1&page_size=50","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.events.list({})).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/events","headers":{"Authorization":"Bearer personal-key-secured"},"X-Filter":{}});
		expect(await server.account.events.list(1, {})).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/events","query":"?page=1","headers":{"Authorization":"Bearer personal-key-secured"},"X-Filter":{}});
		expect(await server.account.events.list(1, 50, {})).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/events","query":"?page=1&page_size=50","headers":{"Authorization":"Bearer personal-key-secured"},"X-Filter":{}});
		expect(await server.account.events(1).get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/events/1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.events(1).read()).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/account/events/1/read","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.events(1).seen()).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/account/events/1/seen","headers":{"Authorization":"Bearer personal-key-secured"}});
	});
	it('invoices', async ()=>{
		expect(await server.account.invoices.list()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/invoices","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.invoices.list(1)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/invoices","query":"?page=1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.invoices.list(1, 50)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/invoices","query":"?page=1&page_size=50","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.invoices(1).get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/invoices/1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.invoices(1).items.list()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/invoices/1/items","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.invoices(1).items.list(1)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/invoices/1/items","query":"?page=1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.invoices(1).items.list(1, 50)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/invoices/1/items","query":"?page=1&page_size=50","headers":{"Authorization":"Bearer personal-key-secured"}});
	});
	it('notifications', async ()=>{
		expect(await server.account.notifications.list()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/notifications","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.notifications.list(1)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/notifications","query":"?page=1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.notifications.list(1, 50)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/notifications","query":"?page=1&page_size=50","headers":{"Authorization":"Bearer personal-key-secured"}});
	});
	it('oauth-clients', async ()=>{
		expect(await server.account.oauthClients.list()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/oauth-clients","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.oauthClients.list(1)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/oauth-clients","query":"?page=1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.oauthClients.list(1, 50)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/oauth-clients","query":"?page=1&page_size=50","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.oauthClients.list({} as Filter<OAuthClientFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/oauth-clients","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.account.oauthClients.list(2, {} as Filter<OAuthClientFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/oauth-clients","query":"?page=2","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.account.oauthClients.list(2, 5, {} as Filter<OAuthClientFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/oauth-clients","query":"?page=2&page_size=5","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.account.oauthClients.create({} as any)).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/account/oauth-clients","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.oauthClients('clientId').get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/oauth-clients/clientId","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.oauthClients('clientId').update({} as OAuthClient)).to.deep.equal({"verb":"put","route":"https://api.linode.com/v4/account/oauth-clients/clientId","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.oauthClients('clientId').delete()).to.deep.equal({"verb":"delete","route":"https://api.linode.com/v4/account/oauth-clients/clientId","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.oauthClients('clientId').resetSecret()).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/account/oauth-clients/clientId/reset-secret","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.oauthClients('clientId').thumbnail.get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/oauth-clients/clientId/thumbnail","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.oauthClients('clientId').thumbnail.update({} as ArrayBuffer)).to.deep.equal({"verb":"put","route":"https://api.linode.com/v4/account/oauth-clients/clientId/thumbnail","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
	});
	it('payments', async ()=>{
		expect(await server.account.payments.list()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/payments","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.payments.list(1)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/payments","query":"?page=1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.payments.list(1, 50)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/payments","query":"?page=1&page_size=50","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.payments.create({} as PaymentRequest)).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/account/payments","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.payments(1).get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/payments/1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.payments.paypal.create({} as PayPal)).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/account/payments/paypal","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.payments.paypal.execute({} as PayPalExecute)).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/account/payments/paypal/execute","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
	});
	it('settings', async ()=>{
		expect(await server.account.settings.get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/settings","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.settings.update({} as AccountSettings)).to.deep.equal({"verb":"put","route":"https://api.linode.com/v4/account/settings","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
	});
	it('users', async ()=>{
		expect(await server.account.users.list()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/users","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.users.list(1)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/users","query":"?page=1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.users.list(1, 50)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/users","query":"?page=1&page_size=50","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.users.list({} as Filter<UserFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/users","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.account.users.list(2, {} as Filter<UserFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/users","query":"?page=2","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.account.users.list(2, 5, {} as Filter<UserFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/users","query":"?page=2&page_size=5","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.account.users.create({} as any)).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/account/users","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.users('username').get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/users/username","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.users('username').update({} as User)).to.deep.equal({"verb":"put","route":"https://api.linode.com/v4/account/users/username","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.users('username').delete()).to.deep.equal({"verb":"delete","route":"https://api.linode.com/v4/account/users/username","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.users('username').grants.get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/account/users/username/grants","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.account.users('username').grants.update({} as GrantsResponse)).to.deep.equal({"verb":"put","route":"https://api.linode.com/v4/account/users/username/grants","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
	});
});
