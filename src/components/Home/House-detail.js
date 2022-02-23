import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const houseLogo = require('./house-view.png');

const HouseDetail = () => (
  <div>
    <div className="item">
      <img src={houseLogo} alt="House view" />
      <h5>House #1</h5>
      <p>Some quick example text to build on the card title and ...</p>
      <Link to="/reserve">
        <button type="button">Reservation</button>
      </Link>
      <Link to="/favorite">
        <button type="button">Add to favorite</button>
      </Link>
      <Link to="/home">
        <button type="button">Close</button>
      </Link>
    </div>
  </div>
);

export default HouseDetail;
