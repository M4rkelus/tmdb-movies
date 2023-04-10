import { createSelector } from 'reselect';

const selectPaginationReducer = (state) => state.pagination;

export const selectPage = createSelector(
  selectPaginationReducer,
  (paginationState) => paginationState.page
);

export const selectTotalPages = createSelector(
  selectPaginationReducer,
  (paginationState) => paginationState.totalPages
);

export const selectTotalResults = createSelector(
  selectPaginationReducer,
  (paginationState) => paginationState.totalResults
);
