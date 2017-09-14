import Linode from '../src';
import * as assert from 'assert';

const app = new Linode('abc_token');

describe('Support', function () {
	it('tikets', async function () {
		assert.ok(app.support.tickets.list);
		assert.ok(app.support.tickets.create);
		assert.ok(app.support.tickets(1).get);
		assert.ok(app.support.tickets(1).update);
		assert.ok(app.support.tickets(1).delete);

		assert.ok(app.support.tickets(1).attachments);
		assert.ok(app.support.tickets(1).replies);
	});
});
