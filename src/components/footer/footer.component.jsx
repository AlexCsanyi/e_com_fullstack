import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitterSquare,
  faInstagramSquare,
  faPinterestSquare
} from "@fortawesome/free-brands-svg-icons";

import "./footer.styles.scss";

const Footer = () => (
  <div class="container-fluid footer">
    <div class="section container">
      <footer>
        <div class="row">
          <div class="col-lg-12 block">
            <div class="footer-media">
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
        </div>
        <div class="row">
          <div class="col-lg-4 block">
            <p>
              Field Journals, <br />
              3581 Langley Street, Gray Manor, <br />
              Essex, UK
            </p>
          </div>

          <div class="col-lg-4 block">
            <p>
              FAQs
              <br />
              Return policy
              <br />
              Shipping
            </p>
          </div>

          <div class="col-lg-4 block">
            <p>
              Careers
              <br />
              Community
              <br />
              Wholesale
            </p>
          </div>
        </div>
      </footer>
    </div>
  </div>
);

export default Footer;
