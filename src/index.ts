import {IAccount, IDomains, IImages, ILinode, ILongview, IManaged, INetworking, INodebalancers, IProfile, IRegions, ISupport, IVolumes, ITags} from './interfaces';
import { APIService, APIPreSend } from "./APIMaker";
import { AxiosRequestConfig } from 'axios';

const API = require('./specification.json');
class Linodev4 {
	//@ts-ignore
	account:IAccount
	//@ts-ignore
	domains:IDomains
	//@ts-ignore
	images:IImages
	//@ts-ignore
	linode:ILinode
	//@ts-ignore
	longview:ILongview
	//@ts-ignore
	managed:IManaged
	//@ts-ignore
	networking:INetworking
	//@ts-ignore
	nodebalancers:INodebalancers
	//@ts-ignore
	profile:IProfile
	//@ts-ignore
	regions:IRegions
	//@ts-ignore
	support:ISupport
	//@ts-ignore
	volumes:IVolumes
	//@ts-ignore
	tags:ITags
	constructor(key:string, config:AxiosRequestConfig={}, fn?:APIPreSend) {
		return new APIService(API.remote_server, key, API, fn, config) as any;
	}
}

export { Linodev4, Linodev4 as default};
