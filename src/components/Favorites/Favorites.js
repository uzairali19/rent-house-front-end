import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import './Favorites.css';

const houseLogo = require('./cool.jpg');

const Favorites = () => (
  <div className="container">
    <div className="row">
      <div className="col">
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up th
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Favorites;
