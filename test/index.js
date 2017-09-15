import Linode from '../src';
import * as assert from 'assert';
import './linodes';
import './domains';
import './nodebalancers';
import './networking';
import './regions';
import './support';
import './account';
import './profile';

if (!process.env.DOCS) {
	describe('Real API request', function () {
		it('Public API', async function () {
			const app = new Linode('');
			assert.ok(await app.linode.distributions.list());
			try {
				await app.linode.distributions.list('all');
				assert.ok(false);
			} catch (ex) {
				assert.ok(true);
			}
			try {
				await app.linode.instances(1).update();
				assert.ok(false);
			} catch (ex) {
				assert.ok(true);
			}
			assert.ok(await app.linode.distributions('linode/ubuntu14.10').get());
			assert.ok(await app.domains(1).records(1).get());
		});
	});
}
