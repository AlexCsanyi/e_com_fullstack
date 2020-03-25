import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ desc, image, alt, title, url, match, history }) => (
  <div
    className="col-lg-3 prod"
    onClick={() => history.push(`${match.url}${url}`)}
  >
    <img src={image} alt={alt} />
    <h4>{title}</h4>
    <p id="prod-desc">{desc}</p>
  </div>
);

export default withRouter(MenuItem);
