var assert = require("chai").assert;
var isMutant = require("../services/ADNService");
let fs = require('fs');

let human8 = fs.readFileSync('./test/dataTesting/human/data8.data').toString().split("\n");
let human100 = fs.readFileSync('./test/dataTesting/human/data100.data').toString().split("\n");
let human1000 = fs.readFileSync('./test/dataTesting/human/data1000.data').toString().split("\n");

let mutant8 = fs.readFileSync('./test/dataTesting/mutants/data8.data').toString().split("\n");
let mutant100 = fs.readFileSync('./test/dataTesting/mutants/data100.data').toString().split("\n");
let mutant1000 = fs.readFileSync('./test/dataTesting/mutants/data1000.data').toString().split("\n");

describe("Validar ADN", function () {
			describe("ADN Humano: ", function () {
				it("8x8 ", function () {
					assert.equal(isMutant(human8), false)
				});
				it("100x100: ", function () {
					assert.equal(isMutant(human100), false)
				});
				it("1000x1000 ", function () {
					assert.equal(isMutant(human1000), false)
				});
			});
			describe("ADN Mutante: ", function () {
				it("8x8 ", function () {
					assert.equal(isMutant(mutant8), true)
				});
				it("100x100: ", function () {
					assert.equal(isMutant(mutant100), true)
				});
				it("1000x1000 ", function () {
					assert.equal(isMutant(mutant1000), true)
				});
			});
        })