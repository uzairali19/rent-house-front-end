import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Header from '../Header';

const houseLogo = require('./cool.jpg');
const houseLogo2 = require('./warm.png');
const houseLogo3 = require('./house.jpeg');

const Home = () => (

  <div>
    <Header />
    <div className="main">
      <h1>Homely Rentals</h1>
      <h2>Kindly select a house for reservation</h2>

    </div>
    <div className="row">
      <div className="item">
        <img src={houseLogo} alt="House view" />
        <h5>House #1</h5>
        <p>Spacious 2 bedroom, 1 bathroom apartment in Lakeview,available</p>
        <Link to="/house-detail">
          <button type="button" className="button">
            <span>
              See house
            </span>
          </button>
        </Link>
      </div>
      <div className="item">
        <img src={houseLogo2} alt="House view" />
        <h5>House #2</h5>
        <p>Some short description or could be removed.</p>
        <Link to="/house-detail">
          <button type="button" className="button">See house</button>
        </Link>
      </div>
      <div className="item">
        <img src={houseLogo3} alt="House view" />
        <h5>House #3</h5>
        <p>Some short description or could be removed.</p>
        <Link to="/house-detail">
          <button type="button" className="button">See house</button>
        </Link>
      </div>
    </div>
  </div>
);

export default Home;
