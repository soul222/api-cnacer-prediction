const admin = require("firebase-admin/app");
const serviceAccount = require("../../key/plenary-justice-440322-g5-399f8d73a011.json");

// Inisialisasi Firebase Admin sekali saja
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });


const db = admin.firestore();

module.exports = { admin, db };