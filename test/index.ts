import { suite, test, slow, timeout } from "mocha-typescript";
import Linode from '../src';
import * as assert from 'assert';
import './linodes';
import './domains';
import './nodebalancers';
import './networking';
import './regions';
import './support';
import './account';
import './profile';
import './image';
import './volumes';
import './managed';
import 'chai/register-should';
import { api_d_ts } from "./instance";
import { appendFileSync, writeFileSync } from "fs";



if (!process.env.DOCS) {
	const server = new Linode('sdasd');
	@suite ("Real API Request")
	class Suite {
	    @test("Wrong Request") async t1() {
			let distros = await server.images('abc').get();;
			distros.should.exist;
			distros.should.have.property('errors');
			distros.errors[0].should.be.deep.equal({ reason: 'Not found' });
		}
		@test("Request missing parameters") async t2() {
			try {
				await server.images(1).update();;
				assert.ok(false);
			} catch (e) {
				e.message.should.be.equal('this function requires some arguments. Check: https://developers.linode.com/v4/reference/endpoints/images/1#put');
			}
		}
		@test("Request more parameters") async t3() {
			try {
				await server.images.list({});;
				assert.ok(false);
			} catch (e) {
				e.message.should.be.equal('this function cannot have arguments. Check: https://developers.linode.com/v4/reference/endpoints/images#get');
			}
		}
		@test("Images") async t4() {
			let images = await server.images.list();
			images.should.exist;
			images.should.have.property('results');
			images.should.have.property('data');

			let badimage = await server.images(1).update({});
			badimage.should.exist;
			badimage.should.have.property('errors');
			badimage.errors[0].should.be.deep.equal({ reason: 'Invalid OAuth Token' });
		}
	}
} else {
	function describeMethod(name, API) {
		let method = name.replace('data', 'data:any').replace('id','id: string|number') + ':';
		if(method.includes('id')) {
			method = `\n\t\t/**\n\t\t * ${API.href}\n\t\t */\n\t\t${method} void`;
		} else {
			method = `\n\t\t/**\n\t\t * ${API}\n\t\t */\n\t\t${method} Promise<LinodeResponse<any>>`;
		}
		return [undefined, method];
	}
	function createInnerClass(name, API) {
		let interfacename = `${name}InnerClass`;
		let definition = `\n\tinterface ${interfacename} {`;
		let topDefinitions = [];
		for(const key of Object.keys(API)) {
			if(key === 'href')continue;
			let Keyed = typeof(API[key]) === 'object' ? `${name}${key.replace(/\(|\)/gm,'_')}` : key;
			let [interfacename, methodOrDefinition] = walk(Keyed, API[key]);
			if(!interfacename) {
				definition += `${methodOrDefinition}`;
			} else {
				let method = key.replace('data', 'data:any').replace('id','id: string|number') + ':';
				method = `\n\t\t${method} ${interfacename}`;
				definition += `${method}`;
				topDefinitions = topDefinitions.concat(methodOrDefinition);
			}
		}
		definition += '\n\t}';
		topDefinitions.push(definition);
		return [interfacename, topDefinitions]
	}
	function walk(name, API) {
		if( typeof(API) === 'object') {
			return createInnerClass(name, API);
		} else {
			return describeMethod(name, API);
		}
	}
	function createMainClass(name, API) {
		let interfacename = `${name}MainClass`;
		let text = `\n\tinterface ${interfacename} {`;
		let rootDefinitions = [];
		let [interfacename2, definitions] = walk(name, API);
		if ( Object.keys(API).includes('(id)') ) {
			text += `\n\t\t${name}: ${interfacename2}`;
		} else {
			text += `\n\t\t${name}: ${interfacename}`;
		}
		interfacename = interfacename2 as string;
		rootDefinitions = rootDefinitions.concat(definitions);
		text += '\n\t}';
		return [interfacename, text, rootDefinitions] as [string, string, string[]];
	}
	@suite ("Doc and API")
	class Suite {
	    @test("Docs") async t1() {

		}
		@test("API") async t2() {
			const API:any = api_d_ts();
			let file = './index.d.ts'
			writeFileSync(file, 'declare namespace Linodev4 {');
			appendFileSync(file, '\n\tinterface LinodeResponse<T> {\n\t\tdata:T[]\n\t\tpage:number\n\t\tpages:number\n\t\tresults:number\n\t}');
			let LinodeAPI = '\n\ttype LinodeMakeRequest = (client:ExtendedClient,method:HTTPVerb, path:string,hasparams:boolean,data:any,isCustom:boolean) => Promise<any>;\n\t//@ts-ignore\n\texport default class Linode {';
			LinodeAPI += '\n\tconstructor(token:string, fn?:LinodeMakeRequest);'
			for(const key of Object.keys(API)) {
				let [interfacename, definition, rootdefinnitions] = createMainClass(key.replace('linode', 'linodes'),API[key]);
				appendFileSync(file, rootdefinnitions.join('\n'));
				appendFileSync(file, definition);
				LinodeAPI += `\n\t\t${key}: ${interfacename}`;
			}
			LinodeAPI += '\n\t}';
			appendFileSync(file, LinodeAPI);
			appendFileSync(file, '\n}\nexport = Linodev4');
		}
	}

}
