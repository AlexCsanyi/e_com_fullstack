import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";

import "./checkout.styles.scss";
import {
  selectCartItems,
  selectCartTotal,
  selectCartItemsCount
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const CheckoutPage = ({ cartItems, cartTotal, itemCount }) => {
  return (
    <div className="px-4 px-lg-0 checkout-container">
      <div className="container py-5 text-center">
        <h1 className="display-4">SHOPPING CART</h1>
      </div>

      <div className="pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
              <div className="table-responsive">
                <table className="table">
                  <tbody>
                    {cartItems.map(cartItem => (
                      <CheckoutItem
                        key={cartItem.id}
                        cartItem={cartItem}
                      ></CheckoutItem>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="row py-5 p-4 bg-white rounded shadow-sm">
            <div className="col-lg-6">
              <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                Coupon code
              </div>
              <div className="p-4">
                <p className="font-italic mb-4">
                  If you have a coupon code, please enter it in the box below
                </p>
                <div className="input-group mb-4 border rounded-pill p-2">
                  <input
                    type="text"
                    placeholder="Apply coupon"
                    aria-describedby="button-addon3"
                    className="form-control border-0"
                  ></input>
                  <div className="input-group-append border-0">
                    <button
                      id="button-addon3"
                      type="button"
                      className="btn btn-dark px-4 rounded-pill"
                    >
                      <FontAwesomeIcon
                        className="mr-2"
                        icon={faGift}
                      ></FontAwesomeIcon>
                      Apply coupon
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                Instructions for seller
              </div>
              <div className="p-4">
                <p className="font-italic mb-4">
                  If you have some information for the seller you can leave them
                  in the box below
                </p>
                <textarea
                  name=""
                  cols="30"
                  rows="2"
                  className="form-control"
                ></textarea>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                Order summary{" "}
              </div>
              <div className="p-4">
                <p className="font-italic mb-4">
                  Shipping and additional costs are calculated based on values
                  you have entered. Free shipping on orders over £50.
                </p>
                <ul className="list-unstyled mb-4">
                  <li className="d-flex justify-content-between py-3 border-bottom">
                    <strong className="text-muted">Order Subtotal </strong>
                    <strong>£{cartTotal.toFixed(2)}</strong>
                  </li>
                  <li className="d-flex justify-content-between py-3 border-bottom">
                    <strong className="text-muted">
                      Shipping and handling
                    </strong>
                    <strong id="shipping">
                      {!itemCount
                        ? "£0.00"
                        : cartTotal < 50.0
                        ? "£10.00"
                        : "£0.00"}
                    </strong>
                  </li>
                  <li className="d-flex justify-content-between py-3 border-bottom">
                    <strong className="text-muted">Tax</strong>
                    <strong>£0.00</strong>
                  </li>
                  <li className="d-flex justify-content-between py-3 border-bottom">
                    <strong className="text-muted">Total</strong>
                    <h5 className="font-weight-bold">
                      {!itemCount
                        ? "£0.00"
                        : cartTotal < 50
                        ? "£" + (cartTotal + 10.0).toFixed(2)
                        : "£" + cartTotal.toFixed(2)}
                    </h5>
                  </li>
                </ul>
                <StripeCheckoutButton
                  price={
                    cartTotal < 50 && cartTotal > 0 ? cartTotal + 10 : cartTotal
                  }
                ></StripeCheckoutButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps)(CheckoutPage);
