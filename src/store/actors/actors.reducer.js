import { ACTORS_ACTION_TYPES } from './actors.types';

const ACTORS_INITIAL_SATATE = {
  actors: [],
  loading: false,
  error: null,
};

export const actorsReducer = (state = ACTORS_INITIAL_SATATE, action) => {
  switch (action.type) {
    case ACTORS_ACTION_TYPES.FETCH_ACTORS_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ACTORS_ACTION_TYPES.FETCH_ACTORS_SUCCESS:
      return {
        ...state,
        actors: action.payload,
        loading: false,
      };
    case ACTORS_ACTION_TYPES.FETCH_ACTORS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default actorsReducer;
