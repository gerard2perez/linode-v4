import * as Mocha from 'mocha';
import { expect, assert } from 'chai';
import { Filter, Account, AccountSettings, AuthorizedApp, Backup, CreditCard, Device, Devices, Disk, DiskRequest, Domain, DomainRecord, ErrorObject, Event, Grant, GrantsResponse, ImagePrivate, ImagePublic, Invoice, InvoiceItem, IPAddress, IPAddressPrivate, IPAddressV6LinkLocal, IPAddressV6Slaac, IPv6Pool, IPv6Range, Kernel, Linode, LinodeBase, LinodeConfig, LinodeRequest, LinodeStats, LinodeType, LongviewClient, LongviewSubscription, ManagedContact, ManagedCredential, ManagedIssue, ManagedLinodeSettings, ManagedService, NodeBalancer, NodeBalancerConfig, NodeBalancerNode, Notification, OAuthClient, PaginationEnvelope, Payment, PaymentRequest, PayPal, PayPalExecute, PersonalAccessToken, Profile, Region, RescueDevices, StackScript, SupportTicket, SupportTicketReply, SupportTicketRequest, Transfer, User, UserDefinedField, Volume, AuthorizedAppFilter, DiskFilter, DiskRequestFilter, DomainFilter, ImagePrivateFilter, ImagePublicFilter, IPAddressFilter, IPAddressPrivateFilter, IPAddressV6LinkLocalFilter, IPAddressV6SlaacFilter, KernelFilter, LinodeFilter, LinodeBaseFilter, LinodeConfigFilter, LinodeTypeFilter, LongviewClientFilter, ManagedContactFilter, NodeBalancerFilter, OAuthClientFilter, PersonalAccessTokenFilter, StackScriptFilter, SupportTicketFilter, UserFilter, VolumeFilter } from '../src/interfaces';
import { Linodev4 } from '../src/';
const server = new Linodev4('personal-key-secured', async (data) => Promise.resolve(data) );
describe('/longview', () => {
	it('clients', async ()=>{
		expect(await server.longview.clients.list()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/longview/clients","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.longview.clients.list(1)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/longview/clients","query":"?page=1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.longview.clients.list(1, 50)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/longview/clients","query":"?page=1&page_size=50","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.longview.clients.list({} as Filter<LongviewClientFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/longview/clients","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.longview.clients.list(2, {} as Filter<LongviewClientFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/longview/clients","query":"?page=2","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.longview.clients.list(2, 5, {} as Filter<LongviewClientFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/longview/clients","query":"?page=2&page_size=5","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.longview.clients.create({} as LongviewClient)).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/longview/clients","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.longview.clients(1).get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/longview/clients/1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.longview.clients(1).update({} as LongviewClient)).to.deep.equal({"verb":"put","route":"https://api.linode.com/v4/longview/clients/1","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.longview.clients(1).delete()).to.deep.equal({"verb":"delete","route":"https://api.linode.com/v4/longview/clients/1","headers":{"Authorization":"Bearer personal-key-secured"}});
	});
	it('subscriptions', async ()=>{
		expect(await server.longview.subscriptions.list()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/longview/subscriptions","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.longview.subscriptions.list(1)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/longview/subscriptions","query":"?page=1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.longview.subscriptions.list(1, 50)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/longview/subscriptions","query":"?page=1&page_size=50","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.longview.subscriptions('subscriptionId').get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/longview/subscriptions/subscriptionId","headers":{"Authorization":"Bearer personal-key-secured"}});
	});
});
