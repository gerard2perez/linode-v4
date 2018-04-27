import { ServerResponse } from 'http';
import { Client } from 'node-rest-client';
type ClientCallback = (json:any, res:ServerResponse) => void;

function ClientMethod(target:ExtendedClient, key:string, descriptor:PropertyDescriptor) {
	/* istanbul ignore next */
    if(descriptor === undefined) {
      descriptor = Object.getOwnPropertyDescriptor(target, key) as PropertyDescriptor;
	}
	const original = descriptor.value;
    descriptor.value = function (route:string, data?:any, filter?:any) {
		const parent:any = this;
		return new Promise<any>(function(resolve) {
			parent.client[key](...parent.prepare(route, data, filter), (json:any) => {
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
	prepare(url:string, data:any, filter:any) {
		let args:any = {
			headers: {
				Authorization: this.Authorization,
				"Content-Type": "application/json"
			}
		};
		if(filter) {
			args.headers['X-Filter'] = JSON.stringify(filter);
		}
		if(data) {
			args.data = data;
		}
		return [this.url + url, args];
	}
	// istanbul ignore next
	@ClientMethod async get(url:string) {}
	// istanbul ignore next
	@ClientMethod async post(url:string, data:any) : Promise<any> {};
	// istanbul ignore next
	@ClientMethod async put(url:string, data:any) : Promise<any> {};
	// istanbul ignore next
	@ClientMethod async delete(url:string) : Promise<any> {};
}
