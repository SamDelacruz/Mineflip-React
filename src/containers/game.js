import React from 'react';
import { connect } from 'react-redux';

import BoardContainer from './board_container';
import NewGameButton from './new_game_button';

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
      return (
        <div className="overlay">
          {content}
        </div>
      )
    }
  }
  render() {      
    return (
      <div className="container-fluid board">
        <div className="row justify-content-lg-center">
          <div className="col-lg-6">
              <div className="card board">
                <BoardContainer/>
              </div>
              {this.renderOverlay()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { game_won: state.game.game_won, game_lost: state.game.game_lost, score: state.game.score };
}

export default connect(mapStateToProps)(Game);
