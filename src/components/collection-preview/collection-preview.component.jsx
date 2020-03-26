import React from "react";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <div className="container-fluid" key={item.id}>
              <div className="row">
                <div className="col-lg-3">{item.name}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
