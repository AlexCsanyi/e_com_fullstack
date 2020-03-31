import React, { Component } from "react";
import { ReactComponent as CardFront } from "../../images/card-front.svg";
import { ReactComponent as CardBack } from "../../images/card-back.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

import "./pay.styles.scss";

class Pay extends Component {
  constructor() {
    super();

    this.state = {
      digitGroup1: "",
      digitGroup2: "",
      digitGroup3: "",
      digitGroup4: "",
      cardHolder: "",
      month: "",
      year: "",
      cvv: "",
      hover: false
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value + " " });
  };

  addHoverClass = () => {
    this.setState({ hover: true });
  };

  removeHoverClass = () => {
    this.setState({ hover: false });
  };

  render() {
    const {
      digitGroup1,
      digitGroup2,
      digitGroup3,
      digitGroup4,
      cardHolder,
      month,
      year,
      cvv,
      hover
    } = this.state;

    return (
      <div className="checkout">
        <div className={!hover ? "credit-card-box" : "credit-card-box hover"}>
          <div className="flip">
            <div className="front">
              <div className="chip"></div>
              <div className="logo">
                <CardFront></CardFront>
              </div>
              <div className="number">
                {digitGroup1 + digitGroup2 + digitGroup3 + digitGroup4}
              </div>
              <div className="card-holder">
                <label>Card holder</label>
                <div>{cardHolder}</div>
              </div>
              <div className="card-expiration-date">
                <label>Expires</label>
                <div>{month ? month + " / " + year : ""}</div>
              </div>
            </div>
            <div className="back">
              <div className="strip"></div>
              <div className="logo">
                <CardBack></CardBack>
              </div>
              <div className="ccv">
                <label>CCV</label>
                <div>{cvv}</div>
              </div>
            </div>
          </div>
        </div>
        <form className="form" autoComplete="off" noValidate>
          <fieldset>
            <label htmlFor="card-number">Card Number</label>
            <input
              name="digitGroup1"
              type="num"
              id="card-number"
              className="input-cart-number"
              maxLength="4"
              onChange={this.handleChange}
            />
            <input
              name="digitGroup2"
              type="num"
              id="card-number-1"
              className="input-cart-number"
              maxLength="4"
              onChange={this.handleChange}
            />
            <input
              name="digitGroup3"
              type="num"
              id="card-number-2"
              className="input-cart-number"
              maxLength="4"
              onChange={this.handleChange}
            />
            <input
              name="digitGroup4"
              type="num"
              id="card-number-3"
              className="input-cart-number"
              maxLength="4"
              onChange={this.handleChange}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="card-holder">Card holder</label>
            <input
              onChange={this.handleChange}
              name="cardHolder"
              type="text"
              id="card-holder"
            />
          </fieldset>
          <fieldset className="fieldset-expiration">
            <label htmlFor="card-expiration-month">Expiration date</label>
            <div className="select">
              <select
                onChange={this.handleChange}
                name="month"
                id="card-expiration-month"
              >
                <option></option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
            </div>
            <div className="select">
              <select
                onChange={this.handleChange}
                name="year"
                id="card-expiration-year"
              >
                <option></option>
                <option>2016</option>
                <option>2017</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
              </select>
            </div>
          </fieldset>
          <fieldset className="fieldset-ccv">
            <label htmlFor="card-ccv">CCV</label>
            <input
              onChange={this.handleChange}
              onFocus={this.addHoverClass}
              onBlur={this.removeHoverClass}
              name="cvv"
              type="text"
              id="card-ccv"
              maxLength="3"
            />
          </fieldset>
          <button className="btn btn-dark py-2 btn-block">
            <FontAwesomeIcon icon={faLock}></FontAwesomeIcon> Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Pay;
