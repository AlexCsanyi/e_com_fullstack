import React, { Component } from "react";
import "./hero.styles.scss";
import heroImg from "../../images/hero.jpg";

export default class Hero extends Component {
  render() {
    return (
      <div className="hero-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 hero-left">
              <div className="tagline">
                <p>
                  useful tools to stimulate <br />
                  planning, productivity and <br />
                  creativity
                </p>
              </div>

              <div className="shipping">
                <p>Complimentary shipping in the UK on orders £30+</p>
              </div>
            </div>
            <div className="col-lg-6 hero-right">
              <div className="hero-image">
                <img src={heroImg} alt="hero" className="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
