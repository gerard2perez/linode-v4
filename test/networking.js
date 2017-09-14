import Linode from '../src';
import * as assert from 'assert';

const app = new Linode('abc_token');

describe('Networking', function () {
	it('IPv4', async function () {
		assert.ok(app.networking.ipAssign);
		assert.ok(app.networking.ipv4.list);
		assert.ok(app.networking.ipv4.create);
		assert.ok(app.networking.ipv4(1).get);
		assert.ok(app.networking.ipv4(1).update);
		assert.ok(app.networking.ipv4(1).delete);
	});
	it('IPv6', async function () {
		assert.ok(app.networking.ipv6(1).get);
		assert.ok(app.networking.ipv6(1).update);
	});
});
