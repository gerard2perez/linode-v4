import * as assert from 'assert';
import app from './instance';

describe('Networking', function () {
	it('IPv4', async function () {
		assert.equal(await app.networking.ipAssign(), 'post /v4/networking/ip-assign');
		assert.equal(await app.networking.ipv4.list(), 'get /v4/networking/ipv4');
		assert.equal(await app.networking.ipv4.create({}), 'post /v4/networking/ipv4');
		assert.equal(await app.networking.ipv4(1).get(), 'get /v4/networking/ipv4/1');
		assert.equal(await app.networking.ipv4(1).update({}), 'put /v4/networking/ipv4/1');
		assert.equal(await app.networking.ipv4(1).delete(), 'del /v4/networking/ipv4/1');
	});
	it('IPv6', async function () {
		assert.equal(await app.networking.ipv6(1).get(), 'get /v4/networking/ipv6/1');
		assert.equal(await app.networking.ipv6(1).update({}), 'put /v4/networking/ipv6/1');
	});
});
