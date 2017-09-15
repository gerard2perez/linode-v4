import * as assert from 'assert';
import app from './instance';

describe('Regions', function () {
	it('/', async function () {
		assert.equal(await app.regions.list(), 'get /v4/regions');
		assert.equal(await app.regions(1).get(), 'get /v4/regions/1');
	});
});
