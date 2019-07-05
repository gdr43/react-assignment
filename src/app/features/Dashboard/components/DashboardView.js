import React from 'react';
import { connect } from 'react-redux';
import { getDashboard } from 'features/Dashboard/actions';
import './DashboardView.css';

class DashboardView extends React.PureComponent {
  componentDidMount() {
    this.props.getDashboard(this.props.idToken);
  }
  render() {
    const { userData } = this.props.dashboard;
    return (
      <div>
        <h2>User Data:</h2>
        {userData.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                {Object.keys(userData[0]).map(head => (
                  <th key={head} className="thead-light">
                    {head.toUpperCase()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {userData.map(user => (
                <tr key={user.id}>
                  {Object.values(user).map((data, index) => (
                    <td key={index}>{data}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h3 className="no-data offset-md-2">User data not available</h3>
        )}
      </div>
    );
  }
}

export default connect(
  state => ({
    idToken: state.login.authDetails.idToken,
    dashboard: state.dashboard
  }),
  { getDashboard }
)(DashboardView);
