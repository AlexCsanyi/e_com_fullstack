import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="container-fluid collection-preview">
      <h3>{title.toUpperCase()}</h3>
      <div className="row">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps}></CollectionItem>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;