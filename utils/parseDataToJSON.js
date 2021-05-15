var fs = require('fs');
/**
 * Se realiza la conversion de los datos brutos generados (archivos .data)
 * a un JSON con el formato esperado por la API.
 * 
 * El resultado es guardado en la ruta /build/
 * 
 * @param  {} path ruta de ubicacion del archivo a covertir
 */
function parseDataJson(path){
    let data  = fs.readFileSync(path).toString().split("\n");
    let out = {
        "dna":data
    }
    let route = "../build/generatedData"

    fs.mkdir(route, { recursive: true }, (err) => {
        if (err) throw err;
      });
    fs.writeFileSync(`${route}/test.json`, JSON.stringify(out));
}

parseDataJson('../test/dataTesting/human/data1000.data')