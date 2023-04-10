import { ACTORS_ACTION_TYPES } from './actors.types';
import { createAction } from '../../utils/reducer.utils';
import { fetchPopularActors } from '../../services/api';
import { setPage, setTotalPages } from '../pagination/pagination.actions';

export const fetchActorsStart = () =>
  createAction(ACTORS_ACTION_TYPES.FETCH_ACTORS_START);

export const fetchActorsSuccess = (actors) =>
  createAction(ACTORS_ACTION_TYPES.FETCH_ACTORS_SUCCESS, actors);

export const fetchActorsFailure = (error) =>
  createAction(ACTORS_ACTION_TYPES.FETCH_ACTORS_FAILURE, error);

export const fetchActorsAsync = (page) => (dispatch) => {
  dispatch(fetchActorsStart());
  fetchPopularActors(page)
    .then((response) => {
      dispatch(fetchActorsSuccess(response.data.results));
      dispatch(setTotalPages(response.data.total_pages));
      dispatch(setPage(response.data.page));
    })
    .catch((error) => {
      dispatch(fetchActorsFailure(error.message));
    });
};
