import React from 'react';
import { connect } from 'react-redux';

import Board from './board';
import Scores from './scores';
import Controls from './controls';

const GameWon = ({score}) => {
  return (
    <div className="card-block text-center">
      <h2>You win!</h2>
      <p>Score: {score}</p>
      <Controls newGameBtnContents="Play again" />
    </div>
  )
}

const GameLost = () => {
  return (
    <div className="card-block text-center">
      <h2>Game Over!</h2>
      <p>Try again?</p>
      <Controls newGameBtnContents="Retry" />
    </div>
  )
}

const Game = function(props) {
  const renderOverlay = () => {
    var content;
    if(props.game_lost) {
      content = (
        <GameLost/>
      )
    }

    if(props.game_won) {
      content = (
        <GameWon score={props.score}/>
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
  return (
    <div className="container-fluid board">
      <div className="row justify-content-lg-center">
        <div className="col-lg-6">
            <div className="card board">
              <Board/>
            </div>
            {renderOverlay()}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { game_won: state.game.game_won, game_lost: state.game.game_lost, score: state.game.score };
}

export default connect(mapStateToProps)(Game);
