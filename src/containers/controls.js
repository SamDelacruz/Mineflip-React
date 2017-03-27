import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createGame } from '../actions';

class Controls extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-block">
            <button onClick={this.props.createGame} className="btn btn-primary btn-block">New Game</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { gameId: state.game.id }
}

function mapDispatchToProps(dispatch) {
  return {
    createGame: () => dispatch(createGame())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
