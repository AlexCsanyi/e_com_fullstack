import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../button/button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
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
      <CustomButton onClick={() => addItem(item)}>Add to Cart</CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
