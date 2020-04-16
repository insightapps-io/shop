import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUp from './pages/signin-signup/signin-signup.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let cleanupSnapShot = null;
    const cleanupAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (!userAuth) setCurrentUser(userAuth);
      else {
        const userRef = await createUserProfileDocument(userAuth);
        cleanupSnapShot = userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            uid: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
    });

    return () => {
      if (cleanupSnapShot) cleanupSnapShot();
      cleanupAuth();
    };
  }, []);

  console.log(currentUser);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  );
};

export default App;
