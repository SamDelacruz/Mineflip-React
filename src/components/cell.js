import React from 'react';

export default function(props){
  let {
    colIdx,
    onClickCB,
   } = props;
  return (
    <g className="cell" transform={`translate(${colIdx * 120},0)`}>
      <rect className="shadow" width="100" height="100" fill="#CCCCCC" rx="10" ry="10" y="8"/>
      <g className="tile" onClick={onClickCB}>
        <rect width="100" height="100" fill="#EFEFEF" rx="10" ry="10" />
        <text textAnchor="middle" x="50" y="70" fontSize="70" fill="#777" fontFamily="monospace">
          {props.children}
        </text>
      </g>
    </g>
  );
}
