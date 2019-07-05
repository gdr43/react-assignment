import React from 'react';
import './LoginForm.css';

export const LoginForm = props => {
  const { authDetails, userName, password } = props;
  const isError = authDetails && authDetails.error;
  return (
    <div className="card root">
      <div className="card-body">
        <h1 className="card-title">Login</h1>
        <label htmlFor="userName">Username: </label>
        <input
          autoFocus
          type="email"
          id="userName"
          value={userName}
          onChange={props.handleInputChange}
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={props.handleInputChange}
        />
        <br />
        <button
          className="btn btn-sm btn-primary offset-md-4"
          onClick={props.handleSubmit}
        >
          Login
        </button>
      </div>
      <p className="error">{isError && authDetails.message}</p>
    </div>
  );
};
