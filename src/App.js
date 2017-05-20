import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createGame, getGame } from './actions';
import Game from './containers/game';

class App extends Component {
  constructor(props) {
    super(props);
    if(props.params.id === undefined) {
        this.props.createGame();
      } else {
        this.props.getGame(props.params.id);
      }
  }

  componentWillUpdate(nextProps, nextState) {
    // When game in url doesn't match that in the store, fetch it
    if(nextProps.currentGameId !== nextProps.params.id) {
      this.props.getGame(nextProps.params.id);
    }
  }
  render() {
    return (
      <Game />
    );
  }
}

function mapStateToProps(state) {
  return { currentGameId: state.game.id };
}

function mapDispatchToProps(dispatch) {
  return {
    createGame: () => { dispatch(createGame()) },
    getGame: (id) => { dispatch(getGame(id)) }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
