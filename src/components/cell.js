import React, { Component } from 'react';

class Cell extends Component {
  render() {
    return (
      <td className='board-cell' onClick={this.props.onClickHandler}>
        { this.props.children }
      </td>
    );
  }
}

export default Cell;
