import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyCVwDx2kxFfb-mKT5w_nMWRPNMwxM5Isf4',
  authDomain: 'shop-60ae5.firebaseapp.com',
  databaseURL: 'https://shop-60ae5.firebaseio.com',
  projectId: 'shop-60ae5',
  storageBucket: 'shop-60ae5.appspot.com',
  messagingSenderId: '500927971516',
  appId: '1:500927971516:web:28472e0c65d3c99d0ad0b9',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const { displayName, email } = userAuth;
  const createdAt = new Date();

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    await userRef
      .set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
      .catch((e) => {
        console.log('Error creating user!', e);
      });
  }

  return userRef;
};

export default firebase;
