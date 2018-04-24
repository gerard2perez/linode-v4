export declare enum DomainType {
    master = "master",
    slave = "slave",
}
export declare enum DomainStatus {
    disabled = "disabled",
    active = "active",
    edit_mode = "edit_mode",
}
export declare enum InstanceStatus {
    /**
     * The Linode is powered off.
     */
    offline = "offline",
    /**
     *  The Linode is currently booting up.
     */
    booting = "booting",
    /**
     * The Linode is currently running.
     */
    running = "running",
    /**
     * The Linode is currently shutting down.
     */
    shutting_down = "shutting_down",
    /**
     * The Linode is rebooting.
     */
    rebooting = "rebooting",
    /**
     * The Linode is being created.
     */
    provisioning = "provisioning",
    /**
     * The Linode is being deleted.
     */
    deleting = "deleting",
    /**
     * The Linode is being migrated to a new host/region.
     */
    migrating = "migrating",
}
export declare enum HTTPVerb {
    get = "get",
    post = "post",
    delete = "del",
    update = "put",
}
export declare enum Hypervisor {
    kvm = "kvm",
    xen = "xen",
}
export declare enum Architecture {
    /**
     * 64 bit distribution
     */
    x86_64 = "x86_64",
    /**
     * 32 bit distribution
     */
    i386 = "i386",
}
export declare enum TypeClass {
    nanode = "nanode",
    standard = "standard",
    highmem = "nanode",
}
export declare enum virt_mode {
    fullvirt = "fullvirt",
    paravirt = "paravirt",
}
export declare enum run_level {
    default = "default",
    single = "single",
    binbash = "binbash",
}
