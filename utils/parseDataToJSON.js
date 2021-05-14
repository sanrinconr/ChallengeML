var fs = require('fs');

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