import * as Mocha from 'mocha';
import { expect, assert } from 'chai';
import { Filter, Account, AccountSettings, AuthorizedApp, Backup, CreditCard, Device, Devices, Disk, DiskRequest, Domain, DomainRecord, ErrorObject, Event, Grant, GrantsResponse, ImagePrivate, ImagePublic, Invoice, InvoiceItem, IPAddress, IPAddressPrivate, IPAddressV6LinkLocal, IPAddressV6Slaac, IPv6Pool, IPv6Range, Kernel, Linode, LinodeBase, LinodeConfig, LinodeRequest, LinodeStats, LinodeType, LongviewClient, LongviewSubscription, ManagedContact, ManagedCredential, ManagedIssue, ManagedLinodeSettings, ManagedService, NodeBalancer, NodeBalancerConfig, NodeBalancerNode, Notification, OAuthClient, PaginationEnvelope, Payment, PaymentRequest, PayPal, PayPalExecute, PersonalAccessToken, Profile, Region, RescueDevices, StackScript, SupportTicket, SupportTicketReply, SupportTicketRequest, Transfer, User, UserDefinedField, Volume, AuthorizedAppFilter, DiskFilter, DiskRequestFilter, DomainFilter, ImagePrivateFilter, ImagePublicFilter, IPAddressFilter, IPAddressPrivateFilter, IPAddressV6LinkLocalFilter, IPAddressV6SlaacFilter, KernelFilter, LinodeFilter, LinodeBaseFilter, LinodeConfigFilter, LinodeTypeFilter, LongviewClientFilter, ManagedContactFilter, NodeBalancerFilter, OAuthClientFilter, PersonalAccessTokenFilter, StackScriptFilter, SupportTicketFilter, UserFilter, VolumeFilter, LinodeTypeClass } from '../src/interfaces';
import { Linodev4 } from '../src/';
const server = new Linodev4('personal-key-secured');
describe('Real API Request', () => {
	it('1. list', async ()=>{
		let res = await server.linode.types.list();
		expect(res).to.includes.keys(['data', 'page', 'pages', 'results']);
	});
	it('2. list', async ()=>{
		expect(await server.linode.types.list(1)).to.includes.keys(['data', 'page', 'pages', 'results']);
	});
	it('3. list', async ()=>{
		let {errors} = await server.linode.types.list(2, 2);
		expect(errors[0]).to.be.deep.equal({
			field: 'page_size',
			reason:'Must be 25-100'
		});
	});
	it('4. list', async () => {
		let {results, page, pages, data} = await server.linode.types.list({ class: LinodeTypeClass.highmem });
		expect(results).to.equal(5);
		expect(pages).to.equal(1);
		expect(page).to.equal(1);
	});
	it('5. list', async () => {
		let {results, page, pages, data, errors} = await server.linode.types.list(2, { class:LinodeTypeClass.nanode });
		expect(results).to.equal(1);
		expect(pages).to.equal(1);
		expect(page).to.equal(2);
		expect(data.length).to.equal(0);
	});
	it('6. list', async () => {
		let {results, page, pages, data, errors} = await server.linode.types.list(1, 50, { class:LinodeTypeClass.nanode });
		expect(results).to.equal(1);
		expect(pages).to.equal(1);
		expect(page).to.equal(1);
		expect(data.length).to.be.gt(0);
	});
	it('7. list', async () => {
		let type = await server.linode.types('g6-nanode-1').get();
		expect(type).to.include.keys(['memory', 'price', 'id', 'label', 'price', 'transfer', 'vcpus', 'network_out']);
	});
	it('Argument Missmatch', async () => {
		let bindArgError = server.linode.types.list.bind(null, 1, 2, 5);
		expect(bindArgError).to.throw(/Arguments/);
	});
	it('Argument Count', async () => {
		let bindArgError = server.domains(1).update.bind(null, {}, 2);
		expect(bindArgError).to.throw('Argument count does not match');
	});
});
