import { createSelector } from 'reselect';

const selectMoviesReducer = (state) => state.movies;

export const selectMovies = createSelector(
  selectMoviesReducer,
  (moviesState) => moviesState.movies
);

export const selectLoading = createSelector(
  selectMoviesReducer,
  (moviesState) => moviesState.loading
);

export const selectError = createSelector(
  selectMoviesReducer,
  (moviesState) => moviesState.error
);

export const selectFilter = createSelector(
  selectMoviesReducer,
  (moviesState) => moviesState.filter
);

export const selectSortBy = createSelector(
  selectMoviesReducer,
  (moviesState) => moviesState.sortBy
);
