import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Header from './components/Header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUp from './pages/signin-signup/signin-signup.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

const App = ({ currentUser, setCurrentUser }) => {
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
  }, [setCurrentUser]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route
          exact
          path='/signin'
          render={() => (currentUser ? <Redirect to='/' /> : <SignInSignUp />)}
          //component={SignInSignUp}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
