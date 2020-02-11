import React from "react";
import CtaBtn from "../../utils/cta-btn/cta-btn.component";
import "./info.styles.scss";

export default function Information() {
  return (
    <div className="container-fluid">
      <div className="row section">
        <div className="col-lg-8">
          <p>
            Do not wait! The time will never be right. Start where you stand,
            and work whatever tools you may have at your command, and better
            tools will be found as you go along.
          </p>

          <CtaBtn href="https://www.etsy.com/" title="Find Out More"></CtaBtn>
        </div>
      </div>
    </div>
  );
}
