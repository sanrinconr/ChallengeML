const admin = require('firebase-admin');
const db = admin.firestore();
const MD5 = require("crypto-js/md5");

async function saveADN(hash,mutant){
    try{
        let docRef = db.collection('adn').doc(hash);
        await docRef.set({mutant});
        return true
    }catch(err){
        console.log(err.message)
        return false
    }
}
module.exports ={saveADN}