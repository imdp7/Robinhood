
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCSsJdxgtSetSGw1l2mBa0JqM7ZR_OTIo0",
    authDomain: "login-1b137.firebaseapp.com",
    databaseURL: "https://login-1b137.firebaseio.com",
    projectId: "login-1b137",
    storageBucket: "login-1b137.appspot.com",
    messagingSenderId: "1049184138755",
    appId: "1:1049184138755:web:4655475dd0d050bd64c036"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };