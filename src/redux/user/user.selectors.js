import { createSelector } from 'reselect';


const selectUser = state => state.user;
/* the "state" value is accessible in the redux store   
  which is actually the root reducer.*/

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);

