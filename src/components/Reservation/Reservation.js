import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import './Reservation.css';

const houseLogo = require('./cool.jpg');

const Reservation = () => (
  <div>
    <Header />
    <div className="house">
      <img className="img1" src={houseLogo} alt="House view" />
      <h5>House #</h5>
      <p>
        Spacious 2 bedroom, 1 bathroom apartment in Lakeview,available. Call
        John 336-554
      </p>
      <Link to="/reserve">
        <button type="button" className="button">
          Unlike
        </button>
      </Link>
    </div>
  </div>
);

export default Reservation;
