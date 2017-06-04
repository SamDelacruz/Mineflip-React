import React from 'react';
import Button from '../components/button';
import { connect } from 'react-redux';

class UserLoginContainer extends React.PureComponent {
  renderContent() {
    if(this.props.loggedIn) {
      return (
        <div>
          <p className="card-text text-center">Player: {this.props.profile.given_name}</p>
          <Button onClick={() => this.props.auth.logout()}>Logout</Button>
        </div>
      );
    }
    return (
      <div>
        <p className="card-text text-center">Login to record scores</p>
        <Button onClick={() => this.props.auth.login()}>Login</Button>
      </div>
    )
  }
  render() {
    const style = {
      marginTop: '10px'
    }
    return (
      <div className="card" style={ style } >
        <div className="card-block">
          {this.renderContent()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.player.loggedIn,
    profile: state.player.profile
  };
}

export default connect(mapStateToProps)(UserLoginContainer);