const isMutant = require("./isMutant")
const generateData = require("./testing/generateData")

let data = [
    "ATGCGA",
    "CAGTGC",
    "TTATGT",
    "AGAAGG",
    "CCCCTA",
    "TCACTG"
]
let cantElementos = 10000
var startGenerated = Date.now()
let generated  = generateData(cantElementos,false)
var endGenerated = Date.now()
console.log(`Tiempo usado para generar: ${endGenerated - startGenerated}ms`)
var start = Date.now();
let result = isMutant(generated)
var end = Date.now();

console.log(result)
console.log(`Tiempo para ${cantElementos}x${cantElementos}: ${end-start}ms`)