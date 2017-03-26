import React, { Component } from 'react';
import {
  COLOR_RED, COLOR_GREEN, COLOR_YELLOW, COLOR_BLUE, COLOR_PURPLE
} from '../containers/board';

export default class Hint extends Component {
  render() {
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
    })(this.props.idx);

    return (
      <g className="hint" textAnchor="middle" fontSize="36" fill="#fff" fontFamily="monospace">
        <rect className="hint-shadow" width="100" height="100" fill={secondaryColor} rx="10" ry="10" y="8"/>
        <rect width="100" height="100" fill={primaryColor} rx="10" ry="10" />
        <text x="50" y="40">{this.props.mines}</text>
        <text x="50" y="80">{this.props.points}</text>
      </g>
    );
  }
}
