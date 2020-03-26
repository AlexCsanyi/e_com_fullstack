import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faWindowClose,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitterSquare,
  faInstagramSquare,
  faPinterestSquare
} from "@fortawesome/free-brands-svg-icons";

import "./header.styles.scss";

class Header extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="menu-open">
          <FontAwesomeIcon
            onClick={() =>
              document.getElementById("menu").classList.add("open")
            }
            icon={faBars}
          ></FontAwesomeIcon>
        </div>
        <div className="brand">
          <span>
            <Link to="/">FieldJournals</Link>
          </span>
        </div>
        <div className="cart">
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </div>
        <div id="menu" className="menu">
          <div className="menu-close">
            <FontAwesomeIcon
              onClick={() =>
                document.getElementById("menu").classList.remove("open")
              }
              icon={faWindowClose}
            ></FontAwesomeIcon>
          </div>
          <ul>
            <li>
              <Link
                onClick={() =>
                  document.getElementById("menu").classList.remove("open")
                }
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() =>
                  document.getElementById("menu").classList.remove("open")
                }
                to="/shop"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                onClick={() =>
                  document.getElementById("menu").classList.remove("open")
                }
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={() =>
                  document.getElementById("menu").classList.remove("open")
                }
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="media-menu">
            <ul>
              <li>
                <FontAwesomeIcon icon={faInstagramSquare}></FontAwesomeIcon>
              </li>
              <li>
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
              </li>
              <li>
                <FontAwesomeIcon icon={faTwitterSquare}></FontAwesomeIcon>
              </li>
              <li>
                <FontAwesomeIcon icon={faPinterestSquare}></FontAwesomeIcon>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
