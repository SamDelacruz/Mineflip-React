import React, { Component } from 'react';
import axios from 'axios';
import Row from './row';
import Cell from './cell';

const [ WIDTH, HEIGHT ] = [ 5, 5 ];

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: {},
      loaded: false
    };
  }

  render() {
    return (
      <table className='game-board'>
        <tbody>
          { this._columnOfRows() }
        </tbody>
      </table>
    );
  }

  componentDidMount() {
    this._startGame();
  }

  _startGame() {
    axios.post('http://localhost:3000/games')
    .then((response) => {
      this.setState({
        game: response.data,
        loaded: true
      });
    });
  }

  _cellClick(e, row, col) {
    e.preventDefault();
    console.log(`[${row},${col}]`);
    this._reveal(row, col);
  }

  _reveal(i, j) {
    const gameId = this.state.game.id;
    const url = `http://localhost:3000/games/${gameId}/tiles/${i}/${j}`;
    axios.put(url)
    .then((response) => {
      this.setState({
        ...this.state, game: response.data
      });
    });
  }

  _rowOfCells(j) {
    return [...Array(WIDTH).keys()].map((i) => {
      const props = {
        rowIdx: j,
        colIdx: i,
        onClickHandler: (e) => { this._cellClick(e, i, j) },
        key: `cell-${i}${j}`
      };
      return (
        <Cell {...props}>
          {this._cellContent(i, j)}
        </Cell>
      );
    });
  }

  _cellContent(i, j) {
    if (this.state.loaded) {
      return this.state.game.board[j][i];
    }
    return '*';
  }

  _cellProps(i, j) {
    return {
      rowIdx: j,
      colIdx: i,
      onClickHandler: this._cellHandler(i, j),
      key: `cell-${i}${j}`
    };
  }

  _cellHandler(i, j) {
    const content = this._cellContent(i, j);
    if (content === '?') {
      return (e) => { this._cellClick(e, i, j) };
    } else {
      return () => {};
    }
  }

  _columnOfRows() {
    return [...Array(HEIGHT).keys()].map((j) => {
      const props = {
        rowIdx: j,
        key: `row-${j}`
      }
      return (
        <Row {...props}>
          { this._rowOfCells(j) }
        </Row>
      );
    });
  }
}

export default Board;
