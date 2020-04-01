import React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../../components/collection/collection.component";

const ShopPage = ({ match }) => (
  <div>
    <Route exact path={`${match.path}`} component={CollectionOverview}></Route>
    <Route
      path={`${match.path}/:collectionId`}
      component={CollectionPage}
    ></Route>
  </div>
);

export default ShopPage;
