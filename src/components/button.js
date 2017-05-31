import React from 'react';

export default class Button extends React.PureComponent {
  render() {
    return (
      <button onClick={this.props.onClick} className="btn btn-primary btn-block">{this.props.children || 'Submit'}</button>
    )
  }
}