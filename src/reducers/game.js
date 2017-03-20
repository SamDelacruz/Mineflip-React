import {
  GAME_DATA_FETCH_SUCCESS,
  GAME_IS_LOADING,
  GAME_HAS_ERROR
} from '../actions';

export function game(state = {}, action) {
  switch (action.type) {
    case GAME_DATA_FETCH_SUCCESS:
      return action.game;
    default:
      return state;
  }
}

export function gameIsLoading(state = false, action) {
  switch (action.type) {
    case GAME_IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}


export function gameHasError(state = false, action) {
  switch (action.type) {
    case GAME_HAS_ERROR:
      return action.hasError;
    default:
      return state;
  }
}
