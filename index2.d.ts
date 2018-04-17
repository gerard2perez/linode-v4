import { ExtendedClient, HTTPVerb } from './interfaces';
declare namespace Linodev4 {
	interface LinodeResponse<T> {
		data:T[]
		page:number
		pages:number
		results:number
		errors?:any[]
	}
	interface ChildInstancesInnerClass {
		(id: string|number): InstancesInnerClass
		list(page?:number): Promise<LinodeResponse<InstancesInnerClass>>
		list(page:number, filter:any): Promise<LinodeResponse<InstancesInnerClass>>
		list(filter:any): Promise<LinodeResponse<InstancesInnerClass>>
		create(data:any): Promise<InstancesInnerClass>
	}
	interface ChildBackupsInnerClass {
		(id: string|number): BackupsInnerClass
		list(page?:number): Promise<LinodeResponse<BackupsInnerClass>>
		list(page:number, filter:any): Promise<LinodeResponse<BackupsInnerClass>>
		list(filter:any): Promise<LinodeResponse<BackupsInnerClass>>
		create(data:any): Promise<BackupsInnerClass>
	}

	interface BackupsInnerClass {
		restore(data:any): Promise<any>
		cancel(data:any): Promise<any>
		enable(data:any): Promise<any>
	}
	interface ChildConfigsInnerClass {
		(id: string|number): ConfigsInnerClass
		list(page?:number): Promise<LinodeResponse<ConfigsInnerClass>>
		list(page:number, filter:any): Promise<LinodeResponse<ConfigsInnerClass>>
		list(filter:any): Promise<LinodeResponse<ConfigsInnerClass>>
		create(data:any): Promise<ConfigsInnerClass>
	}

	interface ConfigsInnerClass {
		get(data:any): Promise<any>
		update(data:any): Promise<any>
		delete(data:any): Promise<any>
	}
	interface ChildDisksInnerClass {
		(id: string|number): DisksInnerClass
		list(page?:number): Promise<LinodeResponse<DisksInnerClass>>
		list(page:number, filter:any): Promise<LinodeResponse<DisksInnerClass>>
		list(filter:any): Promise<LinodeResponse<DisksInnerClass>>
		create(data:any): Promise<DisksInnerClass>
	}

	interface DisksInnerClass {
		get(data:any): Promise<any>
		update(data:any): Promise<any>
		delete(data:any): Promise<any>
		clone(data:any): Promise<any>
		password(data:any): Promise<any>
		resize(data:any): Promise<any>
	}
	interface ChildIpsInnerClass {
		(id: string|number): IpsInnerClass
		list(page?:number): Promise<LinodeResponse<IpsInnerClass>>
		list(page:number, filter:any): Promise<LinodeResponse<IpsInnerClass>>
		list(filter:any): Promise<LinodeResponse<IpsInnerClass>>
		create(data:any): Promise<IpsInnerClass>
	}

	interface IpsInnerClass {
		get(data:any): Promise<any>
		update(data:any): Promise<any>
		delete(data:any): Promise<any>
	}
	interface ChildStatsInnerClass {
		(id: string|number): StatsInnerClass
		list(page?:number): Promise<LinodeResponse<StatsInnerClass>>
		list(page:number, filter:any): Promise<LinodeResponse<StatsInnerClass>>
		list(filter:any): Promise<LinodeResponse<StatsInnerClass>>
	}

	interface StatsInnerClass {

	}

	interface InstancesInnerClass {
		get(data:any): Promise<any>
		update(data:any): Promise<any>
		delete(data:any): Promise<any>
		boot(data:any): Promise<any>
		clone(data:any): Promise<any>
		mutate(data:any): Promise<any>
		reboot(data:any): Promise<any>
		rebuild(data:any): Promise<any>
		rescue(data:any): Promise<any>
		resize(data:any): Promise<any>
		shutdown(data:any): Promise<any>
		volumes(data:any): Promise<any>
		backups:ChildBackupsInnerClass
		configs:ChildConfigsInnerClass
		disks:ChildDisksInnerClass
		ips:ChildIpsInnerClass
		stats:ChildStatsInnerClass
	}
	interface ChildKernelsInnerClass {
		(id: string|number): KernelsInnerClass
		list(page?:number): Promise<LinodeResponse<KernelsInnerClass>>
		list(page:number, filter:any): Promise<LinodeResponse<KernelsInnerClass>>
		list(filter:any): Promise<LinodeResponse<KernelsInnerClass>>
	}

	interface KernelsInnerClass {
		get(data:any): Promise<any>
	}
	interface ChildStackscriptsInnerClass {
		(id: string|number): StackscriptsInnerClass
		list(page?:number): Promise<LinodeResponse<StackscriptsInnerClass>>
		list(page:number, filter:any): Promise<LinodeResponse<StackscriptsInnerClass>>
		list(filter:any): Promise<LinodeResponse<StackscriptsInnerClass>>
		create(data:any): Promise<StackscriptsInnerClass>
	}

	interface StackscriptsInnerClass {
		get(data:any): Promise<any>
		update(data:any): Promise<any>
		delete(data:any): Promise<any>
	}
	interface ChildTypesInnerClass {
		(id: string|number): TypesInnerClass
		list(page?:number): Promise<LinodeResponse<TypesInnerClass>>
		list(page:number, filter:any): Promise<LinodeResponse<TypesInnerClass>>
		list(filter:any): Promise<LinodeResponse<TypesInnerClass>>
	}

	interface TypesInnerClass {
		get(data:any): Promise<any>
	}
	interface LinodesInnerClass {
		instances:ChildInstancesInnerClass
		kernels:ChildKernelsInnerClass
		stackscripts:ChildStackscriptsInnerClass
		types:ChildTypesInnerClass
	}	interface ChildDomainsInnerClass {
		(id: string|number): DomainsInnerClass
		list(page?:number): Promise<LinodeResponse<DomainsInnerClass>>
		list(page:number, filter:any): Promise<LinodeResponse<DomainsInnerClass>>
		list(filter:any): Promise<LinodeResponse<DomainsInnerClass>>
		create(data:any): Promise<DomainsInnerClass>
	}
	interface ChildRecordsInnerClass {
		(id: string|number): RecordsInnerClass
		list(page?:number): Promise<LinodeResponse<RecordsInnerClass>>
		list(page:number, filter:any): Promise<LinodeResponse<RecordsInnerClass>>
		list(filter:any): Promise<LinodeResponse<RecordsInnerClass>>
		create(data:any): Promise<RecordsInnerClass>
	}

	interface RecordsInnerClass {
		get(data:any): Promise<any>
		update(data:any): Promise<any>
		delete(data:any): Promise<any>
	}
	interface DomainsInnerClass {
		get(data:any): Promise<any>
		update(data:any): Promise<any>
		delete(data:any): Promise<any>
		clone(data:any): Promise<any>
		records:ChildRecordsInnerClass
	}	interface ChildNodebalancersInnerClass {
		(id: string|number): NodebalancersInnerClass
		list(page?:number): Promise<LinodeResponse<NodebalancersInnerClass>>
		list(page:number, filter:any): Promise<LinodeResponse<NodebalancersInnerClass>>
		list(filter:any): Promise<LinodeResponse<NodebalancersInnerClass>>
		create(data:any): Promise<NodebalancersInnerClass>
	}
	interface ChildConfigsInnerClass {
		(id: string|number): ConfigsInnerClass
		list(page?:number): Promise<LinodeResponse<ConfigsInnerClass>>
		list(page:number, filter:any): Promise<LinodeResponse<ConfigsInnerClass>>
		list(filter:any): Promise<LinodeResponse<ConfigsInnerClass>>
		create(data:any): Promise<ConfigsInnerClass>
	}
	interface ChildNodesInnerClass {
		(id: string|number): NodesInnerClass
		list(page?:number): Promise<LinodeResponse<NodesInnerClass>>
		list(page:number, filter:any): Promise<LinodeResponse<NodesInnerClass>>
		list(filter:any): Promise<LinodeResponse<NodesInnerClass>>
		create(data:any): Promise<NodesInnerClass>
	}

	interface NodesInnerClass {
		get(data:any): Promise<any>
		update(data:any): Promise<any>
		delete(data:any): Promise<any>
	}

	interface ConfigsInnerClass {
		get(data:any): Promise<any>
		delete(data:any): Promise<any>
		nodes:ChildNodesInnerClass
	}
	interface NodebalancersInnerClass {
		get(data:any): Promise<any>
		update(data:any): Promise<any>
		delete(data:any): Promise<any>
		configs:ChildConfigsInnerClass
	}	interface ChildIpsInnerClass {
		(id: string|number): IpsInnerClass
		list(page?:number): Promise<LinodeResponse<IpsInnerClass>>
		list(page:number, filter:any): Promise<LinodeResponse<IpsInnerClass>>
		list(filter:any): Promise<LinodeResponse<IpsInnerClass>>
		create(data:any): Promise<IpsInnerClass>
	}

	interface IpsInnerClass {
		get(data:any): Promise<any>
		update(data:any): Promise<any>
		delete(data:any): Promise<any>
	}

	interface Ipv4InnerClass {
		assign(data:any): Promise<any>
		share(data:any): Promise<any>
	}

	interface Ipv6InnerClass {
		pools(data:any): Promise<any>
		ranges(data:any): Promise<any>
	}
	interface NetworkingInnerClass {
		ips:ChildIpsInnerClass
		ipv4:Ipv4InnerClass
		ipv6:Ipv6InnerClass
	}	interface ChildRegionsInnerClass {
		(id: string|number): RegionsInnerClass
		list(page?:number): Promise<LinodeResponse<RegionsInnerClass>>
		list(page:number, filter:any): Promise<LinodeResponse<RegionsInnerClass>>
		list(filter:any): Promise<LinodeResponse<RegionsInnerClass>>
	}
	interface RegionsInnerClass {
		get(data:any): Promise<any>
	}	interface ChildTicketsInnerClass {
		(id: string|number): TicketsInnerClass
		list(page?:number): Promise<LinodeResponse<TicketsInnerClass>>
		list(page:number, filter:any): Promise<LinodeResponse<TicketsInnerClass>>
		list(filter:any): Promise<LinodeResponse<TicketsInnerClass>>
		create(data:any): Promise<TicketsInnerClass>
	}

	interface TicketsInnerClass {
		get(data:any): Promise<any>
		attachments(data:any): Promise<any>
		replies(data:any): Promise<any>
	}
	interface SupportInnerClass {
		tickets:ChildTicketsInnerClass
	}	interface ChildEventsInnerClass {
		(id: string|number): EventsInnerClass
		list(page?:number): Promise<LinodeResponse<EventsInnerClass>>
		list(page:number, filter:any): Promise<LinodeResponse<EventsInnerClass>>
		list(filter:any): Promise<LinodeResponse<EventsInnerClass>>
	}

	interface EventsInnerClass {
		get(data:any): Promise<any>
		read(data:any): Promise<any>
		seen(data:any): Promise<any>
	}
	interface ChildInvoicesInnerClass {
		(id: string|number): InvoicesInnerClass
		list(page?:number): Promise<LinodeResponse<InvoicesInnerClass>>
		list(page:number, filter:any): Promise<LinodeResponse<InvoicesInnerClass>>
		list(filter:any): Promise<LinodeResponse<InvoicesInnerClass>>
	}

	interface InvoicesInnerClass {
		get(data:any): Promise<any>
		items(data:any): Promise<any>
	}
	interface ChildNotificationsInnerClass {
		(id: string|number): NotificationsInnerClass
		list(page?:number): Promise<LinodeResponse<NotificationsInnerClass>>
		list(page:number, filter:any): Promise<LinodeResponse<NotificationsInnerClass>>
		list(filter:any): Promise<LinodeResponse<NotificationsInnerClass>>
	}

	interface NotificationsInnerClass {

	}
	interface ChildOauthClientsInnerClass {
		(id: string|number): OauthClientsInnerClass
		list(page?:number): Promise<LinodeResponse<OauthClientsInnerClass>>
		list(page:number, filter:any): Promise<LinodeResponse<OauthClientsInnerClass>>
		list(filter:any): Promise<LinodeResponse<OauthClientsInnerClass>>
		create(data:any): Promise<OauthClientsInnerClass>
	}

	interface ThumbnailInnerClass {
		get(data:any): Promise<any>
		update(data:any): Promise<any>
	}

	interface OauthClientsInnerClass {
		get(data:any): Promise<any>
		update(data:any): Promise<any>
		delete(data:any): Promise<any>
		resetSecret(data:any): Promise<any>
		thumbnail:ThumbnailInnerClass
	}
	interface ChildPaymentsInnerClass {
		(id: string|number): PaymentsInnerClass
		list(page?:number): Promise<LinodeResponse<PaymentsInnerClass>>
		list(page:number, filter:any): Promise<LinodeResponse<PaymentsInnerClass>>
		list(filter:any): Promise<LinodeResponse<PaymentsInnerClass>>
		create(data:any): Promise<PaymentsInnerClass>
	}

	interface PaypalInnerClass {
		post(data:any): Promise<any>
		execute(data:any): Promise<any>
	}

	interface PaymentsInnerClass {
		get(data:any): Promise<any>
		paypal:PaypalInnerClass
	}
	interface ChildSettingsInnerClass {
		(id: string|number): SettingsInnerClass
		list(page?:number): Promise<LinodeResponse<SettingsInnerClass>>
		list(page:number, filter:any): Promise<LinodeResponse<SettingsInnerClass>>
		list(filter:any): Promise<LinodeResponse<SettingsInnerClass>>
	}

	interface SettingsInnerClass {
		update(data:any): Promise<any>
		managedEnable(data:any): Promise<any>
	}

	interface TransferInnerClass {
		get(data:any): Promise<any>
	}
	interface ChildUsersInnerClass {
		(id: string|number): UsersInnerClass
		list(page?:number): Promise<LinodeResponse<UsersInnerClass>>
		list(page:number, filter:any): Promise<LinodeResponse<UsersInnerClass>>
		list(filter:any): Promise<LinodeResponse<UsersInnerClass>>
		create(data:any): Promise<UsersInnerClass>
	}

	interface GrantsInnerClass {
		get(data:any): Promise<any>
		update(data:any): Promise<any>
	}

	interface UsersInnerClass {
		get(data:any): Promise<any>
		update(data:any): Promise<any>
		delete(data:any): Promise<any>
		grants:GrantsInnerClass
	}
	interface AccountInnerClass {
		get(data:any): Promise<any>
		update(data:any): Promise<any>
		events:ChildEventsInnerClass
		invoices:ChildInvoicesInnerClass
		notifications:ChildNotificationsInnerClass
		oauthClients:ChildOauthClientsInnerClass
		payments:ChildPaymentsInnerClass
		settings:ChildSettingsInnerClass
		transfer:TransferInnerClass
		users:ChildUsersInnerClass
	}	interface ChildAppsInnerClass {
		(id: string|number): AppsInnerClass
		list(page?:number): Promise<LinodeResponse<AppsInnerClass>>
		list(page:number, filter:any): Promise<LinodeResponse<AppsInnerClass>>
		list(filter:any): Promise<LinodeResponse<AppsInnerClass>>
	}

	interface AppsInnerClass {
		get(data:any): Promise<any>
		delete(data:any): Promise<any>
	}
	interface ChildTokensInnerClass {
		(id: string|number): TokensInnerClass
		list(page?:number): Promise<LinodeResponse<TokensInnerClass>>
		list(page:number, filter:any): Promise<LinodeResponse<TokensInnerClass>>
		list(filter:any): Promise<LinodeResponse<TokensInnerClass>>
		create(data:any): Promise<TokensInnerClass>
	}

	interface TokensInnerClass {
		get(data:any): Promise<any>
		update(data:any): Promise<any>
		delete(data:any): Promise<any>
	}
	interface ChildWhitelistInnerClass {
		(id: string|number): WhitelistInnerClass
		list(page?:number): Promise<LinodeResponse<WhitelistInnerClass>>
		list(page:number, filter:any): Promise<LinodeResponse<WhitelistInnerClass>>
		list(filter:any): Promise<LinodeResponse<WhitelistInnerClass>>
		create(data:any): Promise<WhitelistInnerClass>
	}

	interface WhitelistInnerClass {
		get(data:any): Promise<any>
		delete(data:any): Promise<any>
	}
	interface ProfileInnerClass {
		update(data:any): Promise<any>
		get(data:any): Promise<any>
		grants(data:any): Promise<any>
		password(data:any): Promise<any>
		tfaDisable(data:any): Promise<any>
		tfaEnable(data:any): Promise<any>
		tfaEnableConfirm(data:any): Promise<any>
		apps:ChildAppsInnerClass
		tokens:ChildTokensInnerClass
		whitelist:ChildWhitelistInnerClass
	}	interface ChildImagesInnerClass {
		(id: string|number): ImagesInnerClass
		list(page?:number): Promise<LinodeResponse<ImagesInnerClass>>
		list(page:number, filter:any): Promise<LinodeResponse<ImagesInnerClass>>
		list(filter:any): Promise<LinodeResponse<ImagesInnerClass>>
		create(data:any): Promise<ImagesInnerClass>
	}
	interface ImagesInnerClass {
		get(data:any): Promise<any>
		update(data:any): Promise<any>
		delete(data:any): Promise<any>
	}	interface ChildVolumesInnerClass {
		(id: string|number): VolumesInnerClass
		list(page?:number): Promise<LinodeResponse<VolumesInnerClass>>
		list(page:number, filter:any): Promise<LinodeResponse<VolumesInnerClass>>
		list(filter:any): Promise<LinodeResponse<VolumesInnerClass>>
		create(data:any): Promise<VolumesInnerClass>
	}
	interface VolumesInnerClass {
		get(data:any): Promise<any>
		update(data:any): Promise<any>
		delete(data:any): Promise<any>
		attach(data:any): Promise<any>
		clone(data:any): Promise<any>
		detach(data:any): Promise<any>
		resize(data:any): Promise<any>
	}	interface ChildContactsInnerClass {
		(id: string|number): ContactsInnerClass
		list(page?:number): Promise<LinodeResponse<ContactsInnerClass>>
		list(page:number, filter:any): Promise<LinodeResponse<ContactsInnerClass>>
		list(filter:any): Promise<LinodeResponse<ContactsInnerClass>>
		create(data:any): Promise<ContactsInnerClass>
	}

	interface ContactsInnerClass {
		get(data:any): Promise<any>
		update(data:any): Promise<any>
		delete(data:any): Promise<any>
	}
	interface ChildCredentialsInnerClass {
		(id: string|number): CredentialsInnerClass
		list(page?:number): Promise<LinodeResponse<CredentialsInnerClass>>
		list(page:number, filter:any): Promise<LinodeResponse<CredentialsInnerClass>>
		list(filter:any): Promise<LinodeResponse<CredentialsInnerClass>>
		create(data:any): Promise<CredentialsInnerClass>
	}

	interface CredentialsInnerClass {
		get(data:any): Promise<any>
		update(data:any): Promise<any>
	}
	interface ChildIssuesInnerClass {
		(id: string|number): IssuesInnerClass
		list(page?:number): Promise<LinodeResponse<IssuesInnerClass>>
		list(page:number, filter:any): Promise<LinodeResponse<IssuesInnerClass>>
		list(filter:any): Promise<LinodeResponse<IssuesInnerClass>>
	}

	interface IssuesInnerClass {
		get(data:any): Promise<any>
	}
	interface ChildLinodeSettingsInnerClass {
		(id: string|number): LinodeSettingsInnerClass
		list(page?:number): Promise<LinodeResponse<LinodeSettingsInnerClass>>
		list(page:number, filter:any): Promise<LinodeResponse<LinodeSettingsInnerClass>>
		list(filter:any): Promise<LinodeResponse<LinodeSettingsInnerClass>>
	}

	interface LinodeSettingsInnerClass {
		get(data:any): Promise<any>
		update(data:any): Promise<any>
	}
	interface ChildServicesInnerClass {
		(id: string|number): ServicesInnerClass
		list(page?:number): Promise<LinodeResponse<ServicesInnerClass>>
		list(page:number, filter:any): Promise<LinodeResponse<ServicesInnerClass>>
		list(filter:any): Promise<LinodeResponse<ServicesInnerClass>>
		create(data:any): Promise<ServicesInnerClass>
	}

	interface ServicesInnerClass {
		get(data:any): Promise<any>
		update(data:any): Promise<any>
		delete(data:any): Promise<any>
		disable(data:any): Promise<any>
		enable(data:any): Promise<any>
	}
	interface ChildStatsInnerClass {
		(id: string|number): StatsInnerClass
		list(page?:number): Promise<LinodeResponse<StatsInnerClass>>
		list(page:number, filter:any): Promise<LinodeResponse<StatsInnerClass>>
		list(filter:any): Promise<LinodeResponse<StatsInnerClass>>
	}

	interface StatsInnerClass {

	}
	interface ManagedInnerClass {
		contacts:ChildContactsInnerClass
		credentials:ChildCredentialsInnerClass
		issues:ChildIssuesInnerClass
		linodeSettings:ChildLinodeSettingsInnerClass
		services:ChildServicesInnerClass
		stats:ChildStatsInnerClass
	}
	type LinodeMakeRequest = (client:ExtendedClient,method:HTTPVerb, path:string,hasparams:boolean,data:any,isCustom:boolean) => Promise<any>;
	//@ts-ignore
	export default class Linode {
	constructor(token:string, fn?:LinodeMakeRequest);
		linodes: LinodesInnerClass
		domains: ChildDomainsInnerClass
		nodebalancers: ChildNodebalancersInnerClass
		networking: NetworkingInnerClass
		regions: ChildRegionsInnerClass
		support: SupportInnerClass
		account: AccountInnerClass
		profile: ProfileInnerClass
		images: ChildImagesInnerClass
		volumes: ChildVolumesInnerClass
		managed: ManagedInnerClass
	}
}
export = Linodev4
