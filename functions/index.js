const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

exports.createUser = functions.firestore
  .document('users/{userId}')
  .onCreate((snap, context) => {
    const newValue = snap.data();

    // access a particular field as you would any JS property
    const name = newValue.name;
    const password = newValue.defaultPassword;
    const isAdmin = newValue.isAdmin;

    if (isAdmin) {
      console.log('User created is admin');
      return false;
    }

    return admin.auth().createUser({ name, password })
      .then(() => console.log('user created'))
      .catch((err) => console.log(err));
  });
