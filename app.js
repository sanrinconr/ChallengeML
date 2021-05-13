const isMutant = require("./services/ADNService")
var fs = require('fs');
let data  = fs.readFileSync('./test/dataTesting/random500.data').toString().split("\n");

var start = Date.now();
let result = isMutant(data)
var end = Date.now();

console.log(result)
console.log(`Tiempo para ${data.length}x${data[0].length}: ${end-start}ms`)
