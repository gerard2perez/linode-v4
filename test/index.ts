import { suite, test, slow, timeout } from "mocha-typescript";
import Linode from '../src';
import * as assert from 'assert';
import './linodes';
// import './domains';
// import './nodebalancers';
// import './networking';
// import './regions';
// import './support';
// import './account';
// import './profile';
// import './image';
// import './volumes';
// import './managed';
import 'chai/register-should';
import { api_d_ts } from "./instance";
import { appendFileSync, writeFileSync, readFileSync } from "fs";
import { ENGINE_METHOD_CIPHERS } from "constants";

import * as i from 'i';
import spec from "../src/spec";
const inflect = new i();
inflect.inflections.singular('ips', 'ips');


if (!process.env.DOCS) {
	const server = new Linode('sdasd');
	@suite ("Real API Request")
	class Suite {
	    @test("Wrong Request") async t1() {
			let distros = await server.images('abc').get();
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
				console.log(await server.images(0).get(1));
				assert.ok(false);
			} catch (e) {
				e.message.should.be.equal('this function cannot have arguments. Check: https://developers.linode.com/v4/reference/endpoints/images/0#get');
			}
		}
		@test("Images") async t4() {
			let images = await server.images.list();
			// console.log(images.data);
			images.should.exist;
			images.should.have.property('results');
			images.should.have.property('data');

			let badimage = await server.images(1).update({});
			badimage.should.exist;
			badimage.should.have.property('errors');
			badimage.errors[0].should.be.deep.equal({ reason: 'Invalid OAuth Token' });
		}
		@test("Pagination API") async t5 () {
			// "label": "Ubuntu 17.10"
			assert.equal((await server.images.list(1)).page, 1);
			assert.equal((await server.images.list(2)).page, 2);
			try {
				console.log(await server.images.list('1'));
				assert.ok(false);
			} catch (e) {
				e.message.should.be.equal('Pagination value must be a number. Check: https://developers.linode.com/v4/reference/endpoints/images#get');
			}
		}
		@test("Filtering API") async t6 () {
			let images = await server.images.list({"vendor": "Debian"});
			assert.equal(images.data.filter(i=>i.vendor !== 'Debiam').length, images.results);
			let ImagesResponse = await server.images.list(2, {"vendor": "Debian"});
			assert.equal(ImagesResponse.results, 3);
			assert.equal(ImagesResponse.page, 2);
			assert.equal(ImagesResponse.data.length, 0);
		}
	}
} else {
	let interfacesdefinition = readFileSync('./basic_interfaces.d.ts', 'utf-8');
	let interfacesNames = [];
	function resolveIResponse(IResponse) {
		let IName = 'any';
		if(interfacesdefinition.search(new RegExp(`interface ${IResponse} ?{`, 'gm')) > -1) {
			IName = IResponse;
			if(interfacesNames.indexOf(IResponse) === -1) {
				interfacesNames.push(IResponse);
			}
		} else {
			console.log(`Missing: ${IResponse}`);
		}
		return IName;
	}
	function replaceIfExists(IResponse, text) {
		let IName = 'any';
		if(interfacesdefinition.search(new RegExp(`interface ${IResponse} ?{`, 'gm')) > -1) {
			IName = IResponse;
			if(interfacesNames.indexOf(IResponse) === -1) {
				interfacesNames.push(IResponse);
			}
			return text.replace(/ICustomResponse/gm, IResponse);
		} else {
			// console.log(`Missing: ${IResponse}`);
		}
		return text;
	}
	function capitalize (str:string) {
		return str.replace(/\b\w{3,}/g, function (l) {
			return l.charAt(0).toUpperCase() + l.slice(1);
		});
	}
	function describeMethod(name, API /*, interfaceName=''*/) {
		// interfaceName = interfaceName.split('_')[0];
		let method = name.replace('data', 'data:any').replace('id','id: string|number') + ':';
		if(method.includes('id')) {
			method = `\n\t\t/**\n\t\t * ${API.href}\n\t\t */\n\t\t${method} void`;
		} else {
			let IName = 'ICustomResponse';
			// console.log(interfacesdefinition.indexOf(interfaceName), interfaceName);
			// if(interfacesdefinition.indexOf(interfaceName) > -1) {
			// 	IName = interfaceName;
			// 	console.log(interfacesNames.indexOf(interfaceName));
			// 	if(interfacesNames.indexOf(interfaceName) === -1) {
			// 		interfacesNames.push(interfaceName);
			// 	}
			// } else {
			// 	console.log(`Missing: ${interfaceName}`);
			// }
			let methodRespose = method === 'get():' ? `Promise<${IName}>` : `Promise<LinodeResponse<${IName}>>`;
			if(method.indexOf('update') > -1) {
				method = `\n\t\t/**\n\t\t * ${API}\n\t\t */\n\t\tupdate(data:any): Promise<${IName}>`;
			} else if(method.indexOf('create') > -1) {
				method = `\n\t\t/**\n\t\t * ${API}\n\t\t */\n\t\tcreate(data:any): Promise<${IName}>`;
			} else if (method === 'list():') {
				method = `\n\t\t/**\n\t\t * ${API}\n\t\t */\n\t\tlist(page?:number): ${methodRespose}`;

				method += `\n\t\t/**\n\t\t * ${API}\n\t\t */\n\t\tlist(page:number, filter:any): ${methodRespose}`;
				method += `\n\t\t/**\n\t\t * ${API}\n\t\t */\n\t\tlist(filter:any): ${methodRespose}`;
			} else {
				// method = `\n\t\t/**\n\t\t * ${API}\n\t\t */\n\t\t${method} ${methodRespose}`;
				method = `\n\t\t/**\n\t\t * ${API}\n\t\t */\n\t\t${method} Promise<any>`;
			}
		}
		return [undefined, method];
	}
	function cleanName(name:string) {
		// return name;
		name = name.replace('Ips_id_', 'Ip');
		if(name.indexOf('_id_') > -1) {
			return inflect.camelize(inflect.underscore(name.replace(/_id_/gm, '')).split('_').map(s=>inflect.singularize(s)).join('_'));
		}
		if(name.indexOf('IResponse') > -1 ) {
			return inflect.singularize(name.replace('sYear_n_Month_m_', '').replace('sYear_n_', ''));
		}
		return capitalize(name);
		// return inflect.camelize(inflect.underscore(name.replace(/_id_/gm, '')).split('_').map(s=>inflect.singularize(s)).join('_'));
	}
	function createInnerClass(name:string, API) {
		// name = inflect.camelize(inflect.underscore(name.replace(/_id_/gm, '')).split('_').map(s=>inflect.singularize(s)).join('_'));
		let interfacename = `${cleanName(name)}InnerClass`;
		let definition = `\n\tinterface ${interfacename} {`;
		let topDefinitions = [];
		for(const key of Object.keys(API)) {
			if(key === 'href')continue;
			// let Keyed = typeof(API[key]) === 'object' ? `${name}${inflect.singularize(capitalize(key.replace(/\(|\)/gm,'_')))}` : key;
			let Keyed = typeof(API[key]) === 'object' ? `${name}${capitalize(key.replace(/\(|\)/gm,'_'))}` : key;
			let proposeInterface = cleanName(`IResponse${capitalize((Keyed.split('_id_').filter(k=>k).pop()))}`);
			// if(interfacename === 'Domains_id_RecordsInnerClass') {
			// 	console.log(`Prepare: IResponse${capitalize((Keyed.split('_id_').pop()))}`)
			// }
			let [interfacename, methodOrDefinition] = walk(Keyed, API[key]/*, `IResponse${capitalize(name)}`*/);

			if(!interfacename) {
				definition += `${(methodOrDefinition as string)/*.replace(/ICustomResponse/gm, 'any')*/}`;
			} else {
				// let IName = 'any';
				// if(interfacesdefinition.indexOf(proposeInterface) > -1) {
				// 	IName = proposeInterface;
				// 	if(interfacesNames.indexOf(proposeInterface) === -1) {
				// 		interfacesNames.push(proposeInterface);
				// 	}
				// } else {
				// 	console.log(`Missing: ${proposeInterface}`);
				// }
				// if(IName === 'IResponse') {
				// 	console.log(name, Keyed);
				// }
				// methodOrDefinition = (methodOrDefinition as any[]).map(d => d.replace(/ICustomResponse/gm, IName));
				methodOrDefinition = (methodOrDefinition as any[]).map(d => replaceIfExists(proposeInterface, d));
				// console.log(inflect.)
				// if(interfacename === 'DomainsInnerClass') {
				// 	console.log(IName, Keyed, proposeInterface, name, collectionNameInterfaceName, methodOrDefinition.join('\n'));
				// }
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
	function walk(name:string, API:any) {
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
		let IResponse = cleanName(`IResponse${interfacename.replace(/InnerClass/gm, '')}`);
		rootDefinitions = rootDefinitions.concat(definitions).map(d=> replaceIfExists(IResponse, d));
		text += '\n\t}';
		return [interfacename, text, rootDefinitions] as [string, string, string[]];
	}
	@suite ("Doc and API")
	class Suite {
	    @test("Docs") async t1() {

		}
		// @test("API") async t2() {
		// 	const API:any = api_d_ts();
		// 	let file = './index.d.ts'
		// 	writeFileSync(file, 'declare namespace Linodev4 {');
		// 	appendFileSync(file, '\n\tinterface LinodeResponse<T> {\n\t\tdata:T[]\n\t\tpage:number\n\t\tpages:number\n\t\tresults:number\n\t\terrors?:any[]\n\t}');
		// 	let LinodeAPI = '\n\ttype LinodeMakeRequest = (client:ExtendedClient,method:HTTPVerb, path:string,hasargs:boolean,data:any,isCustom:boolean) => Promise<any>;\n\t//@ts-ignore\n\texport default class Linode {';
		// 	LinodeAPI += '\n\tconstructor(token:string, fn?:LinodeMakeRequest);'
		// 	for(const key of Object.keys(API)) {
		// 		let [interfacename, definition, rootdefinnitions] = createMainClass(key /*.replace('linode', 'linodes')*/,API[key]);
		// 		appendFileSync(file, rootdefinnitions.join('\n').replace(/ICustomResponse/gm,'any'));
		// 		appendFileSync(file, definition);
		// 		LinodeAPI += `\n\t\t${key}: ${interfacename}`;
		// 	}
		// 	LinodeAPI += '\n\t}';
		// 	appendFileSync(file, LinodeAPI);
		// 	appendFileSync(file, '\n}\nexport = Linodev4');
		// 	let all = readFileSync(file, 'utf-8');
		// 	writeFileSync(file, `import { ExtendedClient, HTTPVerb, ${interfacesNames.join(', ')} } from './interfaces';\n`);
		// 	appendFileSync(file, all);
		// }
		@test('TypeScriptDefinition') async t2 () {
			function arr2string(arr, lvl='\t') {
				return arr.map(a=>{
					if(a instanceof Array ) {
						let lvl2 = `\t${lvl}`;
						return arr2string(a, lvl2);
					}
					return `${lvl}${a}`;
				}).join('\n');
			}
			function namelize(str) {
				return capitalize(inflect.camelize(str.replace(/\-/gm, '_'), false)) as string;
			}
			class MakeDefinition {
				name:string
				content:[string,string[],string]
				constructor(interfaceName:string) {
					this.name = interfaceName;
					this.content = [`interface ${interfaceName} {`, [], '}'];
				}
				// name(interfaceName) {
				// 	this.content[0] = `interface ${interfaceName} {`;
				// }
				push(data) {
					this.content[1].push(data);
				}
				prepend(data) {

					this.content[1].unshift(data);
				}
				get isEmpty () {
					return this.content[1].length === 0;
				}
			}
			function traverse (context:string[], collection:string, specification:any) {
				let collectionName = namelize(specification[collection].collectionName ? specification[collection].collectionName : collection);
				let prename = context.join('') + collectionName;
				context.push(inflect.singularize(collectionName));
				collectionName = prename;
				let object = specification[collection];
				let IInterface = `${collectionName}Class`;
				// console.log(context);
				let IInterfaceName = `I${collectionName}`;
				let RootDefinitions = [];
				let ClassDefinition = new MakeDefinition(IInterface);
				let IResponse = resolveIResponse(`IResponse${inflect.singularize(collectionName)}`); // resolveIResponse(`IResponse${inflect.singularize(collectionName.replace('InnerClass', ''))}`);
				if(object.actions) {
					let InterfaceDefinition =  new MakeDefinition(IInterfaceName); // [`interface ${IInterfaceName} {`, [`(id: string|number): ${collectionName}`], '}'] as any[];
					for(const fndef of object.actions) {
						let [action,method, ...defs] = fndef.split(':') as string[];
						action =  inflect.camelize( action.replace(/\-/gm, '_'), false);
						let Action = IResponse === 'any' ? `${action}<T>` : action;
						defs = defs ? defs : [];
						let single = defs.indexOf('single') > -1;
						let hasargs = defs.indexOf('hasargs') > -1;
						let nopath = defs.indexOf('nopath') > -1;
						switch(action) {
							case 'list':
								let  IIRespomse = Action.indexOf('<T>') > -1 ? `Promise<T>` : `Promise<LinodeResponse<${IResponse}>>`;
								InterfaceDefinition.push(`${Action}(page?:number): ${IIRespomse}`);
								InterfaceDefinition.push(`${Action}(page:number, filter:any): ${IIRespomse}`);
								InterfaceDefinition.push(`${Action}(filter:any): ${IIRespomse}`);
								break;
							case 'create':
								InterfaceDefinition.push(`${Action}(data:any): Promise<${IResponse}>`);
								break;
							case 'update':
								ClassDefinition.push(`${Action}(data:any): Promise<${IResponse}>`);
								break;
							case 'delete':
								ClassDefinition.push(`${action}<T>(): Promise<T>`);
								break;
							case 'get':
								if(method === undefined) {
									ClassDefinition.push(`${action}(): Promise<${IResponse}>`);
								} else {
									if(object.query) {
										ClassDefinition.push(`${action}(): Promise<${IResponse}>`);
									} else {
										InterfaceDefinition.push(`${action}(): Promise<${IResponse}>`);
									}
								}
								break;
							default:
								if(single) {
									ClassDefinition.push(`${action}<T>(${hasargs ? 'data:any':''}): Promise<T>`);
								} else {
									InterfaceDefinition.push(`${action}<T>(${hasargs ? 'data:any':''}): Promise<T>`);
								}

								break;
						}
					}
					if(object.query) {
						const querydef = [];
						let curr = querydef;
						for(const query of object.query) {
							curr.push(`${query}(data:any):`);
							curr.push([]);
							curr = curr[curr.length - 1];
							// if(!querydef.length) querydef.push(`${query}(data:any):`);
							// querydef.push
							// NewIDefinition.push(`${query}${lastreturn}`);
							// lastreturn = `(data:any): (data:any) => ${lastreturn}`;
						}
						function arrFlat(arr) {
							let res = '';
							for(const a of arr ) {
								if(a instanceof Array) {
									res += arrFlat(a);
								} else {
									res += a;
								}
							}
							return `{ ${res} }`;
						}
						curr.push(`get(): Promise<${IResponse}>`);
						ClassDefinition.push(`${querydef[0]}${arrFlat(querydef[1])}`);
						// console.log(querydef, arrFlat(querydef));
					}
					if(!InterfaceDefinition.isEmpty) {
						InterfaceDefinition.prepend(`(id: string|number): ${IInterface}`);
						// NewIDefinition.name(IInterfaceName);
						RootDefinitions.push(arr2string(InterfaceDefinition.content));
					} else {
						IInterfaceName = IInterface;
					}
				}
				if(object.collections) {
					for(const key of Object.keys(object.collections)) {
						const newcontext = [].concat(context);
						let [interfacename, definition, rootdefinnitions] = traverse(newcontext, key, object.collections);
						RootDefinitions = RootDefinitions.concat(rootdefinnitions);
						// console.log(RootDefinitions);
						// console.log(interfacename, definition, rootdefinnitions);
						// if(interfacename === 'InstancesClass') {
						// 	console.log(interfacename, definition, object.collections[key]);
						// }
						RootDefinitions.push(arr2string(definition));
						ClassDefinition.push(`${inflect.camelize(key.replace(/\-/gm, '_'), false)}:${interfacename}`);
						// break;
					}
				}
				// console.log(arr2string(NewIDefinition.content));
				return [IInterfaceName, ClassDefinition.content, RootDefinitions] as [string, string[], any[]];
			}
			const specification = require('../src/spec').default;
			let file = './index.d.ts';
			writeFileSync(file, 'declare namespace Linodev4 {');
			appendFileSync(file, '\n\tinterface LinodeResponse<T> {\n\t\tdata:T[]\n\t\tpage:number\n\t\tpages:number\n\t\tresults:number\n\t\terrors?:any[]\n\t}\n');
			let LinodeAPI = '\n\ttype LinodeMakeRequest = (client:ExtendedClient,method:HTTPVerb, path:string,hasargs:boolean,data:any,isCustom:boolean) => Promise<any>;\n\t//@ts-ignore\n\texport default class Linode {';
			LinodeAPI += '\n\tconstructor(token:string, fn?:LinodeMakeRequest);'
			for(let collection of Object.keys(specification)) {
				let collectionName = specification[collection].collectionName ? specification[collection].collectionName : collection;
				let [interfacename, definition, rootdefinnitions] = traverse([], collection, specification);
				// console.log(interfacename, definition, rootdefinnitions);
				// let [interfacename, definition, rootdefinnitions] = defineCollection(collection, specification[collection]);
				appendFileSync(file, rootdefinnitions.join('\n').replace(/ICustomResponse/gm,'any') + '\n');
				appendFileSync(file, arr2string(definition));
				LinodeAPI += `\n\t\t${collectionName}: ${interfacename}`;
			}
			LinodeAPI += '\n\t}';
			appendFileSync(file, LinodeAPI);
			appendFileSync(file, '\n}\nexport = Linodev4');
			let all = readFileSync(file, 'utf-8');
			interfacesNames = ['ExtendedClient', 'HTTPVerb'].concat(interfacesNames);
			writeFileSync(file, `import { ${interfacesNames.join(', ')} } from './basic_interfaces';\n`);
			appendFileSync(file, all);
		}
	}

}
