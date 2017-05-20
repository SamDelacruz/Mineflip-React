import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Router, Route, browserHistory } from 'react-router';

import { syncHistoryWithStore } from 'react-router-redux';

import App from './App';
import configureStore from './store/configureStore';
import './index.css';

const INITIAL_BOARD_STATE = [
  ['?', '?', '?', '?', '?'],
  ['?', '?', '?', '?', '?'],
  ['?', '?', '?', '?', '?'],
  ['?', '?', '?', '?', '?'],
  ['?', '?', '?', '?', '?']
];

const INITIAL_GAME = {
  score: 0,
  gameOver: false,
  board: INITIAL_BOARD_STATE,
  hints: {
    cols: [],
    rows: []
  }
};

const INITIAL_STATE = {
  game: INITIAL_GAME
}

const store = configureStore(INITIAL_STATE);

const history = syncHistoryWithStore(
  browserHistory,
  store
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path={'/'} component={App}/>
      <Route path={'/games/:id'} component={App}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
