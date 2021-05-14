const functions = require("firebase-functions");
const isMutant = require("./services/ADNService");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.mutant = functions.https.onRequest((request, response) => {
	//Se parsea de esta manera por si se envia un header con contenido text/plain
	let data = JSON.parse(request.rawBody.toString())

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
});