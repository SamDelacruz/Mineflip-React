import React from 'react';
import { browserHistory } from 'react-router';

export default class NotFound extends React.Component {
  componentDidMount() {
    setTimeout(() => browserHistory.push('/'), 3000)
  }
  render() {
    return (
      <div className="container-fluid board">
        <div className="row justify-content-lg-center">
          <div className="col-lg-9">
              <p className="board text-center">The page you requested could not be found. Redirecting to home...</p>
          </div>
        </div>
      </div>
    )
  }
}