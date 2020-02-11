import React from "react";

import "./cta.styles.scss";

import ctaImg from "../../images/single-prod.jpg";
import CtaBtn from "../../utils/cta-btn/cta-btn.component";

export default function Cta() {
  return (
    <div className="container-fluid prod-sec">
      <div className="row">
        <div className="col-lg-6">
          <img src={ctaImg} alt="single product" />
        </div>
        <div className="col-lg-6 prod-desc">
          <p>
            The way to get started is to quit talking and begin doing. Our tools
            will help you boost your productivity.
          </p>
          <CtaBtn href="https://www.etsy.com/" title="Shop now"></CtaBtn>
        </div>
      </div>
    </div>
  );
}
