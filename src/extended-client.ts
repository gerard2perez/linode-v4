import { ServerResponse } from 'http';
import { Client } from 'node-rest-client';

export enum HTTPVerb {
	get = 'get',
	post = 'post',
	delete = 'del',
	update = 'put'
};
type ClientCallback = (json:any, res:ServerResponse) => void;

function ClientMethod(target:ExtendedClient, key:string, descriptor:PropertyDescriptor) {
    if(descriptor === undefined) {
      descriptor = Object.getOwnPropertyDescriptor(target, key) as PropertyDescriptor;
	}
	const original = descriptor.value;
    descriptor.value = function (route:string, data?:any) {
		const parent:any = this;
		return new Promise<any>(function(resolve) {
			parent.client[key](...parent.prepare(route, data), (json:any) => {
				resolve(json);
			});
		});
    };
    return descriptor;
}

export class ExtendedClient {
	[property:string]: any
	client: any;
	url:string;
	private Authorization: string;
	constructor (url:string, Authorization:string) {
		this.client = new Client();
		this.url = url;
		this.Authorization = Authorization;
	}
	prepare(url:string, data = undefined) {
		let args:any = {
			headers: { Authorization: this.Authorization }
		};
		if(data) {
			args.data = data;
		}
		return [this.url + url, args];
	}
	@ClientMethod async get(url:string) {}
	@ClientMethod async post(url:string, data:any) : Promise<any> {};
	@ClientMethod async pul(url:string, data:any) : Promise<any> {};
	@ClientMethod async delete(url:string) : Promise<any> {};
}
