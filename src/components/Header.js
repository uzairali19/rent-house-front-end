import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const hello = 'Hello World';
  console.log(hello);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
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
            </ul>
          </div>
        </div>
        <div>
          <ul>
            <li>Reservations</li>
            <li>My favorites</li>
            <li>Add house</li>
            <li>Delete house</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
