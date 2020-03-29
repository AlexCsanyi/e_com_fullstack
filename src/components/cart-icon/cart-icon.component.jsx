import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import "./cart-icon.styles.scss";

const CartIcon = () => (
  <div className="cart-icon">
    <FontAwesomeIcon
      className="shopping-icon"
      icon={faShoppingBag}
    ></FontAwesomeIcon>
    <span className="item-count">0</span>
  </div>
);

export default CartIcon;
