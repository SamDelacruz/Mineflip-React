export const CREATE_GAME = 'CREATE_GAME';
export const REVEAL_TILE = 'REVEAL_TILE';
export const GAME_DATA_FETCH_SUCCESS = 'GAME_DATA_FETCH_SUCCESS';
export const GAME_IS_LOADING = 'GAME_IS_LOADING';
export const GAME_HAS_ERROR = 'GAME_HAS_ERROR';
export const FETCH_LEADERBOARD = 'FETCH_SCORES';
export const LEADERBOARD_FETCH_SUCCESS = 'LEADERBOARD_FETCH_SUCCESS';
export const PLAYER_LOGGED_IN = 'PLAYER_LOGGED_IN';
export const PLAYER_LOGGED_OUT = 'PLAYER_LOGGED_OUT';


const API_ROOT = (() => {
  if(process.env.NODE_ENV === 'production') {
    return 'https://go-mineflip.herokuapp.com';
  } else {
    return 'http://' + window.location.hostname + ':3001';
  }
})();

const CREATE_GAME_URL = (() => {
  return `${API_ROOT}/games`;
})();

function revealTileUrl(gameId, x, y) {
  return `${API_ROOT}/games/${gameId}/tiles/${x}/${y}`;
}

const LEADERBOARD_API_ROOT = (() => {
  if(process.env.NODE_ENV === 'production') {
    return 'https://mineflip-leaderboard.herokuapp.com';
  } else {
    return 'http://' + window.location.hostname + ':8080';
  }
})();

const FETCH_LEADERBOARD_URL = `${LEADERBOARD_API_ROOT}/totals/all`;

export function gameDataFetchSuccess(game) {
  return {
    type: GAME_DATA_FETCH_SUCCESS,
    game
  }
}

export function leaderboardFetchSuccess(leaderboard) {
  return {
    type: LEADERBOARD_FETCH_SUCCESS,
    leaderboard
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

export function fetchLeaderboard() {
  var url = FETCH_LEADERBOARD_URL;
  var method = 'GET';

  return dispatch => {
    fetch(url, { method: method })
      .then((response) => {
        if(!response.ok) {
          throw Error(response.statusText);
        }

        return response;
      })
      .then((response) => response.json())
      .then((leaderboard) => dispatch(leaderboardFetchSuccess(leaderboard)))
  }
}

export function createGame(token) {
  return fetchGame({ token });
}

export function getGame(gameId, token) {
  return fetchGame({ gameId, token });
}

function fetchGame({ gameId, token }) {
  let url = CREATE_GAME_URL;
  let method = 'POST';
  if(gameId) {
    url = `${url}/${gameId}`;
    method = 'GET';
  }

  let options = { method: method };

  if(token) {
    options.headers = {
      'Authorization': `Bearer ${token}`,
    }
  }

  return dispatch => {
    fetch(url, options)
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

export function revealTile(game, x, y, token) {
  return dispatch => {
    let options = { method: 'GET' };

    if(token) {
      options.headers = {
        'Authorization': `Bearer ${token}`,
      }
    }
    fetch(revealTileUrl(game, x, y), options)
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

export function playerLoggedIn({ profile, token }) {
  return {
    type: PLAYER_LOGGED_IN,
    payload: { profile, token }
  }
}

export function playerLoggedOut() {
  return {
    type: PLAYER_LOGGED_OUT
  }
}
