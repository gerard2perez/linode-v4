
import { app, assert } from './instance';

describe('Profie', function () {
	it('Profile', async function () {
		assert.equal(await app.profile.get(), '/v4/profile#get');
		assert.equal(await app.profile.update({}), '/v4/profile#put');
		assert.equal(await app.profile.grants(), '/v4/profile/grants#get');
		assert.equal(await app.profile.password(), '/v4/profile/password#post');
	});
	it('Two-Factor Authentication', async function () {
		assert.equal(await app.profile.tfaDisable(), '/v4/profile/tfa-disable#post');
		assert.equal(await app.profile.tfaEnable(), '/v4/profile/tfa-enable#post');
		assert.equal(await app.profile.tfaEnableConfirm(), '/v4/profile/tfa-enable-confirm#post');
	});
});
