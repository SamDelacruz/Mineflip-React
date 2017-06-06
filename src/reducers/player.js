import { PLAYER_LOGGED_IN, PLAYER_LOGGED_OUT } from '../actions';
export function player(state={}, action) {
  if(action.type === PLAYER_LOGGED_IN) {
    return {
      ...state,
      loggedIn: true,
      profile: action.payload.profile,
      token: action.payload.token
    }
  }
  if(action.type === PLAYER_LOGGED_OUT) {
    return {
      loggedIn: false
    };
  }
  return state;
}