const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
 apiKey: "AIzaSyALFZNKiUyPupdqN8A8ikfsFd-o14bC9OQ",
    authDomain: "kiei451---final-project.firebaseapp.com",
    projectId: "kiei451---final-project",
    storageBucket: "kiei451---final-project.appspot.com",
    messagingSenderId: "25268006381",
    appId: "1:25268006381:web:0a1a8d7147e2273c36cbe4"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase
