import { PAGINATION_ACTION_TYPES } from './pagination.types';
import { createAction } from '../../utils/reducer.utils';

export const setPage = (page) =>
  createAction(PAGINATION_ACTION_TYPES.SET_PAGE, page);

export const setTotalPages = (totalPages) =>
  createAction(PAGINATION_ACTION_TYPES.SET_TOTAL_PAGES, totalPages);
