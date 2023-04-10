import { createSelector } from 'reselect';

const selectSearchReducer = (state) => state.search;

export const selectSearchResults = createSelector(
  selectSearchReducer,
  (searchState) => searchState.searchResults
);

export const selectSearchQuery = createSelector(
  selectSearchReducer,
  (searchState) => searchState.searchQuery
);
