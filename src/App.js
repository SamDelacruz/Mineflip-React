import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createGame } from './actions';
import Board from './containers/board';
import Scores from './containers/scores';
import Controls from './containers/controls';

class App extends Component {
  componentDidMount() {
    if(this.props.createGame) {
      this.props.createGame();
    }
  }

  render() {
    return (
      <div className="container-fluid board">
        <div className="row justify-content-lg-center">
          <div className="col-lg-6">
            <Board />
          </div>
          <div className="col-lg-3">
            <Scores />
            <Controls />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    createGame: dispatch(createGame())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
