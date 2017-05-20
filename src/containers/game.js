import React from 'react';

import Board from './board';
import Scores from './scores';
import Controls from './controls';

export default function() {
  return (
    <div className="container-fluid board">
      <div className="row justify-content-lg-center">
        <div className="col-lg-6">
          <Board />
        </div>
        <div className="col-lg-3">
          <Scores />
          <Controls />
        </div>
      </div>
    </div>
  );
}
