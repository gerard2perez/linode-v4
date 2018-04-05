# Linode v4 API

This is a promise-based clinet for the [Linode API](https://developers.linode.com/v4/introduction) version 4

-----------
[![Build Status](https://img.shields.io/travis/gerard2p/linode-v4/master.svg?style=flat-square)](https://travis-ci.org/gerard2p/linode-v4)[![Dependency Status](https://david-dm.org/gerard2p/linode-v4.svg?style=flat-square)](https://david-dm.org/gerard2p/linode-v4)![PRs Welcome](https://img.shields.io/badge/PRs%20🔀-Welcome-brightgreen.svg?style=flat-square)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fgerard2p%2Flinode-v4.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fgerard2p%2Flinode-v4?ref=badge_shield)

[![Maintainability](https://api.codeclimate.com/v1/badges/09a1688603acd82faa9e/maintainability)](https://codeclimate.com/github/gerard2p/linode-v4/maintainability)[![Test Coverage](https://api.codeclimate.com/v1/badges/09a1688603acd82faa9e/test_coverage)](https://codeclimate.com/github/gerard2p/linode-v4/test_coverage)[![Issue Count](https://codeclimate.com/github/gerard2p/linode-v4/badges/issue_count.svg?style=flat-square)](https://codeclimate.com/github/gerard2p/linode-v4)


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
|app.linodes.instances.list()|[linode/instances#GET](https://developers.linode.com/v4/reference/endpoints/linode/instances#GET)|
|app.linodes.instances.create(data)|[linode/instances#POST](https://developers.linode.com/v4/reference/endpoints/linode/instances#POST)|
|app.linodes.instances(id).update(data)|[linode/instances/$id#PUT](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id#PUT)|
|app.linodes.instances(id).delete()|[linode/instances/$id#DELETE](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id#DELETE)|
|app.linodes.instances(id).get()|[linode/instances/$id#GET](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id#GET)|
|app.linodes.instances(id).update(data)|[linode/instances/$id#PUT](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id#PUT)|
|app.linodes.instances(id).boot()|[linode/instances/$id/boot#POST](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/boot#POST)|
|app.linodes.instances(id).mutate()|[linode/instances/$id/mutate#POST](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/mutate#POST)|
|app.linodes.instances(id).reboot()|[linode/instances/$id/reboot#POST](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/reboot#POST)|
|app.linodes.instances(id).rebuild()|[linode/instances/$id/rebuild#POST](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/rebuild#POST)|
|app.linodes.instances(id).rescue()|[linode/instances/$id/rescue#POST](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/rescue#POST)|
|app.linodes.instances(id).resize()|[linode/instances/$id/resize#POST](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/resize#POST)|
|app.linodes.instances(id).shutdown()|[linode/instances/$id/shutdown#POST](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/shutdown#POST)|
|app.linodes.instances(id).volumes()|[linode/instances/$id/volumes#GET](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/volumes#GET)|
|app.linodes.instances(id).backups.list()|[linode/instances/$id/backups#GET](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/backups#GET)|
|app.linodes.instances(id).backups.create(data)|[linode/instances/$id/backups#POST](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/backups#POST)|
|app.linodes.instances(id).backups(id).restore()|[linode/instances/$id/backups/$id/restore#POST](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/backups/$id/restore#POST)|
|app.linodes.instances(id).backups.cancel()|[linode/instances/$id/backups/cancel#POST](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/backups/cancel#POST)|
|app.linodes.instances(id).backups.enable()|[linode/instances/$id/backups/enable#POST](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/backups/enable#POST)|
|app.linodes.instances(id).configs.list()|[linode/instances/$id/configs#GET](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/configs#GET)|
|app.linodes.instances(id).configs.create(data)|[linode/instances/$id/configs#POST](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/configs#POST)|
|app.linodes.instances(id).configs(id).get()|[linode/instances/$id/configs/$id#GET](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/configs/$id#GET)|
|app.linodes.instances(id).configs(id).update(data)|[linode/instances/$id/configs/$id#PUT](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/configs/$id#PUT)|
|app.linodes.instances(id).configs(id).delete()|[linode/instances/$id/configs/$id#DELETE](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/configs/$id#DELETE)|
|app.linodes.instances(id).disks.list()|[linode/instances/$id/disks#GET](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/disks#GET)|
|app.linodes.instances(id).disks.create(data)|[linode/instances/$id/disks#POST](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/disks#POST)|
|app.linodes.instances(id).disks(id).get()|[linode/instances/$id/disks/$id#GET](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/disks/$id#GET)|
|app.linodes.instances(id).disks(id).update(data)|[linode/instances/$id/disks/$id#PUT](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/disks/$id#PUT)|
|app.linodes.instances(id).disks(id).clone()|[linode/instances/$id/disks/$id/clone#POST](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/disks/$id/clone#POST)|
|app.linodes.instances(id).disks(id).delete()|[linode/instances/$id/disks/$id#DELETE](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/disks/$id#DELETE)|
|app.linodes.instances(id).disks(id).password(data)|[linode/instances/$id/disks/$id/password#POST](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/disks/$id/password#POST)|
|app.linodes.instances(id).disks(id).resize(data)|[linode/instances/$id/disks/$id/resize#POST](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/disks/$id/resize#POST)|
|app.linodes.instances(id).ips.list()|[linode/instances/$id/ips#GET](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/ips#GET)|
|app.linodes.instances(id).ips.create(data)|[linode/instances/$id/ips#POST](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/ips#POST)|
|app.linodes.instances(id).ips(ip_address).get()|[linode/instances/$id/ips/$ip_address#GET](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/ips/$ip_address#GET)|
|app.linodes.instances(id).ips(ip_address).update(data)|[linode/instances/$id/ips/$ip_address#PUT](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/ips/$ip_address#PUT)|
|app.linodes.instances(id).ips(ip_address).delete()|[linode/instances/$id/ips/$ip_address#DELETE](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/ips/$ip_address#DELETE)|
|app.linodes.kernels.list()|[linode/kernels#GET](https://developers.linode.com/v4/reference/endpoints/linode/kernels#GET)|
|app.linodes.kernels(id).get()|[linode/kernels/$id#GET](https://developers.linode.com/v4/reference/endpoints/linode/kernels/$id#GET)|
|app.linodes.stackscripts.list()|[linode/stackscripts#GET](https://developers.linode.com/v4/reference/endpoints/linode/stackscripts#GET)|
|app.linodes.stackscripts.create(data)|[linode/stackscripts#POST](https://developers.linode.com/v4/reference/endpoints/linode/stackscripts#POST)|
|app.linodes.stackscripts(id).get()|[linode/stackscripts/$id#GET](https://developers.linode.com/v4/reference/endpoints/linode/stackscripts/$id#GET)|
|app.linodes.stackscripts(id).update(data)|[linode/stackscripts/$id#PUT](https://developers.linode.com/v4/reference/endpoints/linode/stackscripts/$id#PUT)|
|app.linodes.stackscripts(id).delete()|[linode/stackscripts/$id#DELETE](https://developers.linode.com/v4/reference/endpoints/linode/stackscripts/$id#DELETE)|
|app.linodes.instances(id).stats.list()|[linode/instances/$id/stats#GET](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/stats#GET)|
|app.linodes.instances(id).stats.year(n).month(m).get()|[linode/instances/$id/stats/$id/1#GET](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/stats/$id/1#GET)|
|app.linodes.instances(id).stats.year(n).month(m).get()|[linode/instances/$id/stats/$id/1#GET](https://developers.linode.com/v4/reference/endpoints/linode/instances/$id/stats/$id/1#GET)|
|app.linodes.types.list()|[linode/types#GET](https://developers.linode.com/v4/reference/endpoints/linode/types#GET)|
|app.linodes.types(id).get()|[linode/types/$id#GET](https://developers.linode.com/v4/reference/endpoints/linode/types/$id#GET)|
### domains
|Commands|API Reference|
|---|---|
|app.domains.list()|[domains#GET](https://developers.linode.com/v4/reference/endpoints/domains#GET)|
|app.domains.create(data)|[domains#POST](https://developers.linode.com/v4/reference/endpoints/domains#POST)|
|app.domains(id).get()|[domains/$id#GET](https://developers.linode.com/v4/reference/endpoints/domains/$id#GET)|
|app.domains(id).update(data)|[domains/$id#PUT](https://developers.linode.com/v4/reference/endpoints/domains/$id#PUT)|
|app.domains(id).delete()|[domains/$id#DELETE](https://developers.linode.com/v4/reference/endpoints/domains/$id#DELETE)|
|app.domains(id).clone(data)|[domains/$id/clone#POST](https://developers.linode.com/v4/reference/endpoints/domains/$id/clone#POST)|
|app.domains(id).records.list()|[domains/$id/records#GET](https://developers.linode.com/v4/reference/endpoints/domains/$id/records#GET)|
|app.domains(id).records.create(data)|[domains/$id/records#POST](https://developers.linode.com/v4/reference/endpoints/domains/$id/records#POST)|
|app.domains(id).records(id).get()|[domains/$id/records/$id#GET](https://developers.linode.com/v4/reference/endpoints/domains/$id/records/$id#GET)|
|app.domains(id).records(id).update(data)|[domains/$id/records/$id#PUT](https://developers.linode.com/v4/reference/endpoints/domains/$id/records/$id#PUT)|
|app.domains(id).records(id).delete()|[domains/$id/records/$id#DELETE](https://developers.linode.com/v4/reference/endpoints/domains/$id/records/$id#DELETE)|
### nodebalancers
|Commands|API Reference|
|---|---|
|app.nodebalancers.list()|[nodebalancers#GET](https://developers.linode.com/v4/reference/endpoints/nodebalancers#GET)|
|app.nodebalancers.create(data)|[nodebalancers#POST](https://developers.linode.com/v4/reference/endpoints/nodebalancers#POST)|
|app.nodebalancers(id).get()|[nodebalancers/$id#GET](https://developers.linode.com/v4/reference/endpoints/nodebalancers/$id#GET)|
|app.nodebalancers(id).update(data)|[nodebalancers/$id#PUT](https://developers.linode.com/v4/reference/endpoints/nodebalancers/$id#PUT)|
|app.nodebalancers(id).delete()|[nodebalancers/$id#DELETE](https://developers.linode.com/v4/reference/endpoints/nodebalancers/$id#DELETE)|
|app.nodebalancers(id).configs.list()|[nodebalancers/$id/configs#GET](https://developers.linode.com/v4/reference/endpoints/nodebalancers/$id/configs#GET)|
|app.nodebalancers(id).configs.create(data)|[nodebalancers/$id/configs#POST](https://developers.linode.com/v4/reference/endpoints/nodebalancers/$id/configs#POST)|
|app.nodebalancers(id).configs(id).get()|[nodebalancers/$id/configs/$id#GET](https://developers.linode.com/v4/reference/endpoints/nodebalancers/$id/configs/$id#GET)|
|app.nodebalancers(id).configs(id).delete()|[nodebalancers/$id/configs/$id#DELETE](https://developers.linode.com/v4/reference/endpoints/nodebalancers/$id/configs/$id#DELETE)|
|app.nodebalancers(id).configs(id).nodes.list()|[nodebalancers/$id/configs/$id/nodes#GET](https://developers.linode.com/v4/reference/endpoints/nodebalancers/$id/configs/$id/nodes#GET)|
|app.nodebalancers(id).configs(id).nodes.create(data)|[nodebalancers/$id/configs/$id/nodes#POST](https://developers.linode.com/v4/reference/endpoints/nodebalancers/$id/configs/$id/nodes#POST)|
|app.nodebalancers(id).configs(id).nodes(id).get()|[nodebalancers/$id/configs/$id/nodes/$id#GET](https://developers.linode.com/v4/reference/endpoints/nodebalancers/$id/configs/$id/nodes/$id#GET)|
|app.nodebalancers(id).configs(id).nodes(id).update(data)|[nodebalancers/$id/configs/$id/nodes/$id#PUT](https://developers.linode.com/v4/reference/endpoints/nodebalancers/$id/configs/$id/nodes/$id#PUT)|
|app.nodebalancers(id).configs(id).nodes(id).delete()|[nodebalancers/$id/configs/$id/nodes/$id#DELETE](https://developers.linode.com/v4/reference/endpoints/nodebalancers/$id/configs/$id/nodes/$id#DELETE)|
### networking
|Commands|API Reference|
|---|---|
|app.networking.ips.list()|[networking/ips#GET](https://developers.linode.com/v4/reference/endpoints/networking/ips#GET)|
|app.networking.ips.create(data)|[networking/ips#POST](https://developers.linode.com/v4/reference/endpoints/networking/ips#POST)|
|app.networking.ips(address).get()|[networking/ips/$address#GET](https://developers.linode.com/v4/reference/endpoints/networking/ips/$address#GET)|
|app.networking.ips(address).update(data)|[networking/ips/$address#PUT](https://developers.linode.com/v4/reference/endpoints/networking/ips/$address#PUT)|
|app.networking.ips(address).delete()|[networking/ips/$address#DELETE](https://developers.linode.com/v4/reference/endpoints/networking/ips/$address#DELETE)|
|app.networking.ipv4.assign(data)|[networking/ipv4/assign#POST](https://developers.linode.com/v4/reference/endpoints/networking/ipv4/assign#POST)|
|app.networking.ipv4.share(data)|[networking/ipv4/share#POST](https://developers.linode.com/v4/reference/endpoints/networking/ipv4/share#POST)|
|app.networking.ipv6.pools()|[networking/ipv6/pools#GET](https://developers.linode.com/v4/reference/endpoints/networking/ipv6/pools#GET)|
|app.networking.ipv6.ranges()|[networking/ipv6/ranges#GET](https://developers.linode.com/v4/reference/endpoints/networking/ipv6/ranges#GET)|
### regions
|Commands|API Reference|
|---|---|
|app.regions.list()|[regions#GET](https://developers.linode.com/v4/reference/endpoints/regions#GET)|
|app.regions(id).get()|[regions/$id#GET](https://developers.linode.com/v4/reference/endpoints/regions/$id#GET)|
### support
|Commands|API Reference|
|---|---|
|app.support.tickets.list()|[support/tickets#GET](https://developers.linode.com/v4/reference/endpoints/support/tickets#GET)|
|app.support.tickets.create(data)|[support/tickets#POST](https://developers.linode.com/v4/reference/endpoints/support/tickets#POST)|
|app.support.tickets(id).get()|[support/tickets/$id#GET](https://developers.linode.com/v4/reference/endpoints/support/tickets/$id#GET)|
|app.support.tickets(id).attachments(data)|[support/tickets/$id/attachments#POST](https://developers.linode.com/v4/reference/endpoints/support/tickets/$id/attachments#POST)|
|app.support.tickets(id).replies(data)|[support/tickets/$id/replies#POST](https://developers.linode.com/v4/reference/endpoints/support/tickets/$id/replies#POST)|
### account
|Commands|API Reference|
|---|---|
|app.account.list()|[account#GET](https://developers.linode.com/v4/reference/endpoints/account#GET)|
|app.account.update(data)|[account#PUT](https://developers.linode.com/v4/reference/endpoints/account#PUT)|
|app.account.events.list()|[account/events#GET](https://developers.linode.com/v4/reference/endpoints/account/events#GET)|
|app.account.events(id).get()|[account/events/$id#GET](https://developers.linode.com/v4/reference/endpoints/account/events/$id#GET)|
|app.account.events(id).read()|[account/events/$id/read#POST](https://developers.linode.com/v4/reference/endpoints/account/events/$id/read#POST)|
|app.account.events(id).seen()|[account/events/$id/seen#POST](https://developers.linode.com/v4/reference/endpoints/account/events/$id/seen#POST)|
|app.account.invoices.list()|[account/invoices#GET](https://developers.linode.com/v4/reference/endpoints/account/invoices#GET)|
|app.account.invoices(id).get()|[account/invoices/$id#GET](https://developers.linode.com/v4/reference/endpoints/account/invoices/$id#GET)|
|app.account.invoices(id).items()|[account/invoices/$id/items#GET](https://developers.linode.com/v4/reference/endpoints/account/invoices/$id/items#GET)|
|app.account.notifications.list()|[account/notifications#GET](https://developers.linode.com/v4/reference/endpoints/account/notifications#GET)|
|app.account.oauthClients.list()|[account/oauth-clients#GET](https://developers.linode.com/v4/reference/endpoints/account/oauth-clients#GET)|
|app.account.oauthClients.create(data)|[account/oauth-clients#POST](https://developers.linode.com/v4/reference/endpoints/account/oauth-clients#POST)|
|app.account.oauthClients(id).get()|[account/oauth-clients/$id#GET](https://developers.linode.com/v4/reference/endpoints/account/oauth-clients/$id#GET)|
|app.account.oauthClients(id).update(data)|[account/oauth-clients/$id#PUT](https://developers.linode.com/v4/reference/endpoints/account/oauth-clients/$id#PUT)|
|app.account.oauthClients(id).delete()|[account/oauth-clients/$id#DELETE](https://developers.linode.com/v4/reference/endpoints/account/oauth-clients/$id#DELETE)|
|app.account.oauthClients(id).resetSecret()|[account/oauth-clients/$id/reset-secret#POST](https://developers.linode.com/v4/reference/endpoints/account/oauth-clients/$id/reset-secret#POST)|
|app.account.oauthClients(id).thumbnail.get()|[account/oauth-clients/$id/thumbnail#GET](https://developers.linode.com/v4/reference/endpoints/account/oauth-clients/$id/thumbnail#GET)|
|app.account.oauthClients(id).thumbnail.update(data)|[account/oauth-clients/$id/thumbnail#PUT](https://developers.linode.com/v4/reference/endpoints/account/oauth-clients/$id/thumbnail#PUT)|
|app.account.payments.list()|[account/payments#GET](https://developers.linode.com/v4/reference/endpoints/account/payments#GET)|
|app.account.payments.create(data)|[account/payments#POST](https://developers.linode.com/v4/reference/endpoints/account/payments#POST)|
|app.account.payments(id).get()|[account/payments/$id#GET](https://developers.linode.com/v4/reference/endpoints/account/payments/$id#GET)|
|app.account.payments.paypal.create(data)|[account/payments/paypal#POST](https://developers.linode.com/v4/reference/endpoints/account/payments/paypal#POST)|
|app.account.payments.paypal.execute(data)|[account/payments/paypal/execute#POST](https://developers.linode.com/v4/reference/endpoints/account/payments/paypal/execute#POST)|
|app.account.settings.list()|[account/settings#GET](https://developers.linode.com/v4/reference/endpoints/account/settings#GET)|
|app.account.settings.update(data)|[account/settings#PUT](https://developers.linode.com/v4/reference/endpoints/account/settings#PUT)|
|app.account.settings.managedEnable()|[account/settings/managed-enable#POST](https://developers.linode.com/v4/reference/endpoints/account/settings/managed-enable#POST)|
|app.account.transfer.get()|[account/transfer#GET](https://developers.linode.com/v4/reference/endpoints/account/transfer#GET)|
|app.account.users.list()|[account/users#GET](https://developers.linode.com/v4/reference/endpoints/account/users#GET)|
|app.account.users.create(data)|[account/users#POST](https://developers.linode.com/v4/reference/endpoints/account/users#POST)|
|app.account.users(username).get()|[account/users/$username#GET](https://developers.linode.com/v4/reference/endpoints/account/users/$username#GET)|
|app.account.users(username).update(data)|[account/users/$username#PUT](https://developers.linode.com/v4/reference/endpoints/account/users/$username#PUT)|
|app.account.users(username).delete()|[account/users/$username#DELETE](https://developers.linode.com/v4/reference/endpoints/account/users/$username#DELETE)|
|app.account.users(username).grants.get()|[account/users/$username/grants#GET](https://developers.linode.com/v4/reference/endpoints/account/users/$username/grants#GET)|
|app.account.users(username).grants.update(data)|[account/users/$username/grants#PUT](https://developers.linode.com/v4/reference/endpoints/account/users/$username/grants#PUT)|
### profile
|Commands|API Reference|
|---|---|
|app.profile.apps.list()|[profile/apps#GET](https://developers.linode.com/v4/reference/endpoints/profile/apps#GET)|
|app.profile.apps(id).get()|[profile/apps/$id#GET](https://developers.linode.com/v4/reference/endpoints/profile/apps/$id#GET)|
|app.profile.apps(id).delete()|[profile/apps/$id#DELETE](https://developers.linode.com/v4/reference/endpoints/profile/apps/$id#DELETE)|
|app.profile.get()|[profile#GET](https://developers.linode.com/v4/reference/endpoints/profile#GET)|
|app.profile.update(data)|[profile#PUT](https://developers.linode.com/v4/reference/endpoints/profile#PUT)|
|app.profile.grants()|[profile/grants#GET](https://developers.linode.com/v4/reference/endpoints/profile/grants#GET)|
|app.profile.password()|[profile/password#POST](https://developers.linode.com/v4/reference/endpoints/profile/password#POST)|
|app.profile.tokens.list()|[profile/tokens#GET](https://developers.linode.com/v4/reference/endpoints/profile/tokens#GET)|
|app.profile.tokens.create(data)|[profile/tokens#POST](https://developers.linode.com/v4/reference/endpoints/profile/tokens#POST)|
|app.profile.tokens(id).get()|[profile/tokens/$id#GET](https://developers.linode.com/v4/reference/endpoints/profile/tokens/$id#GET)|
|app.profile.tokens(id).update(data)|[profile/tokens/$id#PUT](https://developers.linode.com/v4/reference/endpoints/profile/tokens/$id#PUT)|
|app.profile.tokens(id).delete()|[profile/tokens/$id#DELETE](https://developers.linode.com/v4/reference/endpoints/profile/tokens/$id#DELETE)|
|app.profile.tfaDisable()|[profile/tfa-disable#POST](https://developers.linode.com/v4/reference/endpoints/profile/tfa-disable#POST)|
|app.profile.tfaEnable()|[profile/tfa-enable#POST](https://developers.linode.com/v4/reference/endpoints/profile/tfa-enable#POST)|
|app.profile.tfaEnableConfirm()|[profile/tfa-enable-confirm#POST](https://developers.linode.com/v4/reference/endpoints/profile/tfa-enable-confirm#POST)|
|app.profile.whitelist.list()|[profile/whitelist#GET](https://developers.linode.com/v4/reference/endpoints/profile/whitelist#GET)|
|app.profile.whitelist.create(data)|[profile/whitelist#POST](https://developers.linode.com/v4/reference/endpoints/profile/whitelist#POST)|
|app.profile.whitelist(id).get()|[profile/whitelist/$id#GET](https://developers.linode.com/v4/reference/endpoints/profile/whitelist/$id#GET)|
|app.profile.whitelist(id).delete()|[profile/whitelist/$id#DELETE](https://developers.linode.com/v4/reference/endpoints/profile/whitelist/$id#DELETE)|
### images
|Commands|API Reference|
|---|---|
|app.images.list()|[images#GET](https://developers.linode.com/v4/reference/endpoints/images#GET)|
|app.images.create(data)|[images#POST](https://developers.linode.com/v4/reference/endpoints/images#POST)|
|app.images(id).get()|[images/$id#GET](https://developers.linode.com/v4/reference/endpoints/images/$id#GET)|
|app.images(id).update(data)|[images/$id#PUT](https://developers.linode.com/v4/reference/endpoints/images/$id#PUT)|
|app.images(id).delete()|[images/$id#DELETE](https://developers.linode.com/v4/reference/endpoints/images/$id#DELETE)|
### volumes
|Commands|API Reference|
|---|---|
|app.volumes.list()|[volumes#GET](https://developers.linode.com/v4/reference/endpoints/volumes#GET)|
|app.volumes.create(data)|[volumes#POST](https://developers.linode.com/v4/reference/endpoints/volumes#POST)|
|app.volumes(id).get()|[volumes/$id#GET](https://developers.linode.com/v4/reference/endpoints/volumes/$id#GET)|
|app.volumes(id).update(data)|[volumes/$id#PUT](https://developers.linode.com/v4/reference/endpoints/volumes/$id#PUT)|
|app.volumes(id).delete()|[volumes/$id#DELETE](https://developers.linode.com/v4/reference/endpoints/volumes/$id#DELETE)|
|app.volumes(id).attach(data)|[volumes/$id/attach#POST](https://developers.linode.com/v4/reference/endpoints/volumes/$id/attach#POST)|
|app.volumes(id).clone(data)|[volumes/$id/clone#POST](https://developers.linode.com/v4/reference/endpoints/volumes/$id/clone#POST)|
|app.volumes(id).detach()|[volumes/$id/detach#POST](https://developers.linode.com/v4/reference/endpoints/volumes/$id/detach#POST)|
|app.volumes(id).resize(data)|[volumes/$id/resize#POST](https://developers.linode.com/v4/reference/endpoints/volumes/$id/resize#POST)|
### managed
|Commands|API Reference|
|---|---|
|app.managed.contacts.list()|[managed/contacts#GET](https://developers.linode.com/v4/reference/endpoints/managed/contacts#GET)|
|app.managed.contacts.create(data)|[managed/contacts#POST](https://developers.linode.com/v4/reference/endpoints/managed/contacts#POST)|
|app.managed.contacts(id).get()|[managed/contacts/$id#GET](https://developers.linode.com/v4/reference/endpoints/managed/contacts/$id#GET)|
|app.managed.contacts(id).update(data)|[managed/contacts/$id#PUT](https://developers.linode.com/v4/reference/endpoints/managed/contacts/$id#PUT)|
|app.managed.contacts(id).delete()|[managed/contacts/$id#DELETE](https://developers.linode.com/v4/reference/endpoints/managed/contacts/$id#DELETE)|
|app.managed.credentials.list()|[managed/credentials#GET](https://developers.linode.com/v4/reference/endpoints/managed/credentials#GET)|
|app.managed.credentials.create(data)|[managed/credentials#POST](https://developers.linode.com/v4/reference/endpoints/managed/credentials#POST)|
|app.managed.credentials(id).get()|[managed/credentials/$id#GET](https://developers.linode.com/v4/reference/endpoints/managed/credentials/$id#GET)|
|app.managed.credentials(id).update(data)|[managed/credentials/$id#PUT](https://developers.linode.com/v4/reference/endpoints/managed/credentials/$id#PUT)|
|app.managed.issues.list()|[managed/issues#GET](https://developers.linode.com/v4/reference/endpoints/managed/issues#GET)|
|app.managed.issues(id).get()|[managed/issues/$id#GET](https://developers.linode.com/v4/reference/endpoints/managed/issues/$id#GET)|
|app.managed.linodeSettings.list()|[managed/linode-settings#GET](https://developers.linode.com/v4/reference/endpoints/managed/linode-settings#GET)|
|app.managed.linodeSettings(id).get()|[managed/linode-settings/$id#GET](https://developers.linode.com/v4/reference/endpoints/managed/linode-settings/$id#GET)|
|app.managed.linodeSettings(id).update(data)|[managed/linode-settings/$id#PUT](https://developers.linode.com/v4/reference/endpoints/managed/linode-settings/$id#PUT)|
|app.managed.services.list()|[managed/services#GET](https://developers.linode.com/v4/reference/endpoints/managed/services#GET)|
|app.managed.services.create(data)|[managed/services#POST](https://developers.linode.com/v4/reference/endpoints/managed/services#POST)|
|app.managed.services(id).get()|[managed/services/$id#GET](https://developers.linode.com/v4/reference/endpoints/managed/services/$id#GET)|
|app.managed.services(id).update(data)|[managed/services/$id#PUT](https://developers.linode.com/v4/reference/endpoints/managed/services/$id#PUT)|
|app.managed.services(id).delete()|[managed/services/$id#DELETE](https://developers.linode.com/v4/reference/endpoints/managed/services/$id#DELETE)|
|app.managed.services(id).enable()|[managed/services/$id/enable#POST](https://developers.linode.com/v4/reference/endpoints/managed/services/$id/enable#POST)|
|app.managed.services(id).disable()|[managed/services/$id/disable#POST](https://developers.linode.com/v4/reference/endpoints/managed/services/$id/disable#POST)|
|app.managed.stats.list()|[managed/stats#GET](https://developers.linode.com/v4/reference/endpoints/managed/stats#GET)|
