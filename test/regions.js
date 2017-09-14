import Linode from '../src';
import * as assert from 'assert';

const app = new Linode('abc_token');

describe('Regions', function () {
	it('/', async function () {
		assert.ok(app.regions.list);
		assert.ok(app.regions(1).get);
	});
});
