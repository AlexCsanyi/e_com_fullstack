import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import withSpinner from "../with-spinner/with-spinner.component";
import CollectionOverview from "../collection-overview/collection-overview.component";
import { compose } from "redux";

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
