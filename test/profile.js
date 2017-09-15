import * as assert from 'assert';
import app from './instance';

describe('Profie', function () {
	it('Profile', async function () {
		assert.equal(await app.profile.get(), 'get /v4/profile');
		assert.equal(await app.profile.grants(), 'get /v4/profile/grants');
		assert.equal(await app.profile.password(), 'post /v4/profile/password');
	});
	it('Two-Factor Authentication', async function () {
		assert.equal(await app.profile.tfaDisable(), 'post /v4/profile/tfa-disable');
		assert.equal(await app.profile.tfaEnable(), 'post /v4/profile/tfa-enable');
		assert.equal(await app.profile.tfaEnableConfirm(), 'post /v4/profile/tfa-enable-confirm');
	});
});
