import { SEARCH_ACTION_TYPES } from './search.types';
import { createAction } from '../../utils/reducer.utils';
import { searchActors, searchMovies } from '../../services/api';
import { setPage, setTotalPages } from '../pagination/pagination.actions';

export const searchDataRequest = () =>
  createAction(SEARCH_ACTION_TYPES.FETCH_SEARCH_REQUEST);

export const searchDataSuccess = (movies) =>
  createAction(SEARCH_ACTION_TYPES.FETCH_SEARCH_SUCCESS, movies);

export const searchDataFailure = (error) =>
  createAction(SEARCH_ACTION_TYPES.FETCH_SEARCH_FAILURE, error);

export const saveSearchResults = (results) =>
  createAction(SEARCH_ACTION_TYPES.SAVE_SEARCH_RESULTS, results);

export const setSearchQuery = (query) =>
  createAction(SEARCH_ACTION_TYPES.SET_SEARCH_QUERY, query);

export const searchMoviesAsync = (query, page) => (dispatch) => {
  dispatch(searchDataRequest());
  searchMovies(query, page)
    .then((response) => {
      dispatch(searchDataSuccess(response.data.results));
      dispatch(setTotalPages(response.data.total_pages));
      dispatch(setPage(response.data.page));
      dispatch(saveSearchResults(response.data.results));
      dispatch(setSearchQuery(query));
    })
    .catch((error) => {
      dispatch(searchDataFailure(error.message));
    });
};

export const searchActorsAsync = (query, page) => (dispatch) => {
  dispatch(searchDataRequest());
  searchActors(query, page)
    .then((response) => {
      dispatch(searchDataSuccess(response.data.results));
      dispatch(setTotalPages(response.data.total_pages));
      dispatch(setPage(response.data.page));
      dispatch(saveSearchResults(response.data.results));
      dispatch(setSearchQuery(query));
    })
    .catch((error) => {
      dispatch(searchDataFailure(error.message));
    });
};
