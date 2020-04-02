import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import Image from "../../images/hero.jpg";
import { Modal } from "react-bootstrap";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_PMCBqhFXBszM7remWh20E1S500GQ07KX61";

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <StripeCheckout
        label="Pay Now"
        name="Field Journal"
        billingAddress
        shippingAddress
        image={Image}
        description={`Your total is £${price}`}
        amount={priceForStripe}
        panelLabel="Pay now"
        token={handleShow}
        stripeKey={publishableKey}
      >
        <button className="btn btn-dark py-2 btn-block">Pay Now</button>
      </StripeCheckout>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thank you</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="text-center">Awesome</h4>
          <h6 className="text-success text-center">
            Your payment was successful
          </h6>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default StripeCheckoutButton;
