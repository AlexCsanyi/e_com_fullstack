import React from "react";

import "./menu-item.styles.scss";

const MenuItem = ({ desc, image, alt }) => (
  <>
    <div className="col-lg-3 prod">
      <img src={image} alt={alt} />
      <p id="prod-desc">{desc}</p>
    </div>
  </>
);

export default MenuItem;
