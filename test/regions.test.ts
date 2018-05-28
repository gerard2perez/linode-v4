import * as Mocha from 'mocha';
import { expect, assert } from 'chai';
import { Filter, Account, AccountSettings, AuthorizedApp, Backup, CreditCard, Device, Devices, Disk, DiskRequest, Domain, DomainRecord, ErrorObject, Event, Grant, GrantsResponse, ImagePrivate, ImagePublic, Invoice, InvoiceItem, IPAddress, IPAddressPrivate, IPAddressV6LinkLocal, IPAddressV6Slaac, IPv6Pool, IPv6Range, Kernel, Linode, LinodeBase, LinodeConfig, LinodeRequest, LinodeStats, LinodeType, LongviewClient, LongviewSubscription, ManagedContact, ManagedCredential, ManagedIssue, ManagedLinodeSettings, ManagedService, NodeBalancer, NodeBalancerConfig, NodeBalancerNode, Notification, OAuthClient, PaginationEnvelope, Payment, PaymentRequest, PayPal, PayPalExecute, PersonalAccessToken, Profile, Region, RescueDevices, StackScript, SupportTicket, SupportTicketReply, SupportTicketRequest, Transfer, User, UserDefinedField, Volume, AuthorizedAppFilter, DiskFilter, DiskRequestFilter, DomainFilter, ImagePrivateFilter, ImagePublicFilter, IPAddressFilter, IPAddressPrivateFilter, IPAddressV6LinkLocalFilter, IPAddressV6SlaacFilter, KernelFilter, LinodeFilter, LinodeBaseFilter, LinodeConfigFilter, LinodeTypeFilter, LongviewClientFilter, ManagedContactFilter, NodeBalancerFilter, OAuthClientFilter, PersonalAccessTokenFilter, StackScriptFilter, SupportTicketFilter, UserFilter, VolumeFilter } from '../src/interfaces';
import { Linodev4 } from '../src/';
const server = new Linodev4('personal-key-secured', async (data) => Promise.resolve(data) );
describe('/regions', () => {
	it('regions', async ()=>{
		expect(await server.regions.list()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/regions","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.regions.list(1)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/regions","query":"?page=1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.regions.list(1, 50)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/regions","query":"?page=1&page_size=50","headers":{"Authorization":"Bearer personal-key-secured"}});
	});
	it('regions', async ()=>{
		expect(await server.regions('regionId').get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/regions/regionId","headers":{"Authorization":"Bearer personal-key-secured"}});
	});
});
