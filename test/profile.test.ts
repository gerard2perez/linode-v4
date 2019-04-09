import * as Mocha from 'mocha';
import { expect, assert } from 'chai';
import { Filter, Account, AccountSettings, AuthorizedApp, Backup, CreditCard, Device, Devices, Disk, DiskRequest, Domain, DomainRecord, ErrorObject, Event, Grant, GrantsResponse, ImagePrivate, ImagePublic, Invoice, InvoiceItem, IPAddress, IPAddressPrivate, IPAddressV6LinkLocal, IPAddressV6Slaac, IPv6Pool, IPv6Range, Kernel, Linode, LinodeBase, LinodeConfig, LinodeRequest, LinodeStats, LinodeType, LongviewClient, LongviewSubscription, ManagedContact, ManagedCredential, ManagedIssue, ManagedLinodeSettings, ManagedService, NodeBalancer, NodeBalancerConfig, NodeBalancerNode, NodeBalancerStats, Notification, OAuthClient, PaginationEnvelope, Payment, PaymentRequest, PayPal, PayPalExecute, PersonalAccessToken, Profile, Region, RescueDevices, StackScript, SupportTicket, SupportTicketReply, SupportTicketRequest, Transfer, Tag, User, UserDefinedField, TrustedDevice, SSHKey, SSHKeyRequest, Volume, AuthorizedAppFilter, DiskFilter, DiskRequestFilter, DomainFilter, ImagePrivateFilter, ImagePublicFilter, IPAddressFilter, IPAddressPrivateFilter, IPAddressV6LinkLocalFilter, IPAddressV6SlaacFilter, KernelFilter, LinodeFilter, LinodeBaseFilter, LinodeConfigFilter, LinodeTypeFilter, LongviewClientFilter, ManagedContactFilter, NodeBalancerFilter, OAuthClientFilter, PersonalAccessTokenFilter, StackScriptFilter, SupportTicketFilter, UserFilter, VolumeFilter } from '../src/interfaces';
import { Linodev4 } from '../src/';
const server = new Linodev4('personal-key-secured', {method:'options'}, async (data) => data );
describe('/profile', () => {
	it('profile', async ()=>{
		expect(await server.profile.get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/profile","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.profile.update({} as Profile)).to.deep.equal({"verb":"put","route":"https://api.linode.com/v4/profile","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.profile.grants()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/profile/grants","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.profile.tfaDisable()).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/profile/tfa-disable","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.profile.tfaEnable()).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/profile/tfa-enable","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.profile.tfaEnableConfirm({} as any)).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/profile/tfa-enable-confirm","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
	});
	it('apps', async ()=>{
		expect(await server.profile.apps.list()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/profile/apps","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.profile.apps.list(1)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/profile/apps","query":"?page=1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.profile.apps.list(1, 50)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/profile/apps","query":"?page=1&page_size=50","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.profile.apps.list({} as Filter<AuthorizedAppFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/profile/apps","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.profile.apps.list(2, {} as Filter<AuthorizedAppFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/profile/apps","query":"?page=2","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.profile.apps.list(2, 5, {} as Filter<AuthorizedAppFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/profile/apps","query":"?page=2&page_size=5","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.profile.apps(1).get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/profile/apps/1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.profile.apps(1).delete()).to.deep.equal({"verb":"delete","route":"https://api.linode.com/v4/profile/apps/1","headers":{"Authorization":"Bearer personal-key-secured"}});
	});
	it('tokens', async ()=>{
		expect(await server.profile.tokens.list()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/profile/tokens","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.profile.tokens.list(1)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/profile/tokens","query":"?page=1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.profile.tokens.list(1, 50)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/profile/tokens","query":"?page=1&page_size=50","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.profile.tokens.list({} as Filter<PersonalAccessTokenFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/profile/tokens","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.profile.tokens.list(2, {} as Filter<PersonalAccessTokenFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/profile/tokens","query":"?page=2","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.profile.tokens.list(2, 5, {} as Filter<PersonalAccessTokenFilter>)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/profile/tokens","query":"?page=2&page_size=5","headers":{"Authorization":"Bearer personal-key-secured","X-Filter":{}}});
		expect(await server.profile.tokens.create({} as any)).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/profile/tokens","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.profile.tokens(1).get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/profile/tokens/1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.profile.tokens(1).update({} as PersonalAccessToken)).to.deep.equal({"verb":"put","route":"https://api.linode.com/v4/profile/tokens/1","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.profile.tokens(1).delete()).to.deep.equal({"verb":"delete","route":"https://api.linode.com/v4/profile/tokens/1","headers":{"Authorization":"Bearer personal-key-secured"}});
	});
	it('devices', async ()=>{
		expect(await server.profile.devices.list()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/profile/devices","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.profile.devices.list(1)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/profile/devices","query":"?page=1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.profile.devices.list(1, 50)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/profile/devices","query":"?page=1&page_size=50","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.profile.devices(1).get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/profile/devices/1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.profile.devices(1).delete()).to.deep.equal({"verb":"delete","route":"https://api.linode.com/v4/profile/devices/1","headers":{"Authorization":"Bearer personal-key-secured"}});
	});
	it('sshkeys', async ()=>{
		expect(await server.profile.sshkeys.list()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/profile/sshkeys","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.profile.sshkeys.list(1)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/profile/sshkeys","query":"?page=1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.profile.sshkeys.list(1, 50)).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/profile/sshkeys","query":"?page=1&page_size=50","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.profile.sshkeys.create({} as SSHKeyRequest)).to.deep.equal({"verb":"post","route":"https://api.linode.com/v4/profile/sshkeys","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.profile.sshkeys(1).get()).to.deep.equal({"verb":"get","route":"https://api.linode.com/v4/profile/sshkeys/1","headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.profile.sshkeys(1).update({} as SSHKey)).to.deep.equal({"verb":"put","route":"https://api.linode.com/v4/profile/sshkeys/1","body":{},"headers":{"Authorization":"Bearer personal-key-secured"}});
		expect(await server.profile.sshkeys(1).delete()).to.deep.equal({"verb":"delete","route":"https://api.linode.com/v4/profile/sshkeys/1","headers":{"Authorization":"Bearer personal-key-secured"}});
	});
});
