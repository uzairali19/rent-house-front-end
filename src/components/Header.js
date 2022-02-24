import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleLogout = () => {
    // dispatch(logoutUser(user));

    const data = JSON.parse(localStorage.getItem('token'));

    data.forEach((item) => {
      if (item.user.email === user.user.email) {
        item.loggedIn = false;
      }
    });

    const localState = data;
    localStorage.setItem('token', JSON.stringify(localState));
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              {user.loggedIn ? (
                <li className="nav-item">
                  {/* <Link className="nav-link" to="/" onClick={handleLogout}>
                    Logout
                  </Link> */}
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/sign-in">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/sign-up">
                      Sign up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        <div>
          <ul>
            <Link to="/home">
              <li>Home </li>
            </Link>
            <Link to="/reservation">
              <li>Reservations</li>
            </Link>
            <Link to="/favorites">
              <li>My favorites</li>
            </Link>
            <Link to="/add">
              <li>Add house</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
