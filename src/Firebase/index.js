import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDdYIWw3aYXJP6iL7DqWCuoCpYJijndvqA",
  authDomain: "anyhelp-48d4a.firebaseapp.com",
  databaseURL: "https://anyhelp-48d4a.firebaseio.com",
  projectId: "anyhelp-48d4a",
  storageBucket: "anyhelp-48d4a.appspot.com",
  messagingSenderId: "525627256917",
  appId: "1:525627256917:web:92099886d1b2008743a4dc",
};
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let auth = firebase.auth();
export { db, auth };
