import React from "react";

import "./button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${
      isGoogleSignIn
        ? "btn btn-outline-primary mr-3"
        : "btn btn-outline-dark mr-3"
    }`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
