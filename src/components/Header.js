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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Homely Rentals
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/reservations"
                >
                  Reservations
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/wishlist">
                  Wishlist
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add-house">
                  Add House
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <ul className=" ml-auto">
                {user.loggedIn ? (
                  <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={handleLogout}>
                      Logout
                    </Link>
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
        </div>
      </nav>
    </>
  );
};

export default Header;
