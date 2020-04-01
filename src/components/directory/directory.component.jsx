import React from "react";

import MenuItem from "../menu-item/menu-item.component";
import Review from "../review/review.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectDirectorySections,
  selectAltDirectorySections,
  selectReviewSections
} from "../../redux/directory/directory.selectors";

const Directory = ({ sections, altSections, reviews }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps}></MenuItem>
          ))}
          <Review text={reviews[0].text} name={reviews[0].name}></Review>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <Review text={reviews[1].text} name={reviews[1].name}></Review>
          {altSections.map(({ id, ...otherAltSectionProps }) => (
            <MenuItem key={id} {...otherAltSectionProps}></MenuItem>
          ))}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
  altSections: selectAltDirectorySections,
  reviews: selectReviewSections
});

export default connect(mapStateToProps)(Directory);
