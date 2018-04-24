import { appendFileSync, writeFileSync, readFileSync } from "fs";
import { ENGINE_METHOD_CIPHERS } from "constants";

import * as i from 'i';
import spec from "./src/spec";
const inflect = new i();
inflect.inflections.singular('ips', 'ips');



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
		method = `\n\t/**\n\t * ${API.href}\n\t */\n\t${method} void`;
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
			method = `\n\t/**\n\t * ${API}\n\t */\n\tupdate(data:any): Promise<${IName}>`;
		} else if(method.indexOf('create') > -1) {
			method = `\n\t/**\n\t * ${API}\n\t */\n\tcreate(data:any): Promise<${IName}>`;
		} else if (method === 'list():') {
			method = `\n\t/**\n\t * ${API}\n\t */\n\tlist(page?:number): ${methodRespose}`;

			method += `\n\t/**\n\t * ${API}\n\t */\n\tlist(page:number, filter:any): ${methodRespose}`;
			method += `\n\t/**\n\t * ${API}\n\t */\n\tlist(filter:any): ${methodRespose}`;
		} else {
			// method = `\n\t/**\n\t * ${API}\n\t */\n\t${method} ${methodRespose}`;
			method = `\n\t/**\n\t * ${API}\n\t */\n\t${method} Promise<any>`;
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
function arr2string(arr, lvl='') {
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
		}
		if(!InterfaceDefinition.isEmpty) {
			InterfaceDefinition.prepend(`(id: string|number): ${IInterface}`);
			RootDefinitions.push(arr2string(InterfaceDefinition.content));
		} else {
			IInterfaceName = IInterface;
		}
	} else {
		IInterfaceName = IInterface;
	}
	if(object.collections) {
		for(const key of Object.keys(object.collections)) {
			const newcontext = [].concat(context);
			let [interfacename, definition, rootdefinnitions] = traverse(newcontext, key, object.collections);
			RootDefinitions = RootDefinitions.concat(rootdefinnitions);
			RootDefinitions.push(arr2string(definition));
			ClassDefinition.push(`${inflect.camelize(key.replace(/\-/gm, '_'), false)}:${interfacename}`);
		}
	}
	// if(!ClassDefinition.isEmpty) {
	// 	IInterfaceName = ClassDefinition.name;
	// }
	return [IInterfaceName, ClassDefinition.content, RootDefinitions] as [string, string[], any[]];
}
const specification = require('./src/spec').default;
let file = './index.d.ts';
// writeFileSync(file, 'declare namespace Linodev4 {');
writeFileSync(file, '\ninterface LinodeResponse<T> {\n\tdata:T[]\n\tpage:number\n\tpages:number\n\tresults:number\n\terrors?:any[]\n}\n');
let LinodeAPI = '\n\ttype LinodeMakeRequest = (client:ExtendedClient,method:HTTPVerb, path:string,hasargs:boolean,data:any,isCustom:boolean) => Promise<any>;\n\t//@ts-ignore\nexport default class Linode {';
LinodeAPI += '\n\tconstructor(token:string, fn?:LinodeMakeRequest);'
for(let collection of Object.keys(specification)) {
	let collectionName = specification[collection].collectionName ? specification[collection].collectionName : collection;
	let [interfacename, definition, rootdefinnitions] = traverse([], collection, specification);
	appendFileSync(file, rootdefinnitions.join('\n').replace(/ICustomResponse/gm,'any') + '\n');
	appendFileSync(file, arr2string(definition));
	LinodeAPI += `\n\t${collectionName}: ${interfacename}`;
}
LinodeAPI += '\n}';
appendFileSync(file, LinodeAPI);
let all = readFileSync(file, 'utf-8');
interfacesNames = ['ExtendedClient'].concat(interfacesNames);
writeFileSync(file, `import { HTTPVerb } from './enumerations';\n`);
appendFileSync(file, interfacesdefinition);
appendFileSync(file, readFileSync('./advanced_interfaces.d.ts'));
appendFileSync(file, all);
