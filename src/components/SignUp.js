import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const hello = 'Hello World';
  console.log(hello);
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Sign Up</h3>
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered?&nbsp;
            <Link to="/sign-in">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
