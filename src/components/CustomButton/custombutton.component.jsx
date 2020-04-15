import React from 'react';
import './custombutton.styles.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  ...otherCustomButtonProps
}) => {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...otherCustomButtonProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
