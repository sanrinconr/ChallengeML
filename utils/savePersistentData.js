//Generacion de matrices de ADN con n de 8,100,1000 y 5000

//Se generan matrices con adn HUMANO y se guardan en la carpeta build/, el proposito de esto es luego modificar esta data
//y usarla para testing

//El archivo random500.data hace referencia a una matriz aleatoria de 500x500
//¿Proposito de esto?, si se quiere hacer testings manuales con una matriz grande y cambiante (En la consola se arroja la fila y columna del adn mutante para verificar)

let generateADN = require("./generateADN")
let generateRandomADN = require("./generateRandomADN")
let fs = require('fs');

let data8 = generateADN(8)
let data100 = generateADN(100)
let data1000 = generateADN(1000)
let data5000 = generateADN(5000)
let random500 = generateRandomADN(500)
let route = "./build/generatedData"
fs.mkdir(route, { recursive: true }, (err) => {
    if (err) throw err;
    fs.writeFileSync(`${route}/data8.data`, data8.join('\n'));
    fs.writeFileSync(`${route}/data100.data`, data100.join('\n'));
    fs.writeFileSync(`${route}/data1000.data`, data1000.join('\n'));
    fs.writeFileSync(`${route}/data5000.data`, data5000.join('\n'));
    fs.writeFileSync(`${route}/random500.data`, random500.join('\n'));

    fs.writeFileSync(`${route}/data8.json`, JSON.stringify({"dna":data8}));
    fs.writeFileSync(`${route}/data100.json`, JSON.stringify({"dna":data100}));
    fs.writeFileSync(`${route}/data1000.json`, JSON.stringify({"dna":data1000}));
    fs.writeFileSync(`${route}/data5000.json`, JSON.stringify({"dna":data5000}));
    fs.writeFileSync(`${route}/random500.json`, JSON.stringify({"dna":random500}));

    console.log("Matrices generadas en: build/generatedData")
});
// var array = fs.readFileSync('./test.data').toString().split("\n");
