import React from "react";
import "./custombutton.styles.scss";

const CustomButton = ({ children, ...otherCustomButtonProps }) => {
  return (
    <button className="custom-button" {...otherCustomButtonProps}>
      {children}
    </button>
  );
};

export default CustomButton;
