import React from "react";

import "./review.styles.scss";

export default function Review({ text, name }) {
  return (
    <div className="col-lg-3">
      <div className="review">
        <p className="review-text">{text}</p>
        <p className="review-name">{name}</p>
      </div>
    </div>
  );
}
