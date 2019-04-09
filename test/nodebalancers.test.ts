import * as Mocha from 'mocha';
import { expect, assert } from 'chai';
import { Filter, Account, AccountSettings, AuthorizedApp, Backup, CreditCard, Device, Devices, Disk, DiskRequest, Domain, DomainRecord, ErrorObject, Event, Grant, GrantsResponse, ImagePrivate, ImagePublic, Invoice, InvoiceItem, IPAddress, IPAddressPrivate, IPAddressV6LinkLocal, IPAddressV6Slaac, IPv6Pool, IPv6Range, Kernel, Linode, LinodeBase, LinodeConfig, LinodeRequest, LinodeStats, LinodeType, LongviewClient, LongviewSubscription, ManagedContact, ManagedCredential, ManagedIssue, ManagedLinodeSettings, ManagedService, NodeBalancer, NodeBalancerConfig, NodeBalancerNode, Notification, OAuthClient, PaginationEnvelope, Payment, PaymentRequest, PayPal, PayPalExecute, PersonalAccessToken, Profile, Region, RescueDevices, StackScript, SupportTicket, SupportTicketReply, SupportTicketRequest, Transfer, User, UserDefinedField, Volume, AuthorizedAppFilter, DiskFilter, DiskRequestFilter, DomainFilter, ImagePrivateFilter, ImagePublicFilter, IPAddressFilter, IPAddressPrivateFilter, IPAddressV6LinkLocalFilter, IPAddressV6SlaacFilter, KernelFilter, LinodeFilter, LinodeBaseFilter, LinodeConfigFilter, LinodeTypeFilter, LongviewClientFilter, ManagedContactFilter, NodeBalancerFilter, OAuthClientFilter, PersonalAccessTokenFilter, StackScriptFilter, SupportTicketFilter, UserFilter, VolumeFilter } from '../src/interfaces';
import { Linodev4 } from '../src/';
const server = new Linodev4('personal-key-secured', async (data) => Promise.resolve(data) );
describe('/nodebalancers', () => {
	it('nodebalancers', async ()=>{
		expect(await server.nodebalancers.list()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/nodebalancers","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.nodebalancers.list(1)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/nodebalancers","query":"?page=1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.nodebalancers.list(1, 50)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/nodebalancers","query":"?page=1&page_size=50","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.nodebalancers.list({} as Filter<NodeBalancerFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/nodebalancers","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.nodebalancers.list(2, {} as Filter<NodeBalancerFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/nodebalancers","query":"?page=2","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.nodebalancers.list(2, 5, {} as Filter<NodeBalancerFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/nodebalancers","query":"?page=2&page_size=5","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.nodebalancers.create({} as any)).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/nodebalancers","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
	});
	it('nodebalancers', async ()=>{
		expect(await server.nodebalancers(1).get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/nodebalancers/1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.nodebalancers(1).update({} as NodeBalancer)).to.deep.equal({"verb":"put","route":"https://api.linode.com/v4/nodebalancers/1","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.nodebalancers(1).delete()).to.deep.equal({"verb":"delete","route":"https://api.linode.com/v4/nodebalancers/1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.nodebalancers(1).configs.list()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/nodebalancers/1/configs","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.nodebalancers(1).configs.list(1)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/nodebalancers/1/configs","query":"?page=1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.nodebalancers(1).configs.list(1, 50)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/nodebalancers/1/configs","query":"?page=1&page_size=50","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.nodebalancers(1).configs.create({} as NodeBalancerConfig)).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/nodebalancers/1/configs","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.nodebalancers(1).configs(1).get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/nodebalancers/1/configs/1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.nodebalancers(1).configs(1).rebuild({} as NodeBalancerConfig)).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/nodebalancers/1/configs/1/rebuild","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.nodebalancers(1).configs(1).update({} as NodeBalancerConfig)).to.deep.equal({"verb":"put","route":"https://api.linode.com/v4/nodebalancers/1/configs/1","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.nodebalancers(1).configs(1).delete()).to.deep.equal({"verb":"delete","route":"https://api.linode.com/v4/nodebalancers/1/configs/1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.nodebalancers(1).configs(1).nodes.list()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/nodebalancers/1/configs/1/nodes","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.nodebalancers(1).configs(1).nodes.list(1)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/nodebalancers/1/configs/1/nodes","query":"?page=1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.nodebalancers(1).configs(1).nodes.list(1, 50)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/nodebalancers/1/configs/1/nodes","query":"?page=1&page_size=50","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.nodebalancers(1).configs(1).nodes.create({} as any)).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/nodebalancers/1/configs/1/nodes","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.nodebalancers(1).configs(1).nodes(1).get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/nodebalancers/1/configs/1/nodes/1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.nodebalancers(1).configs(1).nodes(1).update({} as NodeBalancerNode)).to.deep.equal({"verb":"put","route":"https://api.linode.com/v4/nodebalancers/1/configs/1/nodes/1","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.nodebalancers(1).configs(1).nodes(1).delete()).to.deep.equal({"verb":"delete","route":"https://api.linode.com/v4/nodebalancers/1/configs/1/nodes/1","headers":{"Authorization":"Bearer personal-key-secured"}});
	});
});
