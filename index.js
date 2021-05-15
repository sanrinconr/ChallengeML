const functions = require("firebase-functions");
const isMutant = require("./services/ADNService");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.mutant = functions.https.onRequest((request, response) => {
	try{
		//Se parsea de esta manera por si se envia un header con contenido text/plain
		let data = JSON.parse(request.rawBody.toString())

		//Se tiene encuenta la limitacion de google cloud functions de 10MB
		if(data.dna.length >= 3162){
			return response.status(413).send("Tamaño maximo excedido "+ (data.dna.length))
		}
		//Medicion de tiempos
		let start = Date.now();
		let mutant = isMutant(data.dna)
		let end = Date.now();
	
		//Objecto salida ademas del codigo http
		let out ={
			time: end-start,
		}

		if (mutant) {
			return response.status(200).send(out);
		} else {
			return response.status(403).send(out)
		}
	}catch(err){
		return response.status(400).send("Datos invalidos")
	}
});