import React from 'react';
import { connect } from 'react-redux';
import { createGame } from '../actions';

import Button from '../components/button';

class NewGameButton extends React.PureComponent {
  render() {
    return (
      <Button onClick={() => this.props.createGame(this.props.token)}>{this.props.children}</Button>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.player.token,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createGame: (token) => dispatch(createGame(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewGameButton);
