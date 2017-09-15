import Linode from '../src';
import * as assert from 'assert';
import { appendFileSync, writeFileSync } from 'fs';
import spec from '../src/spec';
import sanitize from '../src/sanitize';

const app = new Linode('abc_token', (client, method, path, hasparams, data, resolve) => {
	if (!hasparams && data) {
		resolve('This method cannot have parameters');
	}
	resolve(`${path}#${method}`);
});
if (process.env.DOCS) {
	let titles = {};
	const equal = assert.equal;
	writeFileSync('./README.md', `# Linode v4 API

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

## Commands
If you need more detailed information please check [Linode v4 API Reference](https://developers.linode.com/v4/introduction)
In the next list you can find the commands to reach an specific url. All the commands listed here are the actual commands supported.
If you find a command missing or wrong, please open an Issue or make a PR.
`.replace(/@@@/g, '```'));
	assert.equal = (a, b, c) => {
		let total = '';
		let [path, method] = b.replace('/v4/', '').split('#');
		let parts = path.split('/');
		let command = path.replace(/\//g, '.').replace(/\.1\./g, '(id).').replace(/\.1/g, '(id)');
		if (spec[parts[0]] && !titles[parts[0]]) {
			total += `### ${parts[0]}\n|Commands|API Reference|\n|---|---|\n`;
			titles[parts[0]] = true;
		}
		let is = '';
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
			if (part == 1) {
				if (root.paramname) {
					command = command.replace(`${lastpart}(id)`, `${lastpart}(${root.paramname})`);
				}
				path = path.replace(`${lastpart}/1`, `${lastpart}/:${root.paramname || 'id'}`);
				hasid = true;
				continue;
			} else if (root.collections && root.collections[part]) {
				root = root.collections[part];
			} else {
				root = null;
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
			command += '()';
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
		path += `#${method}`.replace('#del', '#delete');
		path = `[${path}](https://developers.linode.com/v4/reference/endpoints/${path})`;
		// let Reference = command.replace('app.', '').replace(/\./g, '/')
		total += `|app.${command}|${path}|\n`;
		appendFileSync('./README.md', total);
		equal(a, b, c);
	};
}

export { assert, app };
