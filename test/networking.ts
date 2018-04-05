
import { app, assert } from './instance';

describe('Networking', function () {
	it('IPs', async function () {
		assert.equal(await app.networking.ips.list(), '/v4/networking/ips#get');
		assert.equal(await app.networking.ips.create({}), '/v4/networking/ips#post');
		assert.equal(await app.networking.ips(1).get(), '/v4/networking/ips/1#get');
		assert.equal(await app.networking.ips(1).update({}), '/v4/networking/ips/1#put');
		assert.equal(await app.networking.ips(1).delete(), '/v4/networking/ips/1#del');
	});
	it('IPv4', async function () {

		assert.equal(await app.networking.ipv4.assign({}), '/v4/networking/ipv4/assign#post%data');
		assert.equal(await app.networking.ipv4.share({}), '/v4/networking/ipv4/share#post%data');

	});
	it('IPv6', async function () {
		assert.equal(await app.networking.ipv6.pools(), '/v4/networking/ipv6/pools#get');
		assert.equal(await app.networking.ipv6.ranges(), '/v4/networking/ipv6/ranges#get');
	});
});
