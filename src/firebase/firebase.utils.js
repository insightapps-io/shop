import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCVwDx2kxFfb-mKT5w_nMWRPNMwxM5Isf4",
  authDomain: "shop-60ae5.firebaseapp.com",
  databaseURL: "https://shop-60ae5.firebaseio.com",
  projectId: "shop-60ae5",
  storageBucket: "shop-60ae5.appspot.com",
  messagingSenderId: "500927971516",
  appId: "1:500927971516:web:28472e0c65d3c99d0ad0b9",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
