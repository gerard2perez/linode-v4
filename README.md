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
### instances
|Command|API Reference|
|---|---|
|app.linode.instances.list()|[/linode/instances#get](https://developers.linode.com/v4/reference/endpoints/linode/instances#get)
|app.linode.instances.create(data)|[/linode/instances#post](https://developers.linode.com/v4/reference/endpoints/linode/instances#post)
|app.linode.instances.get()|[/linode/instances/:id#get](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id#get)
|app.linode.instances(id).update(data)|[/linode/instances/:id#put](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id#put)
|app.linode.instances(id).delete()|[/linode/instances/:id#delete](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id#delete)
|app.linode.instances.boot()|[/linode/instances/boot#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/boot#post)
|app.linode.instances.clone()|[/linode/instances/clone#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/clone#post)
|app.linode.instances.kvmify()|[/linode/instances/kvmify#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/kvmify#post)
|app.linode.instances.mutate()|[/linode/instances/mutate#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/mutate#post)
|app.linode.instances.reboot()|[/linode/instances/reboot#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/reboot#post)
|app.linode.instances.rebuild()|[/linode/instances/rebuild#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/rebuild#post)
|app.linode.instances.rescue()|[/linode/instances/rescue#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/rescue#post)
|app.linode.instances.resize()|[/linode/instances/resize#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/resize#post)
|app.linode.instances.shutdown()|[/linode/instances/shutdown#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/shutdown#post)
|app.linode.instances.volumes()|[/linode/instances/volumes#get](https://developers.linode.com/v4/reference/endpoints/linode/instances/volumes#get)
### backups
|Command|API Reference|
|---|---|
|app.linode.instances(id).backups.list()|[/linode/instances/:id/backups#get](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/backups#get)
|app.linode.instances(id).backups.create(data)|[/linode/instances/:id/backups#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/backups#post)
|app.linode.instances(id).backups.restore()|[/linode/instances/:id/backups/restore#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/backups/restore#post)
|app.linode.instances(id).backups.cancel()|[/linode/instances/:id/backups/cancel#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/backups/cancel#post)
|app.linode.instances(id).backups.enable()|[/linode/instances/:id/backups/enable#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/backups/enable#post)
### configs
|Command|API Reference|
|---|---|
|app.linode.instances(id).configs.list()|[/linode/instances/:id/configs#get](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/configs#get)
|app.linode.instances(id).configs.create(data)|[/linode/instances/:id/configs#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/configs#post)
|app.linode.instances(id).configs.get()|[/linode/instances/:id/configs/:id#get](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/configs/:id#get)
|app.linode.instances(id).configs(id).update(data)|[/linode/instances/:id/configs/:id#put](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/configs/:id#put)
|app.linode.instances(id).configs(id).delete()|[/linode/instances/:id/configs/:id#delete](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/configs/:id#delete)
### disks
|Command|API Reference|
|---|---|
|app.linode.instances(id).disks.list()|[/linode/instances/:id/disks#get](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/disks#get)
|app.linode.instances(id).disks.create(data)|[/linode/instances/:id/disks#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/disks#post)
|app.linode.instances(id).disks.get()|[/linode/instances/:id/disks/:id#get](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/disks/:id#get)
|app.linode.instances(id).disks(id).update(data)|[/linode/instances/:id/disks/:id#put](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/disks/:id#put)
|app.linode.instances(id).disks(id).delete()|[/linode/instances/:id/disks/:id#delete](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/disks/:id#delete)
|app.linode.instances(id).disks.duplicate()|[/linode/instances/:id/disks/duplicate#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/disks/duplicate#post)
|app.linode.instances(id).disks.password()|[/linode/instances/:id/disks/password#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/disks/password#post)
|app.linode.instances(id).disks.resize()|[/linode/instances/:id/disks/resize#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/disks/resize#post)
### ips
|Command|API Reference|
|---|---|
|app.linode.instances(id).ips.list()|[/linode/instances/:id/ips#get](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/ips#get)
|app.linode.instances(id).ips.create(data)|[/linode/instances/:id/ips#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/ips#post)
|app.linode.instances(id).ips.get()|[/linode/instances/:id/ips/:ip_address#get](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/ips/:ip_address#get)
|app.linode.instances(id).ips(ip_address).update(data)|[/linode/instances/:id/ips/:ip_address#put](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/ips/:ip_address#put)
|app.linode.instances(id).ips(ip_address).delete()|[/linode/instances/:id/ips/:ip_address#delete](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/ips/:ip_address#delete)
### sharing
|Command|API Reference|
|---|---|
|app.linode.instances(id).ips(ip_address).sharing.list()|[/linode/instances/:id/ips/:ip_address/sharing#get](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/ips/:ip_address/sharing#get)
|app.linode.instances(id).ips(ip_address).sharing.update()|[/linode/instances/:id/ips/:ip_address/sharing/update#put](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/ips/:ip_address/sharing/update#put)
|app.linode.instances(id).ips(ip_address).sharing.delete()|[/linode/instances/:id/ips/:ip_address/sharing/delete#del](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/ips/:ip_address/sharing/delete#del)
### stats
|Command|API Reference|
|---|---|
|app.linode.instances(id).stats.list()|[/linode/instances/:id/stats#get](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/stats#get)
|app.linode.instances(id).stats(id).year(data).month(data).get()|[/linode/instances/:id/stats/:year/:month#get](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/stats/:year/:month#get)
### distributions
|Command|API Reference|
|---|---|
|app.linode.distributions.list()|[/linode/distributions#get](https://developers.linode.com/v4/reference/endpoints/linode/distributions#get)
|app.linode.distributions.get()|[/linode/distributions/:id#get](https://developers.linode.com/v4/reference/endpoints/linode/distributions/:id#get)
### kernels
|Command|API Reference|
|---|---|
|app.linode.kernels.list()|[/linode/kernels#get](https://developers.linode.com/v4/reference/endpoints/linode/kernels#get)
|app.linode.kernels.get()|[/linode/kernels/:id#get](https://developers.linode.com/v4/reference/endpoints/linode/kernels/:id#get)
### stackscripts
|Command|API Reference|
|---|---|
|app.linode.stackscripts.list()|[/linode/stackscripts#get](https://developers.linode.com/v4/reference/endpoints/linode/stackscripts#get)
|app.linode.stackscripts.create(data)|[/linode/stackscripts#post](https://developers.linode.com/v4/reference/endpoints/linode/stackscripts#post)
|app.linode.stackscripts.get()|[/linode/stackscripts/:id#get](https://developers.linode.com/v4/reference/endpoints/linode/stackscripts/:id#get)
|app.linode.stackscripts(id).update(data)|[/linode/stackscripts/:id#put](https://developers.linode.com/v4/reference/endpoints/linode/stackscripts/:id#put)
|app.linode.stackscripts(id).delete()|[/linode/stackscripts/:id#delete](https://developers.linode.com/v4/reference/endpoints/linode/stackscripts/:id#delete)
### types
|Command|API Reference|
|---|---|
|app.linode.types.list()|[/linode/types#get](https://developers.linode.com/v4/reference/endpoints/linode/types#get)
|app.linode.types.get()|[/linode/types/:id#get](https://developers.linode.com/v4/reference/endpoints/linode/types/:id#get)
### volumes
|Command|API Reference|
|---|---|
|app.linode.volumes.list()|[/linode/volumes#get](https://developers.linode.com/v4/reference/endpoints/linode/volumes#get)
|app.linode.volumes.create(data)|[/linode/volumes#post](https://developers.linode.com/v4/reference/endpoints/linode/volumes#post)
|app.linode.volumes.get()|[/linode/volumes/:id#get](https://developers.linode.com/v4/reference/endpoints/linode/volumes/:id#get)
|app.linode.volumes(id).update(data)|[/linode/volumes/:id#put](https://developers.linode.com/v4/reference/endpoints/linode/volumes/:id#put)
|app.linode.volumes(id).delete()|[/linode/volumes/:id#delete](https://developers.linode.com/v4/reference/endpoints/linode/volumes/:id#delete)
|app.linode.volumes.attach()|[/linode/volumes/attach#post](https://developers.linode.com/v4/reference/endpoints/linode/volumes/attach#post)
|app.linode.volumes.detach()|[/linode/volumes/detach#post](https://developers.linode.com/v4/reference/endpoints/linode/volumes/detach#post)
## domains
|Command|API Reference|
|---|---|
|app.domains.list()|[/domains#get](https://developers.linode.com/v4/reference/endpoints/domains#get)
|app.domains.create(data)|[/domains#post](https://developers.linode.com/v4/reference/endpoints/domains#post)
|app.domains.get()|[/domains/:id#get](https://developers.linode.com/v4/reference/endpoints/domains/:id#get)
|app.domains(id).update(data)|[/domains/:id#put](https://developers.linode.com/v4/reference/endpoints/domains/:id#put)
|app.domains(id).delete()|[/domains/:id#delete](https://developers.linode.com/v4/reference/endpoints/domains/:id#delete)
### records
|Command|API Reference|
|---|---|
|app.domains(id).records.list()|[/domains/:id/records#get](https://developers.linode.com/v4/reference/endpoints/domains/:id/records#get)
|app.domains(id).records.create(data)|[/domains/:id/records#post](https://developers.linode.com/v4/reference/endpoints/domains/:id/records#post)
|app.domains(id).records.get()|[/domains/:id/records/:id#get](https://developers.linode.com/v4/reference/endpoints/domains/:id/records/:id#get)
|app.domains(id).records(id).update(data)|[/domains/:id/records/:id#put](https://developers.linode.com/v4/reference/endpoints/domains/:id/records/:id#put)
|app.domains(id).records(id).delete()|[/domains/:id/records/:id#delete](https://developers.linode.com/v4/reference/endpoints/domains/:id/records/:id#delete)
## nodebalancers
|Command|API Reference|
|---|---|
|app.nodebalancers.list()|[/nodebalancers#get](https://developers.linode.com/v4/reference/endpoints/nodebalancers#get)
|app.nodebalancers.create(data)|[/nodebalancers#post](https://developers.linode.com/v4/reference/endpoints/nodebalancers#post)
|app.nodebalancers.get()|[/nodebalancers/:id#get](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id#get)
|app.nodebalancers(id).update(data)|[/nodebalancers/:id#put](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id#put)
|app.nodebalancers(id).delete()|[/nodebalancers/:id#delete](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id#delete)
### configs
|Command|API Reference|
|---|---|
|app.nodebalancers(id).configs.list()|[/nodebalancers/:id/configs#get](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id/configs#get)
|app.nodebalancers(id).configs.create(data)|[/nodebalancers/:id/configs#post](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id/configs#post)
|app.nodebalancers(id).configs.get()|[/nodebalancers/:id/configs/:id#get](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id/configs/:id#get)
|app.nodebalancers(id).configs(id).delete()|[/nodebalancers/:id/configs/:id#delete](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id/configs/:id#delete)
|app.nodebalancers(id).configs.ssl()|[/nodebalancers/:id/configs/ssl#post](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id/configs/ssl#post)
### nodes
|Command|API Reference|
|---|---|
|app.nodebalancers(id).configs(id).nodes.list()|[/nodebalancers/:id/configs/:id/nodes#get](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id/configs/:id/nodes#get)
|app.nodebalancers(id).configs(id).nodes.create(data)|[/nodebalancers/:id/configs/:id/nodes#post](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id/configs/:id/nodes#post)
|app.nodebalancers(id).configs(id).nodes.get()|[/nodebalancers/:id/configs/:id/nodes/:id#get](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id/configs/:id/nodes/:id#get)
|app.nodebalancers(id).configs(id).nodes(id).update(data)|[/nodebalancers/:id/configs/:id/nodes/:id#put](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id/configs/:id/nodes/:id#put)
|app.nodebalancers(id).configs(id).nodes(id).delete()|[/nodebalancers/:id/configs/:id/nodes/:id#delete](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id/configs/:id/nodes/:id#delete)
## networking
|Command|API Reference|
|---|---|
|app.networking.ip-assign()|[/networking/ip-assign#post](https://developers.linode.com/v4/reference/endpoints/networking/ip-assign#post)
### ipv4
|Command|API Reference|
|---|---|
|app.networking.ipv4.list()|[/networking/ipv4#get](https://developers.linode.com/v4/reference/endpoints/networking/ipv4#get)
|app.networking.ipv4.create(data)|[/networking/ipv4#post](https://developers.linode.com/v4/reference/endpoints/networking/ipv4#post)
|app.networking.ipv4.get()|[/networking/ipv4/:address#get](https://developers.linode.com/v4/reference/endpoints/networking/ipv4/:address#get)
|app.networking.ipv4.update(data)|[/networking/ipv4/:address#put](https://developers.linode.com/v4/reference/endpoints/networking/ipv4/:address#put)
|app.networking.ipv4.delete()|[/networking/ipv4/:address#delete](https://developers.linode.com/v4/reference/endpoints/networking/ipv4/:address#delete)
### ipv6
|Command|API Reference|
|---|---|
|app.networking.ipv6.list()|[/networking/ipv6#get](https://developers.linode.com/v4/reference/endpoints/networking/ipv6#get)
|app.networking.ipv6.get()|[/networking/ipv6/:address#get](https://developers.linode.com/v4/reference/endpoints/networking/ipv6/:address#get)
|app.networking.ipv6.update(data)|[/networking/ipv6/:address#put](https://developers.linode.com/v4/reference/endpoints/networking/ipv6/:address#put)
## regions
|Command|API Reference|
|---|---|
|app.regions.list()|[/regions#get](https://developers.linode.com/v4/reference/endpoints/regions#get)
|app.regions.get()|[/regions/:id#get](https://developers.linode.com/v4/reference/endpoints/regions/:id#get)
## support
### tickets
|Command|API Reference|
|---|---|
|app.support.tickets.list()|[/support/tickets#get](https://developers.linode.com/v4/reference/endpoints/support/tickets#get)
|app.support.tickets.create(data)|[/support/tickets#post](https://developers.linode.com/v4/reference/endpoints/support/tickets#post)
|app.support.tickets.get()|[/support/tickets/:id#get](https://developers.linode.com/v4/reference/endpoints/support/tickets/:id#get)
|app.support.tickets(id).update(data)|[/support/tickets/:id#put](https://developers.linode.com/v4/reference/endpoints/support/tickets/:id#put)
|app.support.tickets(id).delete()|[/support/tickets/:id#delete](https://developers.linode.com/v4/reference/endpoints/support/tickets/:id#delete)
|app.support.tickets.attachments()|[/support/tickets/attachments#post](https://developers.linode.com/v4/reference/endpoints/support/tickets/attachments#post)
|app.support.tickets.replies()|[/support/tickets/replies#post](https://developers.linode.com/v4/reference/endpoints/support/tickets/replies#post)
## account
### clients
|Command|API Reference|
|---|---|
|app.account.clients.list()|[/account/clients#get](https://developers.linode.com/v4/reference/endpoints/account/clients#get)
|app.account.clients.create(data)|[/account/clients#post](https://developers.linode.com/v4/reference/endpoints/account/clients#post)
|app.account.clients.get()|[/account/clients/:id#get](https://developers.linode.com/v4/reference/endpoints/account/clients/:id#get)
|app.account.clients(id).update(data)|[/account/clients/:id#put](https://developers.linode.com/v4/reference/endpoints/account/clients/:id#put)
|app.account.clients(id).delete()|[/account/clients/:id#delete](https://developers.linode.com/v4/reference/endpoints/account/clients/:id#delete)
|app.account.clients.reset_secret()|[/account/clients/reset_secret#post](https://developers.linode.com/v4/reference/endpoints/account/clients/reset_secret#post)
### thumbnail
|Command|API Reference|
|---|---|
|app.account.clients(id).thumbnail.get()|[/account/clients/:id/thumbnail/get#get](https://developers.linode.com/v4/reference/endpoints/account/clients/:id/thumbnail/get#get)
|app.account.clients(id).thumbnail.update()|[/account/clients/:id/thumbnail/update#put](https://developers.linode.com/v4/reference/endpoints/account/clients/:id/thumbnail/update#put)
### events
|Command|API Reference|
|---|---|
|app.account.events.list()|[/account/events#get](https://developers.linode.com/v4/reference/endpoints/account/events#get)
|app.account.events.get()|[/account/events/:id#get](https://developers.linode.com/v4/reference/endpoints/account/events/:id#get)
|app.account.events.read()|[/account/events/read#post](https://developers.linode.com/v4/reference/endpoints/account/events/read#post)
|app.account.events.seen()|[/account/events/seen#post](https://developers.linode.com/v4/reference/endpoints/account/events/seen#post)
### settings
|Command|API Reference|
|---|---|
|app.account.settings.list()|[/account/settings#get](https://developers.linode.com/v4/reference/endpoints/account/settings#get)
|app.account.settings.update()|[/account/settings/update#put](https://developers.linode.com/v4/reference/endpoints/account/settings/update#put)
### tokens
|Command|API Reference|
|---|---|
|app.account.tokens.list()|[/account/tokens#get](https://developers.linode.com/v4/reference/endpoints/account/tokens#get)
|app.account.tokens.create(data)|[/account/tokens#post](https://developers.linode.com/v4/reference/endpoints/account/tokens#post)
|app.account.tokens.get()|[/account/tokens/:id#get](https://developers.linode.com/v4/reference/endpoints/account/tokens/:id#get)
|app.account.tokens(id).update(data)|[/account/tokens/:id#put](https://developers.linode.com/v4/reference/endpoints/account/tokens/:id#put)
|app.account.tokens(id).delete()|[/account/tokens/:id#delete](https://developers.linode.com/v4/reference/endpoints/account/tokens/:id#delete)
### users
|Command|API Reference|
|---|---|
|app.account.users.list()|[/account/users#get](https://developers.linode.com/v4/reference/endpoints/account/users#get)
|app.account.users.create(data)|[/account/users#post](https://developers.linode.com/v4/reference/endpoints/account/users#post)
|app.account.users.get()|[/account/users/:username#get](https://developers.linode.com/v4/reference/endpoints/account/users/:username#get)
|app.account.users(username).update(data)|[/account/users/:username#put](https://developers.linode.com/v4/reference/endpoints/account/users/:username#put)
|app.account.users(username).delete()|[/account/users/:username#delete](https://developers.linode.com/v4/reference/endpoints/account/users/:username#delete)
|app.account.users.password()|[/account/users/password#post](https://developers.linode.com/v4/reference/endpoints/account/users/password#post)
### grants
|Command|API Reference|
|---|---|
|app.account.users(username).grants.get()|[/account/users/:username/grants/get#get](https://developers.linode.com/v4/reference/endpoints/account/users/:username/grants/get#get)
|app.account.users(username).grants.update()|[/account/users/:username/grants/update#put](https://developers.linode.com/v4/reference/endpoints/account/users/:username/grants/update#put)
## profile
|Command|API Reference|
|---|---|
|app.profile.get()|[/profile/get#get](https://developers.linode.com/v4/reference/endpoints/profile/get#get)
|app.profile.grants()|[/profile/grants#get](https://developers.linode.com/v4/reference/endpoints/profile/grants#get)
|app.profile.password()|[/profile/password#post](https://developers.linode.com/v4/reference/endpoints/profile/password#post)
|app.profile.tfa-disable()|[/profile/tfa-disable#post](https://developers.linode.com/v4/reference/endpoints/profile/tfa-disable#post)
|app.profile.tfa-enable()|[/profile/tfa-enable#post](https://developers.linode.com/v4/reference/endpoints/profile/tfa-enable#post)
|app.profile.tfa-enable-confirm()|[/profile/tfa-enable-confirm#post](https://developers.linode.com/v4/reference/endpoints/profile/tfa-enable-confirm#post)
