import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const dispatch = useDispatch();

  const ids = {
    email: 'email',
    password: 'password'
  };

  const handleChange = (e) => {
    switch (e.target.id) {
      case ids.email:
        setUser({ ...user, email: e.target.value });
        break;
      case ids.password:
        setUser({ ...user, password: e.target.value });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(user);

    const loginUse = {
      email: user.email,
      password: user.password
    };

    // dispatch(loginUser(loginUse));

    setUser({ email: '', password: '' });
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form className="form">
          <h3>Sign In</h3>
          <div className="form-group">
            <label>Email address</label>
            <input
              id={ids.email}
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              id={ids.password}
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={user.password}
              onChange={handleChange}
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

          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={handleSubmit}
          >
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
