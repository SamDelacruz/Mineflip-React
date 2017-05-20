import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createGame, getGame } from './actions';
import Game from './containers/game';

class App extends Component {
  componentDidMount() {
    if(this.props.createGame) {
      if(this.props.params === undefined) {
        this.props.createGame();
      } else {
        this.props.getGame(this.props.params.id);
      }
    }
  }
  render() {
    return (
      <Game />
    );
  }
}

function mapStateToProps(state) {
  return { };
}

function mapDispatchToProps(dispatch) {
  return {
    createGame: () => { dispatch(createGame()) },
    getGame: (id) => { dispatch(getGame(id)) }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
