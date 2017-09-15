
import { app, assert } from './instance';

describe('Networking', function () {
	it('IPv4', async function () {
		assert.equal(await app.networking.ipAssign(), '/v4/networking/ip-assign#post');
		assert.equal(await app.networking.ipv4.list(), '/v4/networking/ipv4#get');
		assert.equal(await app.networking.ipv4.create({}), '/v4/networking/ipv4#post');
		assert.equal(await app.networking.ipv4(1).get(), '/v4/networking/ipv4/1#get');
		assert.equal(await app.networking.ipv4(1).update({}), '/v4/networking/ipv4/1#put');
		assert.equal(await app.networking.ipv4(1).delete(), '/v4/networking/ipv4/1#del');
	});
	it('IPv6', async function () {
		assert.equal(await app.networking.ipv6(1).get(), '/v4/networking/ipv6/1#get');
		assert.equal(await app.networking.ipv6(1).update({}), '/v4/networking/ipv6/1#put');
	});
});
