import React from 'react';

export default class Leaderboard extends React.PureComponent {
  renderItem(item) {
    return (
      <tr key={`ranking-${item.rank}`}>
        <th scope="row">{item.rank + 1}</th>
        <td>{item.name}</td>
        <td>{item.score}</td>
      </tr>
    );
  }
  render() {
    return (
      <div className='card'>
         <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <span className="nav-link active" href="#">All</span>
              </li>
            </ul>
          </div>
        <div className="card-block">
          <h4 className="card-title mb-0">All time total</h4>
        </div>
        <table className="table table-striped mb-0">
          <tbody>
          {this.props.scores.map(item => this.renderItem(item))}
          </tbody>
        </table>
      </div>
    );
  }
}