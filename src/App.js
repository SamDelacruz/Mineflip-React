import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createGame, getGame } from './actions';
import Game from './containers/game';
import LeaderboardContainer from './containers/leaderboard';
import UserLoginContainer from './containers/user_login';

class App extends Component {
  constructor(props) {
    super(props);
    if(props.params.id === undefined) {
      this.props.createGame();
    } else {
      this.props.getGame(props.params.id);
    }

    this.auth = this.props.route.auth;
  }

  componentWillUpdate(nextProps, nextState) {
    // When game in url doesn't match that in the store, fetch it
    if(nextProps.currentGameId !== nextProps.params.id) {
      this.props.getGame(nextProps.params.id);
    }
  }
  render() {
    return (
      <div className="container-fluid board">
        <div className="row justify-content-lg-center">
          <div className="col-lg-6">
            <Game />
          </div>
          <div className="col-lg-3">
            <LeaderboardContainer/>
            <UserLoginContainer auth={this.auth}/>
          </div>
        </div>
      </div>
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
