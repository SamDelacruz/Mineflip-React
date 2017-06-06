import { connect } from 'react-redux';
import { revealTile } from '../actions';
import Board from '../components/board';

function mapStateToProps(state) {
  return { 
    board: state.game.board,
    gameId: state.game.id,
    hints: state.game.hints,
    blurred: state.game.game_won || state.game.game_lost,
    token: state.player.token
  }
}

function mapDispatchToProps(dispatch) {
  return {
    revealTile: (gameId, x, y, token) => dispatch(revealTile(gameId, x, y, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);