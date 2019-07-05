import React from 'react';
import { connect } from 'react-redux';
import {
  handleInputChange,
  handleLogin,
  hideLoginError
} from 'features/login/actions';
import { LoginForm } from 'features/Login/components/LoginForm';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  handleInput = ({ target: { id, value } }) => {
    this.props.handleInputChange({ id, value });
  };
  handleSubmit = () => {
    const { userName, password } = this.props.login;
    this.props.handleLogin({ userName, password });
  };
  closeError = () => {
    setTimeout(() => {
      this.props.hideLoginError();
    }, 2000);
  };

  render() {
    const { userName, password, authDetails } = this.props.login;
    const isError = authDetails && authDetails.error;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            {authDetails && !authDetails.error && authDetails.idToken ? (
              <Redirect
                to={{
                  pathname: '/dashboard'
                }}
              />
            ) : (
              <LoginForm
                userName={userName}
                password={password}
                authDetails={authDetails}
                handleInputChange={this.handleInput}
                handleSubmit={this.handleSubmit}
              />
            )}
          </div>
        </div>
        {isError && this.closeError()}
      </div>
    );
  }
}

export default connect(
  state => ({
    login: state.login
  }),
  {
    handleInputChange,
    handleLogin,
    hideLoginError
  }
)(Login);
