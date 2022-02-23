import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  });

  const ids = {
    name: 'name',
    email: 'email',
    password: 'password',
    passwordConfirmation: 'passwordConfirmation'
  };

  const handleChange = (e) => {
    switch (e.target.id) {
      case ids.name:
        setNewUser({ ...newUser, name: e.target.value });
        break;
      case ids.email:
        setNewUser({ ...newUser, email: e.target.value });
        break;
      case ids.password:
        setNewUser({ ...newUser, password: e.target.value });
        break;
      case ids.passwordConfirmation:
        setNewUser({ ...newUser, passwordConfirmation: e.target.value });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newUser);
    setNewUser({ name: '', email: '', password: '', passwordConfirmation: '' });
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Sign Up</h3>
          <div className="form-group">
            <label>Name</label>
            <input
              id={ids.name}
              type="text"
              className="form-control"
              placeholder="Name"
              value={newUser.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              id={ids.email}
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={newUser.email}
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
              value={newUser.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              id={ids.passwordConfirmation}
              type="password"
              className="form-control"
              placeholder="Confirm password"
              value={newUser.passwordConfirmation}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={handleSubmit}
          >
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
