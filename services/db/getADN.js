const admin = require('firebase-admin');
const db = admin.firestore();
const MD5 = require("crypto-js/md5");

async function getADN(hash){
    let ADNref = db.collection('adn').doc(hash);
    let doc = await ADNref.get()
    if(doc.exists) return doc.data()
    else return null
}
module.exports = {getADN}