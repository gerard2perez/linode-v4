import { InstanceStatus, Hypervisor, Architecture, TypeClass, run_level, virt_mode, DomainStatus, DomainType } from "./enumerations";

export interface PriceType {
	hourly:number,monthly:number
}
export class ExtendedClient{}
export interface IResponseDomain {
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
export interface IResponseLinodeInstance {
	id:number
	alerts:Object
	backups:Object
	created:Date
	region:string
	image:string
	group:string
	ipv4:string[]
	ipv6:string
	label:string
	type:string
	status:InstanceStatus
	updated:Date
	hypervisor: Hypervisor
	specs:Object
}
export interface IResponseLinodeKernel {
	id:string
	xen:boolean
	kvm:boolean
	label:string
	version:string
	architecture: Architecture
	pvops:boolean
}
export interface IResponseDomainRecord {
	id:number
	type:string
	name:string
	target:string
	priority:number
	weight:number
	port:number
	service:string
	protocol:string
	tag:string
	ttl_sec:number
}
export interface IResponseLinodeStackscript {
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
export interface IResponseLinodeType {
	id:string
	disk:number
	class: TypeClass
	price: PriceType
	label:string
	addons: {backups:{price:PriceType}}
	network_out:number
	memory:number
	transfer:number
	vcpus:number

}
export interface IResponseLinodeInstanceBackup {
	automatic:any[]
	snapshot:any
}
export interface IResponseConfig {
	id:number
	comments:string
	created:Date
	devices:any
	helpers:any
	initrd:number
	kernel:string
	label:string
	memory_limit:number
	root_device:string
	run_level:run_level
	updated:Date
	virt_mode:virt_mode
}
export interface IResponseLinodeInstanceDisk {
	size:number
	image:string
	root_pass:string
	authorized_keys:any[]
	label:string
	filesystem:string
	read_only:boolean
	stackscript_id:number
	stackscript_data:any
}
