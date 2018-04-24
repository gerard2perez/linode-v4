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
export enum TypeClass{
	nanode = 'nanode',
	standard = 'standard',
	highmem	= 'nanode'
}
export enum virt_mode{
	fullvirt='fullvirt',
	paravirt='paravirt'
}
export enum run_level {
	default ='default',
	single='single',
	binbash='binbash'
}
