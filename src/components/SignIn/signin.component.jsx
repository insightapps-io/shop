import React, { useState } from 'react';
import './signin.styles.scss';

import FormInput from '../../components/FormInput/forminput.component';
import CustomButton from '../CustomButton/custombutton.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

function SignIn() {
  const [signinData, setSigninData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSigninData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await auth
      .signInWithEmailAndPassword(signinData.email, signinData.password)
      .then(() => {
        setSigninData({
          email: '',
          password: '',
        });
        alert('Login successfully!');
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  return (
    <div className='sign-in'>
      <h2 className='title'>I already have an account</h2>
      <span> Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          label='Email'
          value={signinData.email}
          onChange={handleChange}
          required
        />
        <FormInput
          name='password'
          type='password'
          label='Password'
          value={signinData.password}
          onChange={handleChange}
          required
        />
        <div className='buttons'>
          <CustomButton type='submit' onClick={handleSubmit}>
            Sign in
          </CustomButton>
          <CustomButton type='button' isGoogleSignIn onClick={signInWithGoogle}>
            {' '}
            Sign in with Google{' '}
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
