import * as Mocha from 'mocha';
import { expect, assert } from 'chai';
import { Filter, Account, AccountSettings, AuthorizedApp, Backup, CreditCard, Device, Devices, Disk, DiskRequest, Domain, DomainRecord, ErrorObject, Event, Grant, GrantsResponse, ImagePrivate, ImagePublic, Invoice, InvoiceItem, IPAddress, IPAddressPrivate, IPAddressV6LinkLocal, IPAddressV6Slaac, IPv6Pool, IPv6Range, Kernel, Linode, LinodeBase, LinodeConfig, LinodeRequest, LinodeStats, LinodeType, LongviewClient, LongviewSubscription, ManagedContact, ManagedCredential, ManagedIssue, ManagedLinodeSettings, ManagedService, NodeBalancer, NodeBalancerConfig, NodeBalancerNode, NodeBalancerStats, Notification, OAuthClient, PaginationEnvelope, Payment, PaymentRequest, PayPal, PayPalExecute, PersonalAccessToken, Profile, Region, RescueDevices, StackScript, SupportTicket, SupportTicketReply, SupportTicketRequest, Transfer, Tag, User, UserDefinedField, TrustedDevice, SSHKey, SSHKeyRequest, Volume, AuthorizedAppFilter, DiskFilter, DiskRequestFilter, DomainFilter, ImagePrivateFilter, ImagePublicFilter, IPAddressFilter, IPAddressPrivateFilter, IPAddressV6LinkLocalFilter, IPAddressV6SlaacFilter, KernelFilter, LinodeFilter, LinodeBaseFilter, LinodeConfigFilter, LinodeTypeFilter, LongviewClientFilter, ManagedContactFilter, NodeBalancerFilter, OAuthClientFilter, PersonalAccessTokenFilter, StackScriptFilter, SupportTicketFilter, UserFilter, VolumeFilter } from '../src/interfaces';
import { Linodev4 } from '../src/';
const server = new Linodev4('personal-key-secured', async (data) => Promise.resolve(data) );
describe('/domains', () => {
	it('domains', async ()=>{
		expect(await server.domains.list()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/domains","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.domains.list(1)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/domains","query":"?page=1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.domains.list(1, 50)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/domains","query":"?page=1&page_size=50","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.domains.list({} as Filter<DomainFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/domains","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.domains.list(2, {} as Filter<DomainFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/domains","query":"?page=2","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.domains.list(2, 5, {} as Filter<DomainFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/domains","query":"?page=2&page_size=5","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.domains.create({} as Domain)).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/domains","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.domains.import({} as any)).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/domains/import","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
	});
	it('domains', async ()=>{
		expect(await server.domains(1).get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/domains/1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.domains(1).update({} as Domain)).to.deep.equal({"verb":"put","route":"https://api.linode.com/v4/domains/1","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.domains(1).delete()).to.deep.equal({"verb":"delete","route":"https://api.linode.com/v4/domains/1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.domains(1).records.list()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/domains/1/records","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.domains(1).records.list(1)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/domains/1/records","query":"?page=1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.domains(1).records.list(1, 50)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/domains/1/records","query":"?page=1&page_size=50","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.domains(1).records.create({} as any)).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/domains/1/records","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.domains(1).records(1).get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/domains/1/records/1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.domains(1).records(1).update({} as DomainRecord)).to.deep.equal({"verb":"put","route":"https://api.linode.com/v4/domains/1/records/1","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.domains(1).records(1).delete()).to.deep.equal({"verb":"delete","route":"https://api.linode.com/v4/domains/1/records/1","headers":{"Authorization":"Bearer personal-key-secured"}});
	});
});
