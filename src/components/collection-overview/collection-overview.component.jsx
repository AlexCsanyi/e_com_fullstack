import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import "./collection-overview.styles.scss";

const CollectionOverview = ({ collections }) => (
  <div>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
