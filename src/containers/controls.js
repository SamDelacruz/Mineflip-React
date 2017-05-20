import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createGame } from '../actions';

class Controls extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.createGame} className="btn btn-primary btn-block">{this.props.newGameBtnContents}</button>
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
