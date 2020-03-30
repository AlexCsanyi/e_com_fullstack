import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../button/button.component";

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="col-md collection-item">
    <div className="image-container">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      ></div>
    </div>
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">£ {price}.00</span>
    </div>
    <CustomButton>Add to Cart</CustomButton>
  </div>
);

export default CollectionItem;
