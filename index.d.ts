declare namespace Linodev4 {
	interface LinodeResponse<T> {
		data:T[]
		page:number
		pages:number
		results:number
	}
	interface linodessinstances_id_backups_id_InnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/backups/$id/restore#POST
		 */
		restore(): Promise<LinodeResponse<any>>
	}

	interface linodessinstances_id_backupsInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/backups#GET
		 */
		list(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/backups#POST
		 */
		create(data:any): Promise<LinodeResponse<any>>
		(id: string|number): linodessinstances_id_backups_id_InnerClass
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/backups/cancel#POST
		 */
		cancel(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/backups/enable#POST
		 */
		enable(): Promise<LinodeResponse<any>>
	}

	interface linodessinstances_id_configs_id_InnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/configs/$id#GET
		 */
		get(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/configs/$id#PUT
		 */
		update(data:any): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/configs/$id#DELETE
		 */
		delete(): Promise<LinodeResponse<any>>
	}

	interface linodessinstances_id_configsInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/configs#GET
		 */
		list(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/configs#POST
		 */
		create(data:any): Promise<LinodeResponse<any>>
		(id: string|number): linodessinstances_id_configs_id_InnerClass
	}

	interface linodessinstances_id_disks_id_InnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/disks/$id#GET
		 */
		get(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/disks/$id#PUT
		 */
		update(data:any): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/disks/$id/clone#POST
		 */
		clone(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/disks/$id#DELETE
		 */
		delete(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/disks/$id/password#POST
		 */
		password(data:any): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/disks/$id/resize#POST
		 */
		resize(data:any): Promise<LinodeResponse<any>>
	}

	interface linodessinstances_id_disksInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/disks#GET
		 */
		list(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/disks#POST
		 */
		create(data:any): Promise<LinodeResponse<any>>
		(id: string|number): linodessinstances_id_disks_id_InnerClass
	}

	interface linodessinstances_id_ips_id_InnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/ips/$ip_address#GET
		 */
		get(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/ips/$ip_address#PUT
		 */
		update(data:any): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/ips/$ip_address#DELETE
		 */
		delete(): Promise<LinodeResponse<any>>
	}

	interface linodessinstances_id_ipsInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/ips#GET
		 */
		list(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/ips#POST
		 */
		create(data:any): Promise<LinodeResponse<any>>
		(id: string|number): linodessinstances_id_ips_id_InnerClass
	}

	interface linodessinstances_id_statsyear_n_month_m_InnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/stats/$id/1#GET
		 */
		get(): Promise<LinodeResponse<any>>
	}

	interface linodessinstances_id_statsyear_n_InnerClass {
		month(m): linodessinstances_id_statsyear_n_month_m_InnerClass
	}

	interface linodessinstances_id_statsInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/stats#GET
		 */
		list(): Promise<LinodeResponse<any>>
		year(n): linodessinstances_id_statsyear_n_InnerClass
	}

	interface linodessinstances_id_InnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/instances/$id#PUT
		 */
		update(data:any): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/instances/$id#DELETE
		 */
		delete(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/instances/$id#GET
		 */
		get(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/boot#POST
		 */
		boot(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/mutate#POST
		 */
		mutate(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/reboot#POST
		 */
		reboot(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/rebuild#POST
		 */
		rebuild(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/rescue#POST
		 */
		rescue(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/resize#POST
		 */
		resize(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/shutdown#POST
		 */
		shutdown(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/volumes#GET
		 */
		volumes(): Promise<LinodeResponse<any>>
		backups: linodessinstances_id_backupsInnerClass
		configs: linodessinstances_id_configsInnerClass
		disks: linodessinstances_id_disksInnerClass
		ips: linodessinstances_id_ipsInnerClass
		stats: linodessinstances_id_statsInnerClass
	}

	interface linodessinstancesInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/instances#GET
		 */
		list(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/instances#POST
		 */
		create(data:any): Promise<LinodeResponse<any>>
		(id: string|number): linodessinstances_id_InnerClass
	}

	interface linodesskernels_id_InnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/kernels/$id#GET
		 */
		get(): Promise<LinodeResponse<any>>
	}

	interface linodesskernelsInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/kernels#GET
		 */
		list(): Promise<LinodeResponse<any>>
		(id: string|number): linodesskernels_id_InnerClass
	}

	interface linodessstackscripts_id_InnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/stackscripts/$id#GET
		 */
		get(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/stackscripts/$id#PUT
		 */
		update(data:any): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/stackscripts/$id#DELETE
		 */
		delete(): Promise<LinodeResponse<any>>
	}

	interface linodessstackscriptsInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/stackscripts#GET
		 */
		list(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/stackscripts#POST
		 */
		create(data:any): Promise<LinodeResponse<any>>
		(id: string|number): linodessstackscripts_id_InnerClass
	}

	interface linodesstypes_id_InnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/types/$id#GET
		 */
		get(): Promise<LinodeResponse<any>>
	}

	interface linodesstypesInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/linode/types#GET
		 */
		list(): Promise<LinodeResponse<any>>
		(id: string|number): linodesstypes_id_InnerClass
	}

	interface linodessInnerClass {
		instances: linodessinstancesInnerClass
		kernels: linodesskernelsInnerClass
		stackscripts: linodessstackscriptsInnerClass
		types: linodesstypesInnerClass
	}
	interface linodessMainClass {
		linodess: linodessMainClass
	}
	interface domains_id_records_id_InnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/domains/$id/records/$id#GET
		 */
		get(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/domains/$id/records/$id#PUT
		 */
		update(data:any): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/domains/$id/records/$id#DELETE
		 */
		delete(): Promise<LinodeResponse<any>>
	}

	interface domains_id_recordsInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/domains/$id/records#GET
		 */
		list(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/domains/$id/records#POST
		 */
		create(data:any): Promise<LinodeResponse<any>>
		(id: string|number): domains_id_records_id_InnerClass
	}

	interface domains_id_InnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/domains/$id#GET
		 */
		get(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/domains/$id#PUT
		 */
		update(data:any): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/domains/$id#DELETE
		 */
		delete(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/domains/$id/clone#POST
		 */
		clone(data:any): Promise<LinodeResponse<any>>
		records: domains_id_recordsInnerClass
	}

	interface domainsInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/domains#GET
		 */
		list(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/domains#POST
		 */
		create(data:any): Promise<LinodeResponse<any>>
		(id: string|number): domains_id_InnerClass
	}
	interface domainsMainClass {
		domains: domainsInnerClass
	}
	interface nodebalancers_id_configs_id_nodes_id_InnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/nodebalancers/$id/configs/$id/nodes/$id#GET
		 */
		get(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/nodebalancers/$id/configs/$id/nodes/$id#PUT
		 */
		update(data:any): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/nodebalancers/$id/configs/$id/nodes/$id#DELETE
		 */
		delete(): Promise<LinodeResponse<any>>
	}

	interface nodebalancers_id_configs_id_nodesInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/nodebalancers/$id/configs/$id/nodes#GET
		 */
		list(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/nodebalancers/$id/configs/$id/nodes#POST
		 */
		create(data:any): Promise<LinodeResponse<any>>
		(id: string|number): nodebalancers_id_configs_id_nodes_id_InnerClass
	}

	interface nodebalancers_id_configs_id_InnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/nodebalancers/$id/configs/$id#GET
		 */
		get(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/nodebalancers/$id/configs/$id#DELETE
		 */
		delete(): Promise<LinodeResponse<any>>
		nodes: nodebalancers_id_configs_id_nodesInnerClass
	}

	interface nodebalancers_id_configsInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/nodebalancers/$id/configs#GET
		 */
		list(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/nodebalancers/$id/configs#POST
		 */
		create(data:any): Promise<LinodeResponse<any>>
		(id: string|number): nodebalancers_id_configs_id_InnerClass
	}

	interface nodebalancers_id_InnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/nodebalancers/$id#GET
		 */
		get(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/nodebalancers/$id#PUT
		 */
		update(data:any): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/nodebalancers/$id#DELETE
		 */
		delete(): Promise<LinodeResponse<any>>
		configs: nodebalancers_id_configsInnerClass
	}

	interface nodebalancersInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/nodebalancers#GET
		 */
		list(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/nodebalancers#POST
		 */
		create(data:any): Promise<LinodeResponse<any>>
		(id: string|number): nodebalancers_id_InnerClass
	}
	interface nodebalancersMainClass {
		nodebalancers: nodebalancersInnerClass
	}
	interface networkingips_id_InnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/networking/ips/$address#GET
		 */
		get(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/networking/ips/$address#PUT
		 */
		update(data:any): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/networking/ips/$address#DELETE
		 */
		delete(): Promise<LinodeResponse<any>>
	}

	interface networkingipsInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/networking/ips#GET
		 */
		list(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/networking/ips#POST
		 */
		create(data:any): Promise<LinodeResponse<any>>
		(id: string|number): networkingips_id_InnerClass
	}

	interface networkingipv4InnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/networking/ipv4/assign#POST
		 */
		assign(data:any): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/networking/ipv4/share#POST
		 */
		share(data:any): Promise<LinodeResponse<any>>
	}

	interface networkingipv6InnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/networking/ipv6/pools#GET
		 */
		pools(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/networking/ipv6/ranges#GET
		 */
		ranges(): Promise<LinodeResponse<any>>
	}

	interface networkingInnerClass {
		ips: networkingipsInnerClass
		ipv4: networkingipv4InnerClass
		ipv6: networkingipv6InnerClass
	}
	interface networkingMainClass {
		networking: networkingMainClass
	}
	interface regions_id_InnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/regions/$id#GET
		 */
		get(): Promise<LinodeResponse<any>>
	}

	interface regionsInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/regions#GET
		 */
		list(): Promise<LinodeResponse<any>>
		(id: string|number): regions_id_InnerClass
	}
	interface regionsMainClass {
		regions: regionsInnerClass
	}
	interface supporttickets_id_InnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/support/tickets/$id#GET
		 */
		get(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/support/tickets/$id/attachments#POST
		 */
		attachments(data:any): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/support/tickets/$id/replies#POST
		 */
		replies(data:any): Promise<LinodeResponse<any>>
	}

	interface supportticketsInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/support/tickets#GET
		 */
		list(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/support/tickets#POST
		 */
		create(data:any): Promise<LinodeResponse<any>>
		(id: string|number): supporttickets_id_InnerClass
	}

	interface supportInnerClass {
		tickets: supportticketsInnerClass
	}
	interface supportMainClass {
		support: supportMainClass
	}
	interface accountevents_id_InnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/account/events/$id#GET
		 */
		get(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/account/events/$id/read#POST
		 */
		read(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/account/events/$id/seen#POST
		 */
		seen(): Promise<LinodeResponse<any>>
	}

	interface accounteventsInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/account/events#GET
		 */
		list(): Promise<LinodeResponse<any>>
		(id: string|number): accountevents_id_InnerClass
	}

	interface accountinvoices_id_InnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/account/invoices/$id#GET
		 */
		get(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/account/invoices/$id/items#GET
		 */
		items(): Promise<LinodeResponse<any>>
	}

	interface accountinvoicesInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/account/invoices#GET
		 */
		list(): Promise<LinodeResponse<any>>
		(id: string|number): accountinvoices_id_InnerClass
	}

	interface accountnotificationsInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/account/notifications#GET
		 */
		list(): Promise<LinodeResponse<any>>
	}

	interface accountoauthClients_id_thumbnailInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/account/oauth-clients/$id/thumbnail#GET
		 */
		get(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/account/oauth-clients/$id/thumbnail#PUT
		 */
		update(data:any): Promise<LinodeResponse<any>>
	}

	interface accountoauthClients_id_InnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/account/oauth-clients/$id#GET
		 */
		get(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/account/oauth-clients/$id#PUT
		 */
		update(data:any): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/account/oauth-clients/$id#DELETE
		 */
		delete(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/account/oauth-clients/$id/reset-secret#POST
		 */
		resetSecret(): Promise<LinodeResponse<any>>
		thumbnail: accountoauthClients_id_thumbnailInnerClass
	}

	interface accountoauthClientsInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/account/oauth-clients#GET
		 */
		list(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/account/oauth-clients#POST
		 */
		create(data:any): Promise<LinodeResponse<any>>
		(id: string|number): accountoauthClients_id_InnerClass
	}

	interface accountpayments_id_InnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/account/payments/$id#GET
		 */
		get(): Promise<LinodeResponse<any>>
	}

	interface accountpaymentspaypalInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/account/payments/paypal#POST
		 */
		create(data:any): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/account/payments/paypal/execute#POST
		 */
		execute(data:any): Promise<LinodeResponse<any>>
	}

	interface accountpaymentsInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/account/payments#GET
		 */
		list(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/account/payments#POST
		 */
		create(data:any): Promise<LinodeResponse<any>>
		(id: string|number): accountpayments_id_InnerClass
		paypal: accountpaymentspaypalInnerClass
	}

	interface accountsettingsInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/account/settings#GET
		 */
		list(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/account/settings#PUT
		 */
		update(data:any): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/account/settings/managed-enable#POST
		 */
		managedEnable(): Promise<LinodeResponse<any>>
	}

	interface accounttransferInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/account/transfer#GET
		 */
		get(): Promise<LinodeResponse<any>>
	}

	interface accountusers_id_grantsInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/account/users/$username/grants#GET
		 */
		get(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/account/users/$username/grants#PUT
		 */
		update(data:any): Promise<LinodeResponse<any>>
	}

	interface accountusers_id_InnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/account/users/$username#GET
		 */
		get(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/account/users/$username#PUT
		 */
		update(data:any): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/account/users/$username#DELETE
		 */
		delete(): Promise<LinodeResponse<any>>
		grants: accountusers_id_grantsInnerClass
	}

	interface accountusersInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/account/users#GET
		 */
		list(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/account/users#POST
		 */
		create(data:any): Promise<LinodeResponse<any>>
		(id: string|number): accountusers_id_InnerClass
	}

	interface accountInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/account#GET
		 */
		list(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/account#PUT
		 */
		update(data:any): Promise<LinodeResponse<any>>
		events: accounteventsInnerClass
		invoices: accountinvoicesInnerClass
		notifications: accountnotificationsInnerClass
		oauthClients: accountoauthClientsInnerClass
		payments: accountpaymentsInnerClass
		settings: accountsettingsInnerClass
		transfer: accounttransferInnerClass
		users: accountusersInnerClass
	}
	interface accountMainClass {
		account: accountMainClass
	}
	interface profileapps_id_InnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/profile/apps/$id#GET
		 */
		get(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/profile/apps/$id#DELETE
		 */
		delete(): Promise<LinodeResponse<any>>
	}

	interface profileappsInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/profile/apps#GET
		 */
		list(): Promise<LinodeResponse<any>>
		(id: string|number): profileapps_id_InnerClass
	}

	interface profiletokens_id_InnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/profile/tokens/$id#GET
		 */
		get(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/profile/tokens/$id#PUT
		 */
		update(data:any): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/profile/tokens/$id#DELETE
		 */
		delete(): Promise<LinodeResponse<any>>
	}

	interface profiletokensInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/profile/tokens#GET
		 */
		list(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/profile/tokens#POST
		 */
		create(data:any): Promise<LinodeResponse<any>>
		(id: string|number): profiletokens_id_InnerClass
	}

	interface profilewhitelist_id_InnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/profile/whitelist/$id#GET
		 */
		get(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/profile/whitelist/$id#DELETE
		 */
		delete(): Promise<LinodeResponse<any>>
	}

	interface profilewhitelistInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/profile/whitelist#GET
		 */
		list(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/profile/whitelist#POST
		 */
		create(data:any): Promise<LinodeResponse<any>>
		(id: string|number): profilewhitelist_id_InnerClass
	}

	interface profileInnerClass {
		apps: profileappsInnerClass
		/**
		 * https://developers.linode.com/v4/reference/endpoints/profile#GET
		 */
		get(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/profile#PUT
		 */
		update(data:any): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/profile/grants#GET
		 */
		grants(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/profile/password#POST
		 */
		password(): Promise<LinodeResponse<any>>
		tokens: profiletokensInnerClass
		/**
		 * https://developers.linode.com/v4/reference/endpoints/profile/tfa-disable#POST
		 */
		tfaDisable(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/profile/tfa-enable#POST
		 */
		tfaEnable(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/profile/tfa-enable-confirm#POST
		 */
		tfaEnableConfirm(): Promise<LinodeResponse<any>>
		whitelist: profilewhitelistInnerClass
	}
	interface profileMainClass {
		profile: profileMainClass
	}
	interface images_id_InnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/images/$id#GET
		 */
		get(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/images/$id#PUT
		 */
		update(data:any): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/images/$id#DELETE
		 */
		delete(): Promise<LinodeResponse<any>>
	}

	interface imagesInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/images#GET
		 */
		list(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/images#POST
		 */
		create(data:any): Promise<LinodeResponse<any>>
		(id: string|number): images_id_InnerClass
	}
	interface imagesMainClass {
		images: imagesInnerClass
	}
	interface volumes_id_InnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/volumes/$id#GET
		 */
		get(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/volumes/$id#PUT
		 */
		update(data:any): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/volumes/$id#DELETE
		 */
		delete(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/volumes/$id/attach#POST
		 */
		attach(data:any): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/volumes/$id/clone#POST
		 */
		clone(data:any): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/volumes/$id/detach#POST
		 */
		detach(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/volumes/$id/resize#POST
		 */
		resize(data:any): Promise<LinodeResponse<any>>
	}

	interface volumesInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/volumes#GET
		 */
		list(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/volumes#POST
		 */
		create(data:any): Promise<LinodeResponse<any>>
		(id: string|number): volumes_id_InnerClass
	}
	interface volumesMainClass {
		volumes: volumesInnerClass
	}
	interface managedcontacts_id_InnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/managed/contacts/$id#GET
		 */
		get(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/managed/contacts/$id#PUT
		 */
		update(data:any): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/managed/contacts/$id#DELETE
		 */
		delete(): Promise<LinodeResponse<any>>
	}

	interface managedcontactsInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/managed/contacts#GET
		 */
		list(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/managed/contacts#POST
		 */
		create(data:any): Promise<LinodeResponse<any>>
		(id: string|number): managedcontacts_id_InnerClass
	}

	interface managedcredentials_id_InnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/managed/credentials/$id#GET
		 */
		get(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/managed/credentials/$id#PUT
		 */
		update(data:any): Promise<LinodeResponse<any>>
	}

	interface managedcredentialsInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/managed/credentials#GET
		 */
		list(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/managed/credentials#POST
		 */
		create(data:any): Promise<LinodeResponse<any>>
		(id: string|number): managedcredentials_id_InnerClass
	}

	interface managedissues_id_InnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/managed/issues/$id#GET
		 */
		get(): Promise<LinodeResponse<any>>
	}

	interface managedissuesInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/managed/issues#GET
		 */
		list(): Promise<LinodeResponse<any>>
		(id: string|number): managedissues_id_InnerClass
	}

	interface managedlinodeSettings_id_InnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/managed/linode-settings/$id#GET
		 */
		get(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/managed/linode-settings/$id#PUT
		 */
		update(data:any): Promise<LinodeResponse<any>>
	}

	interface managedlinodeSettingsInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/managed/linode-settings#GET
		 */
		list(): Promise<LinodeResponse<any>>
		(id: string|number): managedlinodeSettings_id_InnerClass
	}

	interface managedservices_id_InnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/managed/services/$id#GET
		 */
		get(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/managed/services/$id#PUT
		 */
		update(data:any): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/managed/services/$id#DELETE
		 */
		delete(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/managed/services/$id/enable#POST
		 */
		enable(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/managed/services/$id/disable#POST
		 */
		disable(): Promise<LinodeResponse<any>>
	}

	interface managedservicesInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/managed/services#GET
		 */
		list(): Promise<LinodeResponse<any>>
		/**
		 * https://developers.linode.com/v4/reference/endpoints/managed/services#POST
		 */
		create(data:any): Promise<LinodeResponse<any>>
		(id: string|number): managedservices_id_InnerClass
	}

	interface managedstatsInnerClass {
		/**
		 * https://developers.linode.com/v4/reference/endpoints/managed/stats#GET
		 */
		list(): Promise<LinodeResponse<any>>
	}

	interface managedInnerClass {
		contacts: managedcontactsInnerClass
		credentials: managedcredentialsInnerClass
		issues: managedissuesInnerClass
		linodeSettings: managedlinodeSettingsInnerClass
		services: managedservicesInnerClass
		stats: managedstatsInnerClass
	}
	interface managedMainClass {
		managed: managedMainClass
	}
	export class Linode {
		linodes: linodessInnerClass
		domains: domainsInnerClass
		nodebalancers: nodebalancersInnerClass
		networking: networkingInnerClass
		regions: regionsInnerClass
		support: supportInnerClass
		account: accountInnerClass
		profile: profileInnerClass
		images: imagesInnerClass
		volumes: volumesInnerClass
		managed: managedInnerClass
	}
}
export = Linodev4