import { createSelector } from 'reselect';

const selectActorsReducer = (state) => state.actors;

export const selectActors = createSelector(
  selectActorsReducer,
  (actorsState) => actorsState.actors
);

export const selectLoading = createSelector(
  selectActorsReducer,
  (actorsState) => actorsState.loading
);

export const selectError = createSelector(
  selectActorsReducer,
  (actorsState) => actorsState.error
);
