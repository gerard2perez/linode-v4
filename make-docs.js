import spec from './src/spec';
import { writeFileSync } from 'fs';

let usage = `# Linode v4 API

This is a promise-based clinet for the [Linode API](https://developers.linode.com/v4/introduction) version 4

-----------
[![Build Status](https://img.shields.io/travis/gerard2p/linode-v4/master.svg?style=flat-square)](https://travis-ci.org/gerard2p/linode-v4)[![Dependency Status](https://david-dm.org/gerard2p/linode-v4.svg?style=flat-square)](https://david-dm.org/gerard2p/linode-v4)![PRs Welcome](https://img.shields.io/badge/PRs%20🔀-Welcome-brightgreen.svg?style=flat-square)

[![Code Climate](https://codeclimate.com/github/gerard2p/linode-v4/badges/gpa.svg?style=flat-square)](https://codeclimate.com/github/gerard2p/linode-v4?style=flat-square) [![Test Coverage](https://codeclimate.com/github/gerard2p/linode-v4/badges/coverage.svg?style=flat-square)](https://codeclimate.com/github/gerard2p/linode-v4/coverage) [![Issue Count](https://codeclimate.com/github/gerard2p/linode-v4/badges/issue_count.svg?style=flat-square)](https://codeclimate.com/github/gerard2p/linode-v4)


![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)[![js-happiness-style](https://img.shields.io/badge/code%20style-happiness-brightgreen.svg?style=flat-square)](https://github.com/JedWatson/happiness)
-----------
## Installation
@@@sh
npm install linode-v4 --save
@@@
## Usage
@@@javascript
import Linode from 'linode-v4';

const api = new Linode(api_key);
@@@
or
@@@javascript
const Linode = require('linode-v4').default;

const api = new Linode(api_key);
@@@
`;
function link (path, ref) {
	if (!ref) {
		ref = path;
	}
	return `[/${path}](https://developers.linode.com/v4/reference/endpoints/${path})`;
}
function renderActions (path, spec, generateHeader = true) {
	let actions = spec.actions || [];
	let appPath = path.replace(/\//g, '.').replace(/:id/g, '(id)');
	let data = `### ${path.split('/').pop()}\n`;
	if (generateHeader && actions.length) {
		data += `|Command|API Reference|\n|---|---|\n`;
	} else {

	}
	if (actions.includes('list')) {
		data += `|app.${appPath}.list()|${link(path)}\n`;
	}
	if (actions.includes('create')) {
		data += `|app.${appPath}.create(data)|${link(path)}\n`;
	}
	if (actions.includes('get')) {
		data += `|app.${appPath}(id).get()|${link(path + '/:id#get')}\n`;
	}
	if (actions.includes('update')) {
		data += `|app.${appPath}(id).update(data)|${link(path + '/:id#put')}\n`;
	}
	if (actions.includes('delete')) {
		data += `|app.${appPath}(id).delete()|${link(path + '/:id#del')}\n`;
	}
	if (spec.query) {
		data += `|app.${appPath}(id).${spec.query.map(p => `${p}(data)`).join('.')}.get()|${link(`${path}/:${spec.query.join('/:')}#get`)}\n`;
	}
	for (const action of actions) {
		if (action.includes(':')) {
			let params = action.split(':');
			if (params[0] === 'single') {
				let last = params.pop();
				if (last === 'noargs') {
					data += `|app.${appPath}(id).${params[1]}()|${link(path + `/:id#${params[2]}`)}\n`;
				} else {
					data += `|app.${appPath}(id).${params[1]}()|${link(path + `/:id/${params[1]}#${last}`)}\n`;
				}
			} else {
				data += `|app.${appPath}.${params[0]}()|${link(path + `/${params[0]}#${params[1]}`)}\n`;
			}
		}
	}
	for (const collection in spec.collections) {
		data += renderActions(`${path}${actions.length ? '/:id/' : '/'}${collection}`, spec.collections[collection], true);
	}
	return data;
}
for (const data in spec) {
	let temp = renderActions(data, spec[data]).substr(1);
	usage += temp;
	// if (spec[data].actions) {
	// 	console.log(spec[data].actions);
	// 	usage += renderActions(data, spec[data].actions);
	// 	for (const collection in spec[data].collections) {
	// 		usage += renderActions(`${data}/${collection}`, spec[data].collections[collection].actions, false);
	// 	}
	// }
}

writeFileSync('./README.md', usage.replace(/@@@/g, '```'));
