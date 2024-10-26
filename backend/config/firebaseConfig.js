const admin = require('firebase-admin');
const dotenv = require('dotenv');
dotenv.config();

// Initialize Firebase Admin with service account
admin.initializeApp({
  credential: admin.credential.cert(require('./serviceAccount')),
});

module.exports = admin;