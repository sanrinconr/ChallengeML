const admin = require('firebase-admin');
const db = admin.firestore()
const FieldValue = require('firebase-admin').firestore.FieldValue;

function incrementCounter(isMutant) {
	const numShards = 100;
	const shardId = Math.floor(Math.random() * numShards);
	if (isMutant) {
		const shardRef = db.collection('countMutant').doc(shardId.toString());
		return shardRef.set({
			count: FieldValue.increment(1)
		}, {
			merge: true
		});
	} else {
		const shardRef = db.collection('countHuman').doc(shardId.toString());
		return shardRef.set({
			count: FieldValue.increment(1)
		}, {
			merge: true
		});
	}
}

async function getCounts() {
	const queryMutantSnapshot = await db.collection('countMutant').get();
    const queryHumanSnapshot = await db.collection('countHuman').get();
    const humanDoc = queryHumanSnapshot.docs;
    const mutantDoc = queryMutantSnapshot.docs;

	let countMutant = 0;
    let countHuman = 0;

	for (const doc of mutantDoc) {
		countMutant += doc.get('count');
	}
    for (const doc of humanDoc) {
		countHuman += doc.get('count');
	}
	return {countHuman, countMutant};
}

module.exports = {
	incrementCounter,
	getCounts
}