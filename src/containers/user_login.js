import React from 'react';
import Button from '../components/button';

export default class UserLoginContainer extends React.PureComponent {
  renderContent() {
    if(this.props.user) {
      return (
        <div>
          <p className="card-text text-center">Player: {this.props.user.name}</p>
          <Button>Logout</Button>
        </div>
      );
    }
    return (
      <div>
        <p className="card-text text-center">Login to record scores</p>
        <Button onClick={() => console.log('LOG ME IN')}>Login</Button>
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