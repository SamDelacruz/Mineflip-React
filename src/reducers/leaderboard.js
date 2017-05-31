import {
  LEADERBOARD_FETCH_SUCCESS
} from '../actions';

export function leaderboard(state = [], action) {
  switch (action.type) {
    case LEADERBOARD_FETCH_SUCCESS:
      return action.leaderboard;
    default:
      return state;
  }
}