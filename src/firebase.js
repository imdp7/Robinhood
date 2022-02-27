import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
import { Redirect } from "react-router-dom";

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
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore({ experimentalForceLongPolling: true });

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = db.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, FirstName,LastName } = user;
    try {
      await userRef.set({
        FirstName,
        LastName,
        email,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await db.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
  
};

export const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email)
    .then(() => {
      alert.message("Success")
    })
  } catch (err) {
    console.error(err);
  }
};

export const logout = () => {
  auth.signOut();
  <Redirect to={{ pathname: "/account/login" }} />
  
};


export { db };