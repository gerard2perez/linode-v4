# Linode v4 API
#### Date compatibility 2018-04-23

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
### domains
|Commands|API Reference|
|---|---|
|server.domains.list()|[domains#GET](https://developers.linode.com/v4/reference/endpoints/domains#GET)|
|server.domains.create(data)|[domains#POST](https://developers.linode.com/v4/reference/endpoints/domains#POST)|
|server.domains(id).get()|[domains/$id#GET](https://developers.linode.com/v4/reference/endpoints/domains/$id#GET)|
|server.domains(id).update(data)|[domains/$id#PUT](https://developers.linode.com/v4/reference/endpoints/domains/$id#PUT)|
|server.domains(id).delete()|[domains/$id#DELETE](https://developers.linode.com/v4/reference/endpoints/domains/$id#DELETE)|
|server.domains(id).clone(data)|[domains/$id/clone#POST](https://developers.linode.com/v4/reference/endpoints/domains/$id/clone#POST)|
|server.domains(id).records.list()|[domains/$id/records#GET](https://developers.linode.com/v4/reference/endpoints/domains/$id/records#GET)|
|server.domains(id).records.create(data)|[domains/$id/records#POST](https://developers.linode.com/v4/reference/endpoints/domains/$id/records#POST)|
|server.domains(id).records(id).get()|[domains/$id/records/$id#GET](https://developers.linode.com/v4/reference/endpoints/domains/$id/records/$id#GET)|
|server.domains(id).records(id).update(data)|[domains/$id/records/$id#PUT](https://developers.linode.com/v4/reference/endpoints/domains/$id/records/$id#PUT)|
|server.domains(id).records(id).delete()|[domains/$id/records/$id#DELETE](https://developers.linode.com/v4/reference/endpoints/domains/$id/records/$id#DELETE)|
### nodebalancers
|Commands|API Reference|
|---|---|
|server.nodebalancers.list()|[nodebalancers#GET](https://developers.linode.com/v4/reference/endpoints/nodebalancers#GET)|
|server.nodebalancers.create(data)|[nodebalancers#POST](https://developers.linode.com/v4/reference/endpoints/nodebalancers#POST)|
|server.nodebalancers(id).get()|[nodebalancers/$id#GET](https://developers.linode.com/v4/reference/endpoints/nodebalancers/$id#GET)|
|server.nodebalancers(id).update(data)|[nodebalancers/$id#PUT](https://developers.linode.com/v4/reference/endpoints/nodebalancers/$id#PUT)|
|server.nodebalancers(id).delete()|[nodebalancers/$id#DELETE](https://developers.linode.com/v4/reference/endpoints/nodebalancers/$id#DELETE)|
|server.nodebalancers(id).configs.list()|[nodebalancers/$id/configs#GET](https://developers.linode.com/v4/reference/endpoints/nodebalancers/$id/configs#GET)|
|server.nodebalancers(id).configs.create(data)|[nodebalancers/$id/configs#POST](https://developers.linode.com/v4/reference/endpoints/nodebalancers/$id/configs#POST)|
|server.nodebalancers(id).configs(id).get()|[nodebalancers/$id/configs/$id#GET](https://developers.linode.com/v4/reference/endpoints/nodebalancers/$id/configs/$id#GET)|
|server.nodebalancers(id).configs(id).delete()|[nodebalancers/$id/configs/$id#DELETE](https://developers.linode.com/v4/reference/endpoints/nodebalancers/$id/configs/$id#DELETE)|
|server.nodebalancers(id).configs(id).nodes.list()|[nodebalancers/$id/configs/$id/nodes#GET](https://developers.linode.com/v4/reference/endpoints/nodebalancers/$id/configs/$id/nodes#GET)|
|server.nodebalancers(id).configs(id).nodes.create(data)|[nodebalancers/$id/configs/$id/nodes#POST](https://developers.linode.com/v4/reference/endpoints/nodebalancers/$id/configs/$id/nodes#POST)|
|server.nodebalancers(id).configs(id).nodes(id).get()|[nodebalancers/$id/configs/$id/nodes/$id#GET](https://developers.linode.com/v4/reference/endpoints/nodebalancers/$id/configs/$id/nodes/$id#GET)|
|server.nodebalancers(id).configs(id).nodes(id).update(data)|[nodebalancers/$id/configs/$id/nodes/$id#PUT](https://developers.linode.com/v4/reference/endpoints/nodebalancers/$id/configs/$id/nodes/$id#PUT)|
|server.nodebalancers(id).configs(id).nodes(id).delete()|[nodebalancers/$id/configs/$id/nodes/$id#DELETE](https://developers.linode.com/v4/reference/endpoints/nodebalancers/$id/configs/$id/nodes/$id#DELETE)|
### networking
|Commands|API Reference|
|---|---|
|server.networking.ips.list()|[networking/ips#GET](https://developers.linode.com/v4/reference/endpoints/networking/ips#GET)|
|server.networking.ips.create(data)|[networking/ips#POST](https://developers.linode.com/v4/reference/endpoints/networking/ips#POST)|
|server.networking.ips(address).get()|[networking/ips/$address#GET](https://developers.linode.com/v4/reference/endpoints/networking/ips/$address#GET)|
|server.networking.ips(address).update(data)|[networking/ips/$address#PUT](https://developers.linode.com/v4/reference/endpoints/networking/ips/$address#PUT)|
|server.networking.ips(address).delete()|[networking/ips/$address#DELETE](https://developers.linode.com/v4/reference/endpoints/networking/ips/$address#DELETE)|
|server.networking.ipv4.assign(data)|[networking/ipv4/assign#POST](https://developers.linode.com/v4/reference/endpoints/networking/ipv4/assign#POST)|
|server.networking.ipv4.share(data)|[networking/ipv4/share#POST](https://developers.linode.com/v4/reference/endpoints/networking/ipv4/share#POST)|
|server.networking.ipv6.pools()|[networking/ipv6/pools#GET](https://developers.linode.com/v4/reference/endpoints/networking/ipv6/pools#GET)|
|server.networking.ipv6.ranges()|[networking/ipv6/ranges#GET](https://developers.linode.com/v4/reference/endpoints/networking/ipv6/ranges#GET)|
### regions
|Commands|API Reference|
|---|---|
|server.regions.list()|[regions#GET](https://developers.linode.com/v4/reference/endpoints/regions#GET)|
|server.regions(id).get()|[regions/$id#GET](https://developers.linode.com/v4/reference/endpoints/regions/$id#GET)|
### support
|Commands|API Reference|
|---|---|
|server.support.tickets.list()|[support/tickets#GET](https://developers.linode.com/v4/reference/endpoints/support/tickets#GET)|
|server.support.tickets.create(data)|[support/tickets#POST](https://developers.linode.com/v4/reference/endpoints/support/tickets#POST)|
|server.support.tickets(id).get()|[support/tickets/$id#GET](https://developers.linode.com/v4/reference/endpoints/support/tickets/$id#GET)|
|server.support.tickets(id).attachments(data)|[support/tickets/$id/attachments#POST](https://developers.linode.com/v4/reference/endpoints/support/tickets/$id/attachments#POST)|
|server.support.tickets(id).replies(data)|[support/tickets/$id/replies#POST](https://developers.linode.com/v4/reference/endpoints/support/tickets/$id/replies#POST)|
### account
|Commands|API Reference|
|---|---|
|server.account.get()|[account#GET](https://developers.linode.com/v4/reference/endpoints/account#GET)|
|server.account.update(data)|[account#PUT](https://developers.linode.com/v4/reference/endpoints/account#PUT)|
|server.account.events.list()|[account/events#GET](https://developers.linode.com/v4/reference/endpoints/account/events#GET)|
|server.account.events(id).get()|[account/events/$id#GET](https://developers.linode.com/v4/reference/endpoints/account/events/$id#GET)|
|server.account.events(id).read()|[account/events/$id/read#POST](https://developers.linode.com/v4/reference/endpoints/account/events/$id/read#POST)|
|server.account.events(id).seen()|[account/events/$id/seen#POST](https://developers.linode.com/v4/reference/endpoints/account/events/$id/seen#POST)|
|server.account.invoices.list()|[account/invoices#GET](https://developers.linode.com/v4/reference/endpoints/account/invoices#GET)|
|server.account.invoices(id).get()|[account/invoices/$id#GET](https://developers.linode.com/v4/reference/endpoints/account/invoices/$id#GET)|
|server.account.invoices(id).items()|[account/invoices/$id/items#GET](https://developers.linode.com/v4/reference/endpoints/account/invoices/$id/items#GET)|
|server.account.notifications.list()|[account/notifications#GET](https://developers.linode.com/v4/reference/endpoints/account/notifications#GET)|
|server.account.oauthClients.list()|[account/oauth-clients#GET](https://developers.linode.com/v4/reference/endpoints/account/oauth-clients#GET)|
|server.account.oauthClients.create(data)|[account/oauth-clients#POST](https://developers.linode.com/v4/reference/endpoints/account/oauth-clients#POST)|
|server.account.oauthClients(id).get()|[account/oauth-clients/$id#GET](https://developers.linode.com/v4/reference/endpoints/account/oauth-clients/$id#GET)|
|server.account.oauthClients(id).update(data)|[account/oauth-clients/$id#PUT](https://developers.linode.com/v4/reference/endpoints/account/oauth-clients/$id#PUT)|
|server.account.oauthClients(id).delete()|[account/oauth-clients/$id#DELETE](https://developers.linode.com/v4/reference/endpoints/account/oauth-clients/$id#DELETE)|
|server.account.oauthClients(id).resetSecret()|[account/oauth-clients/$id/reset-secret#POST](https://developers.linode.com/v4/reference/endpoints/account/oauth-clients/$id/reset-secret#POST)|
|server.account.oauthClients(id).thumbnail.get()|[account/oauth-clients/$id/thumbnail#GET](https://developers.linode.com/v4/reference/endpoints/account/oauth-clients/$id/thumbnail#GET)|
|server.account.oauthClients(id).thumbnail.update(data)|[account/oauth-clients/$id/thumbnail#PUT](https://developers.linode.com/v4/reference/endpoints/account/oauth-clients/$id/thumbnail#PUT)|
|server.account.payments.list()|[account/payments#GET](https://developers.linode.com/v4/reference/endpoints/account/payments#GET)|
|server.account.payments.create(data)|[account/payments#POST](https://developers.linode.com/v4/reference/endpoints/account/payments#POST)|
|server.account.payments(id).get()|[account/payments/$id#GET](https://developers.linode.com/v4/reference/endpoints/account/payments/$id#GET)|
|server.account.payments.paypal.create(data)|[account/payments/paypal#POST](https://developers.linode.com/v4/reference/endpoints/account/payments/paypal#POST)|
|server.account.payments.paypal.execute(data)|[account/payments/paypal/execute#POST](https://developers.linode.com/v4/reference/endpoints/account/payments/paypal/execute#POST)|
|server.account.settings.list()|[account/settings#GET](https://developers.linode.com/v4/reference/endpoints/account/settings#GET)|
|server.account.settings.update(data)|[account/settings#PUT](https://developers.linode.com/v4/reference/endpoints/account/settings#PUT)|
|server.account.settings.managedEnable()|[account/settings/managed-enable#POST](https://developers.linode.com/v4/reference/endpoints/account/settings/managed-enable#POST)|
|server.account.transfer.get()|[account/transfer#GET](https://developers.linode.com/v4/reference/endpoints/account/transfer#GET)|
|server.account.users.list()|[account/users#GET](https://developers.linode.com/v4/reference/endpoints/account/users#GET)|
|server.account.users.create(data)|[account/users#POST](https://developers.linode.com/v4/reference/endpoints/account/users#POST)|
|server.account.users(username).get()|[account/users/$username#GET](https://developers.linode.com/v4/reference/endpoints/account/users/$username#GET)|
|server.account.users(username).update(data)|[account/users/$username#PUT](https://developers.linode.com/v4/reference/endpoints/account/users/$username#PUT)|
|server.account.users(username).delete()|[account/users/$username#DELETE](https://developers.linode.com/v4/reference/endpoints/account/users/$username#DELETE)|
|server.account.users(username).grants.get()|[account/users/$username/grants#GET](https://developers.linode.com/v4/reference/endpoints/account/users/$username/grants#GET)|
|server.account.users(username).grants.update(data)|[account/users/$username/grants#PUT](https://developers.linode.com/v4/reference/endpoints/account/users/$username/grants#PUT)|
### profile
|Commands|API Reference|
|---|---|
|server.profile.apps.list()|[profile/apps#GET](https://developers.linode.com/v4/reference/endpoints/profile/apps#GET)|
|server.profile.apps(id).get()|[profile/apps/$id#GET](https://developers.linode.com/v4/reference/endpoints/profile/apps/$id#GET)|
|server.profile.apps(id).delete()|[profile/apps/$id#DELETE](https://developers.linode.com/v4/reference/endpoints/profile/apps/$id#DELETE)|
|server.profile.get()|[profile#GET](https://developers.linode.com/v4/reference/endpoints/profile#GET)|
|server.profile.update(data)|[profile#PUT](https://developers.linode.com/v4/reference/endpoints/profile#PUT)|
|server.profile.grants()|[profile/grants#GET](https://developers.linode.com/v4/reference/endpoints/profile/grants#GET)|
|server.profile.password()|[profile/password#POST](https://developers.linode.com/v4/reference/endpoints/profile/password#POST)|
|server.profile.tokens.list()|[profile/tokens#GET](https://developers.linode.com/v4/reference/endpoints/profile/tokens#GET)|
|server.profile.tokens.create(data)|[profile/tokens#POST](https://developers.linode.com/v4/reference/endpoints/profile/tokens#POST)|
|server.profile.tokens(id).get()|[profile/tokens/$id#GET](https://developers.linode.com/v4/reference/endpoints/profile/tokens/$id#GET)|
|server.profile.tokens(id).update(data)|[profile/tokens/$id#PUT](https://developers.linode.com/v4/reference/endpoints/profile/tokens/$id#PUT)|
|server.profile.tokens(id).delete()|[profile/tokens/$id#DELETE](https://developers.linode.com/v4/reference/endpoints/profile/tokens/$id#DELETE)|
|server.profile.tfaDisable()|[profile/tfa-disable#POST](https://developers.linode.com/v4/reference/endpoints/profile/tfa-disable#POST)|
|server.profile.tfaEnable()|[profile/tfa-enable#POST](https://developers.linode.com/v4/reference/endpoints/profile/tfa-enable#POST)|
|server.profile.tfaEnableConfirm()|[profile/tfa-enable-confirm#POST](https://developers.linode.com/v4/reference/endpoints/profile/tfa-enable-confirm#POST)|
|server.profile.whitelist.list()|[profile/whitelist#GET](https://developers.linode.com/v4/reference/endpoints/profile/whitelist#GET)|
|server.profile.whitelist.create(data)|[profile/whitelist#POST](https://developers.linode.com/v4/reference/endpoints/profile/whitelist#POST)|
|server.profile.whitelist(id).get()|[profile/whitelist/$id#GET](https://developers.linode.com/v4/reference/endpoints/profile/whitelist/$id#GET)|
|server.profile.whitelist(id).delete()|[profile/whitelist/$id#DELETE](https://developers.linode.com/v4/reference/endpoints/profile/whitelist/$id#DELETE)|
### images
|Commands|API Reference|
|---|---|
|server.images.list()|[images#GET](https://developers.linode.com/v4/reference/endpoints/images#GET)|
|server.images.create(data)|[images#POST](https://developers.linode.com/v4/reference/endpoints/images#POST)|
|server.images(id).get()|[images/$id#GET](https://developers.linode.com/v4/reference/endpoints/images/$id#GET)|
|server.images(id).update(data)|[images/$id#PUT](https://developers.linode.com/v4/reference/endpoints/images/$id#PUT)|
|server.images(id).delete()|[images/$id#DELETE](https://developers.linode.com/v4/reference/endpoints/images/$id#DELETE)|
### volumes
|Commands|API Reference|
|---|---|
|server.volumes.list()|[volumes#GET](https://developers.linode.com/v4/reference/endpoints/volumes#GET)|
|server.volumes.create(data)|[volumes#POST](https://developers.linode.com/v4/reference/endpoints/volumes#POST)|
|server.volumes(id).get()|[volumes/$id#GET](https://developers.linode.com/v4/reference/endpoints/volumes/$id#GET)|
|server.volumes(id).update(data)|[volumes/$id#PUT](https://developers.linode.com/v4/reference/endpoints/volumes/$id#PUT)|
|server.volumes(id).delete()|[volumes/$id#DELETE](https://developers.linode.com/v4/reference/endpoints/volumes/$id#DELETE)|
|server.volumes(id).attach(data)|[volumes/$id/attach#POST](https://developers.linode.com/v4/reference/endpoints/volumes/$id/attach#POST)|
|server.volumes(id).clone(data)|[volumes/$id/clone#POST](https://developers.linode.com/v4/reference/endpoints/volumes/$id/clone#POST)|
|server.volumes(id).detach()|[volumes/$id/detach#POST](https://developers.linode.com/v4/reference/endpoints/volumes/$id/detach#POST)|
|server.volumes(id).resize(data)|[volumes/$id/resize#POST](https://developers.linode.com/v4/reference/endpoints/volumes/$id/resize#POST)|
### managed
|Commands|API Reference|
|---|---|
|server.managed.contacts.list()|[managed/contacts#GET](https://developers.linode.com/v4/reference/endpoints/managed/contacts#GET)|
|server.managed.contacts.create(data)|[managed/contacts#POST](https://developers.linode.com/v4/reference/endpoints/managed/contacts#POST)|
|server.managed.contacts(id).get()|[managed/contacts/$id#GET](https://developers.linode.com/v4/reference/endpoints/managed/contacts/$id#GET)|
|server.managed.contacts(id).update(data)|[managed/contacts/$id#PUT](https://developers.linode.com/v4/reference/endpoints/managed/contacts/$id#PUT)|
|server.managed.contacts(id).delete()|[managed/contacts/$id#DELETE](https://developers.linode.com/v4/reference/endpoints/managed/contacts/$id#DELETE)|
|server.managed.credentials.list()|[managed/credentials#GET](https://developers.linode.com/v4/reference/endpoints/managed/credentials#GET)|
|server.managed.credentials.create(data)|[managed/credentials#POST](https://developers.linode.com/v4/reference/endpoints/managed/credentials#POST)|
|server.managed.credentials(id).get()|[managed/credentials/$id#GET](https://developers.linode.com/v4/reference/endpoints/managed/credentials/$id#GET)|
|server.managed.credentials(id).update(data)|[managed/credentials/$id#PUT](https://developers.linode.com/v4/reference/endpoints/managed/credentials/$id#PUT)|
|server.managed.issues.list()|[managed/issues#GET](https://developers.linode.com/v4/reference/endpoints/managed/issues#GET)|
|server.managed.issues(id).get()|[managed/issues/$id#GET](https://developers.linode.com/v4/reference/endpoints/managed/issues/$id#GET)|
|server.managed.linodeSettings.list()|[managed/linode-settings#GET](https://developers.linode.com/v4/reference/endpoints/managed/linode-settings#GET)|
|server.managed.linodeSettings(id).get()|[managed/linode-settings/$id#GET](https://developers.linode.com/v4/reference/endpoints/managed/linode-settings/$id#GET)|
|server.managed.linodeSettings(id).update(data)|[managed/linode-settings/$id#PUT](https://developers.linode.com/v4/reference/endpoints/managed/linode-settings/$id#PUT)|
|server.managed.services.list()|[managed/services#GET](https://developers.linode.com/v4/reference/endpoints/managed/services#GET)|
|server.managed.services.create(data)|[managed/services#POST](https://developers.linode.com/v4/reference/endpoints/managed/services#POST)|
|server.managed.services(id).get()|[managed/services/$id#GET](https://developers.linode.com/v4/reference/endpoints/managed/services/$id#GET)|
|server.managed.services(id).update(data)|[managed/services/$id#PUT](https://developers.linode.com/v4/reference/endpoints/managed/services/$id#PUT)|
|server.managed.services(id).delete()|[managed/services/$id#DELETE](https://developers.linode.com/v4/reference/endpoints/managed/services/$id#DELETE)|
|server.managed.services(id).enable()|[managed/services/$id/enable#POST](https://developers.linode.com/v4/reference/endpoints/managed/services/$id/enable#POST)|
|server.managed.services(id).disable()|[managed/services/$id/disable#POST](https://developers.linode.com/v4/reference/endpoints/managed/services/$id/disable#POST)|
|server.managed.stats.list()|[managed/stats#GET](https://developers.linode.com/v4/reference/endpoints/managed/stats#GET)|
