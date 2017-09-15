
import { app, assert } from './instance';

describe('Support', function () {
	it('tikets', async function () {
		assert.equal(await app.support.tickets.list(), '/v4/support/tickets#get');
		assert.equal(await app.support.tickets.create({}), '/v4/support/tickets#post');
		assert.equal(await app.support.tickets(1).get(), '/v4/support/tickets/1#get');

		assert.equal(await app.support.tickets(1).attachments(), '/v4/support/tickets/1/attachments#post');
		assert.equal(await app.support.tickets(1).replies(), '/v4/support/tickets/1/replies#post');
	});
});
