import { LOCATION_CHANGE } from 'react-router-redux';
import { GAME_DATA_FETCH_SUCCESS } from '../actions';

const initialState = { locationBeforeTransitions: null };

export function routing(state = initialState, action) {
  if(action.type === LOCATION_CHANGE) {
    return { ...state, locationBeforeTransitions: action.payload };
  }

  if(action.type === GAME_DATA_FETCH_SUCCESS) {
    const { id } = action.game;
    let location = state.locationBeforeTransitions;
    const pathname = `/games/${id}`;
    location = { ...location, pathname, action: 'PUSH' };
    return { ...state, locationBeforeTransitions: location };
  }

  return state;
}