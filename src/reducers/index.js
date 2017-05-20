import { combineReducers } from 'redux';
import { game } from './game';
import { routing } from './routing';

const rootReducer = combineReducers({
  game,
  routing
});

export default rootReducer;
