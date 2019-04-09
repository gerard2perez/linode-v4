import { isNumber } from "util";
import axios, { AxiosRequestConfig } from 'axios';
export interface SMethod {
	Name: string
	fnName: string
	QueryParameters: any[]
	PathParameters: any[]
	HeaderParameters: any[]
	RequiredArgs: number
	TotalArgs: number
	Verb:string,
	Keep:boolean,
	RelativeRoute
}
export interface SNode {
	FormatName: string
	Class: SNode
	Properties: SNode[]
	Methods: SMethod[]
	Route: string
	PathParameter: string[]
}
export interface IAPICall {
	verb:string
	route:string
	query?:string
	body?:any
	headers:any
}
export type APIPreSend = (data:IAPICall)=>Promise<any>;
export class APIService {
	private preSend:APIPreSend
	fnHandler (route:string, method:SMethod, personalKey:string, ...args:any[]) {
		args = this.validateArgs(method.Name, args, method.RequiredArgs, method.TotalArgs);
		route = this.getRoute(route, method, args);
		let query = this.getQuery(method.Verb, method.QueryParameters, args);
		args.splice(0,0,this.personalKey);
		let Headers = this.getHeaders(method.Verb, method.HeaderParameters, args);
		let Body = args[0];
		let retObj:IAPICall = {
			headers: Headers,
			verb:method.Verb,
			route,
		};
		if(query)retObj.query = query;
		if(Body)retObj.body = Body;
		return this.preSend(retObj);
	}
	send(data:IAPICall) {
		let url = data.route + (data.query ? data.query : '');
			let headers = {
				Authorization: data.headers.Authorization
			};
			if ( data.headers['X-Filter'] ) {
				headers['X-Filter'] = JSON.stringify(data.headers['X-Filter']);
			}
			let config:AxiosRequestConfig = Object.assign({}, this.axios_config, {
				method: data.verb,
				url,
				headers,
				data: data.body
			});
			return axios(config).then(res => res.data).catch(err => err.response.data );
	}
	constructor(private server:string, private personalKey:string, API:SNode, preSend?:APIPreSend, private axios_config:AxiosRequestConfig = {})  {
		this.personalKey = `Bearer ${this.personalKey}`;
		this.preSend = preSend || this.send;
		return this.toFinal(API, server);
	}
	checkListArgs (args:any[]) {
		let [page, page_size, filter] = args;
		if( typeof(page) === 'object' ) {
			filter = page;
			page = undefined;
		} else if(typeof(page_size) === 'object') {
			filter = page_size;
			page_size = undefined;
		}
		let error = !(page === undefined || isNumber(page)) || !(page_size === undefined || isNumber(page_size)) || !(filter === undefined || filter instanceof Object);
		if(error) {
			throw new Error('Arguments are not valid');
		}
		return [ page, page_size, filter ];
	}
	validateArgs(fnName:string, args:any[], required:number, total:number) {
		if(fnName === 'list') {
			return this.checkListArgs(args)
		} else {
			let argCount = args.length;
			let argsCountMatch = argCount >= required && argCount <= total;
			if( !argsCountMatch ) {
				throw new Error('Argument count does not match')
			}
			return args;
		}
	}
	getQuery (method:string, QueryParameters:string[], args:any[]) {
		let query;
		if ( method === 'get') {
			query = QueryParameters.map( (parameter,i) => args[i] ? `${parameter}=${args[i]}`:'').filter(f=>f).join('&');
			query = query ? `?${query}` : '';
			args.splice(0, QueryParameters.length);
		}
		return query;
	}
	getHeaders (method:string,  HeaderParameters:string[], args:any[]) {
		let Headers = {};
		for(const parameter of HeaderParameters) {
			if(args[0]) {
				Headers[parameter] = args[0];
				args.splice(0, 1);
			}

		}
		return Headers;
	}
	getRoute(route:string, method:SMethod, args:any) {
		if(method.Keep) {
			route += `/${method.Name}`;
		}
		for(let i=0; method.PathParameters[i]; i++) {
			let {name} = method.PathParameters[i];
			route = route.replace(`{${name}}`, args[0]);
			args.splice(0,1);
		}
		return route;
	}
	toFinal(node:SNode, route:string) {
		let api:any = {};
		if ( node.Class ) {
			api = (arg:any) => {
				let _route = route + node.Class.Route;
				for(const parameter of node.Class.PathParameter) {
					_route = _route.replace(`{${parameter}}`, arg);
				}
				return this.toFinal.bind(this)(node.Class, _route);
			}
		}
		for(const property of node.Properties) {
			api[property.FormatName] =  this.toFinal.bind(this)(property, route+property.Route);
		}
		for(const method of node.Methods) {
			api[ method.fnName ] = (...args:any[]) => {
				let _route = route;
				if(method.PathParameters.length) {
					_route += method.RelativeRoute;
				}
				return this.fnHandler(_route, method, this.personalKey, ...args)
			};
		}
		return api;
	}
}
