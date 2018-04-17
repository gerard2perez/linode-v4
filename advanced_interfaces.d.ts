export interface LinodeIp {
	/**
	 * The IP Address.
	 */
	address:String
	/**
	 * The default gateway.
	 */
	gateway: String
	/**
	 * The Linode this IP is associated with.
	 */
	linode_id:number
	/**
	 * The network prefix.
	 */
	prefix: String
	/**
	 * Reverse DNS address for this IP Address. Null to reset.
	 */
	rdns:String
	/**
	 * The Region this IP is in.
	 */
	region: String
	/**
	 * The subnet mask.
	 */
	subnet_mask: String
	/**
	 * Whether this is a public or private IP address.
	 */
	public: Boolean
	/**
	 * The type of IP Address.
	 */
	type:String
}

export interface IResponseLinodeInstanceIp {
	ipv4:{
		public:LinodeIp
		private:LinodeIp
		share:LinodeIp
	}
	ipv6: {
		slaac:LinodeIp
		link_local:LinodeIp
		global: {
			range:string
			region:string
		}[]
	}
}
