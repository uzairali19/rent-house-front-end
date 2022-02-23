import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, logoutUser, signUp } from './redux/actions/actions';

function App() {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const [regUser, setRegUser] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  });
  const dispatch = useDispatch();

  const signIn = () => {
    if (user.email === '' || user.password === '') {
      alert('Please enter email and password');
      return;
    }
    const userData = {
      email: user.email,
      password: user.password
    };
    dispatch(loginUser(userData));
  };

  const signOut = () => {
    dispatch(logoutUser());
  };

  const register = () => {
    const userData = {
      name: regUser.name,
      email: regUser.email,
      password: regUser.password,
      password_confirmation: regUser.passwordConfirmation
    };
    dispatch(signUp(userData));
  };

  return (
    <div className="App">
      <div>
        <h1>Register User</h1>
        <input
          type="text"
          onChange={(e) =>
            setRegUser({
              name: e.target.value,
              email: regUser.email,
              password: regUser.password,
              passwordConfirmation: regUser.passwordConfirmation
            })
          }
        />
        <input
          type="email"
          onChange={(e) =>
            setRegUser({
              name: regUser.name,
              email: e.target.value,
              password: regUser.password,
              passwordConfirmation: regUser.passwordConfirmation
            })
          }
        />
        <input
          type="password"
          onChange={(e) =>
            setRegUser({
              name: regUser.name,
              email: regUser.email,
              password: e.target.value,
              passwordConfirmation: regUser.passwordConfirmation
            })
          }
        />
        <input
          type="password"
          onChange={(e) =>
            setRegUser({
              name: regUser.name,
              email: regUser.email,
              password: regUser.password,
              passwordConfirmation: e.target.value
            })
          }
        />
        <button type="submit" onClick={register}>
          Sign Up
        </button>
      </div>
      <input
        type="email"
        onChange={(e) =>
          setUser({ email: e.target.value, password: user.password })
        }
      />
      <input
        type="password"
        onChange={(e) =>
          setUser({ email: user.email, password: e.target.password })
        }
      />
      <button type="submit" onClick={signIn}>
        Submit
      </button>
      <button type="submit" onClick={signOut}>
        Logout
      </button>
    </div>
  );
}

export default App;
