import * as Mocha from 'mocha';
import { expect, assert } from 'chai';
import { Filter, Account, AccountSettings, AuthorizedApp, Backup, CreditCard, Device, Devices, Disk, DiskRequest, Domain, DomainRecord, ErrorObject, Event, Grant, GrantsResponse, ImagePrivate, ImagePublic, Invoice, InvoiceItem, IPAddress, IPAddressPrivate, IPAddressV6LinkLocal, IPAddressV6Slaac, IPv6Pool, IPv6Range, Kernel, Linode, LinodeBase, LinodeConfig, LinodeRequest, LinodeStats, LinodeType, LongviewClient, LongviewSubscription, ManagedContact, ManagedCredential, ManagedIssue, ManagedLinodeSettings, ManagedService, NodeBalancer, NodeBalancerConfig, NodeBalancerNode, NodeBalancerStats, Notification, OAuthClient, PaginationEnvelope, Payment, PaymentRequest, PayPal, PayPalExecute, PersonalAccessToken, Profile, Region, RescueDevices, StackScript, SupportTicket, SupportTicketReply, SupportTicketRequest, Transfer, Tag, User, UserDefinedField, TrustedDevice, SSHKey, SSHKeyRequest, Volume, AuthorizedAppFilter, DiskFilter, DiskRequestFilter, DomainFilter, ImagePrivateFilter, ImagePublicFilter, IPAddressFilter, IPAddressPrivateFilter, IPAddressV6LinkLocalFilter, IPAddressV6SlaacFilter, KernelFilter, LinodeFilter, LinodeBaseFilter, LinodeConfigFilter, LinodeTypeFilter, LongviewClientFilter, ManagedContactFilter, NodeBalancerFilter, OAuthClientFilter, PersonalAccessTokenFilter, StackScriptFilter, SupportTicketFilter, UserFilter, VolumeFilter } from '../src/interfaces';
import { Linodev4 } from '../src/';
const server = new Linodev4('personal-key-secured', {method:'options'}, async (data) => data );
describe('/managed', () => {
	it('contacts', async ()=>{
		expect(await server.managed.contacts.list()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/managed/contacts","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.managed.contacts.list(1)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/managed/contacts","query":"?page=1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.managed.contacts.list(1, 50)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/managed/contacts","query":"?page=1&page_size=50","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.managed.contacts.list({} as Filter<ManagedContactFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/managed/contacts","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.managed.contacts.list(2, {} as Filter<ManagedContactFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/managed/contacts","query":"?page=2","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.managed.contacts.list(2, 5, {} as Filter<ManagedContactFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/managed/contacts","query":"?page=2&page_size=5","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.managed.contacts.create({} as ManagedContact)).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/managed/contacts","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.managed.contacts(1).get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/managed/contacts/1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.managed.contacts(1).update({} as ManagedContact)).to.deep.equal({"verb":"put","route":"https://api.linode.com/v4/managed/contacts/1","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.managed.contacts(1).delete()).to.deep.equal({"verb":"delete","route":"https://api.linode.com/v4/managed/contacts/1","headers":{"Authorization":"Bearer personal-key-secured"}});
	});
	it('credentials', async ()=>{
		expect(await server.managed.credentials.list()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/managed/credentials","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.managed.credentials.list(1)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/managed/credentials","query":"?page=1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.managed.credentials.list(1, 50)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/managed/credentials","query":"?page=1&page_size=50","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.managed.credentials.create({} as any)).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/managed/credentials","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.managed.credentials(1).get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/managed/credentials/1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.managed.credentials(1).update({} as ManagedCredential)).to.deep.equal({"verb":"put","route":"https://api.linode.com/v4/managed/credentials/1","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.managed.credentials(1).revoke()).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/managed/credentials/1/revoke","headers":{"Authorization":"Bearer personal-key-secured"}});
	});
	it('issues', async ()=>{
		expect(await server.managed.issues.list()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/managed/issues","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.managed.issues.list(1)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/managed/issues","query":"?page=1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.managed.issues.list(1, 50)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/managed/issues","query":"?page=1&page_size=50","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.managed.issues(1).get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/managed/issues/1","headers":{"Authorization":"Bearer personal-key-secured"}});
	});
	it('linode-settings', async ()=>{
		expect(await server.managed.linodeSettings.list()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/managed/linode-settings","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.managed.linodeSettings.list(1)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/managed/linode-settings","query":"?page=1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.managed.linodeSettings.list(1, 50)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/managed/linode-settings","query":"?page=1&page_size=50","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.managed.linodeSettings(1).get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/managed/linode-settings/1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.managed.linodeSettings(1).update({} as ManagedLinodeSettings)).to.deep.equal({"verb":"put","route":"https://api.linode.com/v4/managed/linode-settings/1","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
	});
	it('services', async ()=>{
		expect(await server.managed.services.list()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/managed/services","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.managed.services.list(1)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/managed/services","query":"?page=1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.managed.services.list(1, 50)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/managed/services","query":"?page=1&page_size=50","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.managed.services.create({} as any)).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/managed/services","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.managed.services(1).get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/managed/services/1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.managed.services(1).update({} as ManagedService)).to.deep.equal({"verb":"put","route":"https://api.linode.com/v4/managed/services/1","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.managed.services(1).delete()).to.deep.equal({"verb":"delete","route":"https://api.linode.com/v4/managed/services/1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.managed.services(1).disable()).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/managed/services/1/disable","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.managed.services(1).enable()).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/managed/services/1/enable","headers":{"Authorization":"Bearer personal-key-secured"}});
	});
});
