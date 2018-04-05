import { app, assert } from './instance';

describe('Volumes', function () {
	it('/', async function () {
		assert.equal(await app.volumes.list(), '/v4/volumes#get');
		assert.equal(await app.volumes.create({}), '/v4/volumes#post');
		assert.equal(await app.volumes(1).get(), '/v4/volumes/1#get');
		assert.equal(await app.volumes(1).update({}), '/v4/volumes/1#put');
		assert.equal(await app.volumes(1).delete(), '/v4/volumes/1#del');

		assert.equal(await app.volumes(1).attach({}), '/v4/volumes/1/attach#post%data');
		assert.equal(await app.volumes(1).clone({}), '/v4/volumes/1/clone#post%data');
		assert.equal(await app.volumes(1).detach(), '/v4/volumes/1/detach#post');
		assert.equal(await app.volumes(1).resize({}), '/v4/volumes/1/resize#post%data');
	});
});
