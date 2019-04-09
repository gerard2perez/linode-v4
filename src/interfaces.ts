//#region Support
export interface LinodeResponse<T> {
	data:T[]
	page:number
	pages:number
	results:number
	errors?:any[]
}
export type Filter<TInstance extends {}> = TInstance | {
	'+and'?:TInstance[]
	'+or'?:TInstance[]
	'+gt'?:TInstance[]
	'+gte'?:TInstance[]
	'+lt'?:TInstance[]
	'+lte'?:TInstance[]
	'+contains'?:TInstance[]
	'+neq'?:TInstance[]
	'+order_by'?:TInstance[]
	'+order'?:TInstance[]
}

//#endregion
//#region Enumerations
export enum BackupType {
	auto = 'auto',
	snapshot = 'snapshot'
}
export enum BackupStatus {
	paused = 'paused',
	pending = 'pending',
	running = 'running',
	needsPostProcessing = 'needsPostProcessing',
	successful = 'successful',
	failed = 'failed',
	userAborted = 'userAborted'
}
export enum DiskStatus {
	ready = 'ready',
	not_ready = 'not ready',
	deleting = 'deleting'
}
export enum DiskFilesystem {
	raw = 'raw',
	swap = 'swap',
	ext3 = 'ext3',
	ext4 = 'ext4',
	initrd = 'initrd'
}
export enum DiskRequestFilesystem {
	raw = 'raw',
	swap = 'swap',
	ext3 = 'ext3',
	ext4 = 'ext4',
	initrd = 'initrd'
}
export enum DomainType {
	master = 'master',
	slave = 'slave'
}
export enum DomainStatus {
	disabled = 'disabled',
	active = 'active',
	edit_mode = 'edit_mode',
	has_errors = 'has_errors'
}
export enum DomainRecordType {
	A = 'A',
	AAAA = 'AAAA',
	NS = 'NS',
	MX = 'MX',
	CNAME = 'CNAME',
	TXT = 'TXT',
	SRV = 'SRV',
	PTR = 'PTR',
	CAA = 'CAA'
}
export enum EventAction {
	account_update = 'account_update',
	account_settings_update = 'account_settings_update',
	backups_enable = 'backups_enable',
	backups_cancel = 'backups_cancel',
	backups_restore = 'backups_restore',
	community_question_reply = 'community_question_reply',
	community_like = 'community_like',
	credit_card_updated = 'credit_card_updated',
	disk_create = 'disk_create',
	disk_delete = 'disk_delete',
	disk_update = 'disk_update',
	disk_duplicate = 'disk_duplicate',
	disk_imagize = 'disk_imagize',
	disk_resize = 'disk_resize',
	dns_record_create = 'dns_record_create',
	dns_record_delete = 'dns_record_delete',
	dns_record_update = 'dns_record_update',
	dns_zone_create = 'dns_zone_create',
	dns_zone_delete = 'dns_zone_delete',
	dns_zone_update = 'dns_zone_update',
	image_delete = 'image_delete',
	image_update = 'image_update',
	linode_addip = 'linode_addip',
	linode_boot = 'linode_boot',
	linode_clone = 'linode_clone',
	linode_create = 'linode_create',
	linode_delete = 'linode_delete',
	linode_update = 'linode_update',
	linode_deleteip = 'linode_deleteip',
	linode_migrate = 'linode_migrate',
	linode_mutate = 'linode_mutate',
	linode_reboot = 'linode_reboot',
	linode_rebuild = 'linode_rebuild',
	linode_resize = 'linode_resize',
	linode_shutdown = 'linode_shutdown',
	linode_snapshot = 'linode_snapshot',
	linode_config_create = 'linode_config_create',
	linode_config_delete = 'linode_config_delete',
	linode_config_update = 'linode_config_update',
	longviewclient_create = 'longviewclient_create',
	longviewclient_delete = 'longviewclient_delete',
	longviewclient_update = 'longviewclient_update',
	managed_disabled = 'managed_disabled',
	managed_enabled = 'managed_enabled',
	managed_service_create = 'managed_service_create',
	managed_service_delete = 'managed_service_delete',
	nodebalancer_create = 'nodebalancer_create',
	nodebalancer_delete = 'nodebalancer_delete',
	nodebalancer_update = 'nodebalancer_update',
	nodebalancer_config_create = 'nodebalancer_config_create',
	nodebalancer_config_delete = 'nodebalancer_config_delete',
	nodebalancer_config_update = 'nodebalancer_config_update',
	password_reset = 'password_reset',
	payment_submitted = 'payment_submitted',
	stackscript_create = 'stackscript_create',
	stackscript_delete = 'stackscript_delete',
	stackscript_update = 'stackscript_update',
	stackscript_publicize = 'stackscript_publicize',
	stackscript_revise = 'stackscript_revise',
	tfa_disabled = 'tfa_disabled',
	tfa_enabled = 'tfa_enabled',
	ticket_attachment_upload = 'ticket_attachment_upload',
	ticket_create = 'ticket_create',
	ticket_update = 'ticket_update',
	user_ssh_key_add = 'user_ssh_key_add',
	user_ssh_key_delete = 'user_ssh_key_delete',
	user_ssh_key_update = 'user_ssh_key_update',
	volume_attach = 'volume_attach',
	volume_clone = 'volume_clone',
	volume_create = 'volume_create',
	volume_delete = 'volume_delete',
	volume_update = 'volume_update',
	volume_detach = 'volume_detach',
	volume_resize = 'volume_resize'
}
export enum EventStatus {
	failed = 'failed',
	finished = 'finished',
	notification = 'notification',
	scheduled = 'scheduled',
	started = 'started'
}
export enum GrantPermissions {
	read_only = 'read_only',
	read_write = 'read_write'
}
export enum ImagePrivateType {
	manual = 'manual',
	automatic = 'automatic'
}
export enum ImagePublicType {
	manual = 'manual',
	automatic = 'automatic'
}
export enum InvoiceItemType {
	hourly = 'hourly',
	prepay = 'prepay',
	misc = 'misc'
}
export enum IPAddressType {
	ipv4 = 'ipv4',
	ipv6 = 'ipv6',
	ipv6_pool = 'ipv6/pool',
	ipv6_range = 'ipv6/range'
}
export enum KernelArchitecture {
	x86_64 = 'x86_64',
	i386 = 'i386'
}
export enum LinodeStatus {
	running = 'running',
	offline = 'offline',
	booting = 'booting',
	rebooting = 'rebooting',
	shutting_down = 'shutting_down',
	provisioning = 'provisioning',
	deleting = 'deleting',
	migrating = 'migrating',
	rebuilding = 'rebuilding',
	cloning = 'cloning',
	restoring = 'restoring'
}
export enum LinodeHypervisor {
	kvm = 'kvm'
}
export enum LinodeConfigRunLevel {
	default = 'default',
	single = 'single',
	binbash = 'binbash'
}
export enum LinodeConfigVirtMode {
	paravirt = 'paravirt',
	fullvirt = 'fullvirt'
}
export enum LinodeTypeClass {
	nanode = 'nanode',
	standard = 'standard',
	dedicated = 'dedicated',
	highmem = 'highmem'
}
export enum ManagedServiceStatus {
	disabled = 'disabled',
	pending = 'pending',
	ok = 'ok',
	problem = 'problem'
}
export enum ManagedServiceServiceType {
	url = 'url',
	tcp = 'tcp'
}
export enum NodeBalancerConfigProtocol {
	http = 'http',
	https = 'https',
	tcp = 'tcp'
}
export enum NodeBalancerConfigAlgorithm {
	roundrobin = 'roundrobin',
	leastconn = 'leastconn',
	source = 'source'
}
export enum NodeBalancerConfigStickiness {
	none = 'none',
	table = 'table',
	http_cookie = 'http_cookie'
}
export enum NodeBalancerConfigCheck {
	none = 'none',
	connection = 'connection',
	http = 'http',
	http_body = 'http_body'
}
export enum NodeBalancerConfigCipherSuite {
	recommended = 'recommended',
	legacy = 'legacy'
}
export enum NodeBalancerNodeStatus {
	unknown = 'unknown',
	UP = 'UP',
	DOWN = 'DOWN'
}
export enum NodeBalancerNodeMode {
	accept = 'accept',
	reject = 'reject',
	drain = 'drain',
	backup = 'backup'
}
export enum NotificationType {
	migration_scheduled = 'migration_scheduled',
	migration_imminent = 'migration_imminent',
	migration_pending = 'migration_pending',
	reboot_scheduled = 'reboot_scheduled',
	outage = 'outage',
	payment_due = 'payment_due',
	ticket_important = 'ticket_important',
	ticket_abuse = 'ticket_abuse',
	notice = 'notice',
	maintenance = 'maintenance'
}
export enum NotificationSeverity {
	minor = 'minor',
	major = 'major',
	critical = 'critical'
}
export enum OAuthClientStatus {
	active = 'active',
	disabled = 'disabled',
	suspended = 'suspended'
}
export enum ProfileLishAuthMethod {
	password_keys = 'password_keys',
	keys_only = 'keys_only',
	disabled = 'disabled'
}
export enum SupportTicketStatus {
	closed = 'closed',
	new = 'new',
	open = 'open'
}
export enum VolumeStatus {
	creating = 'creating',
	active = 'active',
	resizing = 'resizing',
	contact_support = 'contact_support'
}

//#endregion
//#region Models
/**
 * Account object
 */
export interface Account {

	/**
 	 * The datetime of when the account was activated.
	 * @example
	 * 2018-01-01T00:01:01
 	*/
	readonly active_since?:string

	/**
 	 * <= 64 characters.
	 *
	 * First line of this Account's billing address.
	 * @example
	 * 123 Main Street
 	*/
	address_1?:string

	/**
 	 * <= 64 characters.
	 *
	 * Second line of this Account's billing address.
	 * @example
	 * Suite A
 	*/
	address_2?:string

	/**
 	 * This Account's balance, in US dollars.
	 * @example
	 * 200
 	*/
	readonly balance?:number

	/**
 	 * This Account's current estimated invoice in US dollars. This is not your final invoice balance. Bandwidth charges are not included in the estimate.
	 * @example
	 * 145
 	*/
	readonly balance_uninvoiced?:number

	/**
 	 * <= 24 characters.
	 *
	 * The city for this Account's billing address.
	 * @example
	 * Philadelphia
 	*/
	city?:string

	/**
 	 * Credit Card information associated with this Account.
 	*/
	readonly credit_card?:{ last_four: string, expiry: string }

	/**
 	 * <= 128 characters.
	 *
	 * The company name associated with this Account.
	 * @example
	 * Linode LLC
 	*/
	company?:string

	/**
 	 * [2 .. 2] characters.
	 *
	 * The two-letter country code of this Account's billing address.
	 * @example
	 * US
 	*/
	country?:string

	/**
 	 * <= 128 characters.
	 *
	 * The email address of the person associated with this Account.
	 * @example
	 * john.smith@linode.com
 	*/
	email?:string

	/**
 	 * <= 50 characters.
	 *
	 * The first name of the person associated with this Account.
	 * @example
	 * John
 	*/
	first_name?:string

	/**
 	 * <= 50 characters.
	 *
	 * The last name of the person associated with this Account.
	 * @example
	 * Smith
 	*/
	last_name?:string

	/**
 	 * <= 32 characters.
	 *
	 * The phone number associated with this Account.
	 * @example
	 * 215-555-1212
 	*/
	phone?:string

	/**
 	 * <= 24 characters.
	 *
	 * If billing address is in the United States, this is the State portion of the Account's billing address. If the address is outside the US, this is the Province associated with the Account's billing address.
	 * @example
	 * Pennsylvania
 	*/
	state?:string

	/**
 	 * <= 100 characters.
	 *
	 * The tax identification number associated with this Account, for tax calculations in some countries. If you do not live in a country that collects tax, this should be `null`.
	 * @example
	 * ATU99999999
 	*/
	tax_id?:string

	/**
 	 * <= 16 characters.
	 *
	 * The zip code of this Account's billing address.
	 * @example
	 * 19102
 	*/
	zip?:string
}
/**
 * Account Settings object
 */
export interface AccountSettings {

	/**
 	 * Our 24/7 incident response service. This robust, multi-homed monitoring system distributes monitoring checks to ensure that your servers remain online and available at all times. Linode Managed can monitor any service or software stack reachable over TCP or HTTP. Once you add a service to Linode Managed, we'll monitor it for connectivity, response, and total request time.
	 * @example
	 * true
 	*/
	readonly managed?:boolean

	/**
 	 * The Longview Pro tier you are currently subscribed to. The value must a [Longview Subscription](#operation/getLongviewSubscriptions) ID or `null`.
	 * @example
	 * longview-30
 	*/
	longview_subscription?:string

	/**
 	 * Enables network helper across all users by default for new Linodes and Linode Configs.
 	*/
	network_helper?:boolean

	/**
 	 * Account-wide backups default.  If `true`, all Linodes created will automatically be enrolled in the Backups service.  If `false`, Linodes will not be enrolled by default, but may still be enrolled on creation or later.
	 * @example
	 * true
 	*/
	backups_enabled?:boolean
}
/**
 * An application you have authorized access to your Account through OAuth.

 */
export interface AuthorizedApp {

	/**
 	 * This authorization's ID, used for revoking access.
	 * @example
	 * 123
 	*/
	readonly id?:number

	/**
 	 * The name of the application you've authorized.
	 * @example
	 * example-app
 	*/
	readonly label?:string

	/**
 	 * The URL at which this app's thumbnail may be accessed.
 	*/
	readonly thumbnail_url?:string

	/**
 	 * The OAuth scopes this app was authorized with.  This defines what parts of your Account the app is allowed to access.
	 * @example
	 * linodes:read_only
 	*/
	readonly scopes?:string

	/**
 	 * When this app was authorized.
	 *
	 * @filterable
	 * @example
	 * 2018-01-01T00:01:01
 	*/
	readonly created?:string

	/**
 	 * When this app's access token expires.  Please note that apps may still have active refresh tokens after this time passes.
	 * @example
	 * 2018-01-15T00:01:01
 	*/
	readonly expiry?:string

	/**
 	 * The website where you can get more information about this app.
	 * @example
	 * example.org
 	*/
	readonly website?:string
}
/**
 * An object representing a Backup or snapshot for a Linode with Backup service enabled.

 */
export interface Backup {

	/**
 	 * The unique ID of this Backup.
	 * @example
	 * 123456
 	*/
	readonly id?:number

	/**
 	 * This indicates whether the Backup is an automatic Backup or manual snapshot taken by the User at a specific point in time.
	 * @example
	 * snapshot
 	*/
	readonly type?:BackupType

	/**
 	 * The current state of a specific Backup.
	 * @example
	 * successful
 	*/
	readonly status?:BackupStatus

	/**
 	 * The date the Backup was taken.
	 * @example
	 * 2018-01-15T00:01:01
 	*/
	readonly created?:string

	/**
 	 * The date the Backup was most recently updated.
	 * @example
	 * 2018-01-15T00:01:01
 	*/
	readonly updated?:string

	/**
 	 * The date the Backup completed.
	 * @example
	 * 2018-01-15T00:01:01
 	*/
	readonly finished?:string

	/**
 	 * A label for Backups that are of type `snapshot`.
	 * @example
	 * Webserver-Backup-2018
 	*/
	label?:string

	/**
 	 * A list of the labels of the Configuration profiles that are part of the Backup.
 	*/
	readonly configs?:string[]

	/**
 	 * A list of the disks that are part of the Backup.
 	*/
	readonly disks?:{ size: number, filesystem: string, label: string }[]
}
/**
 * An object representing the credit card information you have on file with Linode to make Payments against your Account.

 */
export interface CreditCard {

	/**
 	 * [13 .. 23] characters.
	 *
	 * Your credit card number. No spaces or dashes allowed.
	 * @example
	 * 4111111111111111
 	*/
	card_number:string

	/**
 	 * A value from 1-12 representing the expiration month of your credit card.
	 *   * 1 = January
	 *   * 2 = February
	 *   * 3 = March
	 *   * Etc.
	 * @example
	 * 12
 	*/
	expiry_month:number

	/**
 	 * A four-digit integer representing the expiration year of your credit card.
	 * The combination of `expiry_month` and `expiry_year` must result in a month/year combination of the current month or in the future. An expiration date set in the past is invalid.
	 * @example
	 * 2020
 	*/
	expiry_year:number
}
/**
 * Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.
Devices mapped from _sde_ through _sdh_ are unavailable in `fullvirt` virt_mode.

 */
export interface Device {

	/**
 	 * The Disk ID, or `null` if a Volume is assigned to this slot.
	 * @example
	 * 124458
 	*/
	disk_id?:number

	/**
 	 * The Volume ID, or `null` if a Disk is assigned to this slot.
 	*/
	volume_id?:number
}

export interface Devices {

	/**
 	 * Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.
	 * Devices mapped from _sde_ through _sdh_ are unavailable in `fullvirt` virt_mode.
 	*/
	sda?:Device

	/**
 	 * Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.
	 * Devices mapped from _sde_ through _sdh_ are unavailable in `fullvirt` virt_mode.
 	*/
	sdb?:Device

	/**
 	 * Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.
	 * Devices mapped from _sde_ through _sdh_ are unavailable in `fullvirt` virt_mode.
 	*/
	sdc?:Device

	/**
 	 * Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.
	 * Devices mapped from _sde_ through _sdh_ are unavailable in `fullvirt` virt_mode.
 	*/
	sdd?:Device

	/**
 	 * Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.
	 * Devices mapped from _sde_ through _sdh_ are unavailable in `fullvirt` virt_mode.
 	*/
	sde?:Device

	/**
 	 * Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.
	 * Devices mapped from _sde_ through _sdh_ are unavailable in `fullvirt` virt_mode.
 	*/
	sdf?:Device

	/**
 	 * Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.
	 * Devices mapped from _sde_ through _sdh_ are unavailable in `fullvirt` virt_mode.
 	*/
	sdg?:Device

	/**
 	 * Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.
	 * Devices mapped from _sde_ through _sdh_ are unavailable in `fullvirt` virt_mode.
 	*/
	sdh?:Device
}

export interface Disk {

	/**
 	 * This Disk's ID which must be provided for all operations impacting this Disk.
	 * @example
	 * 25674
 	*/
	readonly id?:number

	/**
 	 * [1 .. 48] characters.
	 *
	 * The Disk's label is for display purposes only.
	 *
	 * @filterable
	 * @example
	 * Debian 9 Disk
 	*/
	label?:string

	/**
 	 * A brief description of this Disk's current state. This field may change without direct action from you, as a result of operations performed to the Disk or the Linode containing the Disk.
	 * @example
	 * ready
 	*/
	readonly status?:DiskStatus

	/**
 	 * The size of the Disk in MB.
	 *
	 * @filterable
	 * @example
	 * 48640
 	*/
	readonly size?:number

	/**
 	 * The Disk filesystem can be one of:
	 *   * raw - No filesystem, just a raw binary stream.
	 *   * swap - Linux swap area.
	 *   * ext3 - The ext3 journaling filesystem for Linux.
	 *   * ext4 - The ext4 journaling filesystem for Linux.
	 *   * initrd - initrd (uncompressed initrd, ext2, max 32 MB).
	 * @example
	 * ext4
 	*/
	filesystem?:DiskFilesystem

	/**
 	 * When this Linode was created.
	 * @example
	 * 2018-01-01T00:01:01
 	*/
	readonly created?:string

	/**
 	 * When this Linode was last updated.
	 * @example
	 * 2018-01-01T00:01:01
 	*/
	readonly updated?:string
}
/**
 * Disk object request.
 */
export interface DiskRequest {

	/**
 	 *
	 * @filterable
	 * @example
	 * 48640
 	*/
	size:number

	/**
 	 * [1 .. 48] characters.
	 *
	 * The Disk's label is for display purposes only.
	 *
	 * @filterable
	 * @example
	 * Debian 9 Disk
 	*/
	label:string

	/**
 	 * The Disk filesystem can be one of:
	 *   * raw - No filesystem, just a raw binary stream.
	 *   * swap - Linux swap area.
	 *   * ext3 - The ext3 journaling filesystem for Linux.
	 *   * ext4 - The ext4 journaling filesystem for Linux.
	 *   * initrd - initrd (uncompressed initrd, ext2, max 32 MB).
	 * @example
	 * ext4
 	*/
	filesystem?:DiskRequestFilesystem

	/**
 	 * If true, this Disk is read-only.
 	*/
	read_only?:boolean

	/**
 	 * An Image ID to deploy the Disk from. Official Linode Images start with `linode/ `, while your Images start with `private/`.
	 * See [/images](#operation/getImages) for more information on the Images available for you to use.
	 * @example
	 * linode/debian9
 	*/
	image?:string

	/**
 	 * A list of public SSH keys that will be automatically appended to the root user's `~/.ssh/authorized_keys` file.
	 * @example
	 * ssh-rsa AAAA_valid_public_ssh_key_123456785== user@their-computer
 	*/
	authorized_keys?:string[]

	/**
 	 * A list of usernames that will have their SSH keys, if any, automatically appended to the root user's `~/.ssh/authorized_keys` file.
	 * @example
	 * myUser,secondaryUser
 	*/
	authorized_users?:string[]

	/**
 	 * [6 .. 128] characters.
	 *
	 * This will set the root user's password on the newly-created Linode.
	 * The root password must conform to the following constraints:
	 *   * May only use alphanumerics, punctuation, spaces, and tabs.
	 *   * Must contain at least two of the following characters classes:
	 *     * Upper-case letters
	 *     * Lower-case letters
	 *     * Digits
	 *     * Punctuation
	 * @example
	 * aComplexP@ssword
 	*/
	root_pass?:string

	/**
 	 * A StackScript ID that will cause the referenced StackScript to be run during
	 * deployment of this Linode. A compatible `image` is required to use a
	 * StackScript. To get a list of available StackScript and their permitted Images
	 * see [/stackscripts](#operation/getStackScripts).
	 * This field cannot be used when deploying from a Backup or a private Image.
	 * @example
	 * 10079
 	*/
	stackscript_id?:number

	/**
 	 * This field is required only if the StackScript being deployed requires input
	 * data from the User for successful completion. See
	 * <a target="_top" href="https://www.linode.com/docs/platform/stackscripts/#variables-and-udfs">Variables and UDFs</a>
	 * for more details. This field is required to be valid JSON.
	 * @example
	 * [object Object]
 	*/
	stackscript_data?:any
}
/**
 * A domain zonefile in our DNS system.  You must own the domain name and tell your registrar to use Linode's nameservers in order for a domain in our system to be treated as authoritative.

 */
export interface Domain {

	/**
 	 * This Domain's unique ID
	 * @example
	 * 1234
 	*/
	readonly id:number

	/**
 	 * If this Domain represents the authoritative source of information for the domain it describes, or if it is a read-only copy of a master (also called a slave).
	 * @example
	 * master
 	*/
	type:DomainType

	/**
 	 * The domain this Domain represents. These must be unique in our system; you cannot have two Domains representing the same domain.
	 *
	 * @filterable
	 * @example
	 * example.org
 	*/
	domain:string

	/**
 	 * @deprecated
	 * [1 .. 50] characters.
	 *
	 * The group this Domain belongs to.  This is for display purposes only.
	 *
	 * @filterable
 	*/
	group?:string

	/**
 	 * Used to control whether this Domain is currently being rendered.
	 * @example
	 * active
 	*/
	status?:DomainStatus

	/**
 	 * [1 .. 255] characters.
	 *
	 * A description for this Domain. This is for display purposes only.
 	*/
	description?:string

	/**
 	 * Start of Authority email address. This is required for master Domains.
	 * @example
	 * admin@example.org
 	*/
	soa_email?:string

	/**
 	 * The interval, in seconds, at which a failed refresh should be retried. Valid values are 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200 - any other value will be rounded to the nearest valid value.
	 * @example
	 * 300
 	*/
	retry_sec?:number

	/**
 	 * The IP addresses representing the master DNS for this Domain.
	 * @example
	 *
 	*/
	master_ips?:string[]

	/**
 	 * The list of IPs that may perform a zone transfer for this Domain. This is potentially dangerous, and should be set to an empty list unless you intend to use it.
	 * @example
	 *
 	*/
	axfr_ips?:string[]

	/**
 	 * The amount of time in seconds that may pass before this Domain is no longer authoritative. Valid values are 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200 - any other value will be rounded to the nearest valid value.
	 * @example
	 * 300
 	*/
	expire_sec?:number

	/**
 	 * The amount of time in seconds before this Domain should be refreshed. Valid values are 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200 - any other value will be rounded to the nearest valid value.
	 * @example
	 * 300
 	*/
	refresh_sec?:number

	/**
 	 * "Time to Live" - the amount of time in seconds that this Domain's records may be cached by resolvers or other domain servers. Valid values are 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200 - any other value will be rounded to the nearest valid value.
	 * @example
	 * 300
 	*/
	ttl_sec?:number

	/**
 	 * An array of tags applied to this object.  Tags are for organizational purposes only.
	 *
	 * @filterable
	 * @example
	 * example tag,another example
 	*/
	tags?:string[]
}
/**
 * A single record on a Domain.

 */
export interface DomainRecord {

	/**
 	 * This Record's unique ID.
	 * @example
	 * 123456
 	*/
	readonly id?:number

	/**
 	 * The type of Record this is in the DNS system. For example, A records associate a domain name with an IPv4 address, and AAAA records associate a domain name with an IPv6 address.
	 * @example
	 * A
 	*/
	type?:DomainRecordType

	/**
 	 * [1 .. 100] characters.
	 *
	 * The name of this Record. This field's actual usage depends on the type of record this represents. For A and AAAA records, this is the subdomain being associated with an IP address.
	 * @example
	 * test
 	*/
	name?:string

	/**
 	 * The target for this Record. This field's actual usage depends on the type of record this represents. For A and AAAA records, this is the address the named Domain should resolve to.
	 * @example
	 * 12.34.56.78
 	*/
	target?:string

	/**
 	 * Values [0 .. 255].
	 *
	 * The priority of the target host. Lower values are preferred.
	 * @example
	 * 50
 	*/
	priority?:number

	/**
 	 * The relative weight of this Record. Higher values are preferred.
	 * @example
	 * 50
 	*/
	weight?:number

	/**
 	 * The port this Record points to.
	 * @example
	 * 80
 	*/
	port?:number

	/**
 	 * The service this Record identified. Only valid for SRV records.
 	*/
	service?:string

	/**
 	 * The protocol this Record's service communicates with. Only valid for SRV records.
 	*/
	protocol?:string

	/**
 	 * "Time to Live" - the amount of time in seconds that this Domain's records may be cached by resolvers or other domain servers. Valid values are 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200 - any other value will be rounded to the nearest valid value.
	 * @example
	 * 604800
 	*/
	ttl_sec?:number

	/**
 	 * The tag portion of a CAA record. It is invalid to set this on other record types.
 	*/
	tag?:string
}
/**
 * An object for describing a single error that occurred during the processing of a request.

 */
export interface ErrorObject {

	/**
 	 * What happened to cause this error. In most cases, this can be fixed immediately by changing the data you sent in the request, but in some cases you will be instructed to [open a Support Ticket](#operation/createTicket) or perform some other action before you can complete the request successfully.
	 * @example
	 * fieldname must be a valid value
 	*/
	reason?:string

	/**
 	 * The field in the request that caused this error. This may be a path, separated by periods in the case of nested fields. In some cases this may come back as "null" if the error is not specific to any single element of the request.
	 * @example
	 * fieldname
 	*/
	field?:string
}
/**
 * A collection of Event objects. An Event is an action taken against an entity related to your Account. For example, booting a Linode would create an Event.
The Events returned depends on your grants.

 */
export interface Event {

	/**
 	 * The unique ID of this Event.
	 * @example
	 * 123
 	*/
	readonly id?:number

	/**
 	 * The action that caused this Event. New actions may be added in the future.
	 * @example
	 * ticket_create
 	*/
	readonly action?:EventAction

	/**
 	 * When this Event was created.
	 * @example
	 * 2018-01-01T00:01:01
 	*/
	readonly created?:string

	/**
 	 * Detailed information about the Event's entity, including ID, type, label, and URL used to access it.
 	*/
	readonly entity?:{ id: number, label: string, type: string, url: string }

	/**
 	 * A percentage estimating the amount of time remaining for an Event.
	 * Returns `null` for notification events.
 	*/
	readonly percent_complete?:number

	/**
 	 * The rate of completion of the Event. Only some Events will return rate; for example, migration and resize Events.
 	*/
	readonly rate?:string

	/**
 	 * If this Event has been read.
	 * @example
	 * true
 	*/
	readonly read?:boolean

	/**
 	 * If this Event has been seen.
	 * @example
	 * true
 	*/
	readonly seen?:boolean

	/**
 	 * The current status of this Event.
 	*/
	readonly status?:EventStatus

	/**
 	 * The estimated time remaining until the completion of this Event. This value is only returned for some in-progress migration events. For all other in-progress events, the `percent_complete` attribute will indicate about how much more work is to be done.
 	*/
	readonly time_remaining?:string

	/**
 	 * The username of the User who caused the Event.
	 * @example
	 * exampleUser
 	*/
	readonly username?:string
}
/**
 * Represents the level of access a restricted User has to a specific resource on the Account.

 */
export interface Grant {

	/**
 	 * The ID of the entity this grant applies to.
	 * @example
	 * 123
 	*/
	id?:number

	/**
 	 * The level of access this User has to this entity.  If null, this User has no access.
	 * @example
	 * read_only
 	*/
	permissions?:GrantPermissions

	/**
 	 * The current label of the entity this grant applies to, for display purposes.
	 * @example
	 * example-entity
 	*/
	readonly label?:string
}
/**
 * A structure representing all grants a restricted User has on the Account. Not available for unrestricted users, as they have access to everything without grants. If retrieved from the `/profile/grants` endpoint, entities to which a User has no access will be omitted.

 */
export interface GrantsResponse {

	/**
 	 * A structure containing the Account-level grants a User has.
 	*/
	global?:{ add_linodes: boolean, add_longview: boolean, longview_subscription: boolean, account_access: string, cancel_account: boolean, add_domains: boolean, add_stackscripts: boolean, add_nodebalancers: boolean, add_images: boolean, add_volumes: boolean }

	/**
 	 * The grants this User has pertaining to Linodes on this Account. There will be one entry per Linode on the Account.
 	*/
	linode?:Grant[]

	/**
 	 * The grants this User has pertaining to Domains on this Account. There will be one entry per Domain on the Account.
 	*/
	domain?:Grant[]

	/**
 	 * The grants this User has pertaining to NodeBalancers on this Account. There will be one entry per NodeBalancer on the Account.
 	*/
	nodebalancer?:Grant[]

	/**
 	 * The grants this User has pertaining to Images on this Account. There will be one entry per Image on the Account.
 	*/
	image?:Grant[]

	/**
 	 * The grants this User has pertaining to Longview Clients on this Account. There will be one entry per Longview Client on the Account.
 	*/
	longview?:Grant[]

	/**
 	 * The grants this User has pertaining to StackScripts on this Account.  There will be one entry per StackScript on the Account.
 	*/
	stackscript?:Grant[]

	/**
 	 * The grants this User has pertaining to Volumes on this Account. There will be one entry per Volume on the Account.
 	*/
	volume?:Grant[]
}
/**
 * Private Image object
 */
export interface ImagePrivate {

	/**
 	 * The unique ID of this Image.
	 * @example
	 * private/67848373
 	*/
	readonly id?:string

	/**
 	 * A short description of the Image. Labels cannot contain special characters.
	 *
	 * @filterable
	 * @example
	 * My gold-master image
 	*/
	label?:string

	/**
 	 * When this Image was created.
	 * @example
	 * 2018-01-01T00:01:01
 	*/
	readonly created?:string

	/**
 	 * The name of the User who created this Image.
	 * @example
	 * somename
 	*/
	readonly created_by?:string

	/**
 	 * Whether or not this Image is deprecated. Will only be True for deprecated public Images.
	 *
	 * @filterable
 	*/
	readonly deprecated?:boolean

	/**
 	 * A detailed description of this Image.
	 * @example
	 * The detailed description of my Image.
 	*/
	description?:string

	/**
 	 * True if the Image is public.
	 *
	 * @filterable
 	*/
	readonly is_public?:boolean

	/**
 	 * The minimum size this Image needs to deploy. Size is in MB.
	 *
	 * @filterable
	 * @example
	 * 2500
 	*/
	readonly size?:number

	/**
 	 * How the Image was created. "Manual" Images can be created at any time. "Automatic" images are created automatically from a deleted Linode.
	 * @example
	 * manual
 	*/
	readonly type?:ImagePrivateType

	/**
 	 * Only Images created automatically (from a deleted Linode; type=automatic) will expire.
	 * @example
	 * 2018-08-01T00:01:01
 	*/
	readonly expiry?:string

	/**
 	 * The upstream distribution vendor. `None` for private Images.
	 *
	 * @filterable
 	*/
	readonly vendor?:string
}
/**
 * Public Image object
 */
export interface ImagePublic {

	/**
 	 * The unique ID of this Image.
	 * @example
	 * linode/ubuntu17.10
 	*/
	readonly id?:string

	/**
 	 * A short description of the Image.
	 *
	 * @filterable
	 * @example
	 * Ubuntu 17.10
 	*/
	label?:string

	/**
 	 * When this Image was created.
	 * @example
	 * 2018-01-01T00:01:01
 	*/
	readonly created?:string

	/**
 	 * The name of the User who created this Image, or "linode" for official Images.
	 * @example
	 * linode
 	*/
	readonly created_by?:string

	/**
 	 * Whether or not this Image is deprecated. Will only be true for deprecated public Images.
	 *
	 * @filterable
 	*/
	readonly deprecated?:boolean

	/**
 	 * A detailed description of this Image.
 	*/
	description?:string

	/**
 	 * True if the Image is public.
	 *
	 * @filterable
	 * @example
	 * true
 	*/
	readonly is_public?:boolean

	/**
 	 * The minimum size this Image needs to deploy. Size is in MB.
	 *
	 * @filterable
	 * @example
	 * 2500
 	*/
	readonly size?:number

	/**
 	 * How the Image was created. Manual Images can be created at any time. "Automatic" Images are created automatically from a deleted Linode.
	 * @example
	 * manual
 	*/
	readonly type?:ImagePublicType

	/**
 	 * Only Images created automatically (from a deleted Linode; type=automatic) will expire.
 	*/
	readonly expiry?:string

	/**
 	 * The upstream distribution vendor. `None` for private Images.
	 *
	 * @filterable
	 * @example
	 * Ubuntu
 	*/
	readonly vendor?:string
}
/**
 * Account Invoice object
 */
export interface Invoice {

	/**
 	 * The Invoice's unique ID.
	 * @example
	 * 123
 	*/
	readonly id?:number

	/**
 	 * When this Invoice was generated.
	 * @example
	 * 2018-01-01T00:01:01
 	*/
	readonly date?:string

	/**
 	 * The Invoice's display label.
	 * @example
	 * Invoice
 	*/
	readonly label?:string

	/**
 	 * The amount of the Invoice in US Dollars.
	 * @example
	 * 120
 	*/
	readonly total?:number
}
/**
 * An InvoiceItem object.
 */
export interface InvoiceItem {

	/**
 	 * The price, in US dollars, of unit price multiplied by quantity.
	 * @example
	 * 20
 	*/
	readonly amount?:number

	/**
 	 * The date the Invoice Item started, based on month.
	 * @example
	 * 2018-01-01T00:01:01
 	*/
	readonly from?:string

	/**
 	 * The Invoice Item's display label.
	 * @example
	 * Linode 123
 	*/
	readonly label?:string

	/**
 	 * The quantity of this Item for the specified Invoice.
	 * @example
	 * 1
 	*/
	readonly quantity?:number

	/**
 	 * The date the Invoice Item ended, based on month.
	 * @example
	 * 2018-01-31T11:59:59
 	*/
	readonly to?:string

	/**
 	 * The type of service, ether `prepay` or `misc`.
 	*/
	readonly type?:InvoiceItemType

	/**
 	 * The monthly service fee in US Dollars for this Item.
	 * @example
	 * 10
 	*/
	readonly unitprice?:number
}
/**
 * An IP address that exists in Linode's system, either IPv4 or IPv6.

 */
export interface IPAddress {

	/**
 	 * The IP address.
	 * @example
	 * 97.107.143.141
 	*/
	readonly address?:string

	/**
 	 * The default gateway for this address.
	 * @example
	 * 97.107.143.1
 	*/
	readonly gateway?:string

	/**
 	 * The mask that separates host bits from network bits for this address.
	 * @example
	 * 255.255.255.0
 	*/
	readonly subnet_mask?:string

	/**
 	 * The number of bits set in the subnet mask.
	 * @example
	 * 24
 	*/
	readonly prefix?:number

	/**
 	 * The type of address this is.
	 * @example
	 * ipv4
 	*/
	readonly type?:IPAddressType

	/**
 	 * Whether this is a public or private IP address.
	 * @example
	 * true
 	*/
	readonly public?:boolean

	/**
 	 * The reverse DNS assigned to this address. For public IPv4 addresses, this will be set to a default value provided by Linode if not explicitly set.
	 * @example
	 * test.example.org
 	*/
	rdns?:string

	/**
 	 * The ID of the Linode this address currently belongs to. For IPv4 addresses, this is by default the Linode that this address was assigned to on creation, and these addresses my be moved using the [/networking/ipv4/assign](#operation/assignIPs) endpoint. For SLAAC and link-local addresses, this value may not be changed.
	 * @example
	 * 123
 	*/
	readonly linode_id?:number

	/**
 	 * The Region this IP address resides in.
	 *
	 * @filterable
	 * @example
	 * us-east
 	*/
	readonly region?:string
}
/**
 * A private IPv4 address that exists in Linode's system.

 */
export interface IPAddressPrivate {

	/**
 	 * The private IPv4 address.
	 * @example
	 * 192.168.133.234
 	*/
	readonly address?:string

	/**
 	 * The default gateway for this address.
 	*/
	readonly gateway?:string

	/**
 	 * The mask that separates host bits from network bits for this address.
	 * @example
	 * 255.255.128.0
 	*/
	readonly subnet_mask?:string

	/**
 	 * The number of bits set in the subnet mask.
	 * @example
	 * 17
 	*/
	readonly prefix?:number

	/**
 	 * The type of address this is.
	 * @example
	 * ipv4
 	*/
	readonly type?:string

	/**
 	 * Whether this is a public or private IP address.
 	*/
	readonly public?:boolean

	/**
 	 * The reverse DNS assigned to this address.
 	*/
	rdns?:string

	/**
 	 * The ID of the Linode this address currently belongs to.
	 * @example
	 * 123
 	*/
	readonly linode_id?:number

	/**
 	 * The Region this address resides in.
	 *
	 * @filterable
	 * @example
	 * us-east
 	*/
	readonly region?:string
}
/**
 * A link-local IPv6 address that exists in Linode's system,.

 */
export interface IPAddressV6LinkLocal {

	/**
 	 * The IPv6 link-local address.
	 * @example
	 * fe80::f03c:91ff:fe24:3a2f
 	*/
	readonly address?:string

	/**
 	 * The default gateway for this address.
	 * @example
	 * fe80::1
 	*/
	readonly gateway?:string

	/**
 	 * The subnet mask.
	 * @example
	 * ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff
 	*/
	readonly subnet_mask?:string

	/**
 	 * The network prefix.
	 * @example
	 * 64
 	*/
	readonly prefix?:number

	/**
 	 * The type of address this is.
	 * @example
	 * ipv6
 	*/
	readonly type?:string

	/**
 	 * Whether this is a public or private IP address.
 	*/
	readonly public?:boolean

	/**
 	 * The reverse DNS assigned to this address.
 	*/
	rdns?:string

	/**
 	 * The ID of the Linode this address currently belongs to.
	 * @example
	 * 123
 	*/
	readonly linode_id?:number

	/**
 	 * The Region this address resides in.
	 *
	 * @filterable
	 * @example
	 * us-east
 	*/
	readonly region?:string
}
/**
 * A SLAAC IPv6 address that exists in Linode's system.

 */
export interface IPAddressV6Slaac {

	/**
 	 * The address.
	 * @example
	 * 2600:3c03::f03c:91ff:fe24:3a2f
 	*/
	readonly address?:string

	/**
 	 * The default gateway for this address.
	 * @example
	 * fe80::1
 	*/
	readonly gateway?:string

	/**
 	 * The subnet mask.
	 * @example
	 * ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff
 	*/
	readonly subnet_mask?:string

	/**
 	 * The network prefix.
	 * @example
	 * 64
 	*/
	readonly prefix?:number

	/**
 	 * The type of address this is.
	 * @example
	 * ipv6
 	*/
	readonly type?:string

	/**
 	 * Whether this is a public or private IP address.
	 * @example
	 * true
 	*/
	readonly public?:boolean

	/**
 	 * The reverse DNS assigned to this address.
 	*/
	rdns?:string

	/**
 	 * The ID of the Linode this address currently belongs to.
	 * @example
	 * 123
 	*/
	readonly linode_id?:number

	/**
 	 * The Region this address resides in.
	 *
	 * @filterable
	 * @example
	 * us-east
 	*/
	readonly region?:string
}
/**
 * An object representing an IPv6 pool.

 */
export interface IPv6Pool {

	/**
 	 * The IPv6 pool
	 * @example
	 * 2600:3c01::02:5000::
 	*/
	readonly range?:string

	/**
 	 * The prefix length of the address, denoting which addresses can be assigned from this pool.
	 * @example
	 * 124
 	*/
	prefix?:number

	/**
 	 * A pool of IPv6 addresses that are routed to all of your Linodes in a single Region. Any Linode you own may bring up any address in this pool at any time, with no external configuration required.
	 * @example
	 * us-east
 	*/
	readonly region?:string
}
/**
 * An object representing an IPv6 range.

 */
export interface IPv6Range {

	/**
 	 * The IPv6 range.
	 * @example
	 * 2600:3c01::02:5000::
 	*/
	readonly range?:string

	/**
 	 * A range of IPv6 addresses routed to a single Linode in the given Region. Your Linode is responsible for routing individual addresses in the range, or handling traffic for all of the addresses in the range.
	 * @example
	 * us-east
 	*/
	readonly region?:string
}
/**
 * Linux kernel object
 */
export interface Kernel {

	/**
 	 * The unique ID of this Kernel.
	 * @example
	 * linode/latest-64bit
 	*/
	readonly id?:string

	/**
 	 * The friendly name of this Kernel.
	 *
	 * @filterable
	 * @example
	 * Latest 64 bit (4.15.7-x86_64-linode102)
 	*/
	readonly label?:string

	/**
 	 * Linux Kernel version.
	 *
	 * @filterable
	 * @example
	 * 4.15.7
 	*/
	readonly version?:string

	/**
 	 * If this Kernel is suitable for KVM Linodes.
	 *
	 * @filterable
	 * @example
	 * true
 	*/
	readonly kvm?:boolean

	/**
 	 * If this Kernel is suitable for Xen Linodes.
	 *
	 * @filterable
 	*/
	readonly xen?:boolean

	/**
 	 * The architecture of this Kernel.
	 *
	 * @filterable
	 * @example
	 * x86_64
 	*/
	readonly architecture?:KernelArchitecture

	/**
 	 * If this Kernel is suitable for paravirtualized operations.
	 *
	 * @filterable
 	*/
	readonly pvops?:boolean
}

export interface Linode {

	/**
 	 * [3 .. 32] characters.
	 *
	 * The Linode's label is for display purposes only. If no label is provided for a Linode, a default will be assigned.
	 * Linode labels have the following constraints:
	 *   * Must start with an alpha character.
	 *   * May only consist of alphanumeric characters, dashes (`-`), underscores (`_`) or periods (`.`).
	 *   * Cannot have two dashes (`--`), underscores (`__`) or periods (`..`) in a row.
	 *
	 * @filterable
	 * @example
	 * linode123
 	*/
	label?:string

	/**
 	 * @deprecated
	 * A deprecated property denoting a group label for this Linode.
	 *
	 * @filterable
	 * @example
	 * Linode-Group
 	*/
	group?:string

	/**
 	 * This is the [Linode Type](#operation/getLinodeTypes) that this Linode was deployed with.
	 * To change a Linode's Type, use [POST /linode/instances/{linodeId}/resize](#operation/resizeLinodeInstance).
	 * @example
	 * g6-standard-2
 	*/
	readonly type?:string

	/**
 	 * This is the location where the Linode was deployed. This cannot be changed without [opening a support ticket](#operation/createTicket).
	 *
	 * @filterable
	 * @example
	 * us-east
 	*/
	readonly region?:string

	/**
 	 * An Image ID to deploy the Disk from. Official Linode Images start with `linode/ `, while your Images start with `private/`.
	 * See [/images](#operation/getImages) for more information on the Images available for you to use.
	 *
	 * @filterable
	 * @example
	 * linode/debian9
 	*/
	readonly image?:string

	/**
 	 * An array of tags applied to this object.  Tags are for organizational purposes only.
	 *
	 * @filterable
	 * @example
	 * example tag,another example
 	*/
	tags?:string[]

	/**
 	 * This Linode's ID which must be provided for all operations impacting this Linode.
	 * @example
	 * 123
 	*/
	readonly id?:number

	/**
 	 * A brief description of this Linode's current state. This field may change without direct action from you. For instance, the status will change to "running"
	 *  when the boot process completes.
	 * @example
	 * running
 	*/
	readonly status?:LinodeStatus

	/**
 	 * The virtualization software powering this Linode.
	 * @example
	 * kvm
 	*/
	readonly hypervisor?:LinodeHypervisor

	/**
 	 * When this Linode was created.
	 * @example
	 * 2018-01-01T00:01:01
 	*/
	readonly created?:string

	/**
 	 * When this Linode was last updated.
	 * @example
	 * 2018-01-01T00:01:01
 	*/
	readonly updated?:string

	/**
 	 * This Linode's IPv4 Addresses. Each Linode is assigned a single public IPv4 address
	 * upon creation, and may get a single private IPv4 address if needed. You may need to
	 * [open a support ticket](#operation/createTicket)
	 * to get additional IPv4 addresses.
	 * IPv4 addresses may be reassigned between your Linodes, or shared with other Linodes.
	 * See the [/networking](#tag/networking) endpoints for details.
	 * @example
	 * 123.45.67.890
 	*/
	readonly ipv4?:string[]

	/**
 	 * This Linode's IPv6 SLAAC addresses. This address is specific to a Linode, and may not be shared.
	 * @example
	 * c001:d00d::1234
 	*/
	readonly ipv6?:string

	/**
 	 * Information about the resources available to this Linode.
 	*/
	readonly specs?:{ disk: number, memory: number, vcpus: number, transfer: number }

	/**
 	 *
 	*/
	alerts?:{ cpu: number, network_in: number, network_out: number, transfer_quota: number, io: number }

	/**
 	 * Information about this Linode's backups status. For information about available backups, see [/linode/instances/{linodeId}/backups](#operation/getBackups).
 	*/
	backups?:{ enabled: boolean, schedule: any }

	/**
 	 * The watchdog, named Lassie, is a Shutdown Watchdog that monitors your Linode and will reboot it if it powers off unexpectedly. It works by issuing a boot job when your Linode powers off without a shutdown job being responsible.
	 * To prevent a loop, Lassie will give up if there have been more than 5 boot jobs issued within 15 minutes.
	 * @example
	 * true
 	*/
	watchdog_enabled?:boolean
}
/**
 * Common properties for Linode Request and Response objects.
 */
export interface LinodeBase {

	/**
 	 * [3 .. 32] characters.
	 *
	 * The Linode's label is for display purposes only. If no label is provided for a Linode, a default will be assigned.
	 * Linode labels have the following constraints:
	 *   * Must start with an alpha character.
	 *   * May only consist of alphanumeric characters, dashes (`-`), underscores (`_`) or periods (`.`).
	 *   * Cannot have two dashes (`--`), underscores (`__`) or periods (`..`) in a row.
	 * @example
	 * linode123
 	*/
	label?:string

	/**
 	 * @deprecated
	 * A deprecated property denoting a group label for this Linode.
	 *
	 * @filterable
	 * @example
	 * Linode-Group
 	*/
	group?:string

	/**
 	 * The ID representing the Linode Type.
	 * @example
	 * g6-standard-2
 	*/
	readonly type?:string

	/**
 	 * The unique ID of this Region.
	 * @example
	 * us-east
 	*/
	readonly region?:string
}

export interface LinodeConfig {

	/**
 	 * The ID of this Config.
	 * @example
	 * 23456
 	*/
	readonly id?:number

	/**
 	 * A Kernel ID to boot a Linode with. Defaults to "linode/latest-64bit".
	 * @example
	 * linode/latest-64bit
 	*/
	kernel?:string

	/**
 	 * Optional field for arbitrary User comments on this Config.
	 * @example
	 * This is my main Config
 	*/
	comments?:string

	/**
 	 * Defaults to the total RAM of the Linode.
	 * @example
	 * 2048
 	*/
	memory_limit?:number

	/**
 	 * Defines the state of your Linode after booting. Defaults to `default`.
	 * @example
	 * default
 	*/
	run_level?:LinodeConfigRunLevel

	/**
 	 * Controls the virtualization mode. Defaults to `paravirt`.
	 * * `paravirt` is suitable for most cases. Linodes running in paravirt mode
	 *   share some qualities with the host, ultimately making it run faster since
	 *   there is less transition between it and the host.
	 * * `full_virt` affords more customization, but is slower because 100% of the VM
	 *   is virtualized.
	 * @example
	 * paravirt
 	*/
	virt_mode?:LinodeConfigVirtMode

	/**
 	 * Helpers enabled when booting to this Linode Config.
 	*/
	helpers?:{ updatedb_disabled: boolean, distro: boolean, modules_dep: boolean, network: boolean, devtmpfs_automount: boolean }

	/**
 	 * [1 .. 48] characters.
	 *
	 * The Config's label is for display purposes only.
	 *
	 * @filterable
	 * @example
	 * My Config
 	*/
	label:string

	/**
 	 *
 	*/
	devices:Devices

	/**
 	 * The root device to boot. The corresponding disk must be attached.
	 * @example
	 * /dev/sda
 	*/
	root_device?:string
}
/**
 * Common properties for creating and rebuilding Linodes.
 */
export interface LinodeRequest {

	/**
 	 * An Image ID to deploy the Disk from. Official Linode Images start with `linode/ `, while your Images start with `private/`.
	 * See [/images](#operation/getImages) for more information on the Images available for you to use.
	 * @example
	 * linode/debian9
 	*/
	image?:string

	/**
 	 * [6 .. 128] characters.
	 *
	 * This will set the root user's password on the newly-created Linode.
	 * The root password must conform to the following constraints:
	 *   * May only use alphanumerics, punctuation, spaces, and tabs.
	 *   * Must contain at least two of the following characters classes:
	 *     * Upper-case letters
	 *     * Lower-case letters
	 *     * Digits
	 *     * Punctuation
	 * @example
	 * aComplexP@ssword
 	*/
	root_pass?:string

	/**
 	 * A list of public SSH keys that will be automatically appended to the root user's `~/.ssh/authorized_keys` file.
	 * @example
	 * ssh-rsa AAAA_valid_public_ssh_key_123456785== user@their-computer
 	*/
	authorized_keys?:string[]

	/**
 	 * A list of usernames that will have their SSH keys, if any, automatically appended to the root user's `~/.ssh/authorized_keys` file.
	 * @example
	 * myUser,secondaryUser
 	*/
	authorized_users?:string[]

	/**
 	 * A StackScript ID that will cause the referenced StackScript to be run during
	 * deployment of this Linode. A compatible `image` is required to use a
	 * StackScript. To get a list of available StackScript and their permitted Images
	 * see [/stackscripts](#operation/getStackScripts).
	 * This field cannot be used when deploying from a Backup or a private Image.
	 * @example
	 * 10079
 	*/
	stackscript_id?:number

	/**
 	 * This field is required only if the StackScript being deployed requires input
	 * data from the User for successful completion. See
	 * <a target="_top" href="https://www.linode.com/docs/platform/stackscripts/#variables-and-udfs">Variables and UDFs</a>
	 * for more details. This field is required to be valid JSON.
	 * @example
	 * [object Object]
 	*/
	stackscript_data?:any

	/**
 	 * This field defaults to `true` if the Linode is created with an Image or from a Backup.
	 * If it is deployed from an Image or a Backup and you wish it to remain `offline` after deployment, set this to `false`.
 	*/
	booted?:boolean
}
/**
 * CPU, IO, IPv4, and IPv6 statistics. Graph data, if available, is in "[timestamp, reading]" array format. Timestamp is a UNIX timestamp in EST.

 */
export interface LinodeStats {

	/**
 	 * Percentage of CPU used.
 	*/
	cpu?:number[][]

	/**
 	 * Input/Output statistics.
 	*/
	io?:{ io: any[], swap: any[] }

	/**
 	 * IPv4 statistics.
 	*/
	netv4?:{ in: any[], out: any[], private_in: any[], private_out: any[] }

	/**
 	 * IPv6 statistics.
 	*/
	netv6?:{ in: any[], out: any[], private_in: any[], private_out: any[] }

	/**
 	 * The title for this data set.
	 * @example
	 * linode.com - my-linode (linode123456) - day (5 min avg)
 	*/
	title?:string
}
/**
 * Returns collection of Linode types, including pricing and specifications for each type. These are used when [creating](#operation/createLinodeInstance) or [resizing](#operation/resizeLinodeInstance) Linodes.

 */
export interface LinodeType {

	/**
 	 * The ID representing the Linode Type.
	 * @example
	 * g6-standard-2
 	*/
	readonly id?:string

	/**
 	 * The Linode Type's label is for display purposes only.
	 *
	 * @filterable
	 * @example
	 * Linode 4GB
 	*/
	readonly label?:string

	/**
 	 * The Disk size, in MB, of the Linode Type.
	 *
	 * @filterable
	 * @example
	 * 81920
 	*/
	readonly disk?:number

	/**
 	 * The class of the Linode Type. We currently offer four classes of Linodes:
	 *   * nanode - Our entry-level Linode Type.
	 *   * standard - Our flagship Linode Type.
	 *   * dedicated - Our Dedicated CPU Linode Type.
	 *   * highmem - A Linode Type featuring high memory availability.
	 *
	 * @filterable
	 * @example
	 * standard
 	*/
	readonly class?:LinodeTypeClass

	/**
 	 * Cost in US dollars, broken down into hourly and monthly charges.
 	*/
	readonly price?:{ hourly: number, monthly: number }

	/**
 	 * A list of optional add-on services for Linodes and their associated costs.
 	*/
	readonly addons?:{ backups: any }

	/**
 	 * The Mbits outbound bandwidth allocation.
	 *
	 * @filterable
	 * @example
	 * 1000
 	*/
	readonly network_out?:number

	/**
 	 * Amount of RAM included in this Linode Type.
	 *
	 * @filterable
	 * @example
	 * 4096
 	*/
	readonly memory?:number

	/**
 	 * The Linode Type that a [mutate](#operation/mutateLinodeInstance) will upgrade to for a Linode of this type.  If "null", a Linode of this type may not mutate.
 	*/
	readonly successor?:string

	/**
 	 * The monthly outbound transfer amount, in MB.
	 *
	 * @filterable
	 * @example
	 * 4000
 	*/
	readonly transfer?:number

	/**
 	 * The number of VCPU cores this Linode Type offers.
	 *
	 * @filterable
	 * @example
	 * 2
 	*/
	readonly vcpus?:number
}
/**
 * A LongviewClient is a single monitor set up to track statistics about one of your servers.

 */
export interface LongviewClient {

	/**
 	 * This Client's unique ID.
	 * @example
	 * 789
 	*/
	readonly id?:number

	/**
 	 * [3 .. 32] characters.
	 *
	 * This Client's unique label. This is for display purposes only.
	 *
	 * @filterable
	 * @example
	 * client789
 	*/
	label?:string

	/**
 	 * The API key for this Client, used when configuring the Longview Client application on your Linode.
	 * @example
	 * BD1B4B54-D752-A76D-5A9BD8A17F39DB61
 	*/
	readonly api_key?:string

	/**
 	 * The install code for this Client, used when configuring the Longview Client application on your Linode.
	 * @example
	 * BD1B5605-BF5E-D385-BA07AD518BE7F321
 	*/
	readonly install_code?:string

	/**
 	 * The apps this Client is monitoring on your Linode. This is configured when you install the Longview Client application, and is present here for information purposes only.
 	*/
	readonly apps?:{ apache: boolean, nginx: boolean, mysql: boolean }

	/**
 	 * When this Longview Client was created.
	 * @example
	 * 2018-01-01T00:01:01.000Z
 	*/
	readonly created?:string

	/**
 	 * When this Longview Client was last updated.
	 * @example
	 * 2018-01-01T00:01:01.000Z
 	*/
	readonly updated?:string
}
/**
 * A Longview Subscriptions represents a tier of Longview service you can subscribe to.

 */
export interface LongviewSubscription {

	/**
 	 * The unique ID of this Subscription tier.
	 * @example
	 * longview-10
 	*/
	readonly id?:string

	/**
 	 * Pricing information about this Subscription tier.
 	*/
	readonly price?:{ hourly: number, monthly: number }

	/**
 	 * A display name for this Subscription tier.
	 * @example
	 * Longivew Pro 10 pack
 	*/
	readonly label?:string

	/**
 	 * The number of Longview Clients that may be created with this Subscription tier.
	 * @example
	 * 10
 	*/
	readonly clients_included?:number
}
/**
 * Information about someone Linode's special forces may contact in case an issue is detected with a manager service.

 */
export interface ManagedContact {

	/**
 	 * This Contact's unique ID.
	 * @example
	 * 567
 	*/
	readonly id?:number

	/**
 	 * [2 .. 64] characters.
	 *
	 * The name of this Contact.
	 * @example
	 * John Doe
 	*/
	name?:string

	/**
 	 * The address to email this Contact to alert them of issues.
	 * @example
	 * john.doe@example.org
 	*/
	email?:string

	/**
 	 * Information about how to reach this Contact by phone.
 	*/
	phone?:{ primary: string, secondary: string }

	/**
 	 * @deprecated
	 * [2 .. 50] characters.
	 *
	 * A grouping for this Contact. This is for display purposes only.
	 *
	 * @filterable
	 * @example
	 * on-call
 	*/
	group?:string

	/**
 	 * When this Contact was last updated.
	 * @example
	 * 2018-01-01T00:01:01
 	*/
	readonly updated?:string
}
/**
 * A securely-stored Credential that allows Linode's special forces to access a Managed server to respond to Issues.

 */
export interface ManagedCredential {

	/**
 	 * This Credential's unique ID.
	 * @example
	 * 9991
 	*/
	readonly id?:number

	/**
 	 * [2 .. 75] characters.
	 *
	 * The unique label for this Credential. This is for display purposes only.
	 * @example
	 * prod-password-1
 	*/
	label?:string
}
/**
 * An Issue that was detected with a service Linode is managing.

 */
export interface ManagedIssue {

	/**
 	 * This Issue's unique ID.
	 * @example
	 * 823
 	*/
	readonly id?:number

	/**
 	 * When this Issue was created. Issues are created in response to issues detected with Managed Services, so this is also when the Issue was detected.
	 * @example
	 * 2018-01-01T00:01:01
 	*/
	readonly created?:string

	/**
 	 * An array of Managed Service IDs that were affected by this Issue.
 	*/
	readonly services?:number[]

	/**
 	 * The ticket this Managed Issue opened.
 	*/
	readonly entity?:{ id: number, type: string, label: string, url: string }
}
/**
 * Settings for a specific Linode related to Managed Services. There is one ManagedLinodeSettings object for each Linode on your Account.

 */
export interface ManagedLinodeSettings {

	/**
 	 * The ID of the Linode these Settings are for.
	 * @example
	 * 123
 	*/
	readonly id?:number

	/**
 	 * The label of the Linode these Settings are for.
	 * @example
	 * linode123
 	*/
	readonly label?:string

	/**
 	 * @deprecated
	 * The group of the Linode these Settings are for. This is for display purposes only.
	 * @example
	 * linodes
 	*/
	readonly group?:string

	/**
 	 * The SSH settings for this Linode.
 	*/
	ssh?:{ access: boolean, user: string, ip: string, port: number }
}
/**
 * A service that Linode is monitoring as part of your Managed services. If issues are detected with this service, a ManagedIssue will be opened and, optionally, Linode special forces will attempt to resolve the Issue.

 */
export interface ManagedService {

	/**
 	 * This Service's unique ID.
	 * @example
	 * 9944
 	*/
	readonly id?:number

	/**
 	 * The current status of this Service.
	 * @example
	 * ok
 	*/
	readonly status?:ManagedServiceStatus

	/**
 	 * How this Service is monitored.
	 * @example
	 * url
 	*/
	service_type?:ManagedServiceServiceType

	/**
 	 * [3 .. 64] characters.
	 *
	 * The label for this Service. This is for display purposes only.
	 * @example
	 * prod-1
 	*/
	label?:string

	/**
 	 * >= 3 characters.
	 *
	 * The URL at which this Service is monitored.
	 * @example
	 * https://example.org
 	*/
	address?:string

	/**
 	 * Values [1 .. 255].
	 *
	 * How long to wait, in seconds, for a response before considering the Service to be down.
	 * @example
	 * 30
 	*/
	timeout?:number

	/**
 	 * [0 .. 100] characters.
	 *
	 * What to expect to find in the response body for the Service to be considered up.
	 * @example
	 * it worked
 	*/
	body?:string

	/**
 	 * @deprecated
	 * [0 .. 50] characters.
	 *
	 * The group of ManagedContacts who should be notified or consulted with when an Issue is detected.
	 * @example
	 * on-call
 	*/
	consultation_group?:string

	/**
 	 * Any information relevant to the Service that Linode special forces should know when attempting to resolve Issues.
	 * @example
	 * The service name is my-cool-application
 	*/
	notes?:string

	/**
 	 * The Region in which this Service is located. This is required if address is a private IP, and may not be set otherwise.
 	*/
	region?:string

	/**
 	 * An array of ManagedCredential IDs that should be used when attempting to resolve issues with this Service.
 	*/
	credentials?:number[]

	/**
 	 * When this Managed Service was created.
	 * @example
	 * 2018-01-01T00:01:01
 	*/
	readonly created?:string

	/**
 	 * When this Managed Service was last updated.
	 * @example
	 * 2018-03-01T00:01:01
 	*/
	readonly updated?:string
}
/**
 * Linode's load balancing solution.  Can handle multiple ports, SSL termination, and any number of backends.  NodeBalancer ports are configured with NodeBalancer Configs, and each config is given one or more NodeBalancer Node that accepts traffic.  The traffic should be routed to the  NodeBalancer's ip address, the NodeBalancer will handle routing individual requests to backends.

 */
export interface NodeBalancer {

	/**
 	 * This NodeBalancer's unique ID.
	 * @example
	 * 12345
 	*/
	readonly id?:number

	/**
 	 * [3 .. 32] characters.
	 *
	 * This NodeBalancer's label. These must be unique on your Account.
	 *
	 * @filterable
	 * @example
	 * balancer12345
 	*/
	label?:string

	/**
 	 * The Region where this NodeBalancer is located. NodeBalancers only support backends in the same Region.
	 *
	 * @filterable
	 * @example
	 * us-east
 	*/
	readonly region?:string

	/**
 	 * This NodeBalancer's hostname, ending with _.nodebalancer.linode.com_
	 * @example
	 * nb-207-192-68-16.newark.nodebalancer.linode.com
 	*/
	readonly hostname?:string

	/**
 	 * This NodeBalancer's public IPv4 address.
	 * @example
	 * 12.34.56.78
 	*/
	readonly ipv4?:string

	/**
 	 * This NodeBalancer's public IPv6 address.
 	*/
	readonly ipv6?:string

	/**
 	 * When this NodeBalancer was created.
	 * @example
	 * 2018-01-01T00:01:01.000Z
 	*/
	readonly created?:string

	/**
 	 * When this NodeBalancer was last updated.
	 * @example
	 * 2018-03-01T00:01:01.000Z
 	*/
	readonly updated?:string

	/**
 	 * Values [0 .. 20].
	 *
	 * Throttle connections per second.  Set to 0 (zero) to disable throttling.
 	*/
	client_conn_throttle?:number

	/**
 	 * Information about the amount of transfer this NodeBalancer has had so far this month.
 	*/
	transfer?:{ total: number, out: number, in: number }

	/**
 	 * An array of Tags applied to this object.  Tags are for organizational purposes only.
	 *
	 * @filterable
	 * @example
	 * example tag,another example
 	*/
	tags?:string[]
}
/**
 * A NodeBalancer config represents the configuration of this NodeBalancer on a single port.  For example, a NodeBalancer Config on port 80 would typically represent how this NodeBalancer response to HTTP requests.

NodeBalancer configs have a list of backends, called "nodes," that they forward requests between based on their configuration.

 */
export interface NodeBalancerConfig {

	/**
 	 * This config's unique ID
	 * @example
	 * 4567
 	*/
	readonly id?:number

	/**
 	 * Values [1 .. 65535].
	 *
	 * The port this Config is for. These values must be unique across configs on a single NodeBalancer (you can't have two configs for port 80, for example).  While some ports imply some protocols, no enforcement is done and you may configure your NodeBalancer however is useful to you. For example, while port 443 is generally used for HTTPS, you do not need SSL configured to have a NodeBalancer listening on port 443.
	 * @example
	 * 80
 	*/
	port?:number

	/**
 	 * The protocol this port is configured to serve.
	 * * If this is set to `https` you must include an `ssl_cert` and an `ssl_key`.
	 * @example
	 * http
 	*/
	protocol?:NodeBalancerConfigProtocol

	/**
 	 * What algorithm this NodeBalancer should use for routing traffic to backends.
	 * @example
	 * roundrobin
 	*/
	algorithm?:NodeBalancerConfigAlgorithm

	/**
 	 * Controls how session stickiness is handled on this port.
	 * * If set to `none` connections will always be assigned a backend based on the algorithm configured.
	 * * If set to `table` sessions from the same remote address will be routed to the same
	 *   backend.
	 * * For HTTP or HTTPS clients, `http_cookie` allows sessions to be
	 *   routed to the same backend based on a cookie set by the NodeBalancer.
	 * @example
	 * http_cookie
 	*/
	stickiness?:NodeBalancerConfigStickiness

	/**
 	 * The type of check to perform against backends to ensure they are serving requests. This is used to determine if backends are up or down.
	 * * If `none` no check is performed.
	 * * `connection` requires only a connection to the backend to succeed.
	 * * `http` and `http_body` rely on the backend serving HTTP, and that
	 *   the response returned matches what is expected.
	 * @example
	 * http_body
 	*/
	check?:NodeBalancerConfigCheck

	/**
 	 * How often, in seconds, to check that backends are up and serving requests.
	 * @example
	 * 90
 	*/
	check_interval?:number

	/**
 	 * Values [1 .. 30].
	 *
	 * How long, in seconds, to wait for a check attempt before considering it failed.
	 * @example
	 * 10
 	*/
	check_timeout?:number

	/**
 	 * Values [1 .. 30].
	 *
	 * How many times to attempt a check before considering a backend to be down.
	 * @example
	 * 3
 	*/
	check_attempts?:number

	/**
 	 * The URL path to check on each backend. If the backend does not respond to this request it is considered to be down.
	 * @example
	 * /test
 	*/
	check_path?:string

	/**
 	 * This value must be present in the response body of the check in order for it to pass. If this value is not present in the response body of a check request, the backend is considered to be down.
	 * @example
	 * it works
 	*/
	check_body?:string

	/**
 	 * If true, any response from this backend with a `5xx` status code will be enough for it to be considered unhealthy and taken out of rotation.
	 * @example
	 * true
 	*/
	check_passive?:boolean

	/**
 	 * What ciphers to use for SSL connections served by this NodeBalancer.
	 * * `legacy` is considered insecure and should only be used if necessary.
	 * @example
	 * recommended
 	*/
	cipher_suite?:NodeBalancerConfigCipherSuite

	/**
 	 * The ID for the NodeBalancer this config belongs to.
	 * @example
	 * 12345
 	*/
	readonly nodebalancer_id?:number

	/**
 	 * The common name for the SSL certification this port is serving if this port is not configured to use SSL.
 	*/
	readonly ssl_commonname?:string

	/**
 	 * The fingerprint for the SSL certification this port is serving if this port is not configured to use SSL.
 	*/
	readonly ssl_fingerprint?:string

	/**
 	 * The certificate this port is serving. This is not returned. If set, this field will come back as "&lt;REDACTED&gt;".
	 * Please use the `ssl_commonname` and `ssl_fingerprint` to identify the certificate.
 	*/
	ssl_cert?:string

	/**
 	 * The private key corresponding to this port's certificate.  This is not returned. If set, this field will come back as "&lt;REDACTED&gt;".
	 * Please use the `ssl_commonname` and `ssl_fingerprint` to identify the certificate.
 	*/
	ssl_key?:string

	/**
 	 * A structure containing information about the health of the backends for this port.  This information is updated periodically as checks are performed against backends.
 	*/
	readonly nodes_status?:{ up: number, down: number }
}
/**
 * A NodeBalancerNode represents a single backend serving requests for a single port of a NodeBalancer.  Nodes are specific to NodeBalancer Configs, and serve traffic over their private IP.  If the same Linode is serving traffic for more than one port on the same NodeBalancer, one NodeBalancer Node is required for each config (port) it should serve requests on.  For example, if you have four backends, and each should response to both HTTP and HTTPS requests, you will need two NodeBalancerConfigs (port 80 and port 443) and four backends each - one for each of the Linodes serving requests for that port.

 */
export interface NodeBalancerNode {

	/**
 	 * This node's unique ID.
	 * @example
	 * 54321
 	*/
	readonly id?:number

	/**
 	 * The private IP Address where this backend can be reached. This _must_ be a private IP address.
	 * @example
	 * 192.168.210.120:80
 	*/
	address?:string

	/**
 	 * [3 .. 32] characters.
	 *
	 * The label for this node.  This is for display purposes only.
	 * @example
	 * node54321
 	*/
	label?:string

	/**
 	 * The current status of this node, based on the configured checks of its NodeBalancer Config.
	 * @example
	 * UP
 	*/
	readonly status?:NodeBalancerNodeStatus

	/**
 	 * Values [1 .. 255].
	 *
	 * Used when picking a backend to serve a request and is not pinned to a single backend yet.  Nodes with a higher weight will receive more traffic.
	 * @example
	 * 50
 	*/
	weight?:number

	/**
 	 * The mode this NodeBalancer should use when sending traffic to this backend.
	 * * If set to `accept` this backend is accepting traffic.
	 * * If set to `reject` this backend will not receive traffic.
	 * * If set to `drain` this backend will not receive _new_ traffic, but connections already
	 *   pinned to it will continue to be routed to it.
	 * * If set to `backup`, this backend will only receive traffic if all `accept` nodes
	 *   are down.
	 * @example
	 * accept
 	*/
	mode?:NodeBalancerNodeMode

	/**
 	 * The NodeBalancer Config ID that this Node belongs to.
	 * @example
	 * 4567
 	*/
	readonly config_id?:number

	/**
 	 * The NodeBalancer ID that this Node belongs to.
	 * @example
	 * 12345
 	*/
	readonly nodebalancer_id?:number
}
/**
 * Stats for this NodeBalancer.

 */
export interface NodeBalancerStats {

	/**
 	 * The data returned about this NodeBalancers.
 	*/
	data?:{ connections: any[], traffic: any }

	/**
 	 * The title for the statistics generated in this response.
	 * @example
	 * linode.com - balancer12345 (12345) - day (5 min avg)
 	*/
	title?:string
}
/**
 * An important, often time-sensitive item related to your Account.

 */
export interface Notification {

	/**
 	 * Detailed information about the Notification.
 	*/
	readonly entity?:{ id: number, label: string, type: string, url: string }

	/**
 	 * A short description of this Notification.
	 * @example
	 * You have an important ticket open!
 	*/
	readonly label?:string

	/**
 	 * A human-readable description of the Notification.
	 * @example
	 * You have an important ticket open!
 	*/
	readonly message?:string

	/**
 	 * A full description of this Notification, in markdown format.  Not all Notifications include bodies.
 	*/
	readonly body?:string

	/**
 	 * The type of Notification this is.
	 * @example
	 * ticket_important
 	*/
	readonly type?:NotificationType

	/**
 	 * The severity of this Notification.  This field can be used to decide how prominently to display the Notification, what color to make the display text, etc.
	 * @example
	 * major
 	*/
	readonly severity?:NotificationSeverity

	/**
 	 * If this Notification is of an Event that will happen at a fixed, future time, this is when the named action will be taken. For example, if a Linode is to be migrated in response to a Security Advisory, this field will contain the approximate time the Linode will be taken offline for migration.
 	*/
	readonly when?:string

	/**
 	 * If this Notification has a duration, this will be the ending time for the Event/action. For example, if there is scheduled maintenance for one of our systems, `until` would be set to the end of the maintenance window.
 	*/
	readonly until?:string
}
/**
 * A third-party application registered to Linode that users may log into with their Linode account through our authentication server at <a target="_top" href="https://login.linode.com">https://login.linode.com</a>.  Using an OAuth Client, a third-party developer may be given access to some, or all, of a User's account for the purposes of their application.

 */
export interface OAuthClient {

	/**
 	 * The OAuth Client ID.  This is used to identify the client, and is a publicly-known value (it is not a secret).
	 * @example
	 * 2737bf16b39ab5d7b4a1
 	*/
	readonly id?:string

	/**
 	 * The location a successful log in from <a target="_top" href="https://login.linode.com">https://login.linode.com</a> should be redirected to for this client.  The receiver of this redirect should be ready to accept an OAuth exchange code and finish the OAuth exchange.
	 * @example
	 * https://example.org/oauth/callback
 	*/
	redirect_uri?:string

	/**
 	 * [1 .. 512] characters.
	 *
	 * The name of this application.  This will be presented to users when they are asked to grant it access to their Account.
	 *
	 * @filterable
	 * @example
	 * Test_Client_1
 	*/
	label?:string

	/**
 	 * The status of this application.  `active` by default.
	 * @example
	 * active
 	*/
	readonly status?:OAuthClientStatus

	/**
 	 * The OAuth Client secret, used in the OAuth exchange.  This is returned as `<REDACTED>` except when an OAuth Client is created or its secret is reset.  This is a secret, and should not be shared or disclosed publicly.
	 * @example
	 * <REDACTED>
 	*/
	readonly secret?:string

	/**
 	 * The URL where this client's thumbnail may be viewed, or `null` if this client does not have a thumbnail set.
	 * @example
	 * https://api.linode.com/v4/account/clients/2737bf16b39ab5d7b4a1/thumbnail
 	*/
	readonly thumbnail_url?:string

	/**
 	 * If this is a public or private OAuth Client.  Public clients have a slightly different authentication workflow than private clients.  See the <a target="_top" href="https://oauth.net/2/">OAuth spec</a> for more details.
	 *
	 * @filterable
 	*/
	readonly public?:boolean
}
/**
 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results.

 */
export interface PaginationEnvelope {

	/**
 	 *
 	*/
	readonly data:any[]

	/**
 	 * @example
	 * 1
 	*/
	readonly pages:number

	/**
 	 * @example
	 * 1
 	*/
	readonly page:number

	/**
 	 * @example
	 * 1
 	*/
	readonly results:number
}
/**
 * Payment object response.
 */
export interface Payment {

	/**
 	 * The unique ID of the Payment.
	 * @example
	 * 123
 	*/
	readonly id?:number

	/**
 	 * When the Payment was made.
	 * @example
	 * 2018-01-15T00:01:01
 	*/
	readonly date?:string

	/**
 	 * The amount, in US dollars, of the Payment.
	 * @example
	 * 120.50
 	*/
	readonly usd?:number
}
/**
 * Payment object request.
 */
export interface PaymentRequest {

	/**
 	 * CVV (Card Verification Value) of the credit card to be used for the Payment.
	 * @example
	 * 123
 	*/
	cvv?:string

	/**
 	 * The amount in US Dollars of the Payment.
	 * @example
	 * 120.50
 	*/
	usd:string
}
/**
 * An object representing the staging of a Payment via PayPal.

 */
export interface PayPal {

	/**
 	 * The URL to have PayPal redirect to when Payment is cancelled.
	 * @example
	 * https://example.org
 	*/
	cancel_url:string

	/**
 	 * The URL to have PayPal redirect to when Payment is approved.
	 * @example
	 * https://example.org
 	*/
	redirect_url:string

	/**
 	 * The payment amount in USD. Minimum accepted value of $5 USD. Maximum accepted value of $500 USD or credit card payment limit; whichever value is highest. PayPal's maximum transaction limit is $10,000 USD.
	 * @example
	 * 120.50
 	*/
	usd:string
}
/**
 * An object representing an execution of Payment to PayPal to capture the funds and credit your Linode Account.

 */
export interface PayPalExecute {

	/**
 	 * The PayerID returned by PayPal during the transaction authorization process.
	 * @example
	 * ABCDEFGHIJKLM
 	*/
	payer_id:string

	/**
 	 * The PaymentID returned from [POST /account/payments/paypal](#operation/createPayPalPayment) that has been approved with PayPal.
	 * @example
	 * PAY-1234567890ABCDEFGHIJKLMN
 	*/
	payment_id:string
}
/**
 * A Personal Access Token is a token generated manually to access the API without going through an OAuth login.  Personal Access Tokens can have scopes just like OAuth tokens do, and are commonly used to give access to command-line tools like the Linode CLI, or when writing your own integrations.

 */
export interface PersonalAccessToken {

	/**
 	 * This token's unique ID, which can be used to revoke it.
	 * @example
	 * 123
 	*/
	readonly id?:number

	/**
 	 * The scopes this token was created with. These define what parts of the Account the token can be used to access. Many command-line tools, such as the <a target="_top" href="https://github.com/linode/linode-cli">Linode CLI</a>, require tokens with access to `*`. Tokens with more restrictive scopes are generally more secure.
	 * @example
	 * *
 	*/
	readonly scopes?:string

	/**
 	 * The date and time this token was created.
	 *
	 * @filterable
	 * @example
	 * 2018-01-01T00:01:01.000Z
 	*/
	readonly created?:string

	/**
 	 * [1 .. 100] characters.
	 *
	 * This token's label.  This is for display purposes only, but can be used to more easily track what you're using each token for.
	 *
	 * @filterable
	 * @example
	 * linode-cli
 	*/
	label?:string

	/**
 	 * The token used to access the API.  When the token is created, the full token is returned here.  Otherwise, only the first 16 characters are returned.
	 * @example
	 * abcdefghijklmnop
 	*/
	readonly token?:string

	/**
 	 * When this token will expire.  Personal Access Tokens cannot be renewed, so after this time the token will be completely unusable and a new token will need to be generated.  Tokens may be created with "null" as their expiry and will never expire unless revoked.
	 * @example
	 * 2018-01-01T13:46:32
 	*/
	readonly expiry?:string
}
/**
 * A Profile represents your User in our system. This is where you can change information about your User. This information is available to any OAuth Client regardless of requested scopes, and can be used to populate User information in third-party applications.

 */
export interface Profile {

	/**
 	 * Your unique ID in our system. This value will never change, and can safely be used to identify your User.
	 * @example
	 * 1234
 	*/
	readonly uid?:number

	/**
 	 * Your username, used for logging in to our system.
	 * @example
	 * exampleUser
 	*/
	readonly username?:string

	/**
 	 * Your email address.  This address will be used for communication with Linode as necessary.
	 * @example
	 * example-user@gmail.com
 	*/
	email?:string

	/**
 	 * The timezone you prefer to see times in.  This is not used by the API, and is for the benefit of clients only.  All times the API returns are in UTC.
	 * @example
	 * US/Eastern
 	*/
	timezone?:string

	/**
 	 * If true, you will receive email notifications about account activity.  If false, you may still receive business-critical communications through email.
	 * @example
	 * true
 	*/
	email_notifications?:boolean

	/**
 	 * Information about your status in our referral program.
 	*/
	readonly referrals?:{ code: string, url: string, total: number, completed: number, pending: number, credit: number }

	/**
 	 * @deprecated
	 * If true, logins for your User will only be allowed from whitelisted IPs. This setting is currently deprecated, and cannot be enabled.
	 * If you disable this setting, you will not be able to re-enable it.
 	*/
	ip_whitelist_enabled?:boolean

	/**
 	 * What methods of authentication are allowed when connecting via Lish.  "keys_only" is the most secure if you intend to use Lish, and "disabled" is recommended if you do not intend to use Lish at all.
	 * @example
	 * keys_only
 	*/
	lish_auth_method?:ProfileLishAuthMethod

	/**
 	 * The list of SSH Keys authorized to use Lish for your User. This value is ignored if `lish_auth_method` is "disabled."
 	*/
	authorized_keys?:string[]

	/**
 	 * If true, logins from untrusted computers will require Two Factor Authentication.  See [/profile/tfa-enable](#operation/tfaEnable) to enable Two Factor Authentication.
	 * @example
	 * true
 	*/
	two_factor_auth?:boolean

	/**
 	 * If true, your User has restrictions on what can be accessed on your Account. To get details on what entities/actions you can access/perform, see [/profile/grants](#operation/getProfileGrants).
 	*/
	restricted?:boolean
}
/**
 * An area where Linode services are available.
 */
export interface Region {

	/**
 	 * The unique ID of this Region.
	 * @example
	 * us-east
 	*/
	readonly id?:string

	/**
 	 * The country where this Region resides.
	 * @example
	 * us
 	*/
	readonly country?:string
}

export interface RescueDevices {

	/**
 	 * Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.
	 * Devices mapped from _sde_ through _sdh_ are unavailable in `fullvirt` virt_mode.
 	*/
	sda?:Device

	/**
 	 * Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.
	 * Devices mapped from _sde_ through _sdh_ are unavailable in `fullvirt` virt_mode.
 	*/
	sdb?:Device

	/**
 	 * Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.
	 * Devices mapped from _sde_ through _sdh_ are unavailable in `fullvirt` virt_mode.
 	*/
	sdc?:Device

	/**
 	 * Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.
	 * Devices mapped from _sde_ through _sdh_ are unavailable in `fullvirt` virt_mode.
 	*/
	sdd?:Device

	/**
 	 * Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.
	 * Devices mapped from _sde_ through _sdh_ are unavailable in `fullvirt` virt_mode.
 	*/
	sde?:Device

	/**
 	 * Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.
	 * Devices mapped from _sde_ through _sdh_ are unavailable in `fullvirt` virt_mode.
 	*/
	sdf?:Device

	/**
 	 * Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.
	 * Devices mapped from _sde_ through _sdh_ are unavailable in `fullvirt` virt_mode.
 	*/
	sdg?:Device
}
/**
 * A StackScript enables you to quickly deploy a fully-configured application in an automated manner.

 */
export interface StackScript {

	/**
 	 * The unique ID of this StackScript.
	 * @example
	 * 10079
 	*/
	readonly id?:number

	/**
 	 * The User who created the StackScript.
	 * @example
	 * myuser
 	*/
	readonly username?:string

	/**
 	 * The Gravatar ID for the User who created the StackScript.
	 * @example
	 * a445b305abda30ebc766bc7fda037c37
 	*/
	readonly user_gravatar_id?:string

	/**
 	 * [3 .. 128] characters.
	 *
	 * The StackScript's label is for display purposes only.
	 *
	 * @filterable
	 * @example
	 * a-stackscript
 	*/
	label?:string

	/**
 	 * A description for the StackScript.
	 *
	 * @filterable
	 * @example
	 * This StackScript installs and configures MySQL

 	*/
	description?:string

	/**
 	 * An array of Image IDs. These are the images that can be deployed with this Stackscript.
	 *
	 * @filterable
	 * @example
	 * linode/debian9,linode/debian8
 	*/
	images?:string[]

	/**
 	 * The total number of times this StackScript has been deployed.
	 * @example
	 * 12
 	*/
	readonly deployments_total?:number

	/**
 	 * Count of currently active, deployed Linodes created from this StackScript.
	 * @example
	 * 1
 	*/
	readonly deployments_active?:number

	/**
 	 * This determines whether other users can use your StackScript. **Once a StackScript is made public, it cannot be made private.**
	 *
	 * @filterable
	 * @example
	 * true
 	*/
	is_public?:boolean

	/**
 	 * The date this StackScript was created.
	 * @example
	 * 2018-01-01T00:01:01
 	*/
	readonly created?:string

	/**
 	 * The date this StackScript was last updated.
	 * @example
	 * 2018-01-01T00:01:01
 	*/
	readonly updated?:string

	/**
 	 * This field allows you to add notes for the set of revisions made to this StackScript.
	 *
	 * @filterable
	 * @example
	 * Set up MySQL
 	*/
	rev_note?:string

	/**
 	 * The script to execute when provisioning a new Linode with this StackScript.
	 * @example
	 * "#!/bin/bash"

 	*/
	script?:string

	/**
 	 * This is a list of fields defined with a special syntax inside this StackScript that allow for supplying customized parameters during deployment. See <a target="_top" href="https://www.linode.com/docs/platform/stackscripts/#variables-and-udfs">Variables and UDFs</a> for more information.
	 * @example
	 * [object Object]
 	*/
	readonly user_defined_fields?:UserDefinedField[]
}
/**
 * A Support Ticket opened on your Account.

 */
export interface SupportTicket {

	/**
 	 * The ID of the Support Ticket.
	 * @example
	 * 11223344
 	*/
	readonly id?:number

	/**
 	 * A list of filenames representing attached files associated with this Ticket.
 	*/
	readonly attachments?:string[]

	/**
 	 * The date and time this Ticket was closed.
	 *
	 * @filterable
	 * @example
	 * 2015-06-04T16:07:03
 	*/
	readonly closed?:string

	/**
 	 * Whether the Support Ticket may be closed.
 	*/
	closable?:boolean

	/**
 	 * [1 .. 65000] characters.
	 *
	 * The full details of the issue or question.
	 * @example
	 * I'm having trouble setting the root password on my Linode. I tried following the instructions but something is not working and I'm not sure what I'm doing wrong. Can you please help me figure out how I can reset it?

 	*/
	readonly description?:string

	/**
 	 * The entity this Ticket was opened for.
 	*/
	readonly entity?:{ id: number, label: string, type: string, url: string }

	/**
 	 * The Gravatar ID of the User who opened this Ticket.
	 * @example
	 * 474a1b7373ae0be4132649e69c36ce30
 	*/
	readonly gravatar_id?:string

	/**
 	 * The date and time this Ticket was created.
	 *
	 * @filterable
	 * @example
	 * 2015-06-04T14:16:44
 	*/
	readonly opened?:string

	/**
 	 * The User who opened this Ticket.
	 * @example
	 * some_user
 	*/
	readonly opened_by?:string

	/**
 	 * The current status of this Ticket.
	 * @example
	 * open
 	*/
	readonly status?:SupportTicketStatus

	/**
 	 * [1 .. 64] characters.
	 *
	 * The summary or title for this Ticket.
	 * @example
	 * Having trouble resetting root password on my Linode

 	*/
	readonly summary?:string

	/**
 	 * The date and time this Ticket was last updated.
	 *
	 * @filterable
	 * @example
	 * 2015-06-04T16:07:03
 	*/
	readonly updated?:string

	/**
 	 * The User who last updated this Ticket.
	 * @example
	 * some_other_user
 	*/
	readonly updated_by?:string
}
/**
 * An object representing a reply to a Support Ticket.

 */
export interface SupportTicketReply {

	/**
 	 * The date and time this Ticket reply was created.
	 * @example
	 * 2015-06-02T14:31:41
 	*/
	readonly created?:string

	/**
 	 * The User who submitted this reply.
	 * @example
	 * John Q. Linode
 	*/
	readonly created_by?:string

	/**
 	 * The body of this Support Ticket reply.
	 * @example
	 * Hello,\nI'm sorry to hear that you are having trouble resetting the root password of your Linode. Just to be sure, have you tried to follow the instructions in our online documentation? The link is here:\n \nhttps://linode.com/docs/quick-answers/linode-platform/reset-the-root-password-on-your-linode/ \n\nIf you have, please reply with any additional steps you have also taken.\n\nRegards, Linode Support Team

 	*/
	readonly description?:string

	/**
 	 * If set to true, this reply came from a Linode employee.
	 * @example
	 * true
 	*/
	readonly from_linode?:boolean

	/**
 	 * The Gravatar ID of the User who created this reply.
	 * @example
	 * 474a1b7373ae0be4132649e69c36ce30
 	*/
	readonly gravatar_id?:string

	/**
 	 * The unique ID of this Support Ticket reply.
	 * @example
	 * 11223345
 	*/
	readonly id?:number
}
/**
 * An object representing a created Support Ticket - a question or issue and request for help from the Linode support team.
Only one of the ID attributes (`linode_id`, `domain_id`, etc.) can be set on a single Support Ticket.

 */
export interface SupportTicketRequest {

	/**
 	 * [1 .. 65000] characters.
	 *
	 * The full details of the issue or question.
	 * @example
	 * I'm having trouble setting the root password on my Linode. I tried following the instructions but something is not working and I'm not sure what I'm doing wrong. Can you please help me figure out how I can reset it?

 	*/
	description:string

	/**
 	 * The ID of the Domain this ticket is regarding, if relevant.
 	*/
	domain_id?:number

	/**
 	 * The ID of the Linode this ticket is regarding, if relevant.
	 * @example
	 * 123
 	*/
	linode_id?:number

	/**
 	 * The ID of the Longview client this ticket is regarding, if relevant.
 	*/
	longviewclient_id?:number

	/**
 	 * The ID of the NodeBalancer this ticket is regarding, if relevant.
 	*/
	nodebalancer_id?:number

	/**
 	 * [1 .. 64] characters.
	 *
	 * The summary or title for this SupportTicket.
	 * @example
	 * Having trouble resetting root password on my Linode

 	*/
	summary:string

	/**
 	 * The ID of the Volume this ticket is regarding, if relevant.
 	*/
	volume_id?:number
}
/**
 * An object representing your network utilization for the current month, in Gigabytes.

 */
export interface Transfer {

	/**
 	 * The amount of your transfer pool that is billable this billing cycle.
 	*/
	readonly billable?:number

	/**
 	 * The amount of network usage allowed this billing cycle.
	 * @example
	 * 9141
 	*/
	readonly quota?:number

	/**
 	 * The amount of network usage you have used this billing cycle.
	 * @example
	 * 2
 	*/
	readonly used?:number
}
/**
 * A tag that has been applied to an object on your Account. Tags are currently for organizational purposes only.

 */
export interface Tag {

	/**
 	 * A Label used for organization of objects on your Account.
	 * @example
	 * example tag
 	*/
	label?:string
}
/**
 * A User on your Account. Unrestricted users can log in and access information about your Account, while restricted users may only access entities or perform actions they've been granted access to.

 */
export interface User {

	/**
 	 * [3 .. 32] characters.
	 *
	 * This User's username. This is used for logging in, and may also be displayed alongside actions the User performs (for example, in Events or public StackScripts).
	 *
	 * @filterable
	 * @example
	 * example_user
 	*/
	username?:string

	/**
 	 * The email address for this User, for account management communications, and may be used for other communications as configured.
	 * @example
	 * example_user@linode.com
 	*/
	readonly email?:string

	/**
 	 * If true, this User must be granted access to perform actions or access entities on this Account. See [/account/users/{username}/grants](#operation/getUserGrants) for details on how to configure grants for a restricted User.
	 * @example
	 * true
 	*/
	restricted?:boolean

	/**
 	 * A list of SSH Key labels added by this User. These are the keys that will be deployed if this User is included in the `authorized_users` field of a [create Linode](#operation/createLinodeInstance), [rebuild Linode](#operation/rebuildLinodeInstance), or [create Disk](#operation/addLinodeDisk) request.
	 * @example
	 * home-pc,laptop
 	*/
	ssh_keys?:string[]
}
/**
 * A custom field defined by the User with a special syntax within a StackScript. Derived from the contents of the script.

 */
export interface UserDefinedField {

	/**
 	 * A human-readable label for the field that will serve as the input prompt for entering the value during deployment.
	 * @example
	 * Enter the password
 	*/
	readonly label:string

	/**
 	 * The name of the field.
	 * @example
	 * DB_PASSWORD
 	*/
	readonly name:string

	/**
 	 * An example value for the field.
	 * @example
	 * hunter2
 	*/
	readonly example:string

	/**
 	 * A list of acceptable single values for the field.
	 * @example
	 * avalue,anothervalue,thirdvalue
 	*/
	readonly oneOf?:string

	/**
 	 * A list of acceptable values for the field in any quantity, combination or order.
	 * @example
	 * avalue,anothervalue,thirdvalue
 	*/
	readonly manyOf?:string

	/**
 	 * The default value.  If not specified, this value will be used.
 	*/
	readonly default?:string
}
/**
 * A trusted device object represents an active Remember Me session with <a target="_top" href="https://login.linode.com">login.linode.com</a>.

 */
export interface TrustedDevice {

	/**
 	 * The unique ID for this TrustedDevice
	 * @example
	 * 123
 	*/
	readonly id?:number

	/**
 	 * When this Remember Me session was started.  This corresponds to the time of login with the "Remember Me" box checked.
	 * @example
	 * 2018-01-01T01:01:01
 	*/
	readonly created?:string

	/**
 	 * When this TrustedDevice session expires.  Sessions typically last 30 days.
	 * @example
	 * 2018-01-31T01:01:01
 	*/
	readonly expiry?:string

	/**
 	 * The User Agent of the browser that created this TrustedDevice session.
	 * @example
	 * Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36 Vivaldi/2.1.1337.36

 	*/
	readonly user_agent?:string

	/**
 	 * The last time this TrustedDevice was successfully used to authenticate to <a target="_top" href="https://login.linode.com">login.linode.com</a>.
	 * @example
	 * 2018-01-05T12:57:12
 	*/
	readonly last_authenticated?:string

	/**
 	 * The last IP Address to successfully authenticate with this TrustedDevice.
	 * @example
	 * 12.34.56.78
 	*/
	readonly last_remote_addr?:string
}
/**
 * A credential object for authenticating a User's secure shell connection to a Linode.

 */
export interface SSHKey {

	/**
 	 * The unique identifier of an SSH Key object.
	 * @example
	 * 42
 	*/
	readonly id?:number

	/**
 	 * [0 .. 64] characters.
	 *
	 * A label for the SSH Key.
	 * @example
	 * My SSH Key
 	*/
	label?:string

	/**
 	 * The public SSH Key, which is used to authenticate to the root user of the Linodes you deploy.
 	*/
	readonly ssh_key?:string

	/**
 	 * The date this key was added.
	 * @example
	 * 2018-01-01T00:01:01
 	*/
	readonly created?:string
}
/**
 * An object consisting of a user identified name as the `label` and the generated key as the `ssh-key`.

 */
export interface SSHKeyRequest {

	/**
 	 * [1 .. 64] characters.
	 *
	 * A label for the key.
	 * @example
	 * My SSH Key
 	*/
	label?:string

	/**
 	 * The public SSH Key, which is used to authenticate to the root user of the Linodes you deploy.
 	*/
	ssh_key?:string
}
/**
 * A Block Storage Volume associated with your Account.

 */
export interface Volume {

	/**
 	 * The unique ID of this Volume.
	 * @example
	 * 12345
 	*/
	readonly id?:number

	/**
 	 * [1 .. 32] characters.
	 *
	 * The Volume's label is for display purposes only.
	 *
	 * @filterable
	 * @example
	 * my-volume
 	*/
	label:string

	/**
 	 * The full filesystem path for the Volume based on the Volume's label. Path is /dev/disk/by-id/scsi-0Linode_Volume_ + Volume label.
	 * @example
	 * /dev/disk/by-id/scsi-0Linode_Volume_my-volume
 	*/
	readonly filesystem_path?:string

	/**
 	 * The current status of the volume.  Can be one of:
	 *   * `creating` - the Volume is being created and is not yet available
	 *     for use.
	 *   * `active` - the Volume is online and available for use.
	 *   * `resizing` - the Volume is in the process of upgrading
	 *     its current capacity.
	 *   * `contact_support` - there is a problem with your Volume. Please
	 *     [open a Support Ticket](#operation/createTicket) to resolve the issue.
	 * @example
	 * active
 	*/
	readonly status?:VolumeStatus

	/**
 	 * Values <= 10240.
	 *
	 * The Volume's size, in GiB.
	 * @example
	 * 30
 	*/
	size?:number

	/**
 	 * The unique ID of this Region.
	 * @example
	 * us-east
 	*/
	readonly region?:string

	/**
 	 * If a Volume is attached to a specific Linode, the ID of that Linode will be displayed here.
	 * @example
	 * 12346
 	*/
	linode_id?:number

	/**
 	 * When this Volume was created.
	 * @example
	 * 2018-01-01T00:01:01
 	*/
	readonly created?:string

	/**
 	 * When this Volume was last updated.
	 * @example
	 * 2018-01-01T00:01:01
 	*/
	readonly updated?:string

	/**
 	 * An array of Tags applied to this object.  Tags are for organizational purposes only.
	 *
	 * @filterable
	 * @example
	 * example tag,another example
 	*/
	tags?:string[]
}

//#endregion
//#region Filterables
export interface AuthorizedAppFilter {
	/**
 	 * When this app was authorized.
	 *
	 * @filterable
	 * @example
	 * 2018-01-01T00:01:01
 	*/
	readonly created?:string
}
export interface DiskFilter {
	/**
 	 * [1 .. 48] characters.
	 *
	 * The Disk's label is for display purposes only.
	 *
	 * @filterable
	 * @example
	 * Debian 9 Disk
 	*/
	label?:string
	/**
 	 * The size of the Disk in MB.
	 *
	 * @filterable
	 * @example
	 * 48640
 	*/
	readonly size?:number
}
export interface DiskRequestFilter {
	/**
 	 *
	 * @filterable
	 * @example
	 * 48640
 	*/
	size?:number
	/**
 	 * [1 .. 48] characters.
	 *
	 * The Disk's label is for display purposes only.
	 *
	 * @filterable
	 * @example
	 * Debian 9 Disk
 	*/
	label?:string
}
export interface DomainFilter {
	/**
 	 * The domain this Domain represents. These must be unique in our system; you cannot have two Domains representing the same domain.
	 *
	 * @filterable
	 * @example
	 * example.org
 	*/
	domain?:string
	/**
 	 * @deprecated
	 * [1 .. 50] characters.
	 *
	 * The group this Domain belongs to.  This is for display purposes only.
	 *
	 * @filterable
 	*/
	group?:string
	/**
 	 * An array of tags applied to this object.  Tags are for organizational purposes only.
	 *
	 * @filterable
	 * @example
	 * example tag,another example
 	*/
	tags?:string[]
}
export interface ImagePrivateFilter {
	/**
 	 * A short description of the Image. Labels cannot contain special characters.
	 *
	 * @filterable
	 * @example
	 * My gold-master image
 	*/
	label?:string
	/**
 	 * Whether or not this Image is deprecated. Will only be True for deprecated public Images.
	 *
	 * @filterable
 	*/
	readonly deprecated?:boolean
	/**
 	 * True if the Image is public.
	 *
	 * @filterable
 	*/
	readonly is_public?:boolean
	/**
 	 * The minimum size this Image needs to deploy. Size is in MB.
	 *
	 * @filterable
	 * @example
	 * 2500
 	*/
	readonly size?:number
	/**
 	 * The upstream distribution vendor. `None` for private Images.
	 *
	 * @filterable
 	*/
	readonly vendor?:string
}
export interface ImagePublicFilter {
	/**
 	 * A short description of the Image.
	 *
	 * @filterable
	 * @example
	 * Ubuntu 17.10
 	*/
	label?:string
	/**
 	 * Whether or not this Image is deprecated. Will only be true for deprecated public Images.
	 *
	 * @filterable
 	*/
	readonly deprecated?:boolean
	/**
 	 * True if the Image is public.
	 *
	 * @filterable
	 * @example
	 * true
 	*/
	readonly is_public?:boolean
	/**
 	 * The minimum size this Image needs to deploy. Size is in MB.
	 *
	 * @filterable
	 * @example
	 * 2500
 	*/
	readonly size?:number
	/**
 	 * The upstream distribution vendor. `None` for private Images.
	 *
	 * @filterable
	 * @example
	 * Ubuntu
 	*/
	readonly vendor?:string
}
export interface IPAddressFilter {
	/**
 	 * The Region this IP address resides in.
	 *
	 * @filterable
	 * @example
	 * us-east
 	*/
	readonly region?:string
}
export interface IPAddressPrivateFilter {
	/**
 	 * The Region this address resides in.
	 *
	 * @filterable
	 * @example
	 * us-east
 	*/
	readonly region?:string
}
export interface IPAddressV6LinkLocalFilter {
	/**
 	 * The Region this address resides in.
	 *
	 * @filterable
	 * @example
	 * us-east
 	*/
	readonly region?:string
}
export interface IPAddressV6SlaacFilter {
	/**
 	 * The Region this address resides in.
	 *
	 * @filterable
	 * @example
	 * us-east
 	*/
	readonly region?:string
}
export interface KernelFilter {
	/**
 	 * The friendly name of this Kernel.
	 *
	 * @filterable
	 * @example
	 * Latest 64 bit (4.15.7-x86_64-linode102)
 	*/
	readonly label?:string
	/**
 	 * Linux Kernel version.
	 *
	 * @filterable
	 * @example
	 * 4.15.7
 	*/
	readonly version?:string
	/**
 	 * If this Kernel is suitable for KVM Linodes.
	 *
	 * @filterable
	 * @example
	 * true
 	*/
	readonly kvm?:boolean
	/**
 	 * If this Kernel is suitable for Xen Linodes.
	 *
	 * @filterable
 	*/
	readonly xen?:boolean
	/**
 	 * The architecture of this Kernel.
	 *
	 * @filterable
	 * @example
	 * x86_64
 	*/
	readonly architecture?:KernelArchitecture
	/**
 	 * If this Kernel is suitable for paravirtualized operations.
	 *
	 * @filterable
 	*/
	readonly pvops?:boolean
}
export interface LinodeFilter {
	/**
 	 * [3 .. 32] characters.
	 *
	 * The Linode's label is for display purposes only. If no label is provided for a Linode, a default will be assigned.
	 * Linode labels have the following constraints:
	 *   * Must start with an alpha character.
	 *   * May only consist of alphanumeric characters, dashes (`-`), underscores (`_`) or periods (`.`).
	 *   * Cannot have two dashes (`--`), underscores (`__`) or periods (`..`) in a row.
	 *
	 * @filterable
	 * @example
	 * linode123
 	*/
	label?:string
	/**
 	 * @deprecated
	 * A deprecated property denoting a group label for this Linode.
	 *
	 * @filterable
	 * @example
	 * Linode-Group
 	*/
	group?:string
	/**
 	 * This is the location where the Linode was deployed. This cannot be changed without [opening a support ticket](#operation/createTicket).
	 *
	 * @filterable
	 * @example
	 * us-east
 	*/
	readonly region?:string
	/**
 	 * An Image ID to deploy the Disk from. Official Linode Images start with `linode/ `, while your Images start with `private/`.
	 * See [/images](#operation/getImages) for more information on the Images available for you to use.
	 *
	 * @filterable
	 * @example
	 * linode/debian9
 	*/
	readonly image?:string
	/**
 	 * An array of tags applied to this object.  Tags are for organizational purposes only.
	 *
	 * @filterable
	 * @example
	 * example tag,another example
 	*/
	tags?:string[]
}
export interface LinodeBaseFilter {
	/**
 	 * @deprecated
	 * A deprecated property denoting a group label for this Linode.
	 *
	 * @filterable
	 * @example
	 * Linode-Group
 	*/
	group?:string
}
export interface LinodeConfigFilter {
	/**
 	 * [1 .. 48] characters.
	 *
	 * The Config's label is for display purposes only.
	 *
	 * @filterable
	 * @example
	 * My Config
 	*/
	label?:string
}
export interface LinodeTypeFilter {
	/**
 	 * The Linode Type's label is for display purposes only.
	 *
	 * @filterable
	 * @example
	 * Linode 4GB
 	*/
	readonly label?:string
	/**
 	 * The Disk size, in MB, of the Linode Type.
	 *
	 * @filterable
	 * @example
	 * 81920
 	*/
	readonly disk?:number
	/**
 	 * The class of the Linode Type. We currently offer four classes of Linodes:
	 *   * nanode - Our entry-level Linode Type.
	 *   * standard - Our flagship Linode Type.
	 *   * dedicated - Our Dedicated CPU Linode Type.
	 *   * highmem - A Linode Type featuring high memory availability.
	 *
	 * @filterable
	 * @example
	 * standard
 	*/
	readonly class?:LinodeTypeClass
	/**
 	 * The Mbits outbound bandwidth allocation.
	 *
	 * @filterable
	 * @example
	 * 1000
 	*/
	readonly network_out?:number
	/**
 	 * Amount of RAM included in this Linode Type.
	 *
	 * @filterable
	 * @example
	 * 4096
 	*/
	readonly memory?:number
	/**
 	 * The monthly outbound transfer amount, in MB.
	 *
	 * @filterable
	 * @example
	 * 4000
 	*/
	readonly transfer?:number
	/**
 	 * The number of VCPU cores this Linode Type offers.
	 *
	 * @filterable
	 * @example
	 * 2
 	*/
	readonly vcpus?:number
}
export interface LongviewClientFilter {
	/**
 	 * [3 .. 32] characters.
	 *
	 * This Client's unique label. This is for display purposes only.
	 *
	 * @filterable
	 * @example
	 * client789
 	*/
	label?:string
}
export interface ManagedContactFilter {
	/**
 	 * @deprecated
	 * [2 .. 50] characters.
	 *
	 * A grouping for this Contact. This is for display purposes only.
	 *
	 * @filterable
	 * @example
	 * on-call
 	*/
	group?:string
}
export interface NodeBalancerFilter {
	/**
 	 * [3 .. 32] characters.
	 *
	 * This NodeBalancer's label. These must be unique on your Account.
	 *
	 * @filterable
	 * @example
	 * balancer12345
 	*/
	label?:string
	/**
 	 * The Region where this NodeBalancer is located. NodeBalancers only support backends in the same Region.
	 *
	 * @filterable
	 * @example
	 * us-east
 	*/
	readonly region?:string
	/**
 	 * An array of Tags applied to this object.  Tags are for organizational purposes only.
	 *
	 * @filterable
	 * @example
	 * example tag,another example
 	*/
	tags?:string[]
}
export interface OAuthClientFilter {
	/**
 	 * [1 .. 512] characters.
	 *
	 * The name of this application.  This will be presented to users when they are asked to grant it access to their Account.
	 *
	 * @filterable
	 * @example
	 * Test_Client_1
 	*/
	label?:string
	/**
 	 * If this is a public or private OAuth Client.  Public clients have a slightly different authentication workflow than private clients.  See the <a target="_top" href="https://oauth.net/2/">OAuth spec</a> for more details.
	 *
	 * @filterable
 	*/
	readonly public?:boolean
}
export interface PersonalAccessTokenFilter {
	/**
 	 * The date and time this token was created.
	 *
	 * @filterable
	 * @example
	 * 2018-01-01T00:01:01.000Z
 	*/
	readonly created?:string
	/**
 	 * [1 .. 100] characters.
	 *
	 * This token's label.  This is for display purposes only, but can be used to more easily track what you're using each token for.
	 *
	 * @filterable
	 * @example
	 * linode-cli
 	*/
	label?:string
}
export interface StackScriptFilter {
	/**
 	 * [3 .. 128] characters.
	 *
	 * The StackScript's label is for display purposes only.
	 *
	 * @filterable
	 * @example
	 * a-stackscript
 	*/
	label?:string
	/**
 	 * A description for the StackScript.
	 *
	 * @filterable
	 * @example
	 * This StackScript installs and configures MySQL

 	*/
	description?:string
	/**
 	 * An array of Image IDs. These are the images that can be deployed with this Stackscript.
	 *
	 * @filterable
	 * @example
	 * linode/debian9,linode/debian8
 	*/
	images?:string[]
	/**
 	 * This determines whether other users can use your StackScript. **Once a StackScript is made public, it cannot be made private.**
	 *
	 * @filterable
	 * @example
	 * true
 	*/
	is_public?:boolean
	/**
 	 * This field allows you to add notes for the set of revisions made to this StackScript.
	 *
	 * @filterable
	 * @example
	 * Set up MySQL
 	*/
	rev_note?:string
}
export interface SupportTicketFilter {
	/**
 	 * The date and time this Ticket was closed.
	 *
	 * @filterable
	 * @example
	 * 2015-06-04T16:07:03
 	*/
	readonly closed?:string
	/**
 	 * The date and time this Ticket was created.
	 *
	 * @filterable
	 * @example
	 * 2015-06-04T14:16:44
 	*/
	readonly opened?:string
	/**
 	 * The date and time this Ticket was last updated.
	 *
	 * @filterable
	 * @example
	 * 2015-06-04T16:07:03
 	*/
	readonly updated?:string
}
export interface UserFilter {
	/**
 	 * [3 .. 32] characters.
	 *
	 * This User's username. This is used for logging in, and may also be displayed alongside actions the User performs (for example, in Events or public StackScripts).
	 *
	 * @filterable
	 * @example
	 * example_user
 	*/
	username?:string
}
export interface VolumeFilter {
	/**
 	 * [1 .. 32] characters.
	 *
	 * The Volume's label is for display purposes only.
	 *
	 * @filterable
	 * @example
	 * my-volume
 	*/
	label?:string
	/**
 	 * An array of Tags applied to this object.  Tags are for organizational purposes only.
	 *
	 * @filterable
	 * @example
	 * example tag,another example
 	*/
	tags?:string[]
}

//#endregion
//#region account
export interface IAccount {
	/**
	 * https://developers.linode.com/api/v4/#operation/getAccount
 *
	 * Returns the contact and billing information related to your Account.
	 */
	get(): Promise<Account>
	/**
	 * https://developers.linode.com/api/v4/#operation/updateAccount
 *
	 * Updates contact and billing information related to your Account.
	 */
	update(data: Account):Promise<Account>
	/**
	 * https://developers.linode.com/api/v4/#operation/createCreditCard
 *
	 * Adds/edit credit card information to your Account.
	 * Only one credit card can be associated with your Account, so using this endpoint will overwrite your currently active card information with the new credit card.
	 */
	creditCard(data: any):Promise<CreditCard>
	/**
	 * https://developers.linode.com/api/v4/#operation/getTransfer
 *
	 * Returns a Transfer object showing your network utilization, in GB, for the current month.
	 */
	transfer(): Promise<Transfer>
	events:IEvents
	invoices:IInvoices
	notifications:INotifications
	oauthClients:IOauthClients
	payments:IPayments
	settings:ISettings
	users:IUsers
}
export interface IEvents {
	/**
	 * https://developers.linode.com/api/v4/#operation/getEvents
 *
	 * Returns a collection of Event objects representing actions taken on your Account. The Events returned depends on your grants.
	 */
	list(page?:number): Promise<LinodeResponse<Event>>
	list(page:number, page_size:number): Promise<LinodeResponse<Event>>
	/**
	 * https://developers.linode.com/api/v4/#operation/getEvent
 *
	 * Returns a single Event object.
	 */
	(eventId: number):EventsClass
}
export interface EventsClass {
	/**
	 * https://developers.linode.com/api/v4/#operation/getEvent
 *
	 * Returns a single Event object.
	 */
	get(): Promise<Event>
	/**
	 * https://developers.linode.com/api/v4/#operation/eventRead
 *
	 * Marks a single Event as read.
	 */
	read():Promise<any>
	/**
	 * https://developers.linode.com/api/v4/#operation/eventSeen
 *
	 * Marks all Events up to and including this Event by ID as seen.
	 */
	seen():Promise<any>
}
export interface IInvoices {
	/**
	 * https://developers.linode.com/api/v4/#operation/getInvoices
 *
	 * Returns a paginated list of Invoices against your Account.
	 */
	list(page?:number): Promise<LinodeResponse<Invoice>>
	list(page:number, page_size:number): Promise<LinodeResponse<Invoice>>
	/**
	 * https://developers.linode.com/api/v4/#operation/getInvoice
 *
	 * Returns a single Invoice object.
	 */
	(invoiceId: number):InvoicesClass
}
export interface InvoicesClass {
	/**
	 * https://developers.linode.com/api/v4/#operation/getInvoice
 *
	 * Returns a single Invoice object.
	 */
	get(): Promise<Invoice>
	items:IItems
}
export interface IItems {
	/**
	 * https://developers.linode.com/api/v4/#operation/getInvoiceItems
 *
	 * Returns a paginated list of Invoice items.
	 */
	list(page?:number): Promise<LinodeResponse<InvoiceItem>>
	list(page:number, page_size:number): Promise<LinodeResponse<InvoiceItem>>
}
export interface INotifications {
	/**
	 * https://developers.linode.com/api/v4/#operation/getNotifications
 *
	 * Returns a collection of Notification objects representing important, often time-sensitive items related to your Account.
	 * You cannot interact directly with Notifications, and a Notification will disappear when the circumstances causing it have been resolved. For example, if you have an important Ticket open, you must respond to the Ticket to dismiss the Notification.
	 */
	list(page?:number): Promise<LinodeResponse<Notification>>
	list(page:number, page_size:number): Promise<LinodeResponse<Notification>>
}
export interface IOauthClients {
	/**
	 * https://developers.linode.com/api/v4/#operation/getClients
 *
	 * Returns a paginated list of OAuth Clients registered to your Account.  OAuth Clients allow users to log into applications you write or host using their Linode Account, and may allow them to grant some level of access to their Linodes or other entities to your application.
	 */
	list(page?:number): Promise<LinodeResponse<OAuthClient>>
	list(page:number, page_size:number): Promise<LinodeResponse<OAuthClient>>
	list(filter:Filter<OAuthClientFilter>):Promise<LinodeResponse<OAuthClient>>
	list(page:number, filter:Filter<OAuthClientFilter>):Promise<LinodeResponse<OAuthClient>>
	list(page:number, page_size:number, filter:Filter<OAuthClientFilter>):Promise<LinodeResponse<OAuthClient>>
	/**
	 * https://developers.linode.com/api/v4/#operation/createClient
 *
	 * Creates an OAuth Client, which can be used to allow users (using their Linode account) to log in to your own application, and optionally grant your application some amount of access to their Linodes or other entities.
	 */
	create(data: any):Promise<OAuthClient>
	/**
	 * https://developers.linode.com/api/v4/#operation/getClient
 *
	 * Returns information about a single OAuth client.
	 */
	(clientId: string):OauthClientsClass
}
export interface OauthClientsClass {
	/**
	 * https://developers.linode.com/api/v4/#operation/getClient
 *
	 * Returns information about a single OAuth client.
	 */
	get(): Promise<OAuthClient>
	/**
	 * https://developers.linode.com/api/v4/#operation/updateClient
 *
	 * Update information about an OAuth Client on your Account. This can be especially useful to update the `redirect_uri` of your client in the event that the callback url changed in your application.
	 */
	update(data: OAuthClient):Promise<OAuthClient>
	/**
	 * https://developers.linode.com/api/v4/#operation/deleteClient
 *
	 * Deletes an OAuth Client registered with Linode. The Client ID and Client secret will no longer be accepted by <a target="_top" href="https://login.linode.com">https://login.linode.com</a>, and all tokens issued to this client will be invalidated (meaning that if your application was using a token, it will no longer work).
	 */
	delete():Promise<any>
	/**
	 * https://developers.linode.com/api/v4/#operation/resetClientSecret
 *
	 * Resets the OAuth Client secret for a client you own, and returns the OAuth Client with the plaintext secret. This secret is not supposed to be publicly known or disclosed anywhere. This can be used to generate a new secret in case the one you have has been leaked, or to get a new secret if you lost the original. The old secret is expired immediately, and logins to your client with the old secret will fail.
	 */
	resetSecret():Promise<OAuthClient>
	thumbnail:IThumbnail
}
export interface IThumbnail {
	/**
	 * https://developers.linode.com/api/v4/#operation/getClientThumbnail
 *
	 * Returns the thumbnail for this OAuth Client.  This is a publicly-viewable endpoint, and can be accessed without authentication.
	 */
	get(): Promise<ArrayBuffer>
	/**
	 * https://developers.linode.com/api/v4/#operation/setClientThumbnail
 *
	 * Upload a thumbnail for a client you own.  You must upload an image file that will be returned when the thumbnail is retrieved.  This image will be publicly-viewable.
	 */
	update(data: ArrayBuffer):Promise<any>
}
export interface IPayments {
	/**
	 * https://developers.linode.com/api/v4/#operation/getPayments
 *
	 * Returns a paginated list of Payments made on this Account.
	 */
	list(page?:number): Promise<LinodeResponse<Payment>>
	list(page:number, page_size:number): Promise<LinodeResponse<Payment>>
	/**
	 * https://developers.linode.com/api/v4/#operation/createPayment
 *
	 * Makes a Payment to your Account via credit card. This will charge your credit card the requested amount.
	 */
	create(data: PaymentRequest):Promise<Payment>
	/**
	 * https://developers.linode.com/api/v4/#operation/getPayment
 *
	 * Returns information about a specific Payment.
	 */
	(paymentId: number):PaymentsClass
	paypal:IPaypal
}
export interface PaymentsClass {
	/**
	 * https://developers.linode.com/api/v4/#operation/getPayment
 *
	 * Returns information about a specific Payment.
	 */
	get(): Promise<Payment>
}
export interface IPaypal {
	/**
	 * https://developers.linode.com/api/v4/#operation/createPayPalPayment
 *
	 * This begins the process of submitting a Payment via PayPal. After calling this endpoint, you must take the resulting `payment_id` along with the `payer_id` from your PayPal account and [POST /account/payments/paypal-execute](#operation/executePayPalPayment) to complete the Payment.
	 */
	create(data: PayPal):Promise<any>
	/**
	 * https://developers.linode.com/api/v4/#operation/executePayPalPayment
 *
	 * Given a PaymentID and PayerID - as generated by PayPal during the transaction authorization process - this endpoint executes the Payment to capture the funds and credit your Linode Account.
	 */
	execute(data: PayPalExecute):Promise<any>
}
export interface ISettings {
	/**
	 * https://developers.linode.com/api/v4/#operation/getAccountSettings
 *
	 * Returns information related to your Account settings: Managed service subscription, Longview subscription, and network helper.
	 */
	get(): Promise<AccountSettings>
	/**
	 * https://developers.linode.com/api/v4/#operation/updateAccountSettings
 *
	 * Updates your Account settings.
	 */
	update(data: AccountSettings):Promise<AccountSettings>
}
export interface IUsers {
	/**
	 * https://developers.linode.com/api/v4/#operation/getUsers
 *
	 * Returns a paginated list of Users on your Account. Users may access all or part of your Account based on their restricted status and grants.  An unrestricted User may access everything on the account, whereas restricted User may only access entities or perform actions they've been given specific grants to.
	 */
	list(page?:number): Promise<LinodeResponse<User>>
	list(page:number, page_size:number): Promise<LinodeResponse<User>>
	list(filter:Filter<UserFilter>):Promise<LinodeResponse<User>>
	list(page:number, filter:Filter<UserFilter>):Promise<LinodeResponse<User>>
	list(page:number, page_size:number, filter:Filter<UserFilter>):Promise<LinodeResponse<User>>
	/**
	 * https://developers.linode.com/api/v4/#operation/createUser
 *
	 * Creates a User on your Account. Once created, the User will be able to log in and access portions of your Account. Access is determined by whether or not they are restricted, and what grants they have been given.
	 */
	create(data: any):Promise<User>
	/**
	 * https://developers.linode.com/api/v4/#operation/getUser
 *
	 * Returns information about a single User on your Account.
	 */
	(username: string):UsersClass
}
export interface UsersClass {
	/**
	 * https://developers.linode.com/api/v4/#operation/getUser
 *
	 * Returns information about a single User on your Account.
	 */
	get(): Promise<User>
	/**
	 * https://developers.linode.com/api/v4/#operation/updateUser
 *
	 * Update information about a User on your Account. This can be used to change the restricted status of a User. When making a User restricted, no grants will be configured by default and you must then set up grants in order for the User to access anything on the Account.
	 */
	update(data: User):Promise<User>
	/**
	 * https://developers.linode.com/api/v4/#operation/deleteUser
 *
	 * Deletes a User. The deleted User will be immediately logged out and may no longer log in or perform any actions. All of the User's Grants will be removed.
	 */
	delete():Promise<any>
	grants:IGrants
}
export interface IGrants {
	/**
	 * https://developers.linode.com/api/v4/#operation/getUserGrants
 *
	 * Returns the full grants structure for this User. This includes all entities on the Account alongside what level of access this User has to each of them. Individual users may view their own grants at the [/profile/grants](#operation/getProfileGrants) endpoint, but will not see entities that they have no access to.
	 */
	get(): Promise<GrantsResponse>
	/**
	 * https://developers.linode.com/api/v4/#operation/updateUserGrants
 *
	 * Update the grants a User has. This can be used to give a User access to new entities or actions, or take access away.  You do not need to include the grant for every entity on the Account in this request; any that are not included will remain unchanged.
	 */
	update(data: GrantsResponse):Promise<GrantsResponse>
}

//#endregion
//#region domains
export interface IDomains {
	/**
	 * https://developers.linode.com/api/v4/#operation/getDomains
 *
	 * This is a collection of Domains that you have registered in Linode's DNS Manager.  Linode is not a registrar, and in order for these to work you must own the domains and point your registrar at Linode's nameservers.
	 */
	list(page?:number): Promise<LinodeResponse<Domain>>
	list(page:number, page_size:number): Promise<LinodeResponse<Domain>>
	list(filter:Filter<DomainFilter>):Promise<LinodeResponse<Domain>>
	list(page:number, filter:Filter<DomainFilter>):Promise<LinodeResponse<Domain>>
	list(page:number, page_size:number, filter:Filter<DomainFilter>):Promise<LinodeResponse<Domain>>
	/**
	 * https://developers.linode.com/api/v4/#operation/createDomain
 *
	 * Adds a new Domain to Linode's DNS Manager. Linode is not a registrar, and you must own the domain before adding it here. Be sure to point your registrar to Linode's nameservers so that the records hosted here are used.
	 */
	create(data: Domain):Promise<Domain>
	/**
	 * https://developers.linode.com/api/v4/#operation/importDomain
 *
	 * Imports a domain zone from a remote nameserver.
	 * Your nameserver must allow zone transfers (AXFR) from the following IPs:
	 *   - 96.126.114.97
	 *   - 96.126.114.98
	 *   - 2600:3c00::5e
	 *   - 2600:3c00::5f
	 */
	import(data: any):Promise<Domain>
	/**
	 * https://developers.linode.com/api/v4/#operation/getDomain
 *
	 * This is a single Domain that you have registered in Linode's DNS Manager. Linode is not a registrar, and in order for this Domain record to work you must own the domain and point your registrar at Linode's nameservers.
	 */
	(domainId: number):DomainsClass
}
export interface DomainsClass {
	/**
	 * https://developers.linode.com/api/v4/#operation/getDomain
 *
	 * This is a single Domain that you have registered in Linode's DNS Manager. Linode is not a registrar, and in order for this Domain record to work you must own the domain and point your registrar at Linode's nameservers.
	 */
	get(): Promise<Domain>
	/**
	 * https://developers.linode.com/api/v4/#operation/updateDomain
 *
	 * Update information about a Domain in Linode's DNS Manager.
	 */
	update(data: Domain):Promise<Domain>
	/**
	 * https://developers.linode.com/api/v4/#operation/deleteDomain
 *
	 * Deletes a Domain from Linode's DNS Manager. The Domain will be removed from Linode's nameservers shortly after this operation completes. This also deletes all associated Domain Records.
	 */
	delete():Promise<any>
	records:IRecords
}
export interface IRecords {
	/**
	 * https://developers.linode.com/api/v4/#operation/getDomainRecords
 *
	 * Returns a paginated list of Records configured on a Domain in Linode's
	 * DNS Manager.
	 */
	list(page?:number): Promise<LinodeResponse<DomainRecord>>
	list(page:number, page_size:number): Promise<LinodeResponse<DomainRecord>>
	/**
	 * https://developers.linode.com/api/v4/#operation/createDomainRecord
 *
	 * Adds a new Domain Record to the zonefile this Domain represents.
	 */
	create(data: any):Promise<DomainRecord>
	/**
	 * https://developers.linode.com/api/v4/#operation/getDomainRecord
 *
	 * View a single Record on this Domain.
	 */
	(recordId: number):RecordsClass
}
export interface RecordsClass {
	/**
	 * https://developers.linode.com/api/v4/#operation/getDomainRecord
 *
	 * View a single Record on this Domain.
	 */
	get(): Promise<DomainRecord>
	/**
	 * https://developers.linode.com/api/v4/#operation/updateDomainRecord
 *
	 * Updates a single Record on this Domain.
	 */
	update(data: DomainRecord):Promise<DomainRecord>
	/**
	 * https://developers.linode.com/api/v4/#operation/deleteDomainRecord
 *
	 * Deletes a Record on this Domain.
	 */
	delete():Promise<any>
}

//#endregion
//#region images
export interface IImages {
	/**
	 * https://developers.linode.com/api/v4/#operation/getImages
 *
	 * Returns a paginated list of Images.
	 * * Calling this endpoint without authentication returns all public Images.
	 * * Authentication is required to return a combined paginated list of all public and
	 *   your private Images.
	 */
	list(page?:number): Promise<LinodeResponse<ImagePublic>>
	list(page:number, page_size:number): Promise<LinodeResponse<ImagePublic>>
	list(filter:Filter<ImagePublicFilter>):Promise<LinodeResponse<ImagePublic>>
	list(page:number, filter:Filter<ImagePublicFilter>):Promise<LinodeResponse<ImagePublic>>
	list(page:number, page_size:number, filter:Filter<ImagePublicFilter>):Promise<LinodeResponse<ImagePublic>>
	/**
	 * https://developers.linode.com/api/v4/#operation/createImage
 *
	 * Creates a private gold-master Image from a Linode Disk. There is no additional charge to store Images for Linode users.
	 * Images are limited to three per Account.
	 */
	create(data: any):Promise<ImagePrivate>
	/**
	 * https://developers.linode.com/api/v4/#operation/getImage
 *
	 * Get information about a single Image.
	 */
	(imageId: string):ImagesClass
}
export interface ImagesClass {
	/**
	 * https://developers.linode.com/api/v4/#operation/getImage
 *
	 * Get information about a single Image.
	 */
	get(): Promise<ImagePrivate>
	/**
	 * https://developers.linode.com/api/v4/#operation/updateImage
 *
	 * Updates a private Image that you have permission to `read_write`.
	 */
	update(data: ImagePrivate):Promise<ImagePrivate>
	/**
	 * https://developers.linode.com/api/v4/#operation/deleteImage
 *
	 * Deletes a private Image you have permission to `read_write`.
	 * **Deleting an Image is a destructive action and cannot be undone.**
	 */
	delete():Promise<any>
}

//#endregion
//#region linode
export interface ILinode {
	instances:IInstances
	kernels:IKernels
	stackscripts:IStackscripts
	types:ITypes
}
export interface IInstances {
	/**
	 * https://developers.linode.com/api/v4/#operation/getLinodeInstances
 *
	 * Returns a paginated list of Linodes you have permission to view.
	 */
	list(page?:number): Promise<LinodeResponse<Linode>>
	list(page:number, page_size:number): Promise<LinodeResponse<Linode>>
	list(filter:Filter<LinodeFilter>):Promise<LinodeResponse<Linode>>
	list(page:number, filter:Filter<LinodeFilter>):Promise<LinodeResponse<Linode>>
	list(page:number, page_size:number, filter:Filter<LinodeFilter>):Promise<LinodeResponse<Linode>>
	/**
	 * https://developers.linode.com/api/v4/#operation/createLinodeInstance
 *
	 * Creates a Linode Instance on your Account. In order for this
	 * request to complete successfully, your User must have the `add_linodes` grant. Creating a
	 * new Linode will incur a charge on your Account.
	 * Linodes can be created using one of the available Types. See
	 * [GET /linode/types](#operation/getLinodeTypes) to get more
	 * information about each Type's specs and cost.
	 * Linodes can be created in any one of our available
	 * [Regions](#operation/getRegions) for a list
	 * of available Regions you can deploy your Linode in.
	 * Linodes can be created in a number of ways:
	 * * Using a Linode Linux Distribution image or an Image you created based on another Linode.
	 *   * The Linode will be `running` after it completes `provisioning`.
	 *   * A default config with two Disks, one being a 512 swap disk, is created.
	 *     * `swap_size` can be used to customize the swap disk size.
	 *   * Requires a `root_pass` be supplied to use for the root User's Account.
	 *   * It is recommended to supply SSH keys for the root User using the `authorized_keys` field.
	 *   * You may also supply a list of usernames via the `authorized_users` field.
	 *     * These users must have an SSH Key associated with your Profile first. See [/profile/sshkeys](#operation/addSSHKey) for more information.
	 * * Using a StackScript.
	 *   * See [/linode/stackscripts](#operation/getStackScripts) for
	 *     a list of available StackScripts.
	 *   * The Linode will be `running` after it completes `provisioning`.
	 *   * Requires a compatible Image to be supplied.
	 *     * See [/linode/stackscript/{stackscriptId}](#operation/getStackScript) for compatible Images.
	 *   * Requires a `root_pass` be supplied to use for the root User's Account.
	 *   * It is recommended to supply SSH keys for the root User using the `authorized_keys` field.
	 *   * You may also supply a list of usernames via the `authorized_users` field.
	 *     * These users must have an SSH Key associated with your Profile first. See [/profile/sshkeys](#operation/addSSHKey) for more information.
	 * * Using one of your other Linode's backups.
	 *   * You must create a Linode large enough to accommodate the Backup's size.
	 *   * The Disks and Config will match that of the Linode that was backed up.
	 *   * The `root_pass` will match that of the Linode that was backed up.
	 * * Create an empty Linode.
	 *   * The Linode will remain `offline` and must be manually started.
	 *     * See [POST /linode/instances/{linodeId}/boot](#operation/bootLinodeInstance).
	 *   * Disks and Configs must be created manually.
	 *   * This is only recommended for advanced use cases.
	 * **Important**: You must be an unrestricted User in order to add or modify
	 * tags on Linodes.
	 */
	create(data: any):Promise<Linode>
	/**
	 * https://developers.linode.com/api/v4/#operation/getLinodeInstance
 *
	 * Get a specific Linode by ID.
	 */
	(linodeId: number):InstancesClass
}
export interface InstancesClass {
	/**
	 * https://developers.linode.com/api/v4/#operation/getLinodeInstance
 *
	 * Get a specific Linode by ID.
	 */
	get(): Promise<Linode>
	/**
	 * https://developers.linode.com/api/v4/#operation/updateLinodeInstance
 *
	 * Updates a Linode that you have permission to `read_write`.
	 * **Important**: You must be an unrestricted User in order to add or modify tags on Linodes.
	 */
	update(data: Linode):Promise<Linode>
	/**
	 * https://developers.linode.com/api/v4/#operation/deleteLinodeInstance
 *
	 * Deletes a Linode you have permission to `read_write`.
	 * **Deleting a Linode is a destructive action and cannot be undone.**
	 * Additionally, deleting a Linode:
	 *   * Gives up any IP addresses the Linode was assigned.
	 *   * Deletes all Disks, Backups, Configs, etc.
	 *   * Stops billing for the Linode and its associated services. You will be billed for time used
	 *     within the billing period the Linode was active.
	 */
	delete():Promise<any>
	/**
	 * https://developers.linode.com/api/v4/#operation/bootLinodeInstance
 *
	 * Boots a Linode you have permission to modify. If no parameters are given, a Config profile
	 * will be chosen for this boot based on the following criteria:
	 * * If there is only one Config profile for this Linode, it will be used.
	 * * If there is more than one Config profile, the last booted config will be used.
	 * * If there is more than one Config profile and none were the last to be booted (because the
	 *   Linode was never booted or the last booted config was deleted) an error will be returned.
	 */
	boot(data: any):Promise<any>
	/**
	 * https://developers.linode.com/api/v4/#operation/cloneLinodeInstance
 *
	 * You can clone your Linode's existing Disks or Configuration profiles to another Linode on your Account. In order for this request to complete successfully, your User must have the `add_linodes` grant. Cloning to a new Linode will incur a charge on your Account.
	 * If cloning to an existing Linode, any actions currently running or queued must be completed first before you can clone to it.
	 */
	clone(data: any):Promise<any>
	/**
	 * https://developers.linode.com/api/v4/#operation/migrateLinodeInstance
 *
	 * In some circumstances, a Linode may have pending migrations scheduled that that you can initiate when convenient.  In these cases, a Notification will be returned from [GET /account/notifications](#getNotifications). This endpoint initiates the scheduled migration, which will shut the Linode down, migrate it, and then bring it back to its original state.
	 */
	migrate():Promise<any>
	/**
	 * https://developers.linode.com/api/v4/#operation/mutateLinodeInstance
 *
	 * Linodes created with now-deprecated Types are entitled to a free upgrade to the next generation. A mutating Linode will be allocated any new resources the upgraded Type provides, and will be subsequently restarted if it was currently running.
	 * If any actions are currently running or queued, those actions must be completed first before you can initiate a mutate.
	 */
	mutate():Promise<any>
	/**
	 * https://developers.linode.com/api/v4/#operation/rebootLinodeInstance
 *
	 * Reboots a Linode you have permission to modify. If any actions are currently running or queued, those actions must be completed first before you can initiate a reboot.
	 */
	reboot(data: any):Promise<any>
	/**
	 * https://developers.linode.com/api/v4/#operation/rebuildLinodeInstance
 *
	 * Rebuilds a Linode you have the `read_write` permission to modify.
	 * A rebuild will first shut down the Linode, delete all disks and configs on the Linode, and then deploy a new `image` to the Linode with the given attributes. Additionally:
	 *   * Requires an `image` be supplied.
	 *   * Requires a `root_pass` be supplied to use for the root User's Account.
	 *   * It is recommended to supply SSH keys for the root User using the
	 *     `authorized_keys` field.
	 */
	rebuild(data: any):Promise<Linode>
	/**
	 * https://developers.linode.com/api/v4/#operation/rescueLinodeInstance
 *
	 * Rescue Mode is a safe environment for performing many system recovery and disk management tasks. Rescue Mode is based on the Finnix recovery distribution, a self-contained and bootable Linux distribution. You can also use Rescue Mode for tasks other than disaster recovery, such as formatting disks to use different filesystems, copying data between disks, and downloading files from a disk via SSH and SFTP.
	 * * Note that "sdh" is reserved and unavailable during rescue.
	 */
	rescue(data: any):Promise<any>
	/**
	 * https://developers.linode.com/api/v4/#operation/resizeLinodeInstance
 *
	 * Resizes a Linode you have the `read_write` permission to a different Type. If any actions are currently running or queued, those actions must be completed first before you can initiate a resize. Additionally, the following criteria must be met in order to resize a Linode:
	 *   * The Linode must not have a pending migration.
	 *   * Your Account cannot have an outstanding balance.
	 *   * The Linode must not have more disk allocation than the new Type allows.
	 *     * In that situation, you must first delete or resize the disk to be smaller.
	 */
	resize(data: any):Promise<any>
	/**
	 * https://developers.linode.com/api/v4/#operation/shutdownLinodeInstance
 *
	 * Shuts down a Linode you have permission to modify. If any actions are currently running or queued, those actions must be completed first before you can initiate a shutdown.
	 */
	shutdown():Promise<any>
	backups:IBackups
	configs:IConfigs
	disks:IDisks
	ips:IIps
	stats:IStats
	volumes:IVolumes
}
export interface IBackups {
	/**
	 * https://developers.linode.com/api/v4/#operation/getBackups
 *
	 * Returns information about this Linode's available backups.
	 */
	get(): Promise<any>
	/**
	 * https://developers.linode.com/api/v4/#operation/createSnapshot
 *
	 * Creates a snapshot Backup of a Linode.
	 * ** If you already have a snapshot of this Linode, this is a destructive action. The previous snapshot will be deleted.**
	 */
	create(data: any):Promise<Backup>
	/**
	 * https://developers.linode.com/api/v4/#operation/cancelBackups
 *
	 * Cancels the Backup service on the given Linode. Deletes all of this Linode's existing backups forever.
	 */
	cancel():Promise<any>
	/**
	 * https://developers.linode.com/api/v4/#operation/enableBackups
 *
	 * Enables backups for the specified Linode.
	 */
	enable():Promise<any>
	/**
	 * https://developers.linode.com/api/v4/#operation/getBackup
 *
	 * Returns information about a Backup.
	 */
	(backupId: number):BackupsClass
}
export interface BackupsClass {
	/**
	 * https://developers.linode.com/api/v4/#operation/getBackup
 *
	 * Returns information about a Backup.
	 */
	get(): Promise<Backup>
	/**
	 * https://developers.linode.com/api/v4/#operation/restoreBackup
 *
	 * Restores a Linode's Backup to the specified Linode.
	 */
	restore(data: any):Promise<any>
}
export interface IConfigs {
	/**
	 * https://developers.linode.com/api/v4/#operation/getLinodeConfigs
 *
	 * Lists Configuration profiles associated with a Linode.
	 */
	list(page?:number): Promise<LinodeResponse<LinodeConfig>>
	list(page:number, page_size:number): Promise<LinodeResponse<LinodeConfig>>
	list(filter:Filter<LinodeConfigFilter>):Promise<LinodeResponse<LinodeConfig>>
	list(page:number, filter:Filter<LinodeConfigFilter>):Promise<LinodeResponse<LinodeConfig>>
	list(page:number, page_size:number, filter:Filter<LinodeConfigFilter>):Promise<LinodeResponse<LinodeConfig>>
	/**
	 * https://developers.linode.com/api/v4/#operation/addLinodeConfig
 *
	 * Adds a new Configuration profile to a Linode.
	 */
	create(data: LinodeConfig):Promise<LinodeConfig>
	/**
	 * https://developers.linode.com/api/v4/#operation/getLinodeConfig
 *
	 * Returns information about a specific Configuration profile.
	 */
	(configId: number):ConfigsClass
}
export interface ConfigsClass {
	/**
	 * https://developers.linode.com/api/v4/#operation/getLinodeConfig
 *
	 * Returns information about a specific Configuration profile.
	 */
	get(): Promise<LinodeConfig>
	/**
	 * https://developers.linode.com/api/v4/#operation/updateLinodeConfig
 *
	 * Updates a Configuration profile.
	 */
	update(data: LinodeConfig):Promise<LinodeConfig>
	/**
	 * https://developers.linode.com/api/v4/#operation/deleteLinodeConfig
 *
	 * Deletes the specified Configuration profile from the specified Linode.
	 */
	delete():Promise<any>
}
export interface IDisks {
	/**
	 * https://developers.linode.com/api/v4/#operation/getLinodeDisks
 *
	 * View Disk information for Disks associated with this Linode.
	 */
	list(page?:number): Promise<LinodeResponse<Disk>>
	list(page:number, page_size:number): Promise<LinodeResponse<Disk>>
	list(filter:Filter<DiskFilter>):Promise<LinodeResponse<Disk>>
	list(page:number, filter:Filter<DiskFilter>):Promise<LinodeResponse<Disk>>
	list(page:number, page_size:number, filter:Filter<DiskFilter>):Promise<LinodeResponse<Disk>>
	/**
	 * https://developers.linode.com/api/v4/#operation/addLinodeDisk
 *
	 * Adds a new Disk to a Linode. You can optionally create a Disk from an Image (see [/images](#operation/getImages) for a list of available public images, or use one of your own), and optionally provide a StackScript to deploy with this Disk.
	 */
	create(data: DiskRequest):Promise<Disk>
	/**
	 * https://developers.linode.com/api/v4/#operation/getLinodeDisk
 *
	 * View Disk information for a Disk associated with this Linode.
	 */
	(diskId: number):DisksClass
}
export interface DisksClass {
	/**
	 * https://developers.linode.com/api/v4/#operation/getLinodeDisk
 *
	 * View Disk information for a Disk associated with this Linode.
	 */
	get(): Promise<Disk>
	/**
	 * https://developers.linode.com/api/v4/#operation/updateDisk
 *
	 * Updates a Disk that you have permission to `read_write`.
	 */
	update(data: Disk):Promise<Disk>
	/**
	 * https://developers.linode.com/api/v4/#operation/deleteDisk
 *
	 * Deletes a Disk you have permission to `read_write`.
	 * **Deleting a Disk is a destructive action and cannot be undone.**
	 */
	delete():Promise<any>
	/**
	 * https://developers.linode.com/api/v4/#operation/cloneLinodeDisk
 *
	 * Copies a disk, byte-for-byte, into a new Disk belonging to the same Linode. The Linode must have enough storage space available to accept a new Disk of the same size as this one or this operation will fail.
	 */
	clone():Promise<Disk>
	/**
	 * https://developers.linode.com/api/v4/#operation/resetDiskPassword
 *
	 * Resets the password of a Disk you have permission to `read_write`.
	 */
	password(data: any):Promise<any>
	/**
	 * https://developers.linode.com/api/v4/#operation/resizeDisk
 *
	 * Resizes a Disk you have permission to `read_write`.
	 * The Linode this Disk is attached to must be shut down for resizing to take effect.
	 * If you are resizing the Disk to a smaller size, it cannot be made smaller than what is required by the total size of the files current on the Disk. The Disk must not be in use. If the Disk is in use, the request will succeed but the resize will ultimately fail.
	 */
	resize(data: any):Promise<any>
}
export interface IIps {
	/**
	 * https://developers.linode.com/api/v4/#operation/getLinodeIPs
 *
	 * Returns networking information for a single Linode.
	 */
	get(): Promise<any>
	/**
	 * https://developers.linode.com/api/v4/#operation/addLinodeIP
 *
	 * Allocates a public or private IPv4 address to a Linode. Public IP Addresses, after the one included with each Linode, incur an additional monthly charge. If you need an additional public IP Address you must request one - please [open a support ticket](#operation/createTicket). You may not add more than one private IPv4 address to a single Linode.
	 */
	create(data: any):Promise<IPAddress>
	/**
	 * https://developers.linode.com/api/v4/#operation/getLinodeIP
 *
	 * View information about the specified IP address associated with the specified Linode.
	 */
	(address: string):IpsClass
}
export interface IpsClass {
	/**
	 * https://developers.linode.com/api/v4/#operation/getLinodeIP
 *
	 * View information about the specified IP address associated with the specified Linode.
	 */
	get(): Promise<IPAddress>
	/**
	 * https://developers.linode.com/api/v4/#operation/updateLinodeIP
 *
	 * Updates a particular IP Address associated with this Linode. Only allows setting/resetting reverse DNS.
	 */
	update(data: any):Promise<IPAddress>
	/**
	 * https://developers.linode.com/api/v4/#operation/removeLinodeIP
 *
	 * Deletes a public IPv4 address associated with this Linode. This will fail if it is the Linode's last remaining public IPv4 address. Private IPv4 addresses cannot be removed via this endpoint.
	 */
	delete():Promise<any>
}
export interface IStats {
	/**
	 * https://developers.linode.com/api/v4/#operation/getLinodeStats
 *
	 * Returns CPU, IO, IPv4, and IPv6 statistics for your Linode for the past 24 hours.
	 */
	get(): Promise<LinodeStats>
	/**
	 * https://developers.linode.com/api/v4/#operation/getLinodeStatsByYearMonth
 *
	 * Returns statistics for a specific month. The year/month values must be either a date in the past, or the current month. If the current month, statistics will be retrieved for the past 30 days.
	 */
	stats(month: number, year: number): Promise<LinodeStats>
}
export interface IVolumes {
	/**
	 * https://developers.linode.com/api/v4/#operation/getLinodeVolumes
 *
	 * View Block Storage Volumes attached to this Linode.
	 */
	list(page?:number): Promise<LinodeResponse<Volume>>
	list(page:number, page_size:number): Promise<LinodeResponse<Volume>>
	list(filter:Filter<VolumeFilter>):Promise<LinodeResponse<Volume>>
	list(page:number, filter:Filter<VolumeFilter>):Promise<LinodeResponse<Volume>>
	list(page:number, page_size:number, filter:Filter<VolumeFilter>):Promise<LinodeResponse<Volume>>
}
export interface IKernels {
	/**
	 * https://developers.linode.com/api/v4/#operation/getKernels
 *
	 * Lists available Kernels.
	 */
	list(page?:number): Promise<LinodeResponse<Kernel>>
	list(page:number, page_size:number): Promise<LinodeResponse<Kernel>>
	list(filter:Filter<KernelFilter>):Promise<LinodeResponse<Kernel>>
	list(page:number, filter:Filter<KernelFilter>):Promise<LinodeResponse<Kernel>>
	list(page:number, page_size:number, filter:Filter<KernelFilter>):Promise<LinodeResponse<Kernel>>
	/**
	 * https://developers.linode.com/api/v4/#operation/getKernel
 *
	 * Returns information about a single Kernel.
	 */
	(kernelId: string):KernelsClass
}
export interface KernelsClass {
	/**
	 * https://developers.linode.com/api/v4/#operation/getKernel
 *
	 * Returns information about a single Kernel.
	 */
	get(): Promise<Kernel>
}
export interface IStackscripts {
	/**
	 * https://developers.linode.com/api/v4/#operation/getStackScripts
 *
	 * If the request is not authenticated, only public StackScripts are returned.
	 * For more information on StackScripts, please read our guide: <a target="_top" href="https://linode.com/docs/platform/stackscripts/">Automate Deployment with StackScripts</a>.
	 */
	list(page?:number): Promise<LinodeResponse<StackScript>>
	list(page:number, page_size:number): Promise<LinodeResponse<StackScript>>
	list(filter:Filter<StackScriptFilter>):Promise<LinodeResponse<StackScript>>
	list(page:number, filter:Filter<StackScriptFilter>):Promise<LinodeResponse<StackScript>>
	list(page:number, page_size:number, filter:Filter<StackScriptFilter>):Promise<LinodeResponse<StackScript>>
	/**
	 * https://developers.linode.com/api/v4/#operation/addStackScript
 *
	 * Creates a StackScript in your Account.
	 */
	create(data: any):Promise<StackScript>
	/**
	 * https://developers.linode.com/api/v4/#operation/getStackScript
 *
	 * Returns all of the information about a specified StackScript, including the contents of the script.
	 */
	(stackscriptId: string):StackscriptsClass
}
export interface StackscriptsClass {
	/**
	 * https://developers.linode.com/api/v4/#operation/getStackScript
 *
	 * Returns all of the information about a specified StackScript, including the contents of the script.
	 */
	get(): Promise<StackScript>
	/**
	 * https://developers.linode.com/api/v4/#operation/updateStackScript
 *
	 * Updates a StackScript.
	 * **Once a StackScript is made public, it cannot be made private.**
	 */
	update(data: StackScript):Promise<StackScript>
	/**
	 * https://developers.linode.com/api/v4/#operation/deleteStackScript
 *
	 * Deletes a private StackScript you have permission to `read_write`. You cannot delete a public StackScript.
	 */
	delete():Promise<any>
}
export interface ITypes {
	/**
	 * https://developers.linode.com/api/v4/#operation/getLinodeTypes
 *
	 * Returns collection of Linode Types, including pricing and specifications for each Type. These are used when [creating](#operation/createLinodeInstance) or [resizing](#operation/resizeLinodeInstance) Linodes.
	 */
	list(page?:number): Promise<LinodeResponse<LinodeType>>
	list(page:number, page_size:number): Promise<LinodeResponse<LinodeType>>
	list(filter:Filter<LinodeTypeFilter>):Promise<LinodeResponse<LinodeType>>
	list(page:number, filter:Filter<LinodeTypeFilter>):Promise<LinodeResponse<LinodeType>>
	list(page:number, page_size:number, filter:Filter<LinodeTypeFilter>):Promise<LinodeResponse<LinodeType>>
	/**
	 * https://developers.linode.com/api/v4/#operation/getLinodeType
 *
	 * Returns information about a specific Linode Type, including pricing and specifications. This is used when [creating](#operation/createLinodeInstance) or [resizing](#operation/resizeLinodeInstance) Linodes.
	 */
	(typeId: string):TypesClass
}
export interface TypesClass {
	/**
	 * https://developers.linode.com/api/v4/#operation/getLinodeType
 *
	 * Returns information about a specific Linode Type, including pricing and specifications. This is used when [creating](#operation/createLinodeInstance) or [resizing](#operation/resizeLinodeInstance) Linodes.
	 */
	get(): Promise<LinodeType>
}

//#endregion
//#region longview
export interface ILongview {
	clients:IClients
	subscriptions:ISubscriptions
}
export interface IClients {
	/**
	 * https://developers.linode.com/api/v4/#operation/getLongviewClients
 *
	 * Returns a paginated list of Longview Clients you have access to. Longview Client is used to monitor stats on your Linode with the help of the Longview Client application.
	 */
	list(page?:number): Promise<LinodeResponse<LongviewClient>>
	list(page:number, page_size:number): Promise<LinodeResponse<LongviewClient>>
	list(filter:Filter<LongviewClientFilter>):Promise<LinodeResponse<LongviewClient>>
	list(page:number, filter:Filter<LongviewClientFilter>):Promise<LinodeResponse<LongviewClient>>
	list(page:number, page_size:number, filter:Filter<LongviewClientFilter>):Promise<LinodeResponse<LongviewClient>>
	/**
	 * https://developers.linode.com/api/v4/#operation/createLongviewClient
 *
	 * Creates a Longview Client.  This Client will not begin monitoring the status of your server until you configure the Longview Client application on your Linode using the returning `install_code` and `api_key`.
	 */
	create(data: LongviewClient):Promise<LongviewClient>
	/**
	 * https://developers.linode.com/api/v4/#operation/getLongviewClient
 *
	 * Returns a single Longview Client you can access.
	 */
	(clientId: number):ClientsClass
}
export interface ClientsClass {
	/**
	 * https://developers.linode.com/api/v4/#operation/getLongviewClient
 *
	 * Returns a single Longview Client you can access.
	 */
	get(): Promise<LongviewClient>
	/**
	 * https://developers.linode.com/api/v4/#operation/updateLongviewClient
 *
	 * Updates a Longview Client.  This cannot update how it monitors your server; use the Longview Client application on your Linode for monitoring configuration.
	 */
	update(data: LongviewClient):Promise<LongviewClient>
	/**
	 * https://developers.linode.com/api/v4/#operation/deleteLongviewClient
 *
	 * Deletes a Longview Client from your Account.
	 * **All information stored for this client will be lost.**
	 * This _does not_ uninstall the Longview Client application for your Linode - you must do that manually.
	 */
	delete():Promise<any>
}
export interface ISubscriptions {
	/**
	 * https://developers.linode.com/api/v4/#operation/getLongviewSubscriptions
 *
	 * Returns a paginated list of available Longview Subscriptions. This is a public endpoint and requires no authentication.
	 */
	list(page?:number): Promise<LinodeResponse<LongviewSubscription>>
	list(page:number, page_size:number): Promise<LinodeResponse<LongviewSubscription>>
	/**
	 * https://developers.linode.com/api/v4/#operation/getLongviewSubscription
 *
	 * Returns a single LongviewSubscription object.  This is a public endpoint and requires no authentication.
	 */
	(subscriptionId: string):SubscriptionsClass
}
export interface SubscriptionsClass {
	/**
	 * https://developers.linode.com/api/v4/#operation/getLongviewSubscription
 *
	 * Returns a single LongviewSubscription object.  This is a public endpoint and requires no authentication.
	 */
	get(): Promise<LongviewSubscription>
}

//#endregion
//#region managed
export interface IManaged {
	contacts:IContacts
	credentials:ICredentials
	issues:IIssues
	linodeSettings:ILinodeSettings
	services:IServices
}
export interface IContacts {
	/**
	 * https://developers.linode.com/api/v4/#operation/getManagedContacts
 *
	 * Returns a paginated list of Managed Contacts on your Account.
	 */
	list(page?:number): Promise<LinodeResponse<ManagedContact>>
	list(page:number, page_size:number): Promise<LinodeResponse<ManagedContact>>
	list(filter:Filter<ManagedContactFilter>):Promise<LinodeResponse<ManagedContact>>
	list(page:number, filter:Filter<ManagedContactFilter>):Promise<LinodeResponse<ManagedContact>>
	list(page:number, page_size:number, filter:Filter<ManagedContactFilter>):Promise<LinodeResponse<ManagedContact>>
	/**
	 * https://developers.linode.com/api/v4/#operation/createManagedContact
 *
	 * Creates a Managed Contact.  A Managed Contact is someone Linode special forces can contact in the course of attempting to resolve an issue with a Managed Service.
	 */
	create(data: ManagedContact):Promise<ManagedContact>
	/**
	 * https://developers.linode.com/api/v4/#operation/getManagedContact
 *
	 * Returns a single Managed Contact.
	 */
	(contactId: number):ContactsClass
}
export interface ContactsClass {
	/**
	 * https://developers.linode.com/api/v4/#operation/getManagedContact
 *
	 * Returns a single Managed Contact.
	 */
	get(): Promise<ManagedContact>
	/**
	 * https://developers.linode.com/api/v4/#operation/updateManagedContact
 *
	 * Updates information about a Managed Contact.
	 */
	update(data: ManagedContact):Promise<ManagedContact>
	/**
	 * https://developers.linode.com/api/v4/#operation/deleteManagedContact
 *
	 * Deletes a Managed Contact.
	 */
	delete():Promise<any>
}
export interface ICredentials {
	/**
	 * https://developers.linode.com/api/v4/#operation/getManagedCredentials
 *
	 * Returns a paginated list of Managed Credentials on your Account.
	 */
	list(page?:number): Promise<LinodeResponse<ManagedCredential>>
	list(page:number, page_size:number): Promise<LinodeResponse<ManagedCredential>>
	/**
	 * https://developers.linode.com/api/v4/#operation/createManagedCredential
 *
	 * Creates a Managed Credential. A Managed Credential is stored securely to allow Linode special forces to access your Managed Services and resolve issues.
	 */
	create(data: any):Promise<ManagedCredential>
	/**
	 * https://developers.linode.com/api/v4/#operation/getManagedCredential
 *
	 * Returns a single Managed Credential.
	 */
	(credentialId: number):CredentialsClass
}
export interface CredentialsClass {
	/**
	 * https://developers.linode.com/api/v4/#operation/getManagedCredential
 *
	 * Returns a single Managed Credential.
	 */
	get(): Promise<ManagedCredential>
	/**
	 * https://developers.linode.com/api/v4/#operation/updateManagedCredential
 *
	 * Updates information about a Managed Credential.
	 */
	update(data: ManagedCredential):Promise<ManagedCredential>
	/**
	 * https://developers.linode.com/api/v4/#operation/deleteManagedCredential
 *
	 * Deletes a Managed Credential.  Linode special forces will no longer have access to this Credential when attempting to resolve issues.
	 */
	revoke():Promise<any>
}
export interface IIssues {
	/**
	 * https://developers.linode.com/api/v4/#operation/getManagedIssues
 *
	 * Returns a paginated list of recent and ongoing issues detected on your Managed Services.
	 */
	list(page?:number): Promise<LinodeResponse<ManagedIssue>>
	list(page:number, page_size:number): Promise<LinodeResponse<ManagedIssue>>
	/**
	 * https://developers.linode.com/api/v4/#operation/getManagedIssue
 *
	 * Returns a single Issue that is impacting or did impact one of your Managed Services.
	 */
	(issueId: number):IssuesClass
}
export interface IssuesClass {
	/**
	 * https://developers.linode.com/api/v4/#operation/getManagedIssue
 *
	 * Returns a single Issue that is impacting or did impact one of your Managed Services.
	 */
	get(): Promise<ManagedIssue>
}
export interface ILinodeSettings {
	/**
	 * https://developers.linode.com/api/v4/#operation/getManagedLinodeSettings
 *
	 * Returns a paginated list of Managed Settings for your Linodes. There will be one entry per Linode on your Account.
	 */
	list(page?:number): Promise<LinodeResponse<ManagedLinodeSettings>>
	list(page:number, page_size:number): Promise<LinodeResponse<ManagedLinodeSettings>>
	/**
	 * https://developers.linode.com/api/v4/#operation/getManagedLinodeSetting
 *
	 * Returns a single Linode's Managed settings.
	 */
	(linodeId: number):LinodeSettingsClass
}
export interface LinodeSettingsClass {
	/**
	 * https://developers.linode.com/api/v4/#operation/getManagedLinodeSetting
 *
	 * Returns a single Linode's Managed settings.
	 */
	get(): Promise<ManagedLinodeSettings>
	/**
	 * https://developers.linode.com/api/v4/#operation/updateManagedLinodeSetting
 *
	 * Updates a single Linode's Managed settings.
	 */
	update(data: ManagedLinodeSettings):Promise<ManagedLinodeSettings>
}
export interface IServices {
	/**
	 * https://developers.linode.com/api/v4/#operation/getManagedServices
 *
	 * Returns a paginated list of Managed Services on your Account. These are the services Linode Managed is monitoring and will report and attempt to resolve issues with.
	 */
	list(page?:number): Promise<LinodeResponse<ManagedService>>
	list(page:number, page_size:number): Promise<LinodeResponse<ManagedService>>
	/**
	 * https://developers.linode.com/api/v4/#operation/createManagedService
 *
	 * Creates a Managed Service. Linode Managed will being monitoring this service and reporting and attempting to resolve any Issues.
	 */
	create(data: any):Promise<ManagedService>
	/**
	 * https://developers.linode.com/api/v4/#operation/getManagedService
 *
	 * Returns information about a single Managed Service on your Account.
	 */
	(serviceId: number):ServicesClass
}
export interface ServicesClass {
	/**
	 * https://developers.linode.com/api/v4/#operation/getManagedService
 *
	 * Returns information about a single Managed Service on your Account.
	 */
	get(): Promise<ManagedService>
	/**
	 * https://developers.linode.com/api/v4/#operation/updateManagedService
 *
	 * Updates information about a Managed Service.
	 */
	update(data: ManagedService):Promise<ManagedService>
	/**
	 * https://developers.linode.com/api/v4/#operation/deleteManagedService
 *
	 * Deletes a Managed Service.  This service will no longer be monitored by Linode Managed.
	 */
	delete():Promise<any>
	/**
	 * https://developers.linode.com/api/v4/#operation/disableManagedService
 *
	 * Temporarily disables monitoring of a Managed Service.
	 */
	disable():Promise<ManagedService>
	/**
	 * https://developers.linode.com/api/v4/#operation/enableManagedService
 *
	 * Enables monitoring of a Managed Service.
	 */
	enable():Promise<ManagedService>
}

//#endregion
//#region networking
export interface INetworking {
	ips:INetworkingIps
	ipv4:IIpv4
	ipv6:IIpv6
}
export interface INetworkingIps {
	/**
	 * https://developers.linode.com/api/v4/#operation/getIPs
 *
	 * Returns a paginated list of IP Addresses on your Account, excluding private addresses.
	 */
	list(page?:number): Promise<LinodeResponse<IPAddress>>
	list(page:number, page_size:number): Promise<LinodeResponse<IPAddress>>
	list(filter:Filter<IPAddressFilter>):Promise<LinodeResponse<IPAddress>>
	list(page:number, filter:Filter<IPAddressFilter>):Promise<LinodeResponse<IPAddress>>
	list(page:number, page_size:number, filter:Filter<IPAddressFilter>):Promise<LinodeResponse<IPAddress>>
	/**
	 * https://developers.linode.com/api/v4/#operation/allocateIP
 *
	 * Allocates a new IPv4 Address on your Account. The Linode must be configured to support additional addresses - please [open a support ticket](#operation/createTicket) requesting additional addresses before attempting allocation.
	 */
	create(data: any):Promise<IPAddress>
	/**
	 * https://developers.linode.com/api/v4/#operation/getIP
 *
	 * Returns information about a single IP Address on your Account.
	 */
	(address: string):NetworkingIpsClass
}
export interface NetworkingIpsClass {
	/**
	 * https://developers.linode.com/api/v4/#operation/getIP
 *
	 * Returns information about a single IP Address on your Account.
	 */
	get(): Promise<IPAddress>
	/**
	 * https://developers.linode.com/api/v4/#operation/updateIP
 *
	 * Sets RDNS on an IP Address. Forward DNS must already be set up for reverse DNS to be applied. If you set the RDNS to `null` for public IPv4 addresses, it will be reset to the default _members.linode.com_ RDNS value.
	 */
	update(data: IPAddress):Promise<IPAddress>
}
export interface IIpv4 {
	/**
	 * https://developers.linode.com/api/v4/#operation/assignIPs
 *
	 * Assign multiple IPs to multiple Linodes in one Region. This allows swapping, shuffling, or otherwise reorganizing IPv4 Addresses to your Linodes.  When the assignment is finished, all Linodes must end up with at least one public IPv4 and no more than one private IPv4.
	 */
	assign(data: any):Promise<any>
	/**
	 * https://developers.linode.com/api/v4/#operation/shareIPs
 *
	 * Configure shared IPs.  A shared IP may be brought up on a Linode other than the one it lists in its response.  This can be used to allow one Linode to begin serving requests should another become unresponsive.
	 */
	share(data: any):Promise<any>
}
export interface IIpv6 {
	pools:IPools
	ranges:IRanges
}
export interface IPools {
	/**
	 * https://developers.linode.com/api/v4/#operation/getIPv6Pools
 *
	 * Displays the IPv6 pools on your Account.
	 */
	list(page?:number): Promise<LinodeResponse<IPv6Pool>>
	list(page:number, page_size:number): Promise<LinodeResponse<IPv6Pool>>
}
export interface IRanges {
	/**
	 * https://developers.linode.com/api/v4/#operation/getIPv6Ranges
 *
	 * Displays the IPv6 ranges on your Account.
	 */
	list(page?:number): Promise<LinodeResponse<IPv6Range>>
	list(page:number, page_size:number): Promise<LinodeResponse<IPv6Range>>
}

//#endregion
//#region nodebalancers
export interface INodebalancers {
	/**
	 * https://developers.linode.com/api/v4/#operation/getNodeBalancers
 *
	 * Returns a paginated list of NodeBalancers you have access to.
	 */
	list(page?:number): Promise<LinodeResponse<NodeBalancer>>
	list(page:number, page_size:number): Promise<LinodeResponse<NodeBalancer>>
	list(filter:Filter<NodeBalancerFilter>):Promise<LinodeResponse<NodeBalancer>>
	list(page:number, filter:Filter<NodeBalancerFilter>):Promise<LinodeResponse<NodeBalancer>>
	list(page:number, page_size:number, filter:Filter<NodeBalancerFilter>):Promise<LinodeResponse<NodeBalancer>>
	/**
	 * https://developers.linode.com/api/v4/#operation/createNodeBalancer
 *
	 * Creates a NodeBalancer in the requested Region. This NodeBalancer will not start serving requests until it is configured.
	 */
	create(data: any):Promise<NodeBalancer>
	/**
	 * https://developers.linode.com/api/v4/#operation/getNodeBalancer
 *
	 * Returns a single NodeBalancer you can access.
	 */
	(nodeBalancerId: number):NodebalancersClass
}
export interface NodebalancersClass {
	/**
	 * https://developers.linode.com/api/v4/#operation/getNodeBalancer
 *
	 * Returns a single NodeBalancer you can access.
	 */
	get(): Promise<NodeBalancer>
	/**
	 * https://developers.linode.com/api/v4/#operation/updateNodeBalancer
 *
	 * Updates information about a NodeBalancer you can access.
	 */
	update(data: NodeBalancer):Promise<NodeBalancer>
	/**
	 * https://developers.linode.com/api/v4/#operation/deleteNodeBalancer
 *
	 * Deletes a NodeBalancer.
	 * **This is a destructive action and cannot be undone.**
	 * Deleting a NodeBalancer will also delete all associated Configs and Nodes, although the backend servers represented by the Nodes will not be changed or removed. Deleting a NodeBalancer will cause you to lose access to the IP Addresses assigned to this NodeBalancer.
	 */
	delete():Promise<any>
	/**
	 * Returns detailed statistics about the requested NodeBalancer.
	 */
	stats(): Promise<NodeBalancerStats>
	configs:INodebalancersConfigs
}
export interface INodebalancersConfigs {
	/**
	 * https://developers.linode.com/api/v4/#operation/getNodeBalancerConfigs
 *
	 * Returns a paginated list of NodeBalancer Configs associated with this NodeBalancer. NodeBalancer Configs represent individual ports that this NodeBalancer will accept traffic on, one Config per port.
	 * For example, if you wanted to accept standard HTTP traffic, you would need a Config listening on port 80.
	 */
	list(page?:number): Promise<LinodeResponse<NodeBalancerConfig>>
	list(page:number, page_size:number): Promise<LinodeResponse<NodeBalancerConfig>>
	/**
	 * https://developers.linode.com/api/v4/#operation/createNodeBalancerConfig
 *
	 * Creates a NodeBalancer Config, which allows the NodeBalancer to accept traffic on a new port. You will need to add NodeBalancer Nodes to the new Config before it can actually serve requests.
	 */
	create(data: NodeBalancerConfig):Promise<NodeBalancerConfig>
	/**
	 * https://developers.linode.com/api/v4/#operation/getNodeBalancerConfig
 *
	 * Returns configuration information for a single port of this NodeBalancer.
	 */
	(configId: number):NodebalancersConfigsClass
}
export interface NodebalancersConfigsClass {
	/**
	 * https://developers.linode.com/api/v4/#operation/getNodeBalancerConfig
 *
	 * Returns configuration information for a single port of this NodeBalancer.
	 */
	get(): Promise<NodeBalancerConfig>
	/**
	 * https://developers.linode.com/api/v4/#operation/updateNodeBalancerConfig
 *
	 * Updates the configuration for a single port on a NodeBalancer.
	 */
	update(data: NodeBalancerConfig):Promise<NodeBalancerConfig>
	/**
	 * https://developers.linode.com/api/v4/#operation/deleteNodeBalancerConfig
 *
	 * Deletes the Config for a port of this NodeBalancer.
	 * **This cannot be undone.**
	 * Once completed, this NodeBalancer will no longer respond to requests on the given port. This also deletes all associated NodeBalancerNodes, but the Linodes they were routing traffic to will be unchanged and will not be removed.
	 */
	delete():Promise<any>
	/**
	 * https://developers.linode.com/api/v4/#operation/rebuildNodeBalancerConfig
 *
	 * Rebuilds a NodeBalancer Config and its Nodes that you have permission to modify.
	 */
	rebuild(data: any):Promise<NodeBalancer>
	nodes:INodes
}
export interface INodes {
	/**
	 * https://developers.linode.com/api/v4/#operation/getNodeBalancerConfigNodes
 *
	 * Returns a paginated list of NodeBalancer nodes associated with this Config. These are the backends that will be sent traffic for this port.
	 */
	list(page?:number): Promise<LinodeResponse<NodeBalancerNode>>
	list(page:number, page_size:number): Promise<LinodeResponse<NodeBalancerNode>>
	/**
	 * https://developers.linode.com/api/v4/#operation/createNodeBalancerNode
 *
	 * Creates a NodeBalancer Node, a backend that can accept traffic for this NodeBalancer Config. Nodes are routed requests on the configured port based on their status.
	 */
	create(data: any):Promise<NodeBalancerNode>
	/**
	 * https://developers.linode.com/api/v4/#operation/getNodeBalancerNode
 *
	 * Returns information about a single Node, a backend for this NodeBalancer's configured port.
	 */
	(nodeId: number):NodesClass
}
export interface NodesClass {
	/**
	 * https://developers.linode.com/api/v4/#operation/getNodeBalancerNode
 *
	 * Returns information about a single Node, a backend for this NodeBalancer's configured port.
	 */
	get(): Promise<NodeBalancerNode>
	/**
	 * https://developers.linode.com/api/v4/#operation/updateNodeBalancerNode
 *
	 * Updates information about a Node, a backend for this NodeBalancer's configured port.
	 */
	update(data: NodeBalancerNode):Promise<NodeBalancerNode>
	/**
	 * https://developers.linode.com/api/v4/#operation/deleteNodeBalancerConfigNode
 *
	 * Deletes a Node from this Config. This backend will no longer receive traffic for the configured port of this NodeBalancer.
	 * This does not change or remove the Linode whose address was used in the creation of this Node.
	 */
	delete():Promise<any>
}

//#endregion
//#region profile
export interface IProfile {
	/**
	 * https://developers.linode.com/api/v4/#operation/getProfile
 *
	 * Returns information about the current User. This can be used to see who is acting in applications where more than one token is managed. For example, in third-party OAuth applications.
	 * This endpoint is always accessible, no matter what OAuth scopes the acting token has.
	 */
	get(): Promise<Profile>
	/**
	 * https://developers.linode.com/api/v4/#operation/updateProfile
 *
	 * Update information in your Profile.  This endpoint requires the "account:read_write" OAuth Scope.
	 */
	update(data: Profile):Promise<Profile>
	/**
	 * https://developers.linode.com/api/v4/#operation/getProfileGrants
 *
	 * This returns a GrantsResponse describing what the acting User has been granted access to.  For unrestricted users, this will return a  204 and no body because unrestricted users have access to everything without grants.  This will not return information about entities you do not have access to.  This endpoint is useful when writing third-party OAuth applications to see what options you should present to the acting User.
	 * For example, if they do not have `global.add_linodes`, you might not display a button to deploy a new Linode.
	 * Any client may access this endpoint; no OAuth scopes are required.
	 */
	grants(): Promise<GrantsResponse>
	/**
	 * https://developers.linode.com/api/v4/#operation/tfaDisable
 *
	 * Disables Two Factor Authentication for your User. Once successful, login attempts from untrusted computers will only require a password before being successful. This is less secure, and is discouraged.
	 */
	tfaDisable():Promise<any>
	/**
	 * https://developers.linode.com/api/v4/#operation/tfaEnable
 *
	 * Generates a Two Factor secret for your User. TFA will not be enabled until you have successfully confirmed the code you were given with [tfa-enable-confirm](#operation/tfaConfirm) (see below). Once enabled, logins from untrusted computers will be required to provide a TFA code before they are successful.
	 */
	tfaEnable():Promise<any>
	/**
	 * https://developers.linode.com/api/v4/#operation/tfaConfirm
 *
	 * Confirms that you can successfully generate Two Factor codes and enables TFA on your Account. Once this is complete, login attempts from untrusted computers will be required to provide a Two Factor code before they are successful.
	 */
	tfaEnableConfirm(data: any):Promise<any>
	apps:IApps
	tokens:ITokens
	devices:IDevices
	sshkeys:ISshkeys
}
export interface IApps {
	/**
	 * https://developers.linode.com/api/v4/#operation/getProfileApps
 *
	 * This is a collection of OAuth apps that you've given access to your Account, and includes the level of access granted.
	 */
	list(page?:number): Promise<LinodeResponse<AuthorizedApp>>
	list(page:number, page_size:number): Promise<LinodeResponse<AuthorizedApp>>
	list(filter:Filter<AuthorizedAppFilter>):Promise<LinodeResponse<AuthorizedApp>>
	list(page:number, filter:Filter<AuthorizedAppFilter>):Promise<LinodeResponse<AuthorizedApp>>
	list(page:number, page_size:number, filter:Filter<AuthorizedAppFilter>):Promise<LinodeResponse<AuthorizedApp>>
	/**
	 * https://developers.linode.com/api/v4/#operation/getProfileApp
 *
	 * Returns information about a single app you've authorized to access your Account.
	 */
	(appId: number):AppsClass
}
export interface AppsClass {
	/**
	 * https://developers.linode.com/api/v4/#operation/getProfileApp
 *
	 * Returns information about a single app you've authorized to access your Account.
	 */
	get(): Promise<AuthorizedApp>
	/**
	 * https://developers.linode.com/api/v4/#operation/deleteProfileApp
 *
	 * Expires this app token. This token may no longer be used to access your Account.
	 */
	delete():Promise<any>
}
export interface ITokens {
	/**
	 * https://developers.linode.com/api/v4/#operation/getPersonalAccessTokens
 *
	 * Returns a paginated list of Personal Access Tokens currently active for your User.
	 */
	list(page?:number): Promise<LinodeResponse<PersonalAccessToken>>
	list(page:number, page_size:number): Promise<LinodeResponse<PersonalAccessToken>>
	list(filter:Filter<PersonalAccessTokenFilter>):Promise<LinodeResponse<PersonalAccessToken>>
	list(page:number, filter:Filter<PersonalAccessTokenFilter>):Promise<LinodeResponse<PersonalAccessToken>>
	list(page:number, page_size:number, filter:Filter<PersonalAccessTokenFilter>):Promise<LinodeResponse<PersonalAccessToken>>
	/**
	 * https://developers.linode.com/api/v4/#operation/createPersonalAccessToken
 *
	 * Creates a Personal Access Token for your User. The raw token will be returned in the response, but will never be returned again afterward so be sure to take note of it. You may create a token with _at most_ the scopes of your current token. The created token will be able to access your Account until the given expiry, or until it is revoked.
	 */
	create(data: any):Promise<PersonalAccessToken>
	/**
	 * https://developers.linode.com/api/v4/#operation/getPersonalAccessToken
 *
	 * Returns a single Personal Access Token.
	 */
	(tokenId: number):TokensClass
}
export interface TokensClass {
	/**
	 * https://developers.linode.com/api/v4/#operation/getPersonalAccessToken
 *
	 * Returns a single Personal Access Token.
	 */
	get(): Promise<PersonalAccessToken>
	/**
	 * https://developers.linode.com/api/v4/#operation/updatePersonalAccessToken
 *
	 * Updates a Personal Access Token.
	 */
	update(data: PersonalAccessToken):Promise<PersonalAccessToken>
	/**
	 * https://developers.linode.com/api/v4/#operation/deletePersonalAccessToken
 *
	 * Revokes a Personal Access Token. The token will be invalidated immediately, and requests using that token will fail with a 401. It is possible to revoke access to the token making the request to revoke a token, but keep in mind that doing so could lose you access to the api and require you to create a new token through some other means.
	 */
	delete():Promise<any>
}
export interface IDevices {
	/**
	 * https://developers.linode.com/api/v4/#operation/getDevices
 *
	 * Returns a paginated list of active TrustedDevices for your User. Browsers with an active Remember Me Session are logged into your account until the session expires or is revoked.
	 */
	list(page?:number): Promise<LinodeResponse<TrustedDevice>>
	list(page:number, page_size:number): Promise<LinodeResponse<TrustedDevice>>
	/**
	 * https://developers.linode.com/api/v4/#operation/getTrustedDevice
 *
	 * Returns a single active TrustedDevice for your User.
	 */
	(deviceId: number):ProfileDevicesClass
}
export interface ProfileDevicesClass {
	/**
	 * https://developers.linode.com/api/v4/#operation/getTrustedDevice
 *
	 * Returns a single active TrustedDevice for your User.
	 */
	get(): Promise<TrustedDevice>
	/**
	 * https://developers.linode.com/api/v4/#operation/revokeTrustedDevice
 *
	 * Revoke an active TrustedDevice for your User.  Once a TrustedDevice is revoked, this device will have to log in again before accessing your Linode account.
	 */
	delete():Promise<any>
}
export interface ISshkeys {
	/**
	 * https://developers.linode.com/api/v4/#operation/getSSHKeys
 *
	 * Returns a collection of SSH Keys you've added to your Profile.
	 */
	list(page?:number): Promise<LinodeResponse<SSHKey>>
	list(page:number, page_size:number): Promise<LinodeResponse<SSHKey>>
	/**
	 * https://developers.linode.com/api/v4/#operation/addSSHKey
 *
	 * Adds an SSH Key to your Account profile.
	 */
	create(data: SSHKeyRequest):Promise<SSHKey>
	/**
	 * https://developers.linode.com/api/v4/#operation/getSSHKey
 *
	 * Returns a single SSH Key object identified by `id` that you have access to view.
	 */
	(sshKeyId: number):SshkeysClass
}
export interface SshkeysClass {
	/**
	 * https://developers.linode.com/api/v4/#operation/getSSHKey
 *
	 * Returns a single SSH Key object identified by `id` that you have access to view.
	 */
	get(): Promise<SSHKey>
	/**
	 * https://developers.linode.com/api/v4/#operation/updateSSHKey
 *
	 * Updates an SSH Key that you have permission to `read_write`.
	 */
	update(data: SSHKey):Promise<SSHKey>
	/**
	 * https://developers.linode.com/api/v4/#operation/deleteSSHKey
 *
	 * Deletes an SSH Key you have access to.
	 * **Note:** deleting an SSH Key will *not* remove it from any Linode or Disk that was deployed with `authorized_keys`. In those cases, the keys must be manually deleted on the Linode or Disk. This endpoint will only delete the key's association from your Profile.
	 */
	delete():Promise<any>
}

//#endregion
//#region regions
export interface IRegions {
	/**
	 * https://developers.linode.com/api/v4/#operation/getRegions
 *
	 * Lists the Regions available for Linode services. Not all services are guaranteed to be
	 * available in all Regions.
	 */
	list(page?:number): Promise<LinodeResponse<Region>>
	list(page:number, page_size:number): Promise<LinodeResponse<Region>>
	/**
	 * https://developers.linode.com/api/v4/#operation/getRegion
 *
	 * Returns a single Region.
	 */
	(regionId: string):RegionsClass
}
export interface RegionsClass {
	/**
	 * https://developers.linode.com/api/v4/#operation/getRegion
 *
	 * Returns a single Region.
	 */
	get(): Promise<Region>
}

//#endregion
//#region support
export interface ISupport {
	tickets:ITickets
}
export interface ITickets {
	/**
	 * https://developers.linode.com/api/v4/#operation/getTickets
 *
	 * Returns a collection of Support Tickets on your Account. Support Tickets can be both tickets you open with Linode for support, as well as tickets generated by Linode regarding your Account.
	 * This collection includes all Support Tickets generated on your Account, with open tickets returned first.
	 */
	list(page?:number): Promise<LinodeResponse<SupportTicket>>
	list(page:number, page_size:number): Promise<LinodeResponse<SupportTicket>>
	list(filter:Filter<SupportTicketFilter>):Promise<LinodeResponse<SupportTicket>>
	list(page:number, filter:Filter<SupportTicketFilter>):Promise<LinodeResponse<SupportTicket>>
	list(page:number, page_size:number, filter:Filter<SupportTicketFilter>):Promise<LinodeResponse<SupportTicket>>
	/**
	 * https://developers.linode.com/api/v4/#operation/createTicket
 *
	 * Open a Support Ticket.
	 * Only one of the ID attributes (`linode_id`, `domain_id`, etc.) can be set on a single Support Ticket.
	 */
	create(data: SupportTicketRequest):Promise<SupportTicket>
	/**
	 * https://developers.linode.com/api/v4/#operation/getTicket
 *
	 * Returns a Support Ticket under your Account.
	 */
	(ticketId: number):TicketsClass
}
export interface TicketsClass {
	/**
	 * https://developers.linode.com/api/v4/#operation/getTicket
 *
	 * Returns a Support Ticket under your Account.
	 */
	get(): Promise<SupportTicket>
	/**
	 * https://developers.linode.com/api/v4/#operation/createTicketAttachment
 *
	 * Adds a file attachment to an existing Support Ticket on your Account. File attachments are used to assist our Support team in resolving your Ticket. Examples of attachments are screen shots and text files that provide additional information.
	 * Note: Accepted file extensions include: .gif, .jpg, .jpeg, .pjpg, .pjpeg, .tif, .tiff, .png, .pdf, or .txt.
	 */
	attachments():Promise<any>
	/**
	 * https://developers.linode.com/api/v4/#operation/closeTicket
 *
	 * Closes a Support Ticket you have access to modify.
	 */
	close():Promise<any>
	replies:IReplies
}
export interface IReplies {
	/**
	 * https://developers.linode.com/api/v4/#operation/getTicketReplies
 *
	 * Returns a collection of replies to a Support Ticket on your Account.
	 */
	list(page?:number): Promise<LinodeResponse<SupportTicketReply>>
	list(page:number, page_size:number): Promise<LinodeResponse<SupportTicketReply>>
	/**
	 * https://developers.linode.com/api/v4/#operation/createTicketReply
 *
	 * Adds a reply to an existing Support Ticket.
	 */
	create(data: any):Promise<SupportTicketReply>
}

//#endregion
//#region tags
export interface ITags {
	/**
	 * https://developers.linode.com/api/v4/#operation/getTags
 *
	 * Tags are User-defined labels attached to objects in your Account, such as Linodes. They are used for specifying and grouping attributes of objects that are relevant to the User.
	 * This endpoint returns a paginated list of Tags on your account.
	 */
	list(page?:number): Promise<LinodeResponse<Tag>>
	list(page:number, page_size:number): Promise<LinodeResponse<Tag>>
	/**
	 * https://developers.linode.com/api/v4/#operation/createTag
 *
	 * Creates a new Tag and optionally tags requested objects with it immediately.
	 * **Important**: You must be an unrestricted User in order to add or modify Tags.
	 */
	create(data: any):Promise<Tag>
	/**
	 * https://developers.linode.com/api/v4/#operation/getTaggedObjects
 *
	 * Returns a paginated list of all objects you've tagged with the requested Tag. This is a mixed collection of all object types.
	 */
	(label: string):TagsClass
}
export interface TagsClass {
	/**
	 * https://developers.linode.com/api/v4/#operation/getTaggedObjects
 *
	 * Returns a paginated list of all objects you've tagged with the requested Tag. This is a mixed collection of all object types.
	 */
	get(): Promise<unknown>
	/**
	 * https://developers.linode.com/api/v4/#operation/deleteTag
 *
	 * Remove a Tag from all objects and delete it.
	 * **Important**: You must be an unrestricted User in order to add or modify Tags.
	 */
	delete():Promise<any>
}

//#endregion
//#region volumes
export interface IVolumes {
	/**
	 * https://developers.linode.com/api/v4/#operation/getVolumes
 *
	 * Returns a paginated list of Volumes you have permission to view.
	 */
	list(page?:number): Promise<LinodeResponse<Volume>>
	list(page:number, page_size:number): Promise<LinodeResponse<Volume>>
	list(filter:Filter<VolumeFilter>):Promise<LinodeResponse<Volume>>
	list(page:number, filter:Filter<VolumeFilter>):Promise<LinodeResponse<Volume>>
	list(page:number, page_size:number, filter:Filter<VolumeFilter>):Promise<LinodeResponse<Volume>>
	/**
	 * https://developers.linode.com/api/v4/#operation/createVolume
 *
	 * Creates a Volume on your Account. In order for this to complete successfully, your User must have the `add_volumes` grant. Creating a new Volume will start accruing additional charges on your account.
	 */
	create(data: any):Promise<Volume>
	/**
	 * https://developers.linode.com/api/v4/#operation/getVolume
 *
	 * Get information about a single Volume.
	 */
	(volumeId: number):VolumesClass
}
export interface VolumesClass {
	/**
	 * https://developers.linode.com/api/v4/#operation/getVolume
 *
	 * Get information about a single Volume.
	 */
	get(): Promise<Volume>
	/**
	 * https://developers.linode.com/api/v4/#operation/updateVolume
 *
	 * Updates a Volume that you have permission to `read_write`.
	 */
	update(data: any):Promise<Volume>
	/**
	 * https://developers.linode.com/api/v4/#operation/deleteVolume
 *
	 * Deletes a Volume you have permission to `read_write`.
	 * **Deleting a Volume is a destructive action and cannot be undone.**
	 * Deleting stops billing for the Volume. You will be billed for time used within
	 * the billing period the Volume was active.
	 */
	delete():Promise<any>
	/**
	 * https://developers.linode.com/api/v4/#operation/attachVolume
 *
	 * Attaches a Volume on your Account to an existing Linode on your Account. In order for this request to complete successfully, your User must have `read_only` or `read_write` permission to the Volume and `read_write` permission to the Linode. Additionally, the Volume and Linode must be located in the same Region.
	 */
	attach(data: any):Promise<Volume>
	/**
	 * https://developers.linode.com/api/v4/#operation/cloneVolume
 *
	 * Creates a Volume on your Account. In order for this request to complete successfully, your User must have the `add_volumes` grant. The new Volume will have the same size and data as the source Volume. Creating a new Volume will incur a charge on your Account.
	 */
	clone(data: any):Promise<any>
	/**
	 * https://developers.linode.com/api/v4/#operation/detachVolume
 *
	 * Detaches a Volume on your Account from a Linode on your Account. In order for this request to complete successfully, your User must have `read_write` access to the Volume and `read_write` access to the Linode.
	 */
	detach():Promise<any>
	/**
	 * https://developers.linode.com/api/v4/#operation/resizeVolume
 *
	 * Resize an existing Volume on your Account. In order for this request to complete successfully, your User must have the `read_write` permissions to the Volume.
	 * * Volumes can only be resized up.
	 */
	resize(data: any):Promise<any>
}

//#endregion
