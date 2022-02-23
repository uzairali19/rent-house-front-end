import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const hello = 'Hello World';
  console.log(hello);
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Sign In</h3>
          <div className="form-group">
            <label htmlFor="email1">Email address</label>
            <input
              id="email1"
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password1">Password</label>
            <input
              id="password1"
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
          <p className="forgot-password text-right">
            <Link to="/sign-up">New Account?</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
