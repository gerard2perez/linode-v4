import { app, assert } from './instance';

describe('Images', function () {
	it('images', async function () {
		assert.equal(await app.images.list(), '/v4/images#get');
		assert.equal(await app.images.create({}), '/v4/images#post');
		assert.equal(await app.images(1).get(), '/v4/images/1#get');
		assert.equal(await app.images(1).update({}), '/v4/images/1#put');
		assert.equal(await app.images(1).delete(), '/v4/images/1#del');
	});
});
