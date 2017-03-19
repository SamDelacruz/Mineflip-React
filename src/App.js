import React, { Component } from 'react';
import Board from './containers/board';

class App extends Component {
  render() {
    return (
      <div className="container-fluid board">
        <div className="row justify-content-lg-center">
          <div className="col-lg-6">
            <div className="card board">
              <div className="card-block">
                <Board />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
