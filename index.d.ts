import { IAccount, IDomains, IImages, ILinode, ILongview, IManaged, INetworking, INodebalancers, IProfile, IRegions, ISupport, IVolumes } from './interfaces';
import { APIPreSend } from "./APIMaker";
declare class Linodev4 {
    account: IAccount;
    domains: IDomains;
    images: IImages;
    linode: ILinode;
    longview: ILongview;
    managed: IManaged;
    networking: INetworking;
    nodebalancers: INodebalancers;
    profile: IProfile;
    regions: IRegions;
    support: ISupport;
    volumes: IVolumes;
    constructor(key: string, fn?: APIPreSend);
}
export { Linodev4, Linodev4 as default };
