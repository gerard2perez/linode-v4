# Linode v4 API

This is a promise-based clinet for the [Linode API](https://developers.linode.com/v4/introduction) version 4

-----------
[![Build Status](https://img.shields.io/travis/gerard2p/linode-v4/master.svg?style=flat-square)](https://travis-ci.org/gerard2p/linode-v4)[![Dependency Status](https://david-dm.org/gerard2p/linode-v4.svg?style=flat-square)](https://david-dm.org/gerard2p/linode-v4)![PRs Welcome](https://img.shields.io/badge/PRs%20🔀-Welcome-brightgreen.svg?style=flat-square)

[![Code Climate](https://codeclimate.com/github/gerard2p/linode-v4/badges/gpa.svg?style=flat-square)](https://codeclimate.com/github/gerard2p/linode-v4?style=flat-square) [![Test Coverage](https://codeclimate.com/github/gerard2p/linode-v4/badges/coverage.svg?style=flat-square)](https://codeclimate.com/github/gerard2p/linode-v4/coverage) [![Issue Count](https://codeclimate.com/github/gerard2p/linode-v4/badges/issue_count.svg?style=flat-square)](https://codeclimate.com/github/gerard2p/linode-v4)


![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)[![js-happiness-style](https://img.shields.io/badge/code%20style-happiness-brightgreen.svg?style=flat-square)](https://github.com/JedWatson/happiness)
-----------
## Installation
```sh
npm install linode-v4 --save
```
## Usage
```javascript
import Linode from 'linode-v4';

const api = new Linode(api_key);
```
or
```javascript
const Linode = require('linode-v4').default;

const api = new Linode(api_key);
```
## linode
### distributions
|Command|API Reference|
|---|---|
|app.linode.distributions.list()|[/linode/distributions](https://developers.linode.com/v4/reference/endpoints/linode/distributions)
|app.linode.distributions(id).get()|[/linode/distributions/:id#get](https://developers.linode.com/v4/reference/endpoints/linode/distributions/:id#get)
### kernels
|Command|API Reference|
|---|---|
|app.linode.kernels.list()|[/linode/kernels](https://developers.linode.com/v4/reference/endpoints/linode/kernels)
|app.linode.kernels(id).get()|[/linode/kernels/:id#get](https://developers.linode.com/v4/reference/endpoints/linode/kernels/:id#get)
### stackscripts
|Command|API Reference|
|---|---|
|app.linode.stackscripts.list()|[/linode/stackscripts](https://developers.linode.com/v4/reference/endpoints/linode/stackscripts)
|app.linode.stackscripts.create(data)|[/linode/stackscripts](https://developers.linode.com/v4/reference/endpoints/linode/stackscripts)
|app.linode.stackscripts(id).get()|[/linode/stackscripts/:id#get](https://developers.linode.com/v4/reference/endpoints/linode/stackscripts/:id#get)
|app.linode.stackscripts(id).update(data)|[/linode/stackscripts/:id#put](https://developers.linode.com/v4/reference/endpoints/linode/stackscripts/:id#put)
|app.linode.stackscripts(id).delete()|[/linode/stackscripts/:id#del](https://developers.linode.com/v4/reference/endpoints/linode/stackscripts/:id#del)
### types
|Command|API Reference|
|---|---|
|app.linode.types.list()|[/linode/types](https://developers.linode.com/v4/reference/endpoints/linode/types)
|app.linode.types(id).get()|[/linode/types/:id#get](https://developers.linode.com/v4/reference/endpoints/linode/types/:id#get)
### volumes
|Command|API Reference|
|---|---|
|app.linode.volumes.list()|[/linode/volumes](https://developers.linode.com/v4/reference/endpoints/linode/volumes)
|app.linode.volumes.create(data)|[/linode/volumes](https://developers.linode.com/v4/reference/endpoints/linode/volumes)
|app.linode.volumes(id).get()|[/linode/volumes/:id#get](https://developers.linode.com/v4/reference/endpoints/linode/volumes/:id#get)
|app.linode.volumes(id).update(data)|[/linode/volumes/:id#put](https://developers.linode.com/v4/reference/endpoints/linode/volumes/:id#put)
|app.linode.volumes(id).delete()|[/linode/volumes/:id#del](https://developers.linode.com/v4/reference/endpoints/linode/volumes/:id#del)
|app.linode.volumes(id).attach()|[/linode/volumes/:id/attach#post](https://developers.linode.com/v4/reference/endpoints/linode/volumes/:id/attach#post)
|app.linode.volumes(id).detach()|[/linode/volumes/:id/detach#post](https://developers.linode.com/v4/reference/endpoints/linode/volumes/:id/detach#post)
### instances
|Command|API Reference|
|---|---|
|app.linode.instances.list()|[/linode/instances](https://developers.linode.com/v4/reference/endpoints/linode/instances)
|app.linode.instances.create(data)|[/linode/instances](https://developers.linode.com/v4/reference/endpoints/linode/instances)
|app.linode.instances(id).get()|[/linode/instances/:id#get](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id#get)
|app.linode.instances(id).update(data)|[/linode/instances/:id#put](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id#put)
|app.linode.instances(id).delete()|[/linode/instances/:id#del](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id#del)
|app.linode.instances(id).boot()|[/linode/instances/:id/boot#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/boot#post)
|app.linode.instances(id).clone()|[/linode/instances/:id/clone#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/clone#post)
|app.linode.instances(id).kvmify()|[/linode/instances/:id/kvmify#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/kvmify#post)
|app.linode.instances(id).mutate()|[/linode/instances/:id/mutate#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/mutate#post)
|app.linode.instances(id).reboot()|[/linode/instances/:id/reboot#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/reboot#post)
|app.linode.instances(id).rebuild()|[/linode/instances/:id/rebuild#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/rebuild#post)
|app.linode.instances(id).rescue()|[/linode/instances/:id/rescue#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/rescue#post)
|app.linode.instances(id).resize()|[/linode/instances/:id/resize#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/resize#post)
|app.linode.instances(id).shutdown()|[/linode/instances/:id/shutdown#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/shutdown#post)
|app.linode.instances(id).volumes()|[/linode/instances/:id/volumes#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/volumes#post)
### backups
|Command|API Reference|
|---|---|
|app.linode.instances.(id).backups.list()|[/linode/instances/:id/backups](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/backups)
|app.linode.instances.(id).backups.create(data)|[/linode/instances/:id/backups](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/backups)
|app.linode.instances.(id).backups(id).get()|[/linode/instances/:id/backups/:id#get](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/backups/:id#get)
|app.linode.instances.(id).backups(id).restore()|[/linode/instances/:id/backups/:id/restore#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/backups/:id/restore#post)
|app.linode.instances.(id).backups.cancel()|[/linode/instances/:id/backups/cancel#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/backups/cancel#post)
|app.linode.instances.(id).backups.enable()|[/linode/instances/:id/backups/enable#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/backups/enable#post)
### configs
|Command|API Reference|
|---|---|
|app.linode.instances.(id).configs.list()|[/linode/instances/:id/configs](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/configs)
|app.linode.instances.(id).configs.create(data)|[/linode/instances/:id/configs](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/configs)
|app.linode.instances.(id).configs(id).get()|[/linode/instances/:id/configs/:id#get](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/configs/:id#get)
|app.linode.instances.(id).configs(id).update(data)|[/linode/instances/:id/configs/:id#put](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/configs/:id#put)
|app.linode.instances.(id).configs(id).delete()|[/linode/instances/:id/configs/:id#del](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/configs/:id#del)
### disks
|Command|API Reference|
|---|---|
|app.linode.instances.(id).disks.list()|[/linode/instances/:id/disks](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/disks)
|app.linode.instances.(id).disks.create(data)|[/linode/instances/:id/disks](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/disks)
|app.linode.instances.(id).disks(id).get()|[/linode/instances/:id/disks/:id#get](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/disks/:id#get)
|app.linode.instances.(id).disks(id).update(data)|[/linode/instances/:id/disks/:id#put](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/disks/:id#put)
|app.linode.instances.(id).disks(id).delete()|[/linode/instances/:id/disks/:id#del](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/disks/:id#del)
|app.linode.instances.(id).disks(id).duplicate()|[/linode/instances/:id/disks/:id#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/disks/:id#post)
|app.linode.instances.(id).disks(id).password()|[/linode/instances/:id/disks/:id/password#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/disks/:id/password#post)
|app.linode.instances.(id).disks(id).resize()|[/linode/instances/:id/disks/:id/resize#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/disks/:id/resize#post)
### ips
|Command|API Reference|
|---|---|
|app.linode.instances.(id).ips.list()|[/linode/instances/:id/ips](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/ips)
|app.linode.instances.(id).ips.create(data)|[/linode/instances/:id/ips](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/ips)
|app.linode.instances.(id).ips(id).get()|[/linode/instances/:id/ips/:id#get](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/ips/:id#get)
|app.linode.instances.(id).ips(id).update(data)|[/linode/instances/:id/ips/:id#put](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/ips/:id#put)
|app.linode.instances.(id).ips(id).delete()|[/linode/instances/:id/ips/:id#del](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/ips/:id#del)
|app.linode.instances.(id).ips.sharing()|[/linode/instances/:id/ips/sharing#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/ips/sharing#post)
### stats
|Command|API Reference|
|---|---|
|app.linode.instances.(id).stats.list()|[/linode/instances/:id/stats](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/stats)
|app.linode.instances.(id).stats(id).year(data).month(data).get()|[/linode/instances/:id/stats/:year/:month#get](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/stats/:year/:month#get)
## domains
|Command|API Reference|
|---|---|
|app.domains.list()|[/domains](https://developers.linode.com/v4/reference/endpoints/domains)
|app.domains.create(data)|[/domains](https://developers.linode.com/v4/reference/endpoints/domains)
|app.domains(id).get()|[/domains/:id#get](https://developers.linode.com/v4/reference/endpoints/domains/:id#get)
|app.domains(id).update(data)|[/domains/:id#put](https://developers.linode.com/v4/reference/endpoints/domains/:id#put)
|app.domains(id).delete()|[/domains/:id#del](https://developers.linode.com/v4/reference/endpoints/domains/:id#del)
### records
|Command|API Reference|
|---|---|
|app.domains.(id).records.list()|[/domains/:id/records](https://developers.linode.com/v4/reference/endpoints/domains/:id/records)
|app.domains.(id).records.create(data)|[/domains/:id/records](https://developers.linode.com/v4/reference/endpoints/domains/:id/records)
|app.domains.(id).records(id).get()|[/domains/:id/records/:id#get](https://developers.linode.com/v4/reference/endpoints/domains/:id/records/:id#get)
|app.domains.(id).records(id).update(data)|[/domains/:id/records/:id#put](https://developers.linode.com/v4/reference/endpoints/domains/:id/records/:id#put)
|app.domains.(id).records(id).delete()|[/domains/:id/records/:id#del](https://developers.linode.com/v4/reference/endpoints/domains/:id/records/:id#del)
## nodebalancers
|Command|API Reference|
|---|---|
|app.nodebalancers.list()|[/nodebalancers](https://developers.linode.com/v4/reference/endpoints/nodebalancers)
|app.nodebalancers.create(data)|[/nodebalancers](https://developers.linode.com/v4/reference/endpoints/nodebalancers)
|app.nodebalancers(id).get()|[/nodebalancers/:id#get](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id#get)
|app.nodebalancers(id).update(data)|[/nodebalancers/:id#put](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id#put)
|app.nodebalancers(id).delete()|[/nodebalancers/:id#del](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id#del)
### configs
|Command|API Reference|
|---|---|
|app.nodebalancers.(id).configs.list()|[/nodebalancers/:id/configs](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id/configs)
|app.nodebalancers.(id).configs.create(data)|[/nodebalancers/:id/configs](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id/configs)
|app.nodebalancers.(id).configs(id).get()|[/nodebalancers/:id/configs/:id#get](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id/configs/:id#get)
|app.nodebalancers.(id).configs(id).delete()|[/nodebalancers/:id/configs/:id#del](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id/configs/:id#del)
|app.nodebalancers.(id).configs(id).ssl()|[/nodebalancers/:id/configs/:id/ssl#post](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id/configs/:id/ssl#post)
### nodes
|Command|API Reference|
|---|---|
|app.nodebalancers.(id).configs.(id).nodes.list()|[/nodebalancers/:id/configs/:id/nodes](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id/configs/:id/nodes)
|app.nodebalancers.(id).configs.(id).nodes.create(data)|[/nodebalancers/:id/configs/:id/nodes](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id/configs/:id/nodes)
|app.nodebalancers.(id).configs.(id).nodes(id).get()|[/nodebalancers/:id/configs/:id/nodes/:id#get](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id/configs/:id/nodes/:id#get)
|app.nodebalancers.(id).configs.(id).nodes(id).update(data)|[/nodebalancers/:id/configs/:id/nodes/:id#put](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id/configs/:id/nodes/:id#put)
|app.nodebalancers.(id).configs.(id).nodes(id).delete()|[/nodebalancers/:id/configs/:id/nodes/:id#del](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id/configs/:id/nodes/:id#del)
