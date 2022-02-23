import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const houseLogo = require('./house-view.png');

const Home = () => (
  <div>
    <div className="row">
      <div className="item">
        <img src={houseLogo} alt="House view" />
        <h5>House #1</h5>
        <p>Spacious 2 bedroom, 1 bathroom apartment in Lakeview,available</p>
        <Link to="/house-detail">
          <button type="button">See house</button>
        </Link>
      </div>
      <div className="item">
        <img src={houseLogo} alt="House view" />
        <h5>House #2</h5>
        <p>Some short description or could be removed.</p>
        <Link to="/house-detail">
          <button type="button">See house</button>
        </Link>
      </div>
      <div className="item">
        <img src={houseLogo} alt="House view" />
        <h5>House #3</h5>
        <p>Some short description or could be removed.</p>
        <Link to="/house-detail">
          <button type="button">See house</button>
        </Link>
      </div>
    </div>
  </div>
);

export default Home;
