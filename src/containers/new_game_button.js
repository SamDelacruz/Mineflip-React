import React from 'react';
import { connect } from 'react-redux';
import { createGame } from '../actions';

import Button from '../components/button';

class NewGameButton extends React.PureComponent {
  render() {
    return (
      <Button onClick={this.props.createGame}>{this.props.children}</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewGameButton);
