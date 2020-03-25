import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import "./cta-btn.styles.scss";

export default function CtaBtn({ title, href }) {
  return (
    <a className="cta-btn" href={href}>
      {title} <FontAwesomeIcon icon={faChevronCircleRight}></FontAwesomeIcon>{" "}
    </a>
  );
}
