import React from "react";

import "./collection.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;

  return (
    <>
      <div className="container-fluid text-center mt-4 mb-4">
        <h2>{title}</h2>
      </div>
      <div className="collection-container">
        {items.map(item => (
          <CollectionItem key={item.id} item={item}></CollectionItem>
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
