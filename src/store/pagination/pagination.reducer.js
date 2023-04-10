import { PAGINATION_ACTION_TYPES } from './pagination.types';

export const PAGINATION_INITIAL_STATE = {
  page: 1,
  totalPages: 0,
};

export const paginationReducer = (
  state = PAGINATION_INITIAL_STATE,
  action = {}
) => {
  switch (action.type) {
    case PAGINATION_ACTION_TYPES.SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case PAGINATION_ACTION_TYPES.SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.payload,
      };
    default:
      return state;
  }
};
