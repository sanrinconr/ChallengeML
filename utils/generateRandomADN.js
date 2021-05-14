/**
 * Generacion de un ADN de nxn sin ninguna repeticion (un adn humano)
 * @param  {} n Tamano de la matriz
 */
function generateRandomADN(n) {
	let letrasA = ["A", "T", "C", "G"]
	let salida = []
	for (let i = 0; i < n; i++) {
		let linea1Out = ""
		while (linea1Out.length < n) {
			let letra = letrasA[Math.floor(Math.random() * letrasA.length)];
			linea1Out += letra
		}
		salida.push(linea1Out)
	}
	return salida
}
module.exports = generateRandomADN