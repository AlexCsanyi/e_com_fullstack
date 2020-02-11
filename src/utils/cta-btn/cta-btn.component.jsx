import React from "react";
import "./cta-btn.styles.scss";

export default function CtaBtn({ title, href }) {
  return (
    <button className="cta-btn">
      <a href={href}>{title}</a>
    </button>
  );
}
