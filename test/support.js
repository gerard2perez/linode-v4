import * as assert from 'assert';
import app from './instance';

describe('Support', function () {
	it('tikets', async function () {
		assert.equal(await app.support.tickets.list(), 'get /v4/support/tickets');
		assert.equal(await app.support.tickets.create({}), 'post /v4/support/tickets');
		assert.equal(await app.support.tickets(1).get(), 'get /v4/support/tickets/1');
		assert.equal(await app.support.tickets(1).update({}), 'put /v4/support/tickets/1');
		assert.equal(await app.support.tickets(1).delete(), 'del /v4/support/tickets/1');

		assert.equal(await app.support.tickets(1).attachments(), 'post /v4/support/tickets/1/attachments');
		assert.equal(await app.support.tickets(1).replies(), 'post /v4/support/tickets/1/replies');
	});
});
