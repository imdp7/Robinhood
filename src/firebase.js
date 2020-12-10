
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBxFfLI6xjAWiw0NyzB9YyE__AMTy6v0Mo",
  authDomain: "robinhood--97.firebaseapp.com",
  projectId: "robinhood--97",
  storageBucket: "robinhood--97.appspot.com",
  messagingSenderId: "900279756111",
  appId: "1:900279756111:web:a09c38fce813f16134113a",
  measurementId: "G-1FGLL2EFH3"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };