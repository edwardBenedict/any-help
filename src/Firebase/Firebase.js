import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
const devConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const prodConfig = {};

const config = process.env.NODE_ENV === "development" ? devConfig : prodConfig;

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.firebaseAuth = firebase.auth();
  }
  async signUp(displayName, email, password) {
    try {
      await this.firebaseAuth.createUserWithEmailAndPassword(email, password);
      this.firebaseAuth.currentUser.updateProfile({ displayName });
      console.log("signup successfull");
      return;
    } catch (error) {
      return new Error(error);
    }
  }
  async signOut() {
    try {
      await this.firebaseAuth.signOut();
    } catch (error) {
      return error;
    }
  }
  async signIn(email, password) {
    try {
      await this.firebaseAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      return error.message;
    }
  }
  useGoogleProvider() {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    googleProvider.setCustomParameters({ prompt: "select_account" });
    this.firebaseAuth.signInWithPopup(googleProvider);
    return true;
  }
}

export default new Firebase();
