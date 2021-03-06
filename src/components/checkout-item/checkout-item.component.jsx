import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";

import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, clearItemFromCart, addItem, removeItem }) => {
  const { name, quantity, imageUrl, price, category } = cartItem;
  return (
    <tr>
      <th scope="row" className="border-0">
        <div className="ml-2 pr-3 pb-3 pt-3 align-middle d-inline-block">
          <img
            src={imageUrl}
            alt={name}
            width="120"
            className="img-fluid rounded"
          />
        </div>
        <div className="ml-2 d-inline-block align-middle">
          <h5 className="mb-0">
            {" "}
            <span className="text-dark d-inline-block align-middle">
              {name}
            </span>
          </h5>
          <span className="text-muted font-weight-normal font-italic d-block">
            Category: {category}
          </span>
        </div>
      </th>

      <td className="border-0 align-middle text-center">
        <FontAwesomeIcon
          onClick={() => removeItem(cartItem)}
          icon={faChevronLeft}
        ></FontAwesomeIcon>
        <strong className="ml-3 mr-3">{quantity}</strong>
        <FontAwesomeIcon
          onClick={() => addItem(cartItem)}
          icon={faChevronRight}
        ></FontAwesomeIcon>
        <strong className="ml-3 mr-3">£{price * quantity}</strong>
      </td>
      <td className="border-0 align-middle text-center">
        <FontAwesomeIcon
          onClick={() => clearItemFromCart(cartItem)}
          icon={faTrash}
        ></FontAwesomeIcon>
      </td>
    </tr>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItemFromCart: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
