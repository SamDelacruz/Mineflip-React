import { combineReducers } from 'redux';
import { game } from './game';
import { routing } from './routing';
import { leaderboard } from './leaderboard';
import { player } from './player';

const rootReducer = combineReducers({
  game,
  routing,
  leaderboard,
  player
});

export default rootReducer;
