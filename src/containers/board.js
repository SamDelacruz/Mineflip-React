import React, { Component } from 'react';
import { connect } from 'react-redux';
import { revealTile } from '../actions';

const COLOR_RED = "#FF4136";
const COLOR_GREEN = "#2ECC40";
const COLOR_YELLOW = "#FFDC00";
const COLOR_BLUE = "#0074D9";
const COLOR_PURPLE = "#B10DC9";

class Board extends Component {
  renderBoard() {
    return (
      <svg className="board" viewBox="0 0 700 720">
        <g className="box">
          {this.renderLines()}
          {this.renderCells()}
        </g>
      </svg>
    );
  }

  renderLines() {
    return (
      <g className="lines" transform="translate(0, -5)" strokeWidth="10">
        <line x1="0" y1="70" x2="610" y2="70" stroke={COLOR_RED} />
        <line x1="0" y1="190" x2="610" y2="190" stroke={COLOR_GREEN} />
        <line x1="0" y1="310" x2="610" y2="310" stroke={COLOR_YELLOW} />
        <line x1="0" y1="430" x2="610" y2="430" stroke={COLOR_BLUE} />
        <line x1="0" y1="550" x2="610" y2="550" stroke={COLOR_PURPLE} />
        <line x1="50" y1="40" x2="50" y2="640" stroke={COLOR_RED} />
        <line x1="170" y1="40" x2="170" y2="640" stroke={COLOR_GREEN} />
        <line x1="290" y1="40" x2="290" y2="640" stroke={COLOR_YELLOW} />
        <line x1="410" y1="40" x2="410" y2="640" stroke={COLOR_BLUE} />
        <line x1="530" y1="40" x2="530" y2="640" stroke={COLOR_PURPLE} />
      </g>
    );
  }

  renderCells() {
    return (
      <g className="cells">
        {this.props.board.map((row, rowIdx) => {
          return (
            <g key={`row-${rowIdx}`} className="row" transform={`translate(0,${10 + 120 * rowIdx})`}>
              {row.map((cell, colIdx) => {
                return this.renderCell(rowIdx, colIdx);
              })}
              <g className="cell" transform="translate(600, 0)">
                {this.renderHint(rowIdx)}
              </g>
            </g>
          );
        })}
        {this.renderHints()}
      </g>
    );
  }

  cellOnClick(x, y) {
    this.props.revealTile(this.props.gameId, x, y);
  }

  // Put this in a component
  renderCell(rowIdx, colIdx, val) {
    return (
      <g className="cell" key={`cell-${rowIdx},${colIdx}`} transform={`translate(${colIdx * 120},0)`}>
        <rect className="shadow" width="100" height="100" fill="#CCCCCC" rx="10" ry="10" y="8"/>
        <g className="tile" onClick={() => this.cellOnClick(rowIdx, colIdx)}>
          <rect width="100" height="100" fill="#EFEFEF" rx="10" ry="10" />
          <text textAnchor="middle" x="50" y="67" fontSize="70" fill="#777" fontFamily="monospace">
            {this.props.board[colIdx][rowIdx]}
          </text>
        </g>
      </g>
    );
  }

  renderHints() {
    return (
      <g className="row" transform="translate(0, 610)">
        {this.props.board[0].map((_, colIdx) => {
          return (
            <g key={`hint-5,${colIdx}`} className="cell" transform={`translate(${colIdx * 120}, 0)`}>
              {this.renderHint(colIdx)}
            </g>
          )
        })}
      </g>
    );
  }

  // Probably make this a component too
  renderHint(idx) {
    let [ primaryColor, secondaryColor ] = (i => {
      switch(i) {
        case 0:
          return [ COLOR_RED, "#D00" ];
        case 1:
          return [ COLOR_GREEN, "#180" ];
        case 2:
          return [ COLOR_YELLOW, "#B80" ];
        case 3:
          return [ COLOR_BLUE, "#04B" ];
        case 4:
          return [ COLOR_PURPLE, "#808" ];
        default:
          return [ "#EFEFEF", "#777" ];
      }
    })(idx);

    return (
      <g className="hint" textAnchor="middle" fontSize="36" fill="#fff" fontFamily="monospace">
        <rect className="hint-shadow" width="100" height="100" fill={secondaryColor} rx="10" ry="10" y="8"/>
        <rect width="100" height="100" fill={primaryColor} rx="10" ry="10" />
        <text x="50" y="40">*4</text>
        <text x="50" y="80">9</text>
      </g>
    );
  }

  render() {
    return (
      <div>
        {this.renderBoard()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { board: state.game.board, gameId: state.game.id }
}

function mapDispatchToProps(dispatch) {
  return {
    revealTile: (gameId, x, y) => dispatch(revealTile(gameId, x, y))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
