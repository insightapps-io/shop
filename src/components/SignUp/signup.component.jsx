import React, { useState } from 'react';
import './signup.styles.scss';

import CustomButton from '../CustomButton/custombutton.component';
import FormInput from '../FormInput/forminput.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

function SignUp() {
  const [userData, setUserData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = userData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        userData.email,
        userData.password
      );

      await createUserProfileDocument(user, { displayName });

      setUserData({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (e) {
      alert(e.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit' onClick={handleSubmit}>
          Sign Up
        </CustomButton>
      </form>
    </div>
  );
}

export default SignUp;
