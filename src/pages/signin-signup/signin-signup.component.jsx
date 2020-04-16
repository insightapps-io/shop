import React from 'react';
import './signin-signup.styles.scss';

import SignIn from '../../components/SignIn/signin.component';
import SignUp from '../../components/SignUp/signup.component';

const SignInSignUp = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  );
};
export default SignInSignUp;
