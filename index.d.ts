import { IAccount, IDomains, IImages, ILinode, ILongview, IManaged, INetworking, INodebalancers, IProfile, IRegions, ISupport, IVolumes, ITags } from './interfaces';
import { APIPreSend } from "./APIMaker";
import { AxiosRequestConfig } from 'axios';
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
    tags: ITags;
    constructor(key: string, config?: AxiosRequestConfig, fn?: APIPreSend);
}
export { Linodev4, Linodev4 as default };
