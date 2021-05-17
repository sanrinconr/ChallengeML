function _letrasValidas(...args) {
	let palabras = {
		"A": true,
		"T": true,
		"C": true,
		"G": true,
	}
	let valido = true
	for (palabra of args) {
		if (palabra !== null && !palabras[palabra]) {
			valido = false
			break
		}
	}
	return valido
}
/**
 * @param  {} dataStrings arreglo de strings de longitud n, 
 * a su vez cada string debe tener una longitud n solo pudiendo contener las letras A,T,C,G
 * Ejemplo: ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
 */
function isMutant(dataStrings) {
	//Debe ser n*n
	if (dataStrings.length !== dataStrings[0].length) throw new Error({name:"Matriz no cuadrada", message:`La matriz es ${dataStrings.length}x${dataStrings[0].length} mas no NxN como es requerido`})
	const n = dataStrings.length
	for (let i = 0; i < n; i++) {
		let memory = ["","","","","",""] //6 rectas a validar en cada iteracion
		for (j = 0; j < n; j++) {
			//OBTENCION ELEMENTO DE CADA RECTA
			let actualHor = dataStrings[i][j]
			let actualVer = dataStrings[j][i]
			let actualIDinf = j + i < n ? dataStrings[j + i][j] : null
			let actualIDsup = j - i >= 0 ? dataStrings[j - i][j] : null
			let actualDIinf = n - 1 - j + i < n ? dataStrings[j][n - 1 - j + i] : null //n-1, se quiere empezar desde el otro extremo, -j para hacer la diagonal, +i para controlar que tan arriba o abajo va la recta
			let actualDIsup = n - 1 - j - i >= 0 ? dataStrings[j][n - 1 - j - i] : null

			if (!_letrasValidas(actualHor, actualVer, actualIDinf, actualDIinf)) throw new Error({name:"Caracter invalido", message:`Letra invalida detectada (${dataStrings[i][j]}) en la fila ${i} ${dataStrings[i]}`})

			//COMPROBACIONES MUTANTE O NO (las 6 rectas)
			for (let k = 0; k < memory.length; k++) {
                //Si el memorizador esta vacio se ingresa la actual letra
				if (memory[k] === "") {
					if (k == 0) memory[k] = actualHor
					else if (k == 1) memory[k] = actualVer
					else if (k == 2 && actualIDinf) memory[k] = actualIDinf
					else if (k == 3 && actualIDsup) memory[k] = actualIDsup
					else if (k == 4 && actualDIinf) memory[k] = actualDIinf
					else if (k == 5 && actualDIsup) memory[k] = actualDIsup
				} 
                //Sino se compara si la letra actual es igual a las letras que existen en el memorizador
                else {
					switch (k) {
					case 0:
						//Si la ultima letra del memorizador es igual a la actual se agrega (si llega a 4 pues sera mutante)
						if (memory[k].slice(-1)[0] === actualHor) memory[k] += actualHor
						//Sino se descarta, y el memorizador se limpia y se agrega la actual
						else memory[k] = actualHor
						break
					case 1:
						if (memory[k].slice(-1)[0] === actualVer) memory[k] += actualVer
						else memory[k] = actualVer
						break
					case 2:
                        //Si se encontro el elemento (es posible que este empezando y sea null)
						if(actualIDinf){
                            if (memory[k].slice(-1)[0] === actualIDinf) memory[k] += actualIDinf
                            else memory[k] = actualIDinf
                        }
						break
					case 3:
                        if(actualIDsup){
                            if (memory[k].slice(-1)[0] === actualIDsup) memory[k] += actualIDsup
                            else memory[k] = actualIDsup
                        }
						break
					case 4:
                        if(actualDIinf){
                            if (memory[k].slice(-1)[0] === actualDIinf) memory[k] += actualDIinf
                            else memory[k] = actualDIinf
                        }
						break
					case 5:
                        if(actualDIsup){
                            if (memory[k].slice(-1)[0] === actualDIsup) memory[k] += actualDIsup
                            else memory[k] = actualDIsup
                        }
						break
					}
                    //Si algun memorizador llega a ser de longitud 4, mutante encontrado
                    if(memory[k].length === 4){
						//Datos informativos, posicion del adn mutante
                        // if (k == 0) console.log(`HOR Fila: ${i+1} columna: ${j+1} = ${dataStrings[i][j]}`)
                        // else if (k == 1) console.log(`VER Fila: ${j+1} columna: ${i+1} = ${dataStrings[j][i]}`)
                        // else if (k == 2 && actualIDinf) console.log(`ID Fila: ${j + i+1} columna: ${j+1} = ${dataStrings[j + i][j]}`)
                        // else if (k == 3 && actualIDsup) console.log(`ID Fila: ${j - i+1} columna: ${j+1} = ${dataStrings[j - i][j]}`)
                        // else if (k == 4 && actualDIinf) console.log(`DI Fila: ${j+1} columna: ${n - 1 - j + i+1} = ${dataStrings[j][n - 1 - j + i]}`)
                        // else if (k == 5 && actualDIsup) console.log(`DI Fila: ${j+1} columna: ${n - 1 - j - i+1} = ${dataStrings[j][n - 1 - j - i]}`)
                        return true
                    }
				}
			}
		}
	}
	return false
}

module.exports = isMutant