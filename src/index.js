import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';
import { Router, Route, browserHistory } from 'react-router';

import { syncHistoryWithStore } from 'react-router-redux';

import Auth from './service/auth';

import App from './App';
import Callback from './components/callback';
import NotFound from './components/not_found';
import configureStore from './store/configureStore';
import './index.css';
ReactGA.initialize('UA-53289009-3');

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

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


const idToken = localStorage.getItem('id_token');
const auth = new Auth();

if(idToken && auth.isAuthenticated()) {
  INITIAL_STATE.player = {
    token: idToken
  }
}

console.log(INITIAL_STATE)

const store = configureStore(INITIAL_STATE);

const history = syncHistoryWithStore(
  browserHistory,
  store
);

auth.store = store;
auth.fetchUserInfo();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} onUpdate={logPageView} >
      <Route path={'/'} auth={auth} component={App}/>
      <Route path={'/games/:id'} auth={auth} component={App}/>
      <Route path={'/oauth_cb'} auth={auth} component={Callback}/>
      <Route path={'/*'} component={NotFound}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
