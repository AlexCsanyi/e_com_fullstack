import { createSelector } from "reselect";

const selectShop = state => state.shop;

const COLLECTION_ID_MAP = {
  diaries: 1,
  calendars: 2,
  notebooks: 3,
  gratitudeBooks: 4,
  journals: 5,
  accessories: 6
};

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollection = collectionUrlParam =>
  createSelector([selectCollections], collections =>
    collections.find(
      collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  );
