import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faGift,
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";

import "./checkout.styles.scss";
import {
  selectCartItems,
  selectCartTotal,
  selectCartItemsCount
} from "../../redux/cart/cart.selectors";

const CheckoutPage = ({ cartItems, cartTotal, itemCount }) => (
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
                    <tr key={cartItem.id}>
                      <th scope="row" className="border-0">
                        <div className="ml-2 pr-3 pb-3 pt-3 align-middle d-inline-block">
                          <img
                            src={cartItem.imageUrl}
                            alt={cartItem.name}
                            width="120"
                            className="img-fluid rounded"
                          />
                        </div>
                        <div className="ml-2 d-inline-block align-middle">
                          <h5 className="mb-0">
                            {" "}
                            <span className="text-dark d-inline-block align-middle">
                              {cartItem.name}
                            </span>
                          </h5>
                          <span className="text-muted font-weight-normal font-italic d-block">
                            Category: {cartItem.name}
                          </span>
                        </div>
                      </th>

                      <td className="border-0 align-middle text-center">
                        <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                        <strong className="ml-3 mr-3">
                          {cartItem.quantity}
                        </strong>
                        <FontAwesomeIcon
                          icon={faChevronRight}
                        ></FontAwesomeIcon>
                        <strong className="ml-3 mr-3">£{cartItem.price}</strong>
                      </td>
                      <td className="border-0 align-middle text-center">
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                      </td>
                    </tr>
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
                Shipping and additional costs are calculated based on values you
                have entered. Free shipping on orders over £50.
              </p>
              <ul className="list-unstyled mb-4">
                <li className="d-flex justify-content-between py-3 border-bottom">
                  <strong className="text-muted">Order Subtotal </strong>
                  <strong>£{cartTotal.toFixed(2)}</strong>
                </li>
                <li className="d-flex justify-content-between py-3 border-bottom">
                  <strong className="text-muted">Shipping and handling</strong>
                  <strong id="shipping">
                    {!itemCount
                      ? "£0.00"
                      : cartTotal < 50.0
                      ? "£10.00"
                      : "£0.00"}
                  </strong>
                </li>
                <li class="d-flex justify-content-between py-3 border-bottom">
                  <strong class="text-muted">Tax</strong>
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
              <button
                href="#"
                className="btn btn-dark rounded-pill py-2 btn-block"
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps)(CheckoutPage);
