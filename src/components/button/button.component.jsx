import React from "react";

import "./button.styles.scss";

const CustomButton = ({ children, ...otherProps }) => (
  <button className="btn btn-dark" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
