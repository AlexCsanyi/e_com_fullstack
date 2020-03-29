import React from "react";

import "./button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${
      isGoogleSignIn ? "btn btn-outline-primary ml-3" : "btn btn-outline-dark"
    }`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
