let generateADN = require("./generateADN")
let fs = require('fs');

let data100 = generateADN(100)
let data1000 = generateADN(1000)
let data5000 = generateADN(5000)
fs.writeFileSync("./data100.data", data100.join('\n'));
fs.writeFileSync("./data1000.data", data1000.join('\n'));
fs.writeFileSync("./data5000.data", data5000.join('\n'));

// var array = fs.readFileSync('./test.data').toString().split("\n");
