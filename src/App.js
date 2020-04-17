import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import { connect } from 'react-redux';

import Header from './components/Header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUp from './pages/signin-signup/signin-signup.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

const App = ({ setCurrentUser }) => {
  useEffect(() => {
    let cleanupSnapShot = null;
    const cleanupAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (!userAuth) setCurrentUser(null);
      else {
        const userRef = await createUserProfileDocument(userAuth);
        cleanupSnapShot = userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
    });

    return () => {
      if (cleanupSnapShot) cleanupSnapShot();
      cleanupAuth();
    };
  });

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
