import { MOVIES_ACTION_TYPES } from './movies.types';
import { createAction } from '../../utils/reducer.utils';
import { fetchMovies } from '../../services/api';
import { setPage, setTotalPages } from '../pagination/pagination.actions';

export const fetchMoviesRequest = () =>
  createAction(MOVIES_ACTION_TYPES.FETCH_MOVIES_REQUEST);

export const fetchMoviesSuccess = (movies) =>
  createAction(MOVIES_ACTION_TYPES.FETCH_MOVIES_SUCCESS, movies);

export const fetchMoviesFailure = (error) =>
  createAction(MOVIES_ACTION_TYPES.FETCH_MOVIES_FAILURE, error);

export const setFilter = (filter) =>
  createAction(MOVIES_ACTION_TYPES.SET_FILTER, filter);

export const setSortBy = (sortBy) =>
  createAction(MOVIES_ACTION_TYPES.SET_SORT_BY, sortBy);

export const fetchMoviesAsync = (category, page) => (dispatch) => {
  dispatch(fetchMoviesRequest());
  fetchMovies(category, page)
    .then((response) => {
      dispatch(fetchMoviesSuccess(response.data.results));
      dispatch(setTotalPages(response.data.total_pages));
      dispatch(setPage(response.data.page));
    })
    .catch((error) => {
      dispatch(fetchMoviesFailure(error.message));
    });
};
