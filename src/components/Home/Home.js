import React from "react";
import './Home.css';
import { Link } from 'react-router-dom';

const houseLogo = require('./house-view.png');

const Home = () => {
  return (
    <div>
        <div className="item">
            <img src={houseLogo} alt="House view" />
            <h5>House #1</h5>
            <p>Some short description or could be removed.</p>
            <Link to={"/house-detail"}>
            <button type="button">See house</button>
            </Link>
        </div>
        <div className="item">
            <img src={houseLogo} alt="House view" />
            <h5>House #1</h5>
            <p>Some short description or could be removed.</p>
            <Link to={"/house-detail"}>
            <button type="button">See house</button>
            </Link>
        </div>
        <div className="item">
            <img src={houseLogo} alt="House view" />
            <h5>House #1</h5>
            <p>Some short description or could be removed.</p>
            <Link to={"/house-detail"}>
            <button type="button">See house</button>
            </Link>
        </div>
    </div>
  )
}

export default Home;
