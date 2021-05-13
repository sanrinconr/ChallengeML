const isMutant = require("./services/ADNService")
const generateADN = require("./utils/generateADN")

let data = [
    "ATGCGA",
    "CAGTGC",
    "TTATGT",
    "AGAAGG",
    "CCCCTA",
    "TCACTG"
]
let cantElementos = 5
var startGenerated = Date.now()
let generated  = generateADN(cantElementos,false)
var endGenerated = Date.now()

var fs = require('fs');
// fs.writeFileSync("./test.data", generated.join('\n'));

var array = fs.readFileSync('./test.data').toString().split("\n");
for(i in array) {
    console.log(array[i]);
}
// console.log(`Tiempo usado para generar: ${endGenerated - startGenerated}ms`)
// var start = Date.now();
// let result = isMutant(generated)
// var end = Date.now();

// console.log(result)
// console.log(`Tiempo para ${cantElementos}x${cantElementos}: ${end-start}ms`)