import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';

const Favorites = () => (
  <div>
    <Header />
    <div className="item">
      <h5>House #1</h5>
      <p>Spacious 2 bedroom, 1 bathroom apartment in Lakeview,available</p>
      <Link to="/house-detail">
        <button type="button" className="button">
          <span>See house</span>
        </button>
      </Link>
    </div>
  </div>
);

export default Favorites;
