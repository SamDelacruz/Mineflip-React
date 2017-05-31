import { combineReducers } from 'redux';
import { game } from './game';
import { routing } from './routing';
import { leaderboard } from './leaderboard';

const rootReducer = combineReducers({
  game,
  routing,
  leaderboard
});

export default rootReducer;
