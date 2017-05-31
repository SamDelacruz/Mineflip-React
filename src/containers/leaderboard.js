import React from 'react';
import { connect } from 'react-redux';
import Leaderboard from '../components/leaderboard';
import { fetchLeaderboard } from '../actions';

class LeaderboardContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props.fetchLeaderboard();
  }
  render() {
    return (
      <Leaderboard scores={this.props.scores}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    scores: state.leaderboard
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLeaderboard: () => { dispatch(fetchLeaderboard()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeaderboardContainer);