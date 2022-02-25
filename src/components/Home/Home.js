import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Header from '../Header';

const houseLogo = require('./cool.jpg');
const houseLogo2 = require('./warm.png');
const houseLogo3 = require('./house.jpeg');
const houseLogo4 = require('./home.jpeg');
const houseLogo5 = require('./download.jpeg');

const Home = () => (
  <div>
    <Header />
    <div className="main">
      <h1>Homely Rentals</h1>
      <h2>Kindly select a house for reservation</h2>
    </div>
    <div className="row">
      <div className="col-sm-6">
        <div className="card">
          <img src={houseLogo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Woodlands</h5>
            <p className="card-text">Spacious 2 bedroom, 1 bathroom apartment in Lakeview,available</p>
            <a href="/house-detail" className="btn btn-primary">See house</a>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card">
          <img src={houseLogo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Ivy Cottage</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="/house-detail" className="btn btn-primary">See house</a>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-6">
        <div className="card">
          <img src={houseLogo3} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Hillside</h5>
            <p className="card-text">Spacious 2 bedroom, 1 bathroom apartment in Lakeview,available</p>
            <a href="/house-detail" className="btn btn-primary">See house</a>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card">
          <img src={houseLogo4} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Sunyside</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="/house-detail" className="btn btn-primary">See house</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
