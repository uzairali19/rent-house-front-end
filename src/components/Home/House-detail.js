import React from 'react';
import './Home.css';
import './House-detail.css';
import { Link } from 'react-router-dom';

const houseLogo = require('./download.jpeg');

const HouseDetail = () => (
  <div>
    <div className="house">
      <img src={houseLogo} alt="House view" />
      <h5>House #1</h5>
      <p>Spacious 2 bedroom, 1 bathroom apartment in Lakeview,available. Call John 336-554</p>
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
