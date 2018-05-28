import * as Mocha from 'mocha';
import { expect, assert } from 'chai';
import { Filter, Account, AccountSettings, AuthorizedApp, Backup, CreditCard, Device, Devices, Disk, DiskRequest, Domain, DomainRecord, ErrorObject, Event, Grant, GrantsResponse, ImagePrivate, ImagePublic, Invoice, InvoiceItem, IPAddress, IPAddressPrivate, IPAddressV6LinkLocal, IPAddressV6Slaac, IPv6Pool, IPv6Range, Kernel, Linode, LinodeBase, LinodeConfig, LinodeRequest, LinodeStats, LinodeType, LongviewClient, LongviewSubscription, ManagedContact, ManagedCredential, ManagedIssue, ManagedLinodeSettings, ManagedService, NodeBalancer, NodeBalancerConfig, NodeBalancerNode, Notification, OAuthClient, PaginationEnvelope, Payment, PaymentRequest, PayPal, PayPalExecute, PersonalAccessToken, Profile, Region, RescueDevices, StackScript, SupportTicket, SupportTicketReply, SupportTicketRequest, Transfer, User, UserDefinedField, Volume, AuthorizedAppFilter, DiskFilter, DiskRequestFilter, DomainFilter, ImagePrivateFilter, ImagePublicFilter, IPAddressFilter, IPAddressPrivateFilter, IPAddressV6LinkLocalFilter, IPAddressV6SlaacFilter, KernelFilter, LinodeFilter, LinodeBaseFilter, LinodeConfigFilter, LinodeTypeFilter, LongviewClientFilter, ManagedContactFilter, NodeBalancerFilter, OAuthClientFilter, PersonalAccessTokenFilter, StackScriptFilter, SupportTicketFilter, UserFilter, VolumeFilter } from '../src/interfaces';
import { Linodev4 } from '../src/'
const server = new Linodev4('personal-key-secured', async (data) => Promise.resolve(data) );
describe('/networking', () => {
	it('ips', async ()=>{
		expect(await server.networking.ips.list()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/networking/ips","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.networking.ips.list(1)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/networking/ips","query":"?page=1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.networking.ips.list(1, 50)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/networking/ips","query":"?page=1&page_size=50","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.networking.ips.list({} as Filter<IPAddressFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/networking/ips","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.networking.ips.list(2, {} as Filter<IPAddressFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/networking/ips","query":"?page=2","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.networking.ips.list(2, 5, {} as Filter<IPAddressFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/networking/ips","query":"?page=2&page_size=5","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.networking.ips.create({} as any)).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/networking/ips","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.networking.ips('address').get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/networking/ips/address","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.networking.ips('address').update({} as IPAddress)).to.deep.equal({"verb":"put","route":"https://api.linode.com/v4/networking/ips/address","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
	});
	it('ipv4', async ()=>{
		expect(await server.networking.ipv4.assign({} as any)).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/networking/ipv4/assign","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.networking.ipv4.share({} as any)).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/networking/ipv4/share","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
	});
	it('ipv6', async ()=>{
		expect(await server.networking.ipv6.pools.list()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/networking/ipv6/pools","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.networking.ipv6.pools.list(1)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/networking/ipv6/pools","query":"?page=1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.networking.ipv6.pools.list(1, 50)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/networking/ipv6/pools","query":"?page=1&page_size=50","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.networking.ipv6.ranges.list()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/networking/ipv6/ranges","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.networking.ipv6.ranges.list(1)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/networking/ipv6/ranges","query":"?page=1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.networking.ipv6.ranges.list(1, 50)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/networking/ipv6/ranges","query":"?page=1&page_size=50","headers":{"Authorization":"Bearer personal-key-secured"}});
	});
});
