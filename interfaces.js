"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//#endregion
//#region Enumerations
var BackupType;
(function (BackupType) {
    BackupType["auto"] = "auto";
    BackupType["snapshot"] = "snapshot";
})(BackupType = exports.BackupType || (exports.BackupType = {}));
var BackupStatus;
(function (BackupStatus) {
    BackupStatus["paused"] = "paused";
    BackupStatus["pending"] = "pending";
    BackupStatus["running"] = "running";
    BackupStatus["needsPostProcessing"] = "needsPostProcessing";
    BackupStatus["successful"] = "successful";
    BackupStatus["failed"] = "failed";
    BackupStatus["userAborted"] = "userAborted";
})(BackupStatus = exports.BackupStatus || (exports.BackupStatus = {}));
var DiskStatus;
(function (DiskStatus) {
    DiskStatus["ready"] = "ready";
    DiskStatus["not_ready"] = "not ready";
    DiskStatus["deleting"] = "deleting";
})(DiskStatus = exports.DiskStatus || (exports.DiskStatus = {}));
var DiskFilesystem;
(function (DiskFilesystem) {
    DiskFilesystem["raw"] = "raw";
    DiskFilesystem["swap"] = "swap";
    DiskFilesystem["ext3"] = "ext3";
    DiskFilesystem["ext4"] = "ext4";
    DiskFilesystem["initrd"] = "initrd";
})(DiskFilesystem = exports.DiskFilesystem || (exports.DiskFilesystem = {}));
var DiskRequestFilesystem;
(function (DiskRequestFilesystem) {
    DiskRequestFilesystem["raw"] = "raw";
    DiskRequestFilesystem["swap"] = "swap";
    DiskRequestFilesystem["ext3"] = "ext3";
    DiskRequestFilesystem["ext4"] = "ext4";
    DiskRequestFilesystem["initrd"] = "initrd";
})(DiskRequestFilesystem = exports.DiskRequestFilesystem || (exports.DiskRequestFilesystem = {}));
var DomainType;
(function (DomainType) {
    DomainType["master"] = "master";
    DomainType["slave"] = "slave";
})(DomainType = exports.DomainType || (exports.DomainType = {}));
var DomainStatus;
(function (DomainStatus) {
    DomainStatus["disabled"] = "disabled";
    DomainStatus["active"] = "active";
    DomainStatus["edit_mode"] = "edit_mode";
    DomainStatus["has_errors"] = "has_errors";
})(DomainStatus = exports.DomainStatus || (exports.DomainStatus = {}));
var DomainRecordType;
(function (DomainRecordType) {
    DomainRecordType["A"] = "A";
    DomainRecordType["AAAA"] = "AAAA";
    DomainRecordType["NS"] = "NS";
    DomainRecordType["MX"] = "MX";
    DomainRecordType["CNAME"] = "CNAME";
    DomainRecordType["TXT"] = "TXT";
    DomainRecordType["SRV"] = "SRV";
    DomainRecordType["PTR"] = "PTR";
    DomainRecordType["CAA"] = "CAA";
})(DomainRecordType = exports.DomainRecordType || (exports.DomainRecordType = {}));
var EventAction;
(function (EventAction) {
    EventAction["account_update"] = "account_update";
    EventAction["account_settings_update"] = "account_settings_update";
    EventAction["backups_enable"] = "backups_enable";
    EventAction["backups_cancel"] = "backups_cancel";
    EventAction["backups_restore"] = "backups_restore";
    EventAction["community_question_reply"] = "community_question_reply";
    EventAction["community_like"] = "community_like";
    EventAction["credit_card_updated"] = "credit_card_updated";
    EventAction["disk_create"] = "disk_create";
    EventAction["disk_delete"] = "disk_delete";
    EventAction["disk_update"] = "disk_update";
    EventAction["disk_duplicate"] = "disk_duplicate";
    EventAction["disk_imagize"] = "disk_imagize";
    EventAction["disk_resize"] = "disk_resize";
    EventAction["dns_record_create"] = "dns_record_create";
    EventAction["dns_record_delete"] = "dns_record_delete";
    EventAction["dns_record_update"] = "dns_record_update";
    EventAction["dns_zone_create"] = "dns_zone_create";
    EventAction["dns_zone_delete"] = "dns_zone_delete";
    EventAction["dns_zone_update"] = "dns_zone_update";
    EventAction["image_delete"] = "image_delete";
    EventAction["image_update"] = "image_update";
    EventAction["linode_addip"] = "linode_addip";
    EventAction["linode_boot"] = "linode_boot";
    EventAction["linode_clone"] = "linode_clone";
    EventAction["linode_create"] = "linode_create";
    EventAction["linode_delete"] = "linode_delete";
    EventAction["linode_update"] = "linode_update";
    EventAction["linode_deleteip"] = "linode_deleteip";
    EventAction["linode_migrate"] = "linode_migrate";
    EventAction["linode_mutate"] = "linode_mutate";
    EventAction["linode_reboot"] = "linode_reboot";
    EventAction["linode_rebuild"] = "linode_rebuild";
    EventAction["linode_resize"] = "linode_resize";
    EventAction["linode_shutdown"] = "linode_shutdown";
    EventAction["linode_snapshot"] = "linode_snapshot";
    EventAction["linode_config_create"] = "linode_config_create";
    EventAction["linode_config_delete"] = "linode_config_delete";
    EventAction["linode_config_update"] = "linode_config_update";
    EventAction["longviewclient_create"] = "longviewclient_create";
    EventAction["longviewclient_delete"] = "longviewclient_delete";
    EventAction["longviewclient_update"] = "longviewclient_update";
    EventAction["managed_disabled"] = "managed_disabled";
    EventAction["managed_enabled"] = "managed_enabled";
    EventAction["managed_service_create"] = "managed_service_create";
    EventAction["managed_service_delete"] = "managed_service_delete";
    EventAction["nodebalancer_create"] = "nodebalancer_create";
    EventAction["nodebalancer_delete"] = "nodebalancer_delete";
    EventAction["nodebalancer_update"] = "nodebalancer_update";
    EventAction["nodebalancer_config_create"] = "nodebalancer_config_create";
    EventAction["nodebalancer_config_delete"] = "nodebalancer_config_delete";
    EventAction["nodebalancer_config_update"] = "nodebalancer_config_update";
    EventAction["password_reset"] = "password_reset";
    EventAction["payment_submitted"] = "payment_submitted";
    EventAction["stackscript_create"] = "stackscript_create";
    EventAction["stackscript_delete"] = "stackscript_delete";
    EventAction["stackscript_update"] = "stackscript_update";
    EventAction["stackscript_publicize"] = "stackscript_publicize";
    EventAction["stackscript_revise"] = "stackscript_revise";
    EventAction["tfa_disabled"] = "tfa_disabled";
    EventAction["tfa_enabled"] = "tfa_enabled";
    EventAction["ticket_attachment_upload"] = "ticket_attachment_upload";
    EventAction["ticket_create"] = "ticket_create";
    EventAction["ticket_update"] = "ticket_update";
    EventAction["user_ssh_key_add"] = "user_ssh_key_add";
    EventAction["user_ssh_key_delete"] = "user_ssh_key_delete";
    EventAction["user_ssh_key_update"] = "user_ssh_key_update";
    EventAction["volume_attach"] = "volume_attach";
    EventAction["volume_clone"] = "volume_clone";
    EventAction["volume_create"] = "volume_create";
    EventAction["volume_delete"] = "volume_delete";
    EventAction["volume_update"] = "volume_update";
    EventAction["volume_detach"] = "volume_detach";
    EventAction["volume_resize"] = "volume_resize";
})(EventAction = exports.EventAction || (exports.EventAction = {}));
var EventStatus;
(function (EventStatus) {
    EventStatus["failed"] = "failed";
    EventStatus["finished"] = "finished";
    EventStatus["notification"] = "notification";
    EventStatus["scheduled"] = "scheduled";
    EventStatus["started"] = "started";
})(EventStatus = exports.EventStatus || (exports.EventStatus = {}));
var GrantPermissions;
(function (GrantPermissions) {
    GrantPermissions["read_only"] = "read_only";
    GrantPermissions["read_write"] = "read_write";
})(GrantPermissions = exports.GrantPermissions || (exports.GrantPermissions = {}));
var ImagePrivateType;
(function (ImagePrivateType) {
    ImagePrivateType["manual"] = "manual";
    ImagePrivateType["automatic"] = "automatic";
})(ImagePrivateType = exports.ImagePrivateType || (exports.ImagePrivateType = {}));
var ImagePublicType;
(function (ImagePublicType) {
    ImagePublicType["manual"] = "manual";
    ImagePublicType["automatic"] = "automatic";
})(ImagePublicType = exports.ImagePublicType || (exports.ImagePublicType = {}));
var InvoiceItemType;
(function (InvoiceItemType) {
    InvoiceItemType["hourly"] = "hourly";
    InvoiceItemType["prepay"] = "prepay";
    InvoiceItemType["misc"] = "misc";
})(InvoiceItemType = exports.InvoiceItemType || (exports.InvoiceItemType = {}));
var IPAddressType;
(function (IPAddressType) {
    IPAddressType["ipv4"] = "ipv4";
    IPAddressType["ipv6"] = "ipv6";
    IPAddressType["ipv6_pool"] = "ipv6/pool";
    IPAddressType["ipv6_range"] = "ipv6/range";
})(IPAddressType = exports.IPAddressType || (exports.IPAddressType = {}));
var KernelArchitecture;
(function (KernelArchitecture) {
    KernelArchitecture["x86_64"] = "x86_64";
    KernelArchitecture["i386"] = "i386";
})(KernelArchitecture = exports.KernelArchitecture || (exports.KernelArchitecture = {}));
var LinodeStatus;
(function (LinodeStatus) {
    LinodeStatus["running"] = "running";
    LinodeStatus["offline"] = "offline";
    LinodeStatus["booting"] = "booting";
    LinodeStatus["rebooting"] = "rebooting";
    LinodeStatus["shutting_down"] = "shutting_down";
    LinodeStatus["provisioning"] = "provisioning";
    LinodeStatus["deleting"] = "deleting";
    LinodeStatus["migrating"] = "migrating";
    LinodeStatus["rebuilding"] = "rebuilding";
    LinodeStatus["cloning"] = "cloning";
    LinodeStatus["restoring"] = "restoring";
})(LinodeStatus = exports.LinodeStatus || (exports.LinodeStatus = {}));
var LinodeHypervisor;
(function (LinodeHypervisor) {
    LinodeHypervisor["kvm"] = "kvm";
})(LinodeHypervisor = exports.LinodeHypervisor || (exports.LinodeHypervisor = {}));
var LinodeConfigRunLevel;
(function (LinodeConfigRunLevel) {
    LinodeConfigRunLevel["default"] = "default";
    LinodeConfigRunLevel["single"] = "single";
    LinodeConfigRunLevel["binbash"] = "binbash";
})(LinodeConfigRunLevel = exports.LinodeConfigRunLevel || (exports.LinodeConfigRunLevel = {}));
var LinodeConfigVirtMode;
(function (LinodeConfigVirtMode) {
    LinodeConfigVirtMode["paravirt"] = "paravirt";
    LinodeConfigVirtMode["fullvirt"] = "fullvirt";
})(LinodeConfigVirtMode = exports.LinodeConfigVirtMode || (exports.LinodeConfigVirtMode = {}));
var LinodeTypeClass;
(function (LinodeTypeClass) {
    LinodeTypeClass["nanode"] = "nanode";
    LinodeTypeClass["standard"] = "standard";
    LinodeTypeClass["dedicated"] = "dedicated";
    LinodeTypeClass["highmem"] = "highmem";
})(LinodeTypeClass = exports.LinodeTypeClass || (exports.LinodeTypeClass = {}));
var ManagedServiceStatus;
(function (ManagedServiceStatus) {
    ManagedServiceStatus["disabled"] = "disabled";
    ManagedServiceStatus["pending"] = "pending";
    ManagedServiceStatus["ok"] = "ok";
    ManagedServiceStatus["problem"] = "problem";
})(ManagedServiceStatus = exports.ManagedServiceStatus || (exports.ManagedServiceStatus = {}));
var ManagedServiceServiceType;
(function (ManagedServiceServiceType) {
    ManagedServiceServiceType["url"] = "url";
    ManagedServiceServiceType["tcp"] = "tcp";
})(ManagedServiceServiceType = exports.ManagedServiceServiceType || (exports.ManagedServiceServiceType = {}));
var NodeBalancerConfigProtocol;
(function (NodeBalancerConfigProtocol) {
    NodeBalancerConfigProtocol["http"] = "http";
    NodeBalancerConfigProtocol["https"] = "https";
    NodeBalancerConfigProtocol["tcp"] = "tcp";
})(NodeBalancerConfigProtocol = exports.NodeBalancerConfigProtocol || (exports.NodeBalancerConfigProtocol = {}));
var NodeBalancerConfigAlgorithm;
(function (NodeBalancerConfigAlgorithm) {
    NodeBalancerConfigAlgorithm["roundrobin"] = "roundrobin";
    NodeBalancerConfigAlgorithm["leastconn"] = "leastconn";
    NodeBalancerConfigAlgorithm["source"] = "source";
})(NodeBalancerConfigAlgorithm = exports.NodeBalancerConfigAlgorithm || (exports.NodeBalancerConfigAlgorithm = {}));
var NodeBalancerConfigStickiness;
(function (NodeBalancerConfigStickiness) {
    NodeBalancerConfigStickiness["none"] = "none";
    NodeBalancerConfigStickiness["table"] = "table";
    NodeBalancerConfigStickiness["http_cookie"] = "http_cookie";
})(NodeBalancerConfigStickiness = exports.NodeBalancerConfigStickiness || (exports.NodeBalancerConfigStickiness = {}));
var NodeBalancerConfigCheck;
(function (NodeBalancerConfigCheck) {
    NodeBalancerConfigCheck["none"] = "none";
    NodeBalancerConfigCheck["connection"] = "connection";
    NodeBalancerConfigCheck["http"] = "http";
    NodeBalancerConfigCheck["http_body"] = "http_body";
})(NodeBalancerConfigCheck = exports.NodeBalancerConfigCheck || (exports.NodeBalancerConfigCheck = {}));
var NodeBalancerConfigCipherSuite;
(function (NodeBalancerConfigCipherSuite) {
    NodeBalancerConfigCipherSuite["recommended"] = "recommended";
    NodeBalancerConfigCipherSuite["legacy"] = "legacy";
})(NodeBalancerConfigCipherSuite = exports.NodeBalancerConfigCipherSuite || (exports.NodeBalancerConfigCipherSuite = {}));
var NodeBalancerNodeStatus;
(function (NodeBalancerNodeStatus) {
    NodeBalancerNodeStatus["unknown"] = "unknown";
    NodeBalancerNodeStatus["UP"] = "UP";
    NodeBalancerNodeStatus["DOWN"] = "DOWN";
})(NodeBalancerNodeStatus = exports.NodeBalancerNodeStatus || (exports.NodeBalancerNodeStatus = {}));
var NodeBalancerNodeMode;
(function (NodeBalancerNodeMode) {
    NodeBalancerNodeMode["accept"] = "accept";
    NodeBalancerNodeMode["reject"] = "reject";
    NodeBalancerNodeMode["drain"] = "drain";
    NodeBalancerNodeMode["backup"] = "backup";
})(NodeBalancerNodeMode = exports.NodeBalancerNodeMode || (exports.NodeBalancerNodeMode = {}));
var NotificationType;
(function (NotificationType) {
    NotificationType["migration_scheduled"] = "migration_scheduled";
    NotificationType["migration_imminent"] = "migration_imminent";
    NotificationType["migration_pending"] = "migration_pending";
    NotificationType["reboot_scheduled"] = "reboot_scheduled";
    NotificationType["outage"] = "outage";
    NotificationType["payment_due"] = "payment_due";
    NotificationType["ticket_important"] = "ticket_important";
    NotificationType["ticket_abuse"] = "ticket_abuse";
    NotificationType["notice"] = "notice";
    NotificationType["maintenance"] = "maintenance";
})(NotificationType = exports.NotificationType || (exports.NotificationType = {}));
var NotificationSeverity;
(function (NotificationSeverity) {
    NotificationSeverity["minor"] = "minor";
    NotificationSeverity["major"] = "major";
    NotificationSeverity["critical"] = "critical";
})(NotificationSeverity = exports.NotificationSeverity || (exports.NotificationSeverity = {}));
var OAuthClientStatus;
(function (OAuthClientStatus) {
    OAuthClientStatus["active"] = "active";
    OAuthClientStatus["disabled"] = "disabled";
    OAuthClientStatus["suspended"] = "suspended";
})(OAuthClientStatus = exports.OAuthClientStatus || (exports.OAuthClientStatus = {}));
var ProfileLishAuthMethod;
(function (ProfileLishAuthMethod) {
    ProfileLishAuthMethod["password_keys"] = "password_keys";
    ProfileLishAuthMethod["keys_only"] = "keys_only";
    ProfileLishAuthMethod["disabled"] = "disabled";
})(ProfileLishAuthMethod = exports.ProfileLishAuthMethod || (exports.ProfileLishAuthMethod = {}));
var SupportTicketStatus;
(function (SupportTicketStatus) {
    SupportTicketStatus["closed"] = "closed";
    SupportTicketStatus["new"] = "new";
    SupportTicketStatus["open"] = "open";
})(SupportTicketStatus = exports.SupportTicketStatus || (exports.SupportTicketStatus = {}));
var VolumeStatus;
(function (VolumeStatus) {
    VolumeStatus["creating"] = "creating";
    VolumeStatus["active"] = "active";
    VolumeStatus["resizing"] = "resizing";
    VolumeStatus["contact_support"] = "contact_support";
})(VolumeStatus = exports.VolumeStatus || (exports.VolumeStatus = {}));
//#endregion
//# sourceMappingURL=interfaces.js.map