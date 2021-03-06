import React from 'react';
import { connect } from 'react-redux';

import BoardContainer from './board_container';
import NewGameButton from './new_game_button';

import { fetchLeaderboard } from '../actions';

const GameWon = ({score}) => {
  return (
    <div className="card-block text-center">
      <h2>You win!</h2>
      <p>Score: {score}</p>
      <NewGameButton>Play again</NewGameButton>
    </div>
  )
}

const GameLost = () => {
  return (
    <div className="card-block text-center">
      <h2>Game Over!</h2>
      <p>Try again?</p>
      <NewGameButton>Retry</NewGameButton>
    </div>
  )
}

class Game extends React.PureComponent {
  renderOverlay() {
    var content;
    if(this.props.game_lost) {
      content = (
        <GameLost/>
      )
    }

    if(this.props.game_won) {
      content = (
        <GameWon score={this.props.score}/>
      )
    }

    if(content) {
      this.props.fetchLeaderboard();
      return (
        <div className="overlay">
          {content}
        </div>
      )
    }
  }
  render() {      
    return (
      <div className="card board">
        <BoardContainer/>
        {this.renderOverlay()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { game_won: state.game.game_won, game_lost: state.game.game_lost, score: state.game.score };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLeaderboard: () => setTimeout(() => dispatch(fetchLeaderboard()), 1000)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
