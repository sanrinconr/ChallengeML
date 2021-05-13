function generateData(n, conRepeticiones) {
	let linea1Out = []
	let linea2Out = []
	let letrasA = ["A", "T", "C", "G"]
	let letrasB = ["G", "C", "T", "A"]

	let contador = 0
	while (linea1Out.length < n) {
		linea1Out += letrasA[contador]
		linea2Out += letrasB[contador]
		if (contador + 1 < letrasA.length) {
			contador++
		}else{
            contador =0
        }
	}
    let salida = []
	for (let i = 0; i < n; i++) {
		if (!conRepeticiones) {
            if(i%2 === 0){
                salida.push(linea1Out)
            }else{
                salida.push(linea2Out)
            }
		}
	}
    return salida
}

module.exports = generateData