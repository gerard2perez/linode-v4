import Linode from '../src';
// import * as assert from 'assert';
import { appendFileSync, writeFileSync } from 'fs';
import spec from '../src/spec';
import sanitize from '../src/sanitize';
import { assert } from 'chai';
// import * as https from 'https';

// function request(url) {
// 	return new Promise((resolve, reject)=>{
// 		https.get(url, (res) => {
// 			const { statusCode } = res;
// 			const contentType = res.headers['content-type'];
// 			let error;
// 			if (statusCode !== 200) {
// 				error = new Error('Request Failed.\n' +
// 								`Status Code: ${statusCode}`);
// 			}
// 			if (error) {
// 				console.error(error.message);
// 				// consume response data to free up memory
// 				res.resume();
// 				return;
// 			}
// 			res.setEncoding('utf8');
// 			let rawData = '';
// 			res.on('data', (chunk) => { rawData += chunk; });
// 			res.on('end', () => {
// 				try {
// 					const parsedData = rawData.toString();
// 					resolve(parsedData);
// 				} catch (e) {
// 					reject(e.message);
// 				}
// 			});
// 		}).on('error', (e) => {
// 			reject(e.message);
// 		});
// 	});
// }

let API_DEFINITION = {};
const app = new Linode('abc_token', async (client, method, path, hasparams, data,iscustom) => {
	if (!hasparams && data) {
		return 'This method cannot have parameters';
	}
	return `${path}#${method}${iscustom && data ? '%data':''}`;
});
if (process.env.DOCS) {
	let titles = {};
	const equal = assert.equal;
	writeFileSync('./README.md', `# Linode v4 API
#### Date compatibility 2018-04-02

This is a promise-based clinet for the [Linode API](https://developers.linode.com/v4/introduction) version 4

-----------
[![Build Status](https://img.shields.io/travis/gerard2p/linode-v4/master.svg?style=flat-square)](https://travis-ci.org/gerard2p/linode-v4)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fgerard2p%2Flinode-v4.svg?type=badge_small)](https://app.fossa.io/projects/git%2Bgithub.com%2Fgerard2p%2Flinode-v4?ref=badge_shield)

[![bitHound Dependencies](https://www.bithound.io/github/gerard2p/linode-v4/badges/dependencies.svg)](https://www.bithound.io/github/gerard2p/linode-v4/master/dependencies/npm)[![bitHound Dev Dependencies](https://www.bithound.io/github/gerard2p/linode-v4/badges/devDependencies.svg)](https://www.bithound.io/github/gerard2p/linode-v4/master/dependencies/npm)


[![Maintainability](https://api.codeclimate.com/v1/badges/09a1688603acd82faa9e/maintainability)](https://codeclimate.com/github/gerard2p/linode-v4/maintainability)[![Test Coverage](https://api.codeclimate.com/v1/badges/09a1688603acd82faa9e/test_coverage)](https://codeclimate.com/github/gerard2p/linode-v4/test_coverage)

![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=for-the-badge)![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=for-the-badge)[![TypeScri[t]](https://img.shields.io/badge/typescript-v2.8.1-blue.svg?longCache=true&style=for-the-badge)](https://github.com/Microsoft/TypeScript)
-----------
## Installation
@@@sh
npm install linode-v4 --save
@@@
## Usage
@@@javascript
import Linode from 'linode-v4';

const server = new Linode(api_key);
@@@
or
@@@javascript
const Linode = require('linode-v4').default;

const server = new Linode(api_key);
@@@

## Commands
If you need more detailed information please check [Linode v4 API Reference](https://developers.linode.com/v4/introduction)
In the next list you can find the commands to reach an specific url. All the commands listed here are the actual commands supported.
If you find a command missing or wrong, please open an Issue or make a PR.
`.replace(/@@@/g, '```'));
	//@ts-ignore
	assert.equal = async (a:string, b:string, c:string) => {
		let total = '';
		let [path, method] = b.replace('/v4/', '').split('#');
		let hasdata = method.includes('%data');
		method = method.replace('%data', '' );
		let parts = path.split('/');
		let command = sanitize(path.replace(/\//g, '.').replace(/\.1\./g, '(id).').replace(/\.1/g, '(id)')).replace('linode.', 'linodes.');
		if (spec[parts[0]] && !titles[parts[0]]) {
			total += `### ${parts[0]}\n|Commands|API Reference|\n|---|---|\n`;
			titles[parts[0]] = true;
		}
		let root = spec[parts[0]];
		let bottomItem = parts[0];
		parts.shift();
		let hasid = false;
		let lastpart = '';
		for (const part of parts) {
			bottomItem = part;
			let findAction = root.actions.filter(a => {
				return a.indexOf(part) > -1 && a.indexOf(method);
			})[0];
			if (part === '1') {
				if (root.paramname) {
					command = command.replace(`${lastpart}(id)`, `${lastpart}(${root.paramname})`);
				}
				path = path.replace(`${lastpart}/1`, `${lastpart}/$${root.paramname || 'id'}`);
				hasid = true;
				continue;
			} else if (root.collections && root.collections[part]) {
				root = root.collections[part];
			} else {
				// root = null;
				if (findAction) {
					root = 'actions';
					break;
				}
			}
			lastpart = part;
			hasid = false;
		}
		if (root === 'actions') {
			command = command.replace(bottomItem, sanitize(bottomItem));
			command += `(${hasdata ? 'data' : ''})`;
		} else if (root.collections || root.actions) {
			let findAction = root.actions.filter(a => {
				return a.indexOf(`${bottomItem}:${method}`) > -1 || a.indexOf(`:${method}`) > -1;
			});
			switch (method) {
				case 'get':
					if (hasid) {
						command += '.get()';
					} else {
						let action = findAction.filter(r => {
							return r.includes('nopath') || r.indexOf(bottomItem) === 0;
						})[0];
						if (action) {
							let params = action.split(':');
							let args = !params.includes('noargs');
							args = args || params.includes('hasargs');
							let arg = root.paramname || 'id';
							command += `.${params[0]}(${args ? arg : ''})`;
						} else {
							command += '.list()';
						}
					}
					break;
				case 'post':
					command += '.create(data)';
					break;
				case 'put':
					command += '.update(data)';
					break;
				case 'del':
					command += '.delete()';
					break;
			}
		}
		command = command.replace('(id)(id)', '.year(n).month(m)');
		path += `#${method}`.replace('#del', '#delete').toUpperCase();
		let href = `https://developers.linode.com/v4/reference/endpoints/${path}`;
		// console.log(await request(`https://developers.linode.com/v4/reference/endpoints/${path}`));
		path = `[${path}](https://developers.linode.com/v4/reference/endpoints/${path})`;
		total += `|server.${command}|${path}|\n`;
		appendFileSync('./README.md', total);
		equal(a, b, c);
		let command_parts:string[] = command.split('.');
		let index = 0;
		var CURRENT = API_DEFINITION;
		for(let i=0; i < command_parts.length; i++) {
			let newkey = command_parts[i];
			let newkeynoid = newkey.replace(/\([^\)]*\)/gm, '');
			var PRECURRENT;
			if (newkey.includes('(') && i < command_parts.length && CURRENT[newkeynoid]) {
				CURRENT[newkeynoid] = CURRENT[newkeynoid];
				CURRENT[newkeynoid]['(id)'] = CURRENT[newkeynoid]['(id)'] || {href};
				PRECURRENT = CURRENT[newkeynoid]['(id)']
				CURRENT = CURRENT[newkeynoid]['(id)'];
			} else {
				CURRENT[command_parts[i]] = CURRENT[command_parts[i]] || {};
				if(i === command_parts.length - 1) {
					CURRENT[command_parts[i]] = href;
				}
				CURRENT= CURRENT[command_parts[i]];
			}


		}
	};
}
function api_d_ts() {
	return API_DEFINITION;
}
export { assert, app, api_d_ts };
