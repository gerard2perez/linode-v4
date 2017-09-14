import Linode from '../src';
import * as assert from 'assert';

const app = new Linode('abc_token');

describe('Profie', function () {
	it('Profile', function () {
		assert.ok(app.profile.get, 'get /profile');
		assert.ok(app.profile.grants, 'get /profile/grants');
		assert.ok(app.profile.password, 'post /profile/grants');

		assert.ok(app.profile.grants());
		assert.ok(app.profile.password({}));
	});
	it('Two-Factor Authentication', function () {
		assert.ok(app.profile.tfaDisable, 'post /profile/tfa-disable');
		assert.ok(app.profile.tfaEnable, 'post /profile/tfa-disable');
		assert.ok(app.profile.tfaEnableConfirm, 'post /profile/tfa-enable-confirm');
	});
});
