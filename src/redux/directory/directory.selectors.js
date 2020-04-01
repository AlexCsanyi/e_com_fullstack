import { createSelector } from "reselect";

const selectDirectory = state => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
);

export const selectAltDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.altSections
);

export const selectReviewSections = createSelector(
  [selectDirectory],
  directory => directory.reviews
);
