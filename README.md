# Linode v4 API

This is a promise-based clinet for the [Linode API](https://developers.linode.com/v4/introduction) version 4

-----------
[![Build Status](https://img.shields.io/travis/gerard2p/linode-v4/master.svg?style=flat-square)](https://travis-ci.org/gerard2p/linode-v4)[![Dependency Status](https://david-dm.org/gerard2p/linode-v4.svg?style=flat-square)](https://david-dm.org/gerard2p/linode-v4)![PRs Welcome](https://img.shields.io/badge/PRs%20🔀-Welcome-brightgreen.svg?style=flat-square)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fgerard2p%2Flinode-v4.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fgerard2p%2Flinode-v4?ref=badge_shield)

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

## Commands
If you need more detailed information please check [Linode v4 API Reference](https://developers.linode.com/v4/introduction)
In the next list you can find the commands to reach an specific url. All the commands listed here are the actual commands supported.
If you find a command missing or wrong, please open an Issue or make a PR.
### linode
|Commands|API Reference|
|---|---|
|app.linode.instances.list()|[linode/instances#get](https://developers.linode.com/v4/reference/endpoints/linode/instances#get)|
|app.linode.instances.create(data)|[linode/instances#post](https://developers.linode.com/v4/reference/endpoints/linode/instances#post)|
|app.linode.instances(id).update(data)|[linode/instances/:id#put](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id#put)|
|app.linode.instances(id).delete()|[linode/instances/:id#delete](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id#delete)|
|app.linode.instances(id).get()|[linode/instances/:id#get](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id#get)|
|app.linode.instances(id).update(data)|[linode/instances/:id#put](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id#put)|
|app.linode.instances(id).boot()|[linode/instances/:id/boot#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/boot#post)|
|app.linode.instances(id).kvmify()|[linode/instances/:id/kvmify#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/kvmify#post)|
|app.linode.instances(id).mutate()|[linode/instances/:id/mutate#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/mutate#post)|
|app.linode.instances(id).reboot()|[linode/instances/:id/reboot#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/reboot#post)|
|app.linode.instances(id).rebuild()|[linode/instances/:id/rebuild#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/rebuild#post)|
|app.linode.instances(id).rescue()|[linode/instances/:id/rescue#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/rescue#post)|
|app.linode.instances(id).resize()|[linode/instances/:id/resize#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/resize#post)|
|app.linode.instances(id).shutdown()|[linode/instances/:id/shutdown#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/shutdown#post)|
|app.linode.instances(id).volumes()|[linode/instances/:id/volumes#get](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/volumes#get)|
|app.linode.instances(id).backups.list()|[linode/instances/:id/backups#get](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/backups#get)|
|app.linode.instances(id).backups.create(data)|[linode/instances/:id/backups#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/backups#post)|
|app.linode.instances(id).backups(id).restore()|[linode/instances/:id/backups/:id/restore#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/backups/:id/restore#post)|
|app.linode.instances(id).backups.cancel()|[linode/instances/:id/backups/cancel#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/backups/cancel#post)|
|app.linode.instances(id).backups.enable()|[linode/instances/:id/backups/enable#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/backups/enable#post)|
|app.linode.instances(id).configs.list()|[linode/instances/:id/configs#get](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/configs#get)|
|app.linode.instances(id).configs.create(data)|[linode/instances/:id/configs#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/configs#post)|
|app.linode.instances(id).configs(id).get()|[linode/instances/:id/configs/:id#get](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/configs/:id#get)|
|app.linode.instances(id).configs(id).update(data)|[linode/instances/:id/configs/:id#put](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/configs/:id#put)|
|app.linode.instances(id).configs(id).delete()|[linode/instances/:id/configs/:id#delete](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/configs/:id#delete)|
|app.linode.instances(id).disks.list()|[linode/instances/:id/disks#get](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/disks#get)|
|app.linode.instances(id).disks.create(data)|[linode/instances/:id/disks#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/disks#post)|
|app.linode.instances(id).disks(id).get()|[linode/instances/:id/disks/:id#get](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/disks/:id#get)|
|app.linode.instances(id).disks(id).update(data)|[linode/instances/:id/disks/:id#put](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/disks/:id#put)|
|app.linode.instances(id).disks(id).create(data)|[linode/instances/:id/disks/:id#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/disks/:id#post)|
|app.linode.instances(id).disks(id).delete()|[linode/instances/:id/disks/:id#delete](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/disks/:id#delete)|
|app.linode.instances(id).disks(id).password()|[linode/instances/:id/disks/:id/password#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/disks/:id/password#post)|
|app.linode.instances(id).disks(id).resize()|[linode/instances/:id/disks/:id/resize#post](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/disks/:id/resize#post)|
|app.linode.distributions.list()|[linode/distributions#get](https://developers.linode.com/v4/reference/endpoints/linode/distributions#get)|
|app.linode.distributions(id).get()|[linode/distributions/:id#get](https://developers.linode.com/v4/reference/endpoints/linode/distributions/:id#get)|
|app.linode.instances(id).ips.list()|[linode/instances/:id/ips#get](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/ips#get)|
|app.linode.instances(id).ips(ip_address).get()|[linode/instances/:id/ips/:ip_address#get](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/ips/:ip_address#get)|
|app.linode.instances(id).ips.sharing.list()|[linode/instances/:id/ips/sharing#get](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/ips/sharing#get)|
|app.linode.instances(id).ips.sharing.update(data)|[linode/instances/:id/ips/sharing#put](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/ips/sharing#put)|
|app.linode.instances(id).ips.sharing.delete()|[linode/instances/:id/ips/sharing#delete](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/ips/sharing#delete)|
|app.linode.kernels.list()|[linode/kernels#get](https://developers.linode.com/v4/reference/endpoints/linode/kernels#get)|
|app.linode.kernels(id).get()|[linode/kernels/:id#get](https://developers.linode.com/v4/reference/endpoints/linode/kernels/:id#get)|
|app.linode.stackscripts.list()|[linode/stackscripts#get](https://developers.linode.com/v4/reference/endpoints/linode/stackscripts#get)|
|app.linode.stackscripts.create(data)|[linode/stackscripts#post](https://developers.linode.com/v4/reference/endpoints/linode/stackscripts#post)|
|app.linode.stackscripts(id).get()|[linode/stackscripts/:id#get](https://developers.linode.com/v4/reference/endpoints/linode/stackscripts/:id#get)|
|app.linode.stackscripts(id).update(data)|[linode/stackscripts/:id#put](https://developers.linode.com/v4/reference/endpoints/linode/stackscripts/:id#put)|
|app.linode.stackscripts(id).delete()|[linode/stackscripts/:id#delete](https://developers.linode.com/v4/reference/endpoints/linode/stackscripts/:id#delete)|
|app.linode.instances(id).stats.list()|[linode/instances/:id/stats#get](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/stats#get)|
|app.linode.instances(id).stats.year(n).month(m).get()|[linode/instances/:id/stats/:id/1#get](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/stats/:id/1#get)|
|app.linode.instances(id).stats.year(n).month(m).get()|[linode/instances/:id/stats/:id/1#get](https://developers.linode.com/v4/reference/endpoints/linode/instances/:id/stats/:id/1#get)|
|app.linode.types.list()|[linode/types#get](https://developers.linode.com/v4/reference/endpoints/linode/types#get)|
|app.linode.types(id).get()|[linode/types/:id#get](https://developers.linode.com/v4/reference/endpoints/linode/types/:id#get)|
|app.linode.volumes.list()|[linode/volumes#get](https://developers.linode.com/v4/reference/endpoints/linode/volumes#get)|
|app.linode.volumes.create(data)|[linode/volumes#post](https://developers.linode.com/v4/reference/endpoints/linode/volumes#post)|
|app.linode.volumes(id).get()|[linode/volumes/:id#get](https://developers.linode.com/v4/reference/endpoints/linode/volumes/:id#get)|
|app.linode.volumes(id).update(data)|[linode/volumes/:id#put](https://developers.linode.com/v4/reference/endpoints/linode/volumes/:id#put)|
|app.linode.volumes(id).delete()|[linode/volumes/:id#delete](https://developers.linode.com/v4/reference/endpoints/linode/volumes/:id#delete)|
|app.linode.volumes(id).attach()|[linode/volumes/:id/attach#post](https://developers.linode.com/v4/reference/endpoints/linode/volumes/:id/attach#post)|
|app.linode.volumes(id).detach()|[linode/volumes/:id/detach#post](https://developers.linode.com/v4/reference/endpoints/linode/volumes/:id/detach#post)|
### domains
|Commands|API Reference|
|---|---|
|app.domains.list()|[domains#get](https://developers.linode.com/v4/reference/endpoints/domains#get)|
|app.domains.create(data)|[domains#post](https://developers.linode.com/v4/reference/endpoints/domains#post)|
|app.domains(id).get()|[domains/:id#get](https://developers.linode.com/v4/reference/endpoints/domains/:id#get)|
|app.domains(id).update(data)|[domains/:id#put](https://developers.linode.com/v4/reference/endpoints/domains/:id#put)|
|app.domains(id).delete()|[domains/:id#delete](https://developers.linode.com/v4/reference/endpoints/domains/:id#delete)|
|app.domains(id).records.list()|[domains/:id/records#get](https://developers.linode.com/v4/reference/endpoints/domains/:id/records#get)|
|app.domains(id).records.create(data)|[domains/:id/records#post](https://developers.linode.com/v4/reference/endpoints/domains/:id/records#post)|
|app.domains(id).records(id).get()|[domains/:id/records/:id#get](https://developers.linode.com/v4/reference/endpoints/domains/:id/records/:id#get)|
|app.domains(id).records(id).update(data)|[domains/:id/records/:id#put](https://developers.linode.com/v4/reference/endpoints/domains/:id/records/:id#put)|
|app.domains(id).records(id).delete()|[domains/:id/records/:id#delete](https://developers.linode.com/v4/reference/endpoints/domains/:id/records/:id#delete)|
### nodebalancers
|Commands|API Reference|
|---|---|
|app.nodebalancers.list()|[nodebalancers#get](https://developers.linode.com/v4/reference/endpoints/nodebalancers#get)|
|app.nodebalancers.create(data)|[nodebalancers#post](https://developers.linode.com/v4/reference/endpoints/nodebalancers#post)|
|app.nodebalancers(id).get()|[nodebalancers/:id#get](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id#get)|
|app.nodebalancers(id).update(data)|[nodebalancers/:id#put](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id#put)|
|app.nodebalancers(id).delete()|[nodebalancers/:id#delete](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id#delete)|
|app.nodebalancers(id).configs.list()|[nodebalancers/:id/configs#get](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id/configs#get)|
|app.nodebalancers(id).configs.create(data)|[nodebalancers/:id/configs#post](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id/configs#post)|
|app.nodebalancers(id).configs(id).get()|[nodebalancers/:id/configs/:id#get](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id/configs/:id#get)|
|app.nodebalancers(id).configs(id).delete()|[nodebalancers/:id/configs/:id#delete](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id/configs/:id#delete)|
|app.nodebalancers(id).configs(id).ssl()|[nodebalancers/:id/configs/:id/ssl#post](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id/configs/:id/ssl#post)|
|app.nodebalancers(id).configs(id).nodes.list()|[nodebalancers/:id/configs/:id/nodes#get](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id/configs/:id/nodes#get)|
|app.nodebalancers(id).configs(id).nodes.create(data)|[nodebalancers/:id/configs/:id/nodes#post](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id/configs/:id/nodes#post)|
|app.nodebalancers(id).configs(id).nodes(id).get()|[nodebalancers/:id/configs/:id/nodes/:id#get](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id/configs/:id/nodes/:id#get)|
|app.nodebalancers(id).configs(id).nodes(id).update(data)|[nodebalancers/:id/configs/:id/nodes/:id#put](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id/configs/:id/nodes/:id#put)|
|app.nodebalancers(id).configs(id).nodes(id).delete()|[nodebalancers/:id/configs/:id/nodes/:id#delete](https://developers.linode.com/v4/reference/endpoints/nodebalancers/:id/configs/:id/nodes/:id#delete)|
### networking
|Commands|API Reference|
|---|---|
|app.networking.ipAssign()|[networking/ip-assign#post](https://developers.linode.com/v4/reference/endpoints/networking/ip-assign#post)|
|app.networking.ipv4.list()|[networking/ipv4#get](https://developers.linode.com/v4/reference/endpoints/networking/ipv4#get)|
|app.networking.ipv4.create(data)|[networking/ipv4#post](https://developers.linode.com/v4/reference/endpoints/networking/ipv4#post)|
|app.networking.ipv4(address).get()|[networking/ipv4/:address#get](https://developers.linode.com/v4/reference/endpoints/networking/ipv4/:address#get)|
|app.networking.ipv4(address).update(data)|[networking/ipv4/:address#put](https://developers.linode.com/v4/reference/endpoints/networking/ipv4/:address#put)|
|app.networking.ipv4(address).delete()|[networking/ipv4/:address#delete](https://developers.linode.com/v4/reference/endpoints/networking/ipv4/:address#delete)|
|app.networking.ipv6(address).get()|[networking/ipv6/:address#get](https://developers.linode.com/v4/reference/endpoints/networking/ipv6/:address#get)|
|app.networking.ipv6(address).update(data)|[networking/ipv6/:address#put](https://developers.linode.com/v4/reference/endpoints/networking/ipv6/:address#put)|
### regions
|Commands|API Reference|
|---|---|
|app.regions.list()|[regions#get](https://developers.linode.com/v4/reference/endpoints/regions#get)|
|app.regions(id).get()|[regions/:id#get](https://developers.linode.com/v4/reference/endpoints/regions/:id#get)|
### support
|Commands|API Reference|
|---|---|
|app.support.tickets.list()|[support/tickets#get](https://developers.linode.com/v4/reference/endpoints/support/tickets#get)|
|app.support.tickets.create(data)|[support/tickets#post](https://developers.linode.com/v4/reference/endpoints/support/tickets#post)|
|app.support.tickets(id).get()|[support/tickets/:id#get](https://developers.linode.com/v4/reference/endpoints/support/tickets/:id#get)|
|app.support.tickets(id).attachments()|[support/tickets/:id/attachments#post](https://developers.linode.com/v4/reference/endpoints/support/tickets/:id/attachments#post)|
|app.support.tickets(id).replies()|[support/tickets/:id/replies#post](https://developers.linode.com/v4/reference/endpoints/support/tickets/:id/replies#post)|
### account
|Commands|API Reference|
|---|---|
|app.account.clients.list()|[account/clients#get](https://developers.linode.com/v4/reference/endpoints/account/clients#get)|
|app.account.clients.create(data)|[account/clients#post](https://developers.linode.com/v4/reference/endpoints/account/clients#post)|
|app.account.clients(id).get()|[account/clients/:id#get](https://developers.linode.com/v4/reference/endpoints/account/clients/:id#get)|
|app.account.clients(id).update(data)|[account/clients/:id#put](https://developers.linode.com/v4/reference/endpoints/account/clients/:id#put)|
|app.account.clients(id).delete()|[account/clients/:id#delete](https://developers.linode.com/v4/reference/endpoints/account/clients/:id#delete)|
|app.account.clients(id).reset_secret()|[account/clients/:id/reset_secret#post](https://developers.linode.com/v4/reference/endpoints/account/clients/:id/reset_secret#post)|
|app.account.clients(id).thumbnail.list()|[account/clients/:id/thumbnail#get](https://developers.linode.com/v4/reference/endpoints/account/clients/:id/thumbnail#get)|
|app.account.clients(id).thumbnail.update(data)|[account/clients/:id/thumbnail#put](https://developers.linode.com/v4/reference/endpoints/account/clients/:id/thumbnail#put)|
|app.account.events.list()|[account/events#get](https://developers.linode.com/v4/reference/endpoints/account/events#get)|
|app.account.events(id).get()|[account/events/:id#get](https://developers.linode.com/v4/reference/endpoints/account/events/:id#get)|
|app.account.events(id).read()|[account/events/:id/read#post](https://developers.linode.com/v4/reference/endpoints/account/events/:id/read#post)|
|app.account.events(id).seen()|[account/events/:id/seen#post](https://developers.linode.com/v4/reference/endpoints/account/events/:id/seen#post)|
|app.account.settings.list()|[account/settings#get](https://developers.linode.com/v4/reference/endpoints/account/settings#get)|
|app.account.settings.update(data)|[account/settings#put](https://developers.linode.com/v4/reference/endpoints/account/settings#put)|
|app.account.tokens.list()|[account/tokens#get](https://developers.linode.com/v4/reference/endpoints/account/tokens#get)|
|app.account.tokens.create(data)|[account/tokens#post](https://developers.linode.com/v4/reference/endpoints/account/tokens#post)|
|app.account.tokens(id).get()|[account/tokens/:id#get](https://developers.linode.com/v4/reference/endpoints/account/tokens/:id#get)|
|app.account.tokens(id).update(data)|[account/tokens/:id#put](https://developers.linode.com/v4/reference/endpoints/account/tokens/:id#put)|
|app.account.tokens(id).delete()|[account/tokens/:id#delete](https://developers.linode.com/v4/reference/endpoints/account/tokens/:id#delete)|
|app.account.users.list()|[account/users#get](https://developers.linode.com/v4/reference/endpoints/account/users#get)|
|app.account.users.create(data)|[account/users#post](https://developers.linode.com/v4/reference/endpoints/account/users#post)|
|app.account.users(username).get()|[account/users/:username#get](https://developers.linode.com/v4/reference/endpoints/account/users/:username#get)|
|app.account.users(username).update(data)|[account/users/:username#put](https://developers.linode.com/v4/reference/endpoints/account/users/:username#put)|
|app.account.users(username).delete()|[account/users/:username#delete](https://developers.linode.com/v4/reference/endpoints/account/users/:username#delete)|
|app.account.users(username).grants.get()|[account/users/:username/grants#get](https://developers.linode.com/v4/reference/endpoints/account/users/:username/grants#get)|
|app.account.users(username).grants.update(data)|[account/users/:username/grants#put](https://developers.linode.com/v4/reference/endpoints/account/users/:username/grants#put)|
|app.account.users(username).password()|[account/users/:username/password#post](https://developers.linode.com/v4/reference/endpoints/account/users/:username/password#post)|
### profile
|Commands|API Reference|
|---|---|
|app.profile.get()|[profile#get](https://developers.linode.com/v4/reference/endpoints/profile#get)|
|app.profile.update(data)|[profile#put](https://developers.linode.com/v4/reference/endpoints/profile#put)|
|app.profile.grants()|[profile/grants#get](https://developers.linode.com/v4/reference/endpoints/profile/grants#get)|
|app.profile.password()|[profile/password#post](https://developers.linode.com/v4/reference/endpoints/profile/password#post)|
|app.profile.tfaDisable()|[profile/tfa-disable#post](https://developers.linode.com/v4/reference/endpoints/profile/tfa-disable#post)|
|app.profile.tfaEnable()|[profile/tfa-enable#post](https://developers.linode.com/v4/reference/endpoints/profile/tfa-enable#post)|
|app.profile.tfaEnableConfirm()|[profile/tfa-enable-confirm#post](https://developers.linode.com/v4/reference/endpoints/profile/tfa-enable-confirm#post)|
