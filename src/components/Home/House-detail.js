import React from 'react';
import './House-detail.css';
import { Link } from 'react-router-dom';
import Header from '../Header';

const houseLogo = require('./cool.jpg');
const houseLogo2 = require('./warm.png');
const houseLogo3 = require('./house.jpeg');
const houseLogo4 = require('./home.jpeg');
const houseLogo5 = require('./download.jpeg');

const HouseDetail = () => (
  <div>
    <Header />
    <div className="house">
      <img className="img1" src={houseLogo} alt="House view" />
      <h5>Woodlands</h5>
      <p>
        Spacious 2 bedroom, 1 bathroom apartment in Lakeview,available. Call
        John 336-554
      </p>
      <Link to="/reserve">
        <button type="button" className="button">
          Reservation
        </button>
      </Link>
      <Link to="/favorite">
        <button type="button" className="button">
          Add to favorite
        </button>
      </Link>
      <Link to="/home">
        <button type="button" className="button">
          Close
        </button>
      </Link>
    </div>
    <div className="house">
      <img className="img1" src={houseLogo2} alt="House view" />
      <h5>Hillside</h5>
      <p>
        Spacious 2 bedroom, 1 bathroom apartment in Lakeview,available. Call
        John 336-554
      </p>
      <Link to="/reserve">
        <button type="button" className="button">
          Reservation
        </button>
      </Link>
      <Link to="/favorite">
        <button type="button" className="button">
          Add to favorite
        </button>
      </Link>
      <Link to="/#">
        <button type="button" className="button">
          Delete
        </button>
      </Link>
      <Link to="/home">
        <button type="button" className="button">
          Close
        </button>
      </Link>
    </div>
  </div>
);

export default HouseDetail;
