import React, { Component } from 'react';
import { connect } from 'react-redux';

class Scores extends Component {
  render() {
    return (
      <div>
        <div className="card" style={{marginBottom: '1em'}}>
          <div className="card-block">
            <h2 className="card-title">MineFlip</h2>
            <hr />
            <h3 className="card-title">Score: {this.props.score}</h3>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { score: state.game.score, gameId: state.game.id }
}

export default connect(mapStateToProps)(Scores);
