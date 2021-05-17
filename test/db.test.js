const assert = require('assert');
const Supertest = require('supertest');
const generateRandomADN = require('../utils/generateRandomADN');
const supertest = Supertest("http://localhost:5001/challengeml-8e9b9/us-central1");

describe(`Elementos multiples`, function () {
	it('10 matrices random', async () => {
		let salidas = []
		try {
			for (let i = 0; i < 10; i++) {
				let random = JSON.stringify({
					"dna": generateRandomADN(8)
				})
				let prom = await supertest
					.post('/mutant/')
					.send(random)
				salidas.push(prom)
			}
			return Promise.all(salidas).then(() => {
					return true
				})
				.catch(() => {
					assert.fail(err.message)
				})
		} catch (err) {
			assert.fail(err.message)
		}
	}).timeout(20000);
})