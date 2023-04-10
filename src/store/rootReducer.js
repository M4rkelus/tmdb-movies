import { combineReducers } from 'redux';
import { moviesReducer } from './movies/movies.reducer';
import { paginationReducer } from './pagination/pagination.reducer';
import { searchReducer } from './search/search.reducer';
import { actorsReducer } from './actors/actors.reducer';

export const rootReducer = combineReducers({
  movies: moviesReducer,
  pagination: paginationReducer,
  search: searchReducer,
  actors: actorsReducer,
});
