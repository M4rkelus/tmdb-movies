import { MOVIES_ACTION_TYPES } from './movies.types';

export const MOVIES_INITIAL_STATE = {
  movies: [],
  error: null,
  filter: 'top_rated',
  sortBy: 'popularity.desc',
};

export const moviesReducer = (state = MOVIES_INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case MOVIES_ACTION_TYPES.FETCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case MOVIES_ACTION_TYPES.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case MOVIES_ACTION_TYPES.FETCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case MOVIES_ACTION_TYPES.SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case MOVIES_ACTION_TYPES.SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };
    default:
      return state;
  }
};
