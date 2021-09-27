import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCXVNi8syGIYztke85DJZqnblwpwNAs-cI",
  authDomain: "slackclone-81c4a.firebaseapp.com",
  projectId: "slackclone-81c4a",
  storageBucket: "slackclone-81c4a.appspot.com",
  messagingSenderId: "191344285374",
  appId: "1:191344285374:web:b30b1e32e4874289f9b0ef"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};




