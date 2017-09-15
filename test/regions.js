
import { app, assert } from './instance';

describe('Regions', function () {
	it('/', async function () {
		assert.equal(await app.regions.list(), '/v4/regions#get');
		assert.equal(await app.regions(1).get(), '/v4/regions/1#get');
	});
});
