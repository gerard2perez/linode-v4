# Linode v4 API
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
```sh
npm install linode-v4 --save
```
## Usage
```javascript
import Linode from 'linode-v4';

const server = new Linode(api_key);
```
or
```javascript
const Linode = require('linode-v4').default;

const server = new Linode(api_key);
```

## Commands
If you need more detailed information please check [Linode v4 API Reference](https://developers.linode.com/v4/introduction)
In the next list you can find the commands to reach an specific url. All the commands listed here are the actual commands supported.
If you find a command missing or wrong, please open an Issue or make a PR.

## Pagination
All list() methods can receive the page parameter wich to indicate the page.
 * list( [page](https://developers.linode.com/v4/pagination)?:number=1) )

## Filtering & Sorting
All list() methods can receive the page parameter wich to indicate the page.
* list( [page](https://developers.linode.com/v4/pagination)?:number=1), [filter](https://developers.linode.com/v4/filtering):any )
* list( [filter](https://developers.linode.com/v4/filtering):any )

### linode
|Commands|API Reference|
|---|---|
|server.linodes.instances.list()|[linode/instances#GET](https://developers.linode.com/v4/reference/endpoints/linode/instances#GET)|
|server.linodes.instances.list()|[linode/instances#GET](https://developers.linode.com/v4/reference/endpoints/linode/instances#GET)|
|server.linodes.instances.list()|[linode/instances#GET](https://developers.linode.com/v4/reference/endpoints/linode/instances#GET)|
|server.linodes.instances.create(data)|[linode/instances#POST](https://developers.linode.com/v4/reference/endpoints/linode/instances#POST)|
|server.linodes.instances(id).update(data)|[linode/instances/$id#PUT](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id#PUT)|
|server.linodes.instances(id).delete()|[linode/instances/$id#DELETE](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id#DELETE)|
|server.linodes.instances(id).get()|[linode/instances/$id#GET](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id#GET)|
|server.linodes.instances(id).boot(data)|[linode/instances/$id/boot#POST](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/boot#POST)|
|server.linodes.instances(id).mutate(data)|[linode/instances/$id/mutate#POST](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/mutate#POST)|
|server.linodes.instances(id).reboot(data)|[linode/instances/$id/reboot#POST](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/reboot#POST)|
|server.linodes.instances(id).rebuild(data)|[linode/instances/$id/rebuild#POST](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/rebuild#POST)|
|server.linodes.instances(id).rescue(data)|[linode/instances/$id/rescue#POST](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/rescue#POST)|
|server.linodes.instances(id).resize(data)|[linode/instances/$id/resize#POST](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/resize#POST)|
|server.linodes.instances(id).shutdown(data)|[linode/instances/$id/shutdown#POST](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/shutdown#POST)|
|server.linodes.instances(id).volumes()|[linode/instances/$id/volumes#GET](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/volumes#GET)|
|server.linodes.instances(id).backups.get()|[linode/instances/$id/backups#GET](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/backups#GET)|
|server.linodes.instances(id).backups.create(data)|[linode/instances/$id/backups#POST](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/backups#POST)|
|server.linodes.instances(id).backups(id).restore()|[linode/instances/$id/backups/$id/restore#POST](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/backups/$id/restore#POST)|
|server.linodes.instances(id).backups.cancel()|[linode/instances/$id/backups/cancel#POST](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/backups/cancel#POST)|
|server.linodes.instances(id).backups.enable()|[linode/instances/$id/backups/enable#POST](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/backups/enable#POST)|
|server.linodes.instances(id).configs.list()|[linode/instances/$id/configs#GET](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/configs#GET)|
|server.linodes.instances(id).configs.create(data)|[linode/instances/$id/configs#POST](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/configs#POST)|
|server.linodes.instances(id).configs(id).get()|[linode/instances/$id/configs/$id#GET](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/configs/$id#GET)|
|server.linodes.instances(id).configs(id).update(data)|[linode/instances/$id/configs/$id#PUT](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/configs/$id#PUT)|
|server.linodes.instances(id).configs(id).delete()|[linode/instances/$id/configs/$id#DELETE](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/configs/$id#DELETE)|
|server.linodes.instances(id).disks.list()|[linode/instances/$id/disks#GET](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/disks#GET)|
|server.linodes.instances(id).disks.create(data)|[linode/instances/$id/disks#POST](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/disks#POST)|
|server.linodes.instances(id).disks(id).get()|[linode/instances/$id/disks/$id#GET](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/disks/$id#GET)|
|server.linodes.instances(id).disks(id).update(data)|[linode/instances/$id/disks/$id#PUT](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/disks/$id#PUT)|
|server.linodes.instances(id).disks(id).clone()|[linode/instances/$id/disks/$id/clone#POST](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/disks/$id/clone#POST)|
|server.linodes.instances(id).disks(id).delete()|[linode/instances/$id/disks/$id#DELETE](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/disks/$id#DELETE)|
|server.linodes.instances(id).disks(id).password(data)|[linode/instances/$id/disks/$id/password#POST](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/disks/$id/password#POST)|
|server.linodes.instances(id).disks(id).resize(data)|[linode/instances/$id/disks/$id/resize#POST](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/disks/$id/resize#POST)|
|server.linodes.instances(id).ips.list()|[linode/instances/$id/ips#GET](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/ips#GET)|
|server.linodes.instances(id).ips.create(data)|[linode/instances/$id/ips#POST](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/ips#POST)|
|server.linodes.instances(id).ips(ip_address).get()|[linode/instances/$id/ips/$ip_address#GET](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/ips/$ip_address#GET)|
|server.linodes.instances(id).ips(ip_address).update(data)|[linode/instances/$id/ips/$ip_address#PUT](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/ips/$ip_address#PUT)|
|server.linodes.instances(id).ips(ip_address).delete()|[linode/instances/$id/ips/$ip_address#DELETE](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/ips/$ip_address#DELETE)|
|server.linodes.kernels.list()|[linode/kernels#GET](https://developers.linode.com/v4/reference/endpoints/linode/kernels#GET)|
|server.linodes.kernels(id).get()|[linode/kernels/$id#GET](https://developers.linode.com/v4/reference/endpoints/linode/kernels/$id#GET)|
|server.linodes.stackscripts.list()|[linode/stackscripts#GET](https://developers.linode.com/v4/reference/endpoints/linode/stackscripts#GET)|
|server.linodes.stackscripts.create(data)|[linode/stackscripts#POST](https://developers.linode.com/v4/reference/endpoints/linode/stackscripts#POST)|
|server.linodes.stackscripts(id).get()|[linode/stackscripts/$id#GET](https://developers.linode.com/v4/reference/endpoints/linode/stackscripts/$id#GET)|
|server.linodes.stackscripts(id).update(data)|[linode/stackscripts/$id#PUT](https://developers.linode.com/v4/reference/endpoints/linode/stackscripts/$id#PUT)|
|server.linodes.stackscripts(id).delete()|[linode/stackscripts/$id#DELETE](https://developers.linode.com/v4/reference/endpoints/linode/stackscripts/$id#DELETE)|
|server.linodes.instances(id).stats.get()|[linode/instances/$id/stats#GET](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/stats#GET)|
|server.linodes.instances(id).stats.2010(id).get()|[linode/instances/$id/stats/2010/$id#GET](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/stats/2010/$id#GET)|
|server.linodes.instances(id).stats.year(n).month(m).get()|[linode/instances/$id/stats/$id/1#GET](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/stats/$id/1#GET)|
|server.linodes.types.list()|[linode/types#GET](https://developers.linode.com/v4/reference/endpoints/linode/types#GET)|
|server.linodes.types(id).get()|[linode/types/$id#GET](https://developers.linode.com/v4/reference/endpoints/linode/types/$id#GET)|
