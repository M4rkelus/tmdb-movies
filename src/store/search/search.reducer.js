import { SEARCH_ACTION_TYPES } from './search.types';

export const SEARCH_INITIAL_STATE = {
  searchResults: [],
  error: null,
  searchQuery: '',
};

export const searchReducer = (state = SEARCH_INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case SEARCH_ACTION_TYPES.FETCH_SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SEARCH_ACTION_TYPES.FETCH_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        searchResults: action.payload,
      };
    case SEARCH_ACTION_TYPES.FETCH_SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SEARCH_ACTION_TYPES.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    case SEARCH_ACTION_TYPES.SAVE_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
      };
    default:
      return state;
  }
};
