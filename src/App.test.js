import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

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

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <p>Test me</p>
    </Provider>,
    div
  );
});
