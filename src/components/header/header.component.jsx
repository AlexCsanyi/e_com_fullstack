import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitterSquare,
  faInstagramSquare,
  faPinterestSquare
} from "@fortawesome/free-brands-svg-icons";

import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, hidden }) => (
  <nav className="nav">
    <div className="menu-open">
      <FontAwesomeIcon
        onClick={() => document.getElementById("menu").classList.add("open")}
        icon={faBars}
      ></FontAwesomeIcon>
    </div>
    <div className="brand">
      <span>
        <Link to="/">FieldJournals</Link>
      </span>
    </div>
    {currentUser ? (
      <div className="sign-in-up-link">
        <span onClick={() => auth.signOut()}>Sign Out</span>
      </div>
    ) : (
      <div className="sign-in-up-link">
        <Link to="/signin">Sign In</Link>
      </div>
    )}
    <div className="cart dropdown">
      <CartIcon></CartIcon>
    </div>
    {hidden ? null : <CartDropdown></CartDropdown>}
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

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);
