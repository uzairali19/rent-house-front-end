import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavPanel from './components/NavPanel';

import Login from './components/Auth/login.component';
import SignUp from './components/Auth/signup.component';
import Home from './components/Home/Home';
import HouseDetail from './components/Home/House-detail';

const App = () => (
  <BrowserRouter>
    <Routes>
      <div className="App">
        <NavPanel />
        {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
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
        </nav> */}
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Route exact path="/" element={<Login />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/house-detail" element={<HouseDetail />} />
          </div>
        </div>
      </div>
    </Routes>
  </BrowserRouter>
);

export default App;
