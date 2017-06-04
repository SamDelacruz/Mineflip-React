import React from 'react';

import loading from './loading.svg';

export default class Callback extends React.PureComponent {
  render() {
    const style = {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white'
    };

    this.props.route.auth.handleAuthentication();

    return (
      <div style={style}>
        <img src={loading} alt="loading"/>
      </div>
    );
  }
}