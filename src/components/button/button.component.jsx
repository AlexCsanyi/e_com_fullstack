import React from "react";

import "./button.styles.scss";

const CustomButton = ({ children, ...otherProps }) => (
  <button className="btn btn-outline-dark mr-3" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
