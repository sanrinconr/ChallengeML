var assert = require("chai").assert;
var isMutant = require("../functions/services/ADNService");
let fs = require('fs');

let human8 = fs.readFileSync('./test/dataTesting/human/data8.data').toString().split("\n");
let human100 = fs.readFileSync('./test/dataTesting/human/data100.data').toString().split("\n");
let human1000 = fs.readFileSync('./test/dataTesting/human/data1000.data').toString().split("\n");

let mutant8 = fs.readFileSync('./test/dataTesting/mutants/data8.data').toString().split("\n");
let mutant100 = fs.readFileSync('./test/dataTesting/mutants/data100.data').toString().split("\n");
let mutant1000 = fs.readFileSync('./test/dataTesting/mutants/data1000.data').toString().split("\n");

describe("Validar ADN", function () {
	describe("Posiciones: ", function () {
		it("Horizontal ", function () {
			let data = ["ATCGATCG",
						"GCTAGCTA",
						"ATCGATCG",
						"GCTAGCTA",
						"ATCGATCG",
						"GCTAGCTA",
						"ATAAAACG",
						"GCTAAAAA"]
			assert.equal(isMutant(data), true)
		});
		it("Vertical ", function () {
			let data = ["ATCGATCG",
						"GCTAGCTA",
						"ATCGATCG",
						"ACTAGCTA",
						"ATCGATCG",
						"ACTAGCTA",
						"ATCGATCG",
						"GCTAGCTA"]
			assert.equal(isMutant(data), true)
		});
		it("Vertical ultima columna ", function () {
			let data = ["ATCGATCG",
						"GCTAGCTA",
						"ATCGATCG",
						"ACTAGCTG",
						"ATCGATCA",
						"ACTAGCTA",
						"ATCGATCA",
						"GCTAGCTA"]
			assert.equal(isMutant(data), true)
		});
		it("Diagonal 0,0 - 1,1 superior ", function () {
			let data = ["ATCGATCG",
						"GCTAGATA",
						"ATCGATAG",
						"GCTAGCTA",
						"ATCGATCG",
						"GCTAGCTA",
						"ATCGATCG",
						"GCTAGCTA"]
			assert.equal(isMutant(data), true)
		});
		it("Diagonal 0,0 - 1,1 inferior ", function () {
			let data = ["ATCGATCG",
						"GCTAGCTA",
						"ATCGATCG",
						"GCTAGCTA",
						"ATCGATCG",
						"GATAGCTA",
						"ATAGATCG",
						"GCTAGCTA"]
			assert.equal(isMutant(data), true)
		});
		it("Diagonal paralela inferior ", function () {
			let data = ["ATCGATCG",
						"GCTAGCTA",
						"ATCGATCG",
						"GCTAGCTA",
						"ATCGATCA",
						"GCTAGCAA",
						"ATCGAACG",
						"GCTAACTA"]
			assert.equal(isMutant(data), true)
		});
		it("Diagonal paralela superior ", function () {
			let data = ["ATCAATCG",
						"GCAAGCTA",
						"AACGATCG",
						"ACTAGCTA",
						"ATCGATCA",
						"GCTAGCAA",
						"ATCGAACG",
						"GCTAACTA"]
			assert.equal(isMutant(data), true)
		});
		let data = ["ATCGATCG",
					"GCTAGCTA",
					"ATCGATCG",
					"GCTAGCTA",
					"ATCGATCG",
					"GCTAGCTA",
					"ATCGATCG",
					"GCTAGCTA"]
	});
	describe("Lotes",function(){
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

})