# Linode v4 API
#### Compatible with v4.0.19

This is a promise-based clinet for the [Linode API](https://developers.linode.com/v4/introduction) version 4

-----------
[![Build Status](https://img.shields.io/travis/gerard2p/linode-v4/master.svg?style=flat-square)](https://travis-ci.org/gerard2p/linode-v4)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fgerard2p%2Flinode-v4.svg?type=badge_small)](https://app.fossa.io/projects/git%2Bgithub.com%2Fgerard2p%2Flinode-v4?ref=badge_shield)

[![bitHound Dependencies](https://www.bithound.io/github/gerard2p/linode-v4/badges/dependencies.svg)](https://www.bithound.io/github/gerard2p/linode-v4/master/dependencies/npm)[![bitHound Dev Dependencies](https://www.bithound.io/github/gerard2p/linode-v4/badges/devDependencies.svg)](https://www.bithound.io/github/gerard2p/linode-v4/master/dependencies/npm)


[![Maintainability](https://api.codeclimate.com/v1/badges/09a1688603acd82faa9e/maintainability)](https://codeclimate.com/github/gerard2p/linode-v4/maintainability)[![Test Coverage](https://api.codeclimate.com/v1/badges/09a1688603acd82faa9e/test_coverage)](https://codeclimate.com/github/gerard2p/linode-v4/test_coverage)

![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=for-the-badge)![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=for-the-badge)[![TypeScri[t]](https://img.shields.io/badge/typescript-v3.4.2-blue.svg?longCache=true&style=for-the-badge)](https://github.com/Microsoft/TypeScript)
-----------
## Installation
```sh
npm install linode-v4 --save
```
## Usage
```javascript
import { Linodev4 } from 'linode-v4';

const server = new Linodev4('personal_key');
```
or
```javascript
const Linodev4 = require('linode-v4');

const server = new Linodev4('personal_key');
```

## Introduction
This package is generate automatically based on the openapi.yaml document provided by the Linode Team; however the package provided here is a fixed versión of the one you can get at [linode documentation](https://developers.linode.com/api/v4) I've reported all the changes I made to this document to the Linode Team hopefully they will fixed this in future versions.

The project comes with d.ts files, so If you use and editor compatible with this, you will no need any documentation since every function and parameter has its definition and description.

As I mention this package is generated automatically, that inclues tests, I've checked really carefully that every function will reach the correct url with the correct parameters (headers, body, query, verbs), since I actually use this package in production; but I did not test every command to the the actual linode servers.

## Commands
Here you will find a complete list of all the command and their link to the actual linode website.

### account
|Command|Reference|
|---|---|
|await server.account.get() | [/account](https://developers.linode.com/api/v4/#operation/getAccount)|
|await server.account.update({} as Account) | [/account](https://developers.linode.com/api/v4/#operation/updateAccount)|
|await server.account.creditCard({} as any) | [/account](https://developers.linode.com/api/v4/#operation/createCreditCard)|
|await server.account.transfer() | [/account](https://developers.linode.com/api/v4/#operation/getTransfer)|
|await server.account.events.list() | [/account/events](https://developers.linode.com/api/v4/#operation/getEvents)|
|await server.account.events.list(1) | [/account/events](https://developers.linode.com/api/v4/#operation/getEvents)|
|await server.account.events.list(1, 50) | [/account/events](https://developers.linode.com/api/v4/#operation/getEvents)|
|await server.account.events(1).get() | [/account/events/{eventId}](https://developers.linode.com/api/v4/#operation/getEvent)|
|await server.account.events(1).read() | [/account/events/{eventId}](https://developers.linode.com/api/v4/#operation/eventRead)|
|await server.account.events(1).seen() | [/account/events/{eventId}](https://developers.linode.com/api/v4/#operation/eventSeen)|
|await server.account.invoices.list() | [/account/invoices](https://developers.linode.com/api/v4/#operation/getInvoices)|
|await server.account.invoices.list(1) | [/account/invoices](https://developers.linode.com/api/v4/#operation/getInvoices)|
|await server.account.invoices.list(1, 50) | [/account/invoices](https://developers.linode.com/api/v4/#operation/getInvoices)|
|await server.account.invoices(1).get() | [/account/invoices/{invoiceId}](https://developers.linode.com/api/v4/#operation/getInvoice)|
|await server.account.invoices(1).items.list() | [/account/invoices/{invoiceId}/items](https://developers.linode.com/api/v4/#operation/getInvoiceItems)|
|await server.account.invoices(1).items.list(1) | [/account/invoices/{invoiceId}/items](https://developers.linode.com/api/v4/#operation/getInvoiceItems)|
|await server.account.invoices(1).items.list(1, 50) | [/account/invoices/{invoiceId}/items](https://developers.linode.com/api/v4/#operation/getInvoiceItems)|
|await server.account.notifications.list() | [/account/notifications](https://developers.linode.com/api/v4/#operation/getNotifications)|
|await server.account.notifications.list(1) | [/account/notifications](https://developers.linode.com/api/v4/#operation/getNotifications)|
|await server.account.notifications.list(1, 50) | [/account/notifications](https://developers.linode.com/api/v4/#operation/getNotifications)|
|await server.account.oauthClients.list() | [/account/oauth-clients](https://developers.linode.com/api/v4/#operation/getClients)|
|await server.account.oauthClients.list(1) | [/account/oauth-clients](https://developers.linode.com/api/v4/#operation/getClients)|
|await server.account.oauthClients.list(1, 50) | [/account/oauth-clients](https://developers.linode.com/api/v4/#operation/getClients)|
|await server.account.oauthClients.list({} as Filter<OAuthClientFilter>) | [/account/oauth-clients](https://developers.linode.com/api/v4/#operation/getClients)|
|await server.account.oauthClients.list(2, {} as Filter<OAuthClientFilter>) | [/account/oauth-clients](https://developers.linode.com/api/v4/#operation/getClients)|
|await server.account.oauthClients.list(2, 5, {} as Filter<OAuthClientFilter>) | [/account/oauth-clients](https://developers.linode.com/api/v4/#operation/getClients)|
|await server.account.oauthClients.create({} as any) | [/account/oauth-clients](https://developers.linode.com/api/v4/#operation/createClient)|
|await server.account.oauthClients('clientId').get() | [/account/oauth-clients/{clientId}](https://developers.linode.com/api/v4/#operation/getClient)|
|await server.account.oauthClients('clientId').update({} as OAuthClient) | [/account/oauth-clients/{clientId}](https://developers.linode.com/api/v4/#operation/updateClient)|
|await server.account.oauthClients('clientId').delete() | [/account/oauth-clients/{clientId}](https://developers.linode.com/api/v4/#operation/deleteClient)|
|await server.account.oauthClients('clientId').resetSecret() | [/account/oauth-clients/{clientId}](https://developers.linode.com/api/v4/#operation/resetClientSecret)|
|await server.account.oauthClients('clientId').thumbnail.get() | [/account/oauth-clients/{clientId}/thumbnail](https://developers.linode.com/api/v4/#operation/getClientThumbnail)|
|await server.account.oauthClients('clientId').thumbnail.update({} as ArrayBuffer) | [/account/oauth-clients/{clientId}/thumbnail](https://developers.linode.com/api/v4/#operation/setClientThumbnail)|
|await server.account.payments.list() | [/account/payments](https://developers.linode.com/api/v4/#operation/getPayments)|
|await server.account.payments.list(1) | [/account/payments](https://developers.linode.com/api/v4/#operation/getPayments)|
|await server.account.payments.list(1, 50) | [/account/payments](https://developers.linode.com/api/v4/#operation/getPayments)|
|await server.account.payments.create({} as PaymentRequest) | [/account/payments](https://developers.linode.com/api/v4/#operation/createPayment)|
|await server.account.payments(1).get() | [/account/payments/{paymentId}](https://developers.linode.com/api/v4/#operation/getPayment)|
|await server.account.payments.paypal.create({} as PayPal) | [/account/payments/paypal](https://developers.linode.com/api/v4/#operation/createPayPalPayment)|
|await server.account.payments.paypal.execute({} as PayPalExecute) | [/account/payments/paypal](https://developers.linode.com/api/v4/#operation/executePayPalPayment)|
|await server.account.settings.get() | [/account/settings](https://developers.linode.com/api/v4/#operation/getAccountSettings)|
|await server.account.settings.update({} as AccountSettings) | [/account/settings](https://developers.linode.com/api/v4/#operation/updateAccountSettings)|
|await server.account.users.list() | [/account/users](https://developers.linode.com/api/v4/#operation/getUsers)|
|await server.account.users.list(1) | [/account/users](https://developers.linode.com/api/v4/#operation/getUsers)|
|await server.account.users.list(1, 50) | [/account/users](https://developers.linode.com/api/v4/#operation/getUsers)|
|await server.account.users.list({} as Filter<UserFilter>) | [/account/users](https://developers.linode.com/api/v4/#operation/getUsers)|
|await server.account.users.list(2, {} as Filter<UserFilter>) | [/account/users](https://developers.linode.com/api/v4/#operation/getUsers)|
|await server.account.users.list(2, 5, {} as Filter<UserFilter>) | [/account/users](https://developers.linode.com/api/v4/#operation/getUsers)|
|await server.account.users.create({} as any) | [/account/users](https://developers.linode.com/api/v4/#operation/createUser)|
|await server.account.users('username').get() | [/account/users/{username}](https://developers.linode.com/api/v4/#operation/getUser)|
|await server.account.users('username').update({} as User) | [/account/users/{username}](https://developers.linode.com/api/v4/#operation/updateUser)|
|await server.account.users('username').delete() | [/account/users/{username}](https://developers.linode.com/api/v4/#operation/deleteUser)|
|await server.account.users('username').grants.get() | [/account/users/{username}/grants](https://developers.linode.com/api/v4/#operation/getUserGrants)|
|await server.account.users('username').grants.update({} as GrantsResponse) | [/account/users/{username}/grants](https://developers.linode.com/api/v4/#operation/updateUserGrants)|
### domains
|Command|Reference|
|---|---|
|await server.domains.list() | [/domains](https://developers.linode.com/api/v4/#operation/getDomains)|
|await server.domains.list(1) | [/domains](https://developers.linode.com/api/v4/#operation/getDomains)|
|await server.domains.list(1, 50) | [/domains](https://developers.linode.com/api/v4/#operation/getDomains)|
|await server.domains.list({} as Filter<DomainFilter>) | [/domains](https://developers.linode.com/api/v4/#operation/getDomains)|
|await server.domains.list(2, {} as Filter<DomainFilter>) | [/domains](https://developers.linode.com/api/v4/#operation/getDomains)|
|await server.domains.list(2, 5, {} as Filter<DomainFilter>) | [/domains](https://developers.linode.com/api/v4/#operation/getDomains)|
|await server.domains.create({} as Domain) | [/domains](https://developers.linode.com/api/v4/#operation/createDomain)|
|await server.domains.import({} as any) | [/domains](https://developers.linode.com/api/v4/#operation/importDomain)|
|await server.domains(1).get() | [/domains/{domainId}](https://developers.linode.com/api/v4/#operation/getDomain)|
|await server.domains(1).update({} as Domain) | [/domains/{domainId}](https://developers.linode.com/api/v4/#operation/updateDomain)|
|await server.domains(1).delete() | [/domains/{domainId}](https://developers.linode.com/api/v4/#operation/deleteDomain)|
|await server.domains(1).records.list() | [/domains/{domainId}/records](https://developers.linode.com/api/v4/#operation/getDomainRecords)|
|await server.domains(1).records.list(1) | [/domains/{domainId}/records](https://developers.linode.com/api/v4/#operation/getDomainRecords)|
|await server.domains(1).records.list(1, 50) | [/domains/{domainId}/records](https://developers.linode.com/api/v4/#operation/getDomainRecords)|
|await server.domains(1).records.create({} as any) | [/domains/{domainId}/records](https://developers.linode.com/api/v4/#operation/createDomainRecord)|
|await server.domains(1).records(1).get() | [/domains/{domainId}/records/{recordId}](https://developers.linode.com/api/v4/#operation/getDomainRecord)|
|await server.domains(1).records(1).update({} as DomainRecord) | [/domains/{domainId}/records/{recordId}](https://developers.linode.com/api/v4/#operation/updateDomainRecord)|
|await server.domains(1).records(1).delete() | [/domains/{domainId}/records/{recordId}](https://developers.linode.com/api/v4/#operation/deleteDomainRecord)|
### images
|Command|Reference|
|---|---|
|await server.images.list() | [/images](https://developers.linode.com/api/v4/#operation/getImages)|
|await server.images.list(1) | [/images](https://developers.linode.com/api/v4/#operation/getImages)|
|await server.images.list(1, 50) | [/images](https://developers.linode.com/api/v4/#operation/getImages)|
|await server.images.list({} as Filter<ImagePublicFilter>) | [/images](https://developers.linode.com/api/v4/#operation/getImages)|
|await server.images.list(2, {} as Filter<ImagePublicFilter>) | [/images](https://developers.linode.com/api/v4/#operation/getImages)|
|await server.images.list(2, 5, {} as Filter<ImagePublicFilter>) | [/images](https://developers.linode.com/api/v4/#operation/getImages)|
|await server.images.create({} as any) | [/images](https://developers.linode.com/api/v4/#operation/createImage)|
|await server.images('imageId').get() | [/images/{imageId}](https://developers.linode.com/api/v4/#operation/getImage)|
|await server.images('imageId').update({} as ImagePrivate) | [/images/{imageId}](https://developers.linode.com/api/v4/#operation/updateImage)|
|await server.images('imageId').delete() | [/images/{imageId}](https://developers.linode.com/api/v4/#operation/deleteImage)|
### linode
|Command|Reference|
|---|---|
|await server.linode.instances.list() | [/linode/instances](https://developers.linode.com/api/v4/#operation/getLinodeInstances)|
|await server.linode.instances.list(1) | [/linode/instances](https://developers.linode.com/api/v4/#operation/getLinodeInstances)|
|await server.linode.instances.list(1, 50) | [/linode/instances](https://developers.linode.com/api/v4/#operation/getLinodeInstances)|
|await server.linode.instances.list({} as Filter<LinodeFilter>) | [/linode/instances](https://developers.linode.com/api/v4/#operation/getLinodeInstances)|
|await server.linode.instances.list(2, {} as Filter<LinodeFilter>) | [/linode/instances](https://developers.linode.com/api/v4/#operation/getLinodeInstances)|
|await server.linode.instances.list(2, 5, {} as Filter<LinodeFilter>) | [/linode/instances](https://developers.linode.com/api/v4/#operation/getLinodeInstances)|
|await server.linode.instances.create({} as any) | [/linode/instances](https://developers.linode.com/api/v4/#operation/createLinodeInstance)|
|await server.linode.instances(1).get() | [/linode/instances/{linodeId}](https://developers.linode.com/api/v4/#operation/getLinodeInstance)|
|await server.linode.instances(1).update({} as Linode) | [/linode/instances/{linodeId}](https://developers.linode.com/api/v4/#operation/updateLinodeInstance)|
|await server.linode.instances(1).delete() | [/linode/instances/{linodeId}](https://developers.linode.com/api/v4/#operation/deleteLinodeInstance)|
|await server.linode.instances(1).boot({} as any) | [/linode/instances/{linodeId}](https://developers.linode.com/api/v4/#operation/bootLinodeInstance)|
|await server.linode.instances(1).clone({} as any) | [/linode/instances/{linodeId}](https://developers.linode.com/api/v4/#operation/cloneLinodeInstance)|
|await server.linode.instances(1).migrate() | [/linode/instances/{linodeId}](https://developers.linode.com/api/v4/#operation/migrateLinodeInstance)|
|await server.linode.instances(1).mutate() | [/linode/instances/{linodeId}](https://developers.linode.com/api/v4/#operation/mutateLinodeInstance)|
|await server.linode.instances(1).reboot({} as any) | [/linode/instances/{linodeId}](https://developers.linode.com/api/v4/#operation/rebootLinodeInstance)|
|await server.linode.instances(1).rebuild({} as any) | [/linode/instances/{linodeId}](https://developers.linode.com/api/v4/#operation/rebuildLinodeInstance)|
|await server.linode.instances(1).rescue({} as any) | [/linode/instances/{linodeId}](https://developers.linode.com/api/v4/#operation/rescueLinodeInstance)|
|await server.linode.instances(1).resize({} as any) | [/linode/instances/{linodeId}](https://developers.linode.com/api/v4/#operation/resizeLinodeInstance)|
|await server.linode.instances(1).shutdown() | [/linode/instances/{linodeId}](https://developers.linode.com/api/v4/#operation/shutdownLinodeInstance)|
|await server.linode.instances(1).backups.get() | [/linode/instances/{linodeId}/backups](https://developers.linode.com/api/v4/#operation/getBackups)|
|await server.linode.instances(1).backups.create({} as any) | [/linode/instances/{linodeId}/backups](https://developers.linode.com/api/v4/#operation/createSnapshot)|
|await server.linode.instances(1).backups.cancel() | [/linode/instances/{linodeId}/backups](https://developers.linode.com/api/v4/#operation/cancelBackups)|
|await server.linode.instances(1).backups.enable() | [/linode/instances/{linodeId}/backups](https://developers.linode.com/api/v4/#operation/enableBackups)|
|await server.linode.instances(1).backups(1).get() | [/linode/instances/{linodeId}/backups/{backupId}](https://developers.linode.com/api/v4/#operation/getBackup)|
|await server.linode.instances(1).backups(1).restore({} as any) | [/linode/instances/{linodeId}/backups/{backupId}](https://developers.linode.com/api/v4/#operation/restoreBackup)|
|await server.linode.instances(1).configs.list() | [/linode/instances/{linodeId}/configs](https://developers.linode.com/api/v4/#operation/getLinodeConfigs)|
|await server.linode.instances(1).configs.list(1) | [/linode/instances/{linodeId}/configs](https://developers.linode.com/api/v4/#operation/getLinodeConfigs)|
|await server.linode.instances(1).configs.list(1, 50) | [/linode/instances/{linodeId}/configs](https://developers.linode.com/api/v4/#operation/getLinodeConfigs)|
|await server.linode.instances(1).configs.list({} as Filter<LinodeConfigFilter>) | [/linode/instances/{linodeId}/configs](https://developers.linode.com/api/v4/#operation/getLinodeConfigs)|
|await server.linode.instances(1).configs.list(2, {} as Filter<LinodeConfigFilter>) | [/linode/instances/{linodeId}/configs](https://developers.linode.com/api/v4/#operation/getLinodeConfigs)|
|await server.linode.instances(1).configs.list(2, 5, {} as Filter<LinodeConfigFilter>) | [/linode/instances/{linodeId}/configs](https://developers.linode.com/api/v4/#operation/getLinodeConfigs)|
|await server.linode.instances(1).configs.create({} as LinodeConfig) | [/linode/instances/{linodeId}/configs](https://developers.linode.com/api/v4/#operation/addLinodeConfig)|
|await server.linode.instances(1).configs(1).get() | [/linode/instances/{linodeId}/configs/{configId}](https://developers.linode.com/api/v4/#operation/getLinodeConfig)|
|await server.linode.instances(1).configs(1).update({} as LinodeConfig) | [/linode/instances/{linodeId}/configs/{configId}](https://developers.linode.com/api/v4/#operation/updateLinodeConfig)|
|await server.linode.instances(1).configs(1).delete() | [/linode/instances/{linodeId}/configs/{configId}](https://developers.linode.com/api/v4/#operation/deleteLinodeConfig)|
|await server.linode.instances(1).disks.list() | [/linode/instances/{linodeId}/disks](https://developers.linode.com/api/v4/#operation/getLinodeDisks)|
|await server.linode.instances(1).disks.list(1) | [/linode/instances/{linodeId}/disks](https://developers.linode.com/api/v4/#operation/getLinodeDisks)|
|await server.linode.instances(1).disks.list(1, 50) | [/linode/instances/{linodeId}/disks](https://developers.linode.com/api/v4/#operation/getLinodeDisks)|
|await server.linode.instances(1).disks.list({} as Filter<DiskFilter>) | [/linode/instances/{linodeId}/disks](https://developers.linode.com/api/v4/#operation/getLinodeDisks)|
|await server.linode.instances(1).disks.list(2, {} as Filter<DiskFilter>) | [/linode/instances/{linodeId}/disks](https://developers.linode.com/api/v4/#operation/getLinodeDisks)|
|await server.linode.instances(1).disks.list(2, 5, {} as Filter<DiskFilter>) | [/linode/instances/{linodeId}/disks](https://developers.linode.com/api/v4/#operation/getLinodeDisks)|
|await server.linode.instances(1).disks.create({} as DiskRequest) | [/linode/instances/{linodeId}/disks](https://developers.linode.com/api/v4/#operation/addLinodeDisk)|
|await server.linode.instances(1).disks(1).get() | [/linode/instances/{linodeId}/disks/{diskId}](https://developers.linode.com/api/v4/#operation/getLinodeDisk)|
|await server.linode.instances(1).disks(1).update({} as Disk) | [/linode/instances/{linodeId}/disks/{diskId}](https://developers.linode.com/api/v4/#operation/updateDisk)|
|await server.linode.instances(1).disks(1).delete() | [/linode/instances/{linodeId}/disks/{diskId}](https://developers.linode.com/api/v4/#operation/deleteDisk)|
|await server.linode.instances(1).disks(1).clone() | [/linode/instances/{linodeId}/disks/{diskId}](https://developers.linode.com/api/v4/#operation/cloneLinodeDisk)|
|await server.linode.instances(1).disks(1).password({} as any) | [/linode/instances/{linodeId}/disks/{diskId}](https://developers.linode.com/api/v4/#operation/resetDiskPassword)|
|await server.linode.instances(1).disks(1).resize({} as any) | [/linode/instances/{linodeId}/disks/{diskId}](https://developers.linode.com/api/v4/#operation/resizeDisk)|
|await server.linode.instances(1).ips.get() | [/linode/instances/{linodeId}/ips](https://developers.linode.com/api/v4/#operation/getLinodeIPs)|
|await server.linode.instances(1).ips.create({} as any) | [/linode/instances/{linodeId}/ips](https://developers.linode.com/api/v4/#operation/addLinodeIP)|
|await server.linode.instances(1).ips('address').get() | [/linode/instances/{linodeId}/ips/{address}](https://developers.linode.com/api/v4/#operation/getLinodeIP)|
|await server.linode.instances(1).ips('address').update({} as any) | [/linode/instances/{linodeId}/ips/{address}](https://developers.linode.com/api/v4/#operation/updateLinodeIP)|
|await server.linode.instances(1).ips('address').delete() | [/linode/instances/{linodeId}/ips/{address}](https://developers.linode.com/api/v4/#operation/removeLinodeIP)|
|await server.linode.instances(1).stats.get() | [/linode/instances/{linodeId}/stats](https://developers.linode.com/api/v4/#operation/getLinodeStats)|
|await server.linode.instances(1).stats.stats(1, 1) | [/linode/instances/{linodeId}/stats](https://developers.linode.com/api/v4/#operation/getLinodeStatsByYearMonth)|
|await server.linode.instances(1).volumes.list() | [/linode/instances/{linodeId}/volumes](https://developers.linode.com/api/v4/#operation/getLinodeVolumes)|
|await server.linode.instances(1).volumes.list(1) | [/linode/instances/{linodeId}/volumes](https://developers.linode.com/api/v4/#operation/getLinodeVolumes)|
|await server.linode.instances(1).volumes.list(1, 50) | [/linode/instances/{linodeId}/volumes](https://developers.linode.com/api/v4/#operation/getLinodeVolumes)|
|await server.linode.instances(1).volumes.list({} as Filter<VolumeFilter>) | [/linode/instances/{linodeId}/volumes](https://developers.linode.com/api/v4/#operation/getLinodeVolumes)|
|await server.linode.instances(1).volumes.list(2, {} as Filter<VolumeFilter>) | [/linode/instances/{linodeId}/volumes](https://developers.linode.com/api/v4/#operation/getLinodeVolumes)|
|await server.linode.instances(1).volumes.list(2, 5, {} as Filter<VolumeFilter>) | [/linode/instances/{linodeId}/volumes](https://developers.linode.com/api/v4/#operation/getLinodeVolumes)|
|await server.linode.kernels.list() | [/linode/kernels](https://developers.linode.com/api/v4/#operation/getKernels)|
|await server.linode.kernels.list(1) | [/linode/kernels](https://developers.linode.com/api/v4/#operation/getKernels)|
|await server.linode.kernels.list(1, 50) | [/linode/kernels](https://developers.linode.com/api/v4/#operation/getKernels)|
|await server.linode.kernels.list({} as Filter<KernelFilter>) | [/linode/kernels](https://developers.linode.com/api/v4/#operation/getKernels)|
|await server.linode.kernels.list(2, {} as Filter<KernelFilter>) | [/linode/kernels](https://developers.linode.com/api/v4/#operation/getKernels)|
|await server.linode.kernels.list(2, 5, {} as Filter<KernelFilter>) | [/linode/kernels](https://developers.linode.com/api/v4/#operation/getKernels)|
|await server.linode.kernels('kernelId').get() | [/linode/kernels/{kernelId}](https://developers.linode.com/api/v4/#operation/getKernel)|
|await server.linode.stackscripts.list() | [/linode/stackscripts](https://developers.linode.com/api/v4/#operation/getStackScripts)|
|await server.linode.stackscripts.list(1) | [/linode/stackscripts](https://developers.linode.com/api/v4/#operation/getStackScripts)|
|await server.linode.stackscripts.list(1, 50) | [/linode/stackscripts](https://developers.linode.com/api/v4/#operation/getStackScripts)|
|await server.linode.stackscripts.list({} as Filter<StackScriptFilter>) | [/linode/stackscripts](https://developers.linode.com/api/v4/#operation/getStackScripts)|
|await server.linode.stackscripts.list(2, {} as Filter<StackScriptFilter>) | [/linode/stackscripts](https://developers.linode.com/api/v4/#operation/getStackScripts)|
|await server.linode.stackscripts.list(2, 5, {} as Filter<StackScriptFilter>) | [/linode/stackscripts](https://developers.linode.com/api/v4/#operation/getStackScripts)|
|await server.linode.stackscripts.create({} as any) | [/linode/stackscripts](https://developers.linode.com/api/v4/#operation/addStackScript)|
|await server.linode.stackscripts('stackscriptId').get() | [/linode/stackscripts/{stackscriptId}](https://developers.linode.com/api/v4/#operation/getStackScript)|
|await server.linode.stackscripts('stackscriptId').update({} as StackScript) | [/linode/stackscripts/{stackscriptId}](https://developers.linode.com/api/v4/#operation/updateStackScript)|
|await server.linode.stackscripts('stackscriptId').delete() | [/linode/stackscripts/{stackscriptId}](https://developers.linode.com/api/v4/#operation/deleteStackScript)|
|await server.linode.types.list() | [/linode/types](https://developers.linode.com/api/v4/#operation/getLinodeTypes)|
|await server.linode.types.list(1) | [/linode/types](https://developers.linode.com/api/v4/#operation/getLinodeTypes)|
|await server.linode.types.list(1, 50) | [/linode/types](https://developers.linode.com/api/v4/#operation/getLinodeTypes)|
|await server.linode.types.list({} as Filter<LinodeTypeFilter>) | [/linode/types](https://developers.linode.com/api/v4/#operation/getLinodeTypes)|
|await server.linode.types.list(2, {} as Filter<LinodeTypeFilter>) | [/linode/types](https://developers.linode.com/api/v4/#operation/getLinodeTypes)|
|await server.linode.types.list(2, 5, {} as Filter<LinodeTypeFilter>) | [/linode/types](https://developers.linode.com/api/v4/#operation/getLinodeTypes)|
|await server.linode.types('typeId').get() | [/linode/types/{typeId}](https://developers.linode.com/api/v4/#operation/getLinodeType)|
### longview
|Command|Reference|
|---|---|
|await server.longview.clients.list() | [/longview/clients](https://developers.linode.com/api/v4/#operation/getLongviewClients)|
|await server.longview.clients.list(1) | [/longview/clients](https://developers.linode.com/api/v4/#operation/getLongviewClients)|
|await server.longview.clients.list(1, 50) | [/longview/clients](https://developers.linode.com/api/v4/#operation/getLongviewClients)|
|await server.longview.clients.list({} as Filter<LongviewClientFilter>) | [/longview/clients](https://developers.linode.com/api/v4/#operation/getLongviewClients)|
|await server.longview.clients.list(2, {} as Filter<LongviewClientFilter>) | [/longview/clients](https://developers.linode.com/api/v4/#operation/getLongviewClients)|
|await server.longview.clients.list(2, 5, {} as Filter<LongviewClientFilter>) | [/longview/clients](https://developers.linode.com/api/v4/#operation/getLongviewClients)|
|await server.longview.clients.create({} as LongviewClient) | [/longview/clients](https://developers.linode.com/api/v4/#operation/createLongviewClient)|
|await server.longview.clients(1).get() | [/longview/clients/{clientId}](https://developers.linode.com/api/v4/#operation/getLongviewClient)|
|await server.longview.clients(1).update({} as LongviewClient) | [/longview/clients/{clientId}](https://developers.linode.com/api/v4/#operation/updateLongviewClient)|
|await server.longview.clients(1).delete() | [/longview/clients/{clientId}](https://developers.linode.com/api/v4/#operation/deleteLongviewClient)|
|await server.longview.subscriptions.list() | [/longview/subscriptions](https://developers.linode.com/api/v4/#operation/getLongviewSubscriptions)|
|await server.longview.subscriptions.list(1) | [/longview/subscriptions](https://developers.linode.com/api/v4/#operation/getLongviewSubscriptions)|
|await server.longview.subscriptions.list(1, 50) | [/longview/subscriptions](https://developers.linode.com/api/v4/#operation/getLongviewSubscriptions)|
|await server.longview.subscriptions('subscriptionId').get() | [/longview/subscriptions/{subscriptionId}](https://developers.linode.com/api/v4/#operation/getLongviewSubscription)|
### managed
|Command|Reference|
|---|---|
|await server.managed.contacts.list() | [/managed/contacts](https://developers.linode.com/api/v4/#operation/getManagedContacts)|
|await server.managed.contacts.list(1) | [/managed/contacts](https://developers.linode.com/api/v4/#operation/getManagedContacts)|
|await server.managed.contacts.list(1, 50) | [/managed/contacts](https://developers.linode.com/api/v4/#operation/getManagedContacts)|
|await server.managed.contacts.list({} as Filter<ManagedContactFilter>) | [/managed/contacts](https://developers.linode.com/api/v4/#operation/getManagedContacts)|
|await server.managed.contacts.list(2, {} as Filter<ManagedContactFilter>) | [/managed/contacts](https://developers.linode.com/api/v4/#operation/getManagedContacts)|
|await server.managed.contacts.list(2, 5, {} as Filter<ManagedContactFilter>) | [/managed/contacts](https://developers.linode.com/api/v4/#operation/getManagedContacts)|
|await server.managed.contacts.create({} as ManagedContact) | [/managed/contacts](https://developers.linode.com/api/v4/#operation/createManagedContact)|
|await server.managed.contacts(1).get() | [/managed/contacts/{contactId}](https://developers.linode.com/api/v4/#operation/getManagedContact)|
|await server.managed.contacts(1).update({} as ManagedContact) | [/managed/contacts/{contactId}](https://developers.linode.com/api/v4/#operation/updateManagedContact)|
|await server.managed.contacts(1).delete() | [/managed/contacts/{contactId}](https://developers.linode.com/api/v4/#operation/deleteManagedContact)|
|await server.managed.credentials.list() | [/managed/credentials](https://developers.linode.com/api/v4/#operation/getManagedCredentials)|
|await server.managed.credentials.list(1) | [/managed/credentials](https://developers.linode.com/api/v4/#operation/getManagedCredentials)|
|await server.managed.credentials.list(1, 50) | [/managed/credentials](https://developers.linode.com/api/v4/#operation/getManagedCredentials)|
|await server.managed.credentials.create({} as any) | [/managed/credentials](https://developers.linode.com/api/v4/#operation/createManagedCredential)|
|await server.managed.credentials(1).get() | [/managed/credentials/{credentialId}](https://developers.linode.com/api/v4/#operation/getManagedCredential)|
|await server.managed.credentials(1).update({} as ManagedCredential) | [/managed/credentials/{credentialId}](https://developers.linode.com/api/v4/#operation/updateManagedCredential)|
|await server.managed.credentials(1).revoke() | [/managed/credentials/{credentialId}](https://developers.linode.com/api/v4/#operation/deleteManagedCredential)|
|await server.managed.issues.list() | [/managed/issues](https://developers.linode.com/api/v4/#operation/getManagedIssues)|
|await server.managed.issues.list(1) | [/managed/issues](https://developers.linode.com/api/v4/#operation/getManagedIssues)|
|await server.managed.issues.list(1, 50) | [/managed/issues](https://developers.linode.com/api/v4/#operation/getManagedIssues)|
|await server.managed.issues(1).get() | [/managed/issues/{issueId}](https://developers.linode.com/api/v4/#operation/getManagedIssue)|
|await server.managed.linodeSettings.list() | [/managed/linode-settings](https://developers.linode.com/api/v4/#operation/getManagedLinodeSettings)|
|await server.managed.linodeSettings.list(1) | [/managed/linode-settings](https://developers.linode.com/api/v4/#operation/getManagedLinodeSettings)|
|await server.managed.linodeSettings.list(1, 50) | [/managed/linode-settings](https://developers.linode.com/api/v4/#operation/getManagedLinodeSettings)|
|await server.managed.linodeSettings(1).get() | [/managed/linode-settings/{linodeId}](https://developers.linode.com/api/v4/#operation/getManagedLinodeSetting)|
|await server.managed.linodeSettings(1).update({} as ManagedLinodeSettings) | [/managed/linode-settings/{linodeId}](https://developers.linode.com/api/v4/#operation/updateManagedLinodeSetting)|
|await server.managed.services.list() | [/managed/services](https://developers.linode.com/api/v4/#operation/getManagedServices)|
|await server.managed.services.list(1) | [/managed/services](https://developers.linode.com/api/v4/#operation/getManagedServices)|
|await server.managed.services.list(1, 50) | [/managed/services](https://developers.linode.com/api/v4/#operation/getManagedServices)|
|await server.managed.services.create({} as any) | [/managed/services](https://developers.linode.com/api/v4/#operation/createManagedService)|
|await server.managed.services(1).get() | [/managed/services/{serviceId}](https://developers.linode.com/api/v4/#operation/getManagedService)|
|await server.managed.services(1).update({} as ManagedService) | [/managed/services/{serviceId}](https://developers.linode.com/api/v4/#operation/updateManagedService)|
|await server.managed.services(1).delete() | [/managed/services/{serviceId}](https://developers.linode.com/api/v4/#operation/deleteManagedService)|
|await server.managed.services(1).disable() | [/managed/services/{serviceId}](https://developers.linode.com/api/v4/#operation/disableManagedService)|
|await server.managed.services(1).enable() | [/managed/services/{serviceId}](https://developers.linode.com/api/v4/#operation/enableManagedService)|
### networking
|Command|Reference|
|---|---|
|await server.networking.ips.list() | [/networking/ips](https://developers.linode.com/api/v4/#operation/getIPs)|
|await server.networking.ips.list(1) | [/networking/ips](https://developers.linode.com/api/v4/#operation/getIPs)|
|await server.networking.ips.list(1, 50) | [/networking/ips](https://developers.linode.com/api/v4/#operation/getIPs)|
|await server.networking.ips.list({} as Filter<IPAddressFilter>) | [/networking/ips](https://developers.linode.com/api/v4/#operation/getIPs)|
|await server.networking.ips.list(2, {} as Filter<IPAddressFilter>) | [/networking/ips](https://developers.linode.com/api/v4/#operation/getIPs)|
|await server.networking.ips.list(2, 5, {} as Filter<IPAddressFilter>) | [/networking/ips](https://developers.linode.com/api/v4/#operation/getIPs)|
|await server.networking.ips.create({} as any) | [/networking/ips](https://developers.linode.com/api/v4/#operation/allocateIP)|
|await server.networking.ips('address').get() | [/networking/ips/{address}](https://developers.linode.com/api/v4/#operation/getIP)|
|await server.networking.ips('address').update({} as IPAddress) | [/networking/ips/{address}](https://developers.linode.com/api/v4/#operation/updateIP)|
|await server.networking.ipv4.assign({} as any) | [/networking/ipv4](https://developers.linode.com/api/v4/#operation/assignIPs)|
|await server.networking.ipv4.share({} as any) | [/networking/ipv4](https://developers.linode.com/api/v4/#operation/shareIPs)|
|await server.networking.ipv6.pools.list() | [/networking/ipv6/pools](https://developers.linode.com/api/v4/#operation/getIPv6Pools)|
|await server.networking.ipv6.pools.list(1) | [/networking/ipv6/pools](https://developers.linode.com/api/v4/#operation/getIPv6Pools)|
|await server.networking.ipv6.pools.list(1, 50) | [/networking/ipv6/pools](https://developers.linode.com/api/v4/#operation/getIPv6Pools)|
|await server.networking.ipv6.ranges.list() | [/networking/ipv6/ranges](https://developers.linode.com/api/v4/#operation/getIPv6Ranges)|
|await server.networking.ipv6.ranges.list(1) | [/networking/ipv6/ranges](https://developers.linode.com/api/v4/#operation/getIPv6Ranges)|
|await server.networking.ipv6.ranges.list(1, 50) | [/networking/ipv6/ranges](https://developers.linode.com/api/v4/#operation/getIPv6Ranges)|
### nodebalancers
|Command|Reference|
|---|---|
|await server.nodebalancers.list() | [/nodebalancers](https://developers.linode.com/api/v4/#operation/getNodeBalancers)|
|await server.nodebalancers.list(1) | [/nodebalancers](https://developers.linode.com/api/v4/#operation/getNodeBalancers)|
|await server.nodebalancers.list(1, 50) | [/nodebalancers](https://developers.linode.com/api/v4/#operation/getNodeBalancers)|
|await server.nodebalancers.list({} as Filter<NodeBalancerFilter>) | [/nodebalancers](https://developers.linode.com/api/v4/#operation/getNodeBalancers)|
|await server.nodebalancers.list(2, {} as Filter<NodeBalancerFilter>) | [/nodebalancers](https://developers.linode.com/api/v4/#operation/getNodeBalancers)|
|await server.nodebalancers.list(2, 5, {} as Filter<NodeBalancerFilter>) | [/nodebalancers](https://developers.linode.com/api/v4/#operation/getNodeBalancers)|
|await server.nodebalancers.create({} as any) | [/nodebalancers](https://developers.linode.com/api/v4/#operation/createNodeBalancer)|
|await server.nodebalancers(1).get() | [/nodebalancers/{nodeBalancerId}](https://developers.linode.com/api/v4/#operation/getNodeBalancer)|
|await server.nodebalancers(1).update({} as NodeBalancer) | [/nodebalancers/{nodeBalancerId}](https://developers.linode.com/api/v4/#operation/updateNodeBalancer)|
|await server.nodebalancers(1).delete() | [/nodebalancers/{nodeBalancerId}](https://developers.linode.com/api/v4/#operation/deleteNodeBalancer)|
|await server.nodebalancers(1).stats() | [/nodebalancers/{nodeBalancerId}](https://developers.linode.com/api/v4/#operation/undefined)|
|await server.nodebalancers(1).configs.list() | [/nodebalancers/{nodeBalancerId}/configs](https://developers.linode.com/api/v4/#operation/getNodeBalancerConfigs)|
|await server.nodebalancers(1).configs.list(1) | [/nodebalancers/{nodeBalancerId}/configs](https://developers.linode.com/api/v4/#operation/getNodeBalancerConfigs)|
|await server.nodebalancers(1).configs.list(1, 50) | [/nodebalancers/{nodeBalancerId}/configs](https://developers.linode.com/api/v4/#operation/getNodeBalancerConfigs)|
|await server.nodebalancers(1).configs.create({} as NodeBalancerConfig) | [/nodebalancers/{nodeBalancerId}/configs](https://developers.linode.com/api/v4/#operation/createNodeBalancerConfig)|
|await server.nodebalancers(1).configs(1).get() | [/nodebalancers/{nodeBalancerId}/configs/{configId}](https://developers.linode.com/api/v4/#operation/getNodeBalancerConfig)|
|await server.nodebalancers(1).configs(1).update({} as NodeBalancerConfig) | [/nodebalancers/{nodeBalancerId}/configs/{configId}](https://developers.linode.com/api/v4/#operation/updateNodeBalancerConfig)|
|await server.nodebalancers(1).configs(1).delete() | [/nodebalancers/{nodeBalancerId}/configs/{configId}](https://developers.linode.com/api/v4/#operation/deleteNodeBalancerConfig)|
|await server.nodebalancers(1).configs(1).rebuild({} as any) | [/nodebalancers/{nodeBalancerId}/configs/{configId}](https://developers.linode.com/api/v4/#operation/rebuildNodeBalancerConfig)|
|await server.nodebalancers(1).configs(1).nodes.list() | [/nodebalancers/{nodeBalancerId}/configs/{configId}/nodes](https://developers.linode.com/api/v4/#operation/getNodeBalancerConfigNodes)|
|await server.nodebalancers(1).configs(1).nodes.list(1) | [/nodebalancers/{nodeBalancerId}/configs/{configId}/nodes](https://developers.linode.com/api/v4/#operation/getNodeBalancerConfigNodes)|
|await server.nodebalancers(1).configs(1).nodes.list(1, 50) | [/nodebalancers/{nodeBalancerId}/configs/{configId}/nodes](https://developers.linode.com/api/v4/#operation/getNodeBalancerConfigNodes)|
|await server.nodebalancers(1).configs(1).nodes.create({} as any) | [/nodebalancers/{nodeBalancerId}/configs/{configId}/nodes](https://developers.linode.com/api/v4/#operation/createNodeBalancerNode)|
|await server.nodebalancers(1).configs(1).nodes(1).get() | [/nodebalancers/{nodeBalancerId}/configs/{configId}/nodes/{nodeId}](https://developers.linode.com/api/v4/#operation/getNodeBalancerNode)|
|await server.nodebalancers(1).configs(1).nodes(1).update({} as NodeBalancerNode) | [/nodebalancers/{nodeBalancerId}/configs/{configId}/nodes/{nodeId}](https://developers.linode.com/api/v4/#operation/updateNodeBalancerNode)|
|await server.nodebalancers(1).configs(1).nodes(1).delete() | [/nodebalancers/{nodeBalancerId}/configs/{configId}/nodes/{nodeId}](https://developers.linode.com/api/v4/#operation/deleteNodeBalancerConfigNode)|
### profile
|Command|Reference|
|---|---|
|await server.profile.get() | [/profile](https://developers.linode.com/api/v4/#operation/getProfile)|
|await server.profile.update({} as Profile) | [/profile](https://developers.linode.com/api/v4/#operation/updateProfile)|
|await server.profile.grants() | [/profile](https://developers.linode.com/api/v4/#operation/getProfileGrants)|
|await server.profile.tfaDisable() | [/profile](https://developers.linode.com/api/v4/#operation/tfaDisable)|
|await server.profile.tfaEnable() | [/profile](https://developers.linode.com/api/v4/#operation/tfaEnable)|
|await server.profile.tfaEnableConfirm({} as any) | [/profile](https://developers.linode.com/api/v4/#operation/tfaConfirm)|
|await server.profile.apps.list() | [/profile/apps](https://developers.linode.com/api/v4/#operation/getProfileApps)|
|await server.profile.apps.list(1) | [/profile/apps](https://developers.linode.com/api/v4/#operation/getProfileApps)|
|await server.profile.apps.list(1, 50) | [/profile/apps](https://developers.linode.com/api/v4/#operation/getProfileApps)|
|await server.profile.apps.list({} as Filter<AuthorizedAppFilter>) | [/profile/apps](https://developers.linode.com/api/v4/#operation/getProfileApps)|
|await server.profile.apps.list(2, {} as Filter<AuthorizedAppFilter>) | [/profile/apps](https://developers.linode.com/api/v4/#operation/getProfileApps)|
|await server.profile.apps.list(2, 5, {} as Filter<AuthorizedAppFilter>) | [/profile/apps](https://developers.linode.com/api/v4/#operation/getProfileApps)|
|await server.profile.apps(1).get() | [/profile/apps/{appId}](https://developers.linode.com/api/v4/#operation/getProfileApp)|
|await server.profile.apps(1).delete() | [/profile/apps/{appId}](https://developers.linode.com/api/v4/#operation/deleteProfileApp)|
|await server.profile.tokens.list() | [/profile/tokens](https://developers.linode.com/api/v4/#operation/getPersonalAccessTokens)|
|await server.profile.tokens.list(1) | [/profile/tokens](https://developers.linode.com/api/v4/#operation/getPersonalAccessTokens)|
|await server.profile.tokens.list(1, 50) | [/profile/tokens](https://developers.linode.com/api/v4/#operation/getPersonalAccessTokens)|
|await server.profile.tokens.list({} as Filter<PersonalAccessTokenFilter>) | [/profile/tokens](https://developers.linode.com/api/v4/#operation/getPersonalAccessTokens)|
|await server.profile.tokens.list(2, {} as Filter<PersonalAccessTokenFilter>) | [/profile/tokens](https://developers.linode.com/api/v4/#operation/getPersonalAccessTokens)|
|await server.profile.tokens.list(2, 5, {} as Filter<PersonalAccessTokenFilter>) | [/profile/tokens](https://developers.linode.com/api/v4/#operation/getPersonalAccessTokens)|
|await server.profile.tokens.create({} as any) | [/profile/tokens](https://developers.linode.com/api/v4/#operation/createPersonalAccessToken)|
|await server.profile.tokens(1).get() | [/profile/tokens/{tokenId}](https://developers.linode.com/api/v4/#operation/getPersonalAccessToken)|
|await server.profile.tokens(1).update({} as PersonalAccessToken) | [/profile/tokens/{tokenId}](https://developers.linode.com/api/v4/#operation/updatePersonalAccessToken)|
|await server.profile.tokens(1).delete() | [/profile/tokens/{tokenId}](https://developers.linode.com/api/v4/#operation/deletePersonalAccessToken)|
|await server.profile.devices.list() | [/profile/devices](https://developers.linode.com/api/v4/#operation/getDevices)|
|await server.profile.devices.list(1) | [/profile/devices](https://developers.linode.com/api/v4/#operation/getDevices)|
|await server.profile.devices.list(1, 50) | [/profile/devices](https://developers.linode.com/api/v4/#operation/getDevices)|
|await server.profile.devices(1).get() | [/profile/devices/{deviceId}](https://developers.linode.com/api/v4/#operation/getTrustedDevice)|
|await server.profile.devices(1).delete() | [/profile/devices/{deviceId}](https://developers.linode.com/api/v4/#operation/revokeTrustedDevice)|
|await server.profile.sshkeys.list() | [/profile/sshkeys](https://developers.linode.com/api/v4/#operation/getSSHKeys)|
|await server.profile.sshkeys.list(1) | [/profile/sshkeys](https://developers.linode.com/api/v4/#operation/getSSHKeys)|
|await server.profile.sshkeys.list(1, 50) | [/profile/sshkeys](https://developers.linode.com/api/v4/#operation/getSSHKeys)|
|await server.profile.sshkeys.create({} as SSHKeyRequest) | [/profile/sshkeys](https://developers.linode.com/api/v4/#operation/addSSHKey)|
|await server.profile.sshkeys(1).get() | [/profile/sshkeys/{sshKeyId}](https://developers.linode.com/api/v4/#operation/getSSHKey)|
|await server.profile.sshkeys(1).update({} as SSHKey) | [/profile/sshkeys/{sshKeyId}](https://developers.linode.com/api/v4/#operation/updateSSHKey)|
|await server.profile.sshkeys(1).delete() | [/profile/sshkeys/{sshKeyId}](https://developers.linode.com/api/v4/#operation/deleteSSHKey)|
### regions
|Command|Reference|
|---|---|
|await server.regions.list() | [/regions](https://developers.linode.com/api/v4/#operation/getRegions)|
|await server.regions.list(1) | [/regions](https://developers.linode.com/api/v4/#operation/getRegions)|
|await server.regions.list(1, 50) | [/regions](https://developers.linode.com/api/v4/#operation/getRegions)|
|await server.regions('regionId').get() | [/regions/{regionId}](https://developers.linode.com/api/v4/#operation/getRegion)|
### support
|Command|Reference|
|---|---|
|await server.support.tickets.list() | [/support/tickets](https://developers.linode.com/api/v4/#operation/getTickets)|
|await server.support.tickets.list(1) | [/support/tickets](https://developers.linode.com/api/v4/#operation/getTickets)|
|await server.support.tickets.list(1, 50) | [/support/tickets](https://developers.linode.com/api/v4/#operation/getTickets)|
|await server.support.tickets.list({} as Filter<SupportTicketFilter>) | [/support/tickets](https://developers.linode.com/api/v4/#operation/getTickets)|
|await server.support.tickets.list(2, {} as Filter<SupportTicketFilter>) | [/support/tickets](https://developers.linode.com/api/v4/#operation/getTickets)|
|await server.support.tickets.list(2, 5, {} as Filter<SupportTicketFilter>) | [/support/tickets](https://developers.linode.com/api/v4/#operation/getTickets)|
|await server.support.tickets.create({} as SupportTicketRequest) | [/support/tickets](https://developers.linode.com/api/v4/#operation/createTicket)|
|await server.support.tickets(1).get() | [/support/tickets/{ticketId}](https://developers.linode.com/api/v4/#operation/getTicket)|
|await server.support.tickets(1).attachments() | [/support/tickets/{ticketId}](https://developers.linode.com/api/v4/#operation/createTicketAttachment)|
|await server.support.tickets(1).close() | [/support/tickets/{ticketId}](https://developers.linode.com/api/v4/#operation/closeTicket)|
|await server.support.tickets(1).replies.list() | [/support/tickets/{ticketId}/replies](https://developers.linode.com/api/v4/#operation/getTicketReplies)|
|await server.support.tickets(1).replies.list(1) | [/support/tickets/{ticketId}/replies](https://developers.linode.com/api/v4/#operation/getTicketReplies)|
|await server.support.tickets(1).replies.list(1, 50) | [/support/tickets/{ticketId}/replies](https://developers.linode.com/api/v4/#operation/getTicketReplies)|
|await server.support.tickets(1).replies.create({} as any) | [/support/tickets/{ticketId}/replies](https://developers.linode.com/api/v4/#operation/createTicketReply)|
### tags
|Command|Reference|
|---|---|
|await server.tags.list() | [/tags](https://developers.linode.com/api/v4/#operation/getTags)|
|await server.tags.list(1) | [/tags](https://developers.linode.com/api/v4/#operation/getTags)|
|await server.tags.list(1, 50) | [/tags](https://developers.linode.com/api/v4/#operation/getTags)|
|await server.tags.create({} as any) | [/tags](https://developers.linode.com/api/v4/#operation/createTag)|
|await server.tags('label').get() | [/tags/{label}](https://developers.linode.com/api/v4/#operation/getTaggedObjects)|
|await server.tags('label').delete() | [/tags/{label}](https://developers.linode.com/api/v4/#operation/deleteTag)|
### volumes
|Command|Reference|
|---|---|
|await server.volumes.list() | [/volumes](https://developers.linode.com/api/v4/#operation/getVolumes)|
|await server.volumes.list(1) | [/volumes](https://developers.linode.com/api/v4/#operation/getVolumes)|
|await server.volumes.list(1, 50) | [/volumes](https://developers.linode.com/api/v4/#operation/getVolumes)|
|await server.volumes.list({} as Filter<VolumeFilter>) | [/volumes](https://developers.linode.com/api/v4/#operation/getVolumes)|
|await server.volumes.list(2, {} as Filter<VolumeFilter>) | [/volumes](https://developers.linode.com/api/v4/#operation/getVolumes)|
|await server.volumes.list(2, 5, {} as Filter<VolumeFilter>) | [/volumes](https://developers.linode.com/api/v4/#operation/getVolumes)|
|await server.volumes.create({} as any) | [/volumes](https://developers.linode.com/api/v4/#operation/createVolume)|
|await server.volumes(1).get() | [/volumes/{volumeId}](https://developers.linode.com/api/v4/#operation/getVolume)|
|await server.volumes(1).update({} as any) | [/volumes/{volumeId}](https://developers.linode.com/api/v4/#operation/updateVolume)|
|await server.volumes(1).delete() | [/volumes/{volumeId}](https://developers.linode.com/api/v4/#operation/deleteVolume)|
|await server.volumes(1).attach({} as any) | [/volumes/{volumeId}](https://developers.linode.com/api/v4/#operation/attachVolume)|
|await server.volumes(1).clone({} as any) | [/volumes/{volumeId}](https://developers.linode.com/api/v4/#operation/cloneVolume)|
|await server.volumes(1).detach() | [/volumes/{volumeId}](https://developers.linode.com/api/v4/#operation/detachVolume)|
|await server.volumes(1).resize({} as any) | [/volumes/{volumeId}](https://developers.linode.com/api/v4/#operation/resizeVolume)|

