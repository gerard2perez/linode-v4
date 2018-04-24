import { suite, test, slow, timeout } from "mocha-typescript";
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
import './image';
import './volumes';
import './managed';
import 'chai/register-should';
import { api_d_ts } from "./instance";
import { appendFileSync, writeFileSync, readFileSync } from "fs";
import { ENGINE_METHOD_CIPHERS } from "constants";

import * as i from 'i';
import spec from "../src/spec";
const inflect = new i();
inflect.inflections.singular('ips', 'ips');


const server = new Linode('sdasd');
	@suite ("Real API Request")
	class Suite {
	    @test("Wrong Request") async t1() {
			let distros = await server.images('abc').get();
			distros.should.exist;
			distros.should.have.property('errors');
			distros.errors[0].should.be.deep.equal({ reason: 'Not found' });
		}
		@test("Request missing parameters") async t2() {
			try {
				await server.images(1).update();;
				assert.ok(false);
			} catch (e) {
				e.message.should.be.equal('this function requires some arguments. Check: https://developers.linode.com/v4/reference/endpoints/images/1#put');
			}
		}
		@test("Request more parameters") async t3() {
			try {
				console.log(await server.images(0).get(1));
				assert.ok(false);
			} catch (e) {
				e.message.should.be.equal('this function cannot have arguments. Check: https://developers.linode.com/v4/reference/endpoints/images/0#get');
			}
		}
		@test("Images") async t4() {
			let images = await server.images.list();
			// console.log(images.data);
			images.should.exist;
			images.should.have.property('results');
			images.should.have.property('data');

			let badimage = await server.images(1).update({});
			badimage.should.exist;
			badimage.should.have.property('errors');
			badimage.errors[0].should.be.deep.equal({ reason: 'Invalid OAuth Token' });
		}
		@test("Pagination API") async t5 () {
			// "label": "Ubuntu 17.10"
			assert.equal((await server.images.list(1)).page, 1);
			assert.equal((await server.images.list(2)).page, 2);
			try {
				console.log(await server.images.list('1'));
				assert.ok(false);
			} catch (e) {
				e.message.should.be.equal('Pagination value must be a number. Check: https://developers.linode.com/v4/reference/endpoints/images#get');
			}
		}
		@test("Filtering API") async t6 () {
			let images = await server.images.list({"vendor": "Debian"});
			assert.equal(images.data.filter(i=>i.vendor !== 'Debiam').length, images.results);
			let ImagesResponse = await server.images.list(2, {"vendor": "Debian"});
			assert.equal(ImagesResponse.results, 3);
			assert.equal(ImagesResponse.page, 2);
			assert.equal(ImagesResponse.data.length, 0);
		}
	}
