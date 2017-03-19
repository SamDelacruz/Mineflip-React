import { combineReducers } from 'redux';
import BoardReducer from './board';

const rootReducer = combineReducers({
  board: BoardReducer
});

export default rootReducer;
