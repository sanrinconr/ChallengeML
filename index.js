const functions = require("firebase-functions");
const isMutant = require("./services/ADNService");
const admin = require('firebase-admin');
admin.initializeApp();
const MD5 = require("crypto-js/md5");
const { getADN } = require("./services/db/getADN");
const { saveADN } = require("./services/db/saveADN");
const { incrementCounter, getCounts } = require("./services/db/counter");

exports.mutant = functions.https.onRequest(async (request, response) => {
	try{
		//Se parsea la data de esta manera por si se envia un header con contenido text/plain
		let data = JSON.parse(request.rawBody.toString())
		//Se tiene encuenta la limitacion de google cloud functions de 10MB
		if(data.dna.length >= 3162) return response.status(413).send("Tamaño maximo excedido "+ (data.dna.length))
		let hashADN = MD5(data.dna.toString()).toString()

		let doc = await getADN(hashADN)
		//Si ya existe ese ADN en la DB
		if(doc){
			if(doc.mutant) return response.status(200).send(); 
			else return response.status(403).send()
		}
		let mutant = isMutant(data.dna)
		await saveADN(hashADN, mutant)
		await incrementCounter(mutant)
		if (mutant) return response.status(200).send();
		else return response.status(403).send()
	}catch(err){
		console.log(err.message)
		return response.status(400).send(err.message)
	}
});

exports.stats = functions.https.onRequest(async(req,res)=>{
	let counts = await getCounts()
	let out = {
		count_mutant_dna: counts.countMutant,
		count_human_dna: counts.countHuman,
		ratio: Math.round(Number(counts.countMutant/counts.countHuman) * 100) / 100
	}
	return res.send(out)
})

