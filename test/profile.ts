
import { app, assert } from './instance';

describe('Profile', function () {
	it('Authorized Applications', async function () {
		assert.equal(await app.profile.apps.list(), '/v4/profile/apps#get');
		assert.equal(await app.profile.apps(1).get(), '/v4/profile/apps/1#get');
		assert.equal(await app.profile.apps(1).delete(), '/v4/profile/apps/1#del');
	});
	it('Profile', async function () {
		assert.equal(await app.profile.get(), '/v4/profile#get');
		assert.equal(await app.profile.update({}), '/v4/profile#put%data');
		assert.equal(await app.profile.grants(), '/v4/profile/grants#get');
		assert.equal(await app.profile.password(), '/v4/profile/password#post');
	});
	it('Tokens', async function () {
		assert.equal(await app.profile.tokens.list(), '/v4/profile/tokens#get');
		assert.equal(await app.profile.tokens.create({}), '/v4/profile/tokens#post');
		assert.equal(await app.profile.tokens(1).get(), '/v4/profile/tokens/1#get');
		assert.equal(await app.profile.tokens(1).update({}), '/v4/profile/tokens/1#put');
		assert.equal(await app.profile.tokens(1).delete(), '/v4/profile/tokens/1#del');
	});
	it('Two-Factor Authentication', async function () {
		assert.equal(await app.profile.tfaDisable(), '/v4/profile/tfa-disable#post');
		assert.equal(await app.profile.tfaEnable(), '/v4/profile/tfa-enable#post');
		assert.equal(await app.profile.tfaEnableConfirm(), '/v4/profile/tfa-enable-confirm#post');
	});
	it('Whitelist', async function () {
		assert.equal(await app.profile.whitelist.list(), '/v4/profile/whitelist#get');
		assert.equal(await app.profile.whitelist.create({}), '/v4/profile/whitelist#post');
		assert.equal(await app.profile.whitelist(1).get(), '/v4/profile/whitelist/1#get');
		assert.equal(await app.profile.whitelist(1).delete(), '/v4/profile/whitelist/1#del');
	});
});
