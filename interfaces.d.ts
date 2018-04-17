export enum DomainType{
	master = 'master',
	slave = 'slave'
}
export enum DomainStatus {
	disabled = 	'disabled',
	active = 	'active',
	edit_mode = 	'edit_mode'

}
export enum InstanceStatus {
    /**
     * The Linode is powered off.
     */
    offline = 	'offline',
  /**
   *  The Linode is currently booting up.
   */
  booting = 	'booting',
  /**
   * The Linode is currently running.
   */
  running = 	'running',
  /**
   * The Linode is currently shutting down.
   */
  shutting_down = 	'shutting_down',
  /**
   * The Linode is rebooting.
   */
  rebooting = 	'rebooting',
  /**
   * The Linode is being created.
   */
  provisioning = 	'provisioning',
  /**
   * The Linode is being deleted.
   */
  deleting = 	'deleting',
  /**
   * The Linode is being migrated to a new host/region.
   */
  migrating = 	'migrating'
}
export enum HTTPVerb {
	get = 'get',
	post = 'post',
	delete = 'del',
	update = 'put'
}
export enum Hypervisor{
	kvm='kvm',
	xen='xen'
}
export enum Architecture {
	/**
	 * 64 bit distribution
	 */
	x86_64 = 'x86_64',
	/**
	 * 32 bit distribution
	 */
	i386 = 'i386'
}
export class ExtendedClient{}
export interface IResponseDomains {
	id:number
	domain:string
	soa_email:string
	description:string
	refresh_sec: number
	retry_sec: number
	expire_sec: number
	ttl_sec: number
	status: DomainStatus
	master_ips: string[],
	axfr_ips: string[],
	group: string
	type: DomainType
	zonefile: Object
}
export interface IResponseLinodesInstances {
	id:number
	alerts:Object
	backups:Object
	created:Date
	region:string
	image:string
	group:string
	ipv4:string[]
	ipv6:string[]
	label:string
	type:string
	status:InstanceStatus
	updated:Date
	hypervisor: Hypervisor
	specs:Object
}
export interface IResponseLinodesKernels {
	id:string
	xen:boolean
	kvm:boolean
	label:string
	version:string
	architecture: Architecture
	pvops:boolean
}

export interface IResponseLinodesStackscripts {
	id:number
	username:string
	user_gravatar_id:string
	label:string
	description:string
	images:string[]
	deployments_totals: number
	deployments_active: number
	is_public:boolean
	created:Date
	updated:Date
	rev_note:string
	script:string
	user_defined_fields:Object[]
}
