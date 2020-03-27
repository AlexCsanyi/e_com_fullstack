import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBW5UYDLj1eWqroD-xbdVvEUdLD35L_5nI",
  authDomain: "fieldjournals2020.firebaseapp.com",
  databaseURL: "https://fieldjournals2020.firebaseio.com",
  projectId: "fieldjournals2020",
  storageBucket: "fieldjournals2020.appspot.com",
  messagingSenderId: "36698634728",
  appId: "1:36698634728:web:95b3b34f6a41d406554c5d",
  measurementId: "G-YJQ51W1L36"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
