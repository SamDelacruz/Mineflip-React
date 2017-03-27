export const CREATE_GAME = 'CREATE_GAME';
export const REVEAL_TILE = 'REVEAL_TILE';
export const GAME_DATA_FETCH_SUCCESS = 'GAME_DATA_FETCH_SUCCESS';
export const GAME_IS_LOADING = 'GAME_IS_LOADING';
export const GAME_HAS_ERROR = 'GAME_HAS_ERROR';

const API_ROOT = (() => {
  if(process.env.NODE_ENV === 'production') {
    return 'http://api.mineflip.com';
  } else {
    return 'http://localhost:3001';
  }
})();

const CREATE_GAME_URL = (() => {
  return `${API_ROOT}/games`;
})();

function revealTileUrl(gameId, x, y) {
  return `${API_ROOT}/games/${gameId}/tiles/${x}/${y}`;
}

export function gameDataFetchSuccess(game) {
  return {
    type: GAME_DATA_FETCH_SUCCESS,
    game
  }
}

export function gameIsLoading(bool) {
  return {
    type: GAME_IS_LOADING,
    isLoading: bool
  }
}

export function gameHasError(bool) {
  return {
    type: GAME_HAS_ERROR,
    hasError: bool
  }
}

export function createGame() {
  return dispatch => {
    fetch(CREATE_GAME_URL, { method: 'POST' })
      .then((response) => {
        if(!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(gameIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((game) => dispatch(gameDataFetchSuccess(game)))
      .catch(() => dispatch(gameHasError(true)));
  }
}

export function revealTile(game, x, y) {
  return dispatch => {
    fetch(revealTileUrl(game, x, y), { method: 'PUT' })
      .then((response) => {
        if(!response.ok) {
          throw Error(response.statusText);
        }

        // Maybe dispatch tile not loading here
        return response;
      })
      .then((response) => response.json())
      .then((game) => dispatch(gameDataFetchSuccess(game)))
      .catch(() => dispatch(gameHasError(true)));
  }
}
