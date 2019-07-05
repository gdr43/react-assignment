import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DashboardView from 'features/Dashboard/components/DashboardView';

class Dashboard extends React.Component {
  render() {
    const { authDetails } = this.props.login;
    const isAuthenticated =
      authDetails && !authDetails.error && authDetails.idToken;
    return (
      <div className="container">
        <div className="row">
          {isAuthenticated ? (
            <div className="col-md-8 offset-md-2">
              <DashboardView />
            </div>
          ) : (
            <div className="col-md-6 offset-md-3">
              <h1>Please login to view this page</h1>
              <h6 className="offset-md-4">
                <Link to="/" replace>
                  click here
                </Link>{' '}
                to login
              </h6>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    login: state.login
  }),
  {}
)(Dashboard);
