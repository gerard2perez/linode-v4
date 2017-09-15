import Linode from '../src';
const app = new Linode('abc_token', (client, method, path, hasparams, data, resolve) => {
	if (!hasparams && data) {
		resolve('This method cannot have parameters');
	}
	resolve(`${method} ${path}`);
});

export default app;
