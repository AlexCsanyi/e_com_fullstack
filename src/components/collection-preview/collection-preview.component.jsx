import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";
import { withRouter } from "react-router-dom";

const CollectionPreview = ({ title, items, history, match, routeName }) => {
  return (
    <div className="container-fluid collection-preview">
      <h3 onClick={() => history.push(`${match.path}/${routeName}`)}>
        {title.toUpperCase()}
      </h3>
      <span>Featured Products</span>
      <div className="row">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item}></CollectionItem>
          ))}
      </div>
    </div>
  );
};

export default withRouter(CollectionPreview);
