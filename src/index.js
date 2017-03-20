import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
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
  id: 0,
  score: 0,
  gameOver: false,
  board: INITIAL_BOARD_STATE
};

const INITIAL_STATE = {
  game: INITIAL_GAME
}

const store = configureStore(INITIAL_STATE);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
