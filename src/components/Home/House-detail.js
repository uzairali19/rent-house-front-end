import React from "react";
import './Home.css';
import { Link } from 'react-router-dom';

const houseLogo = require('./house-view.png');

const HouseDetail = () => {
  return (
    <div>
        <div className="item">
            <img src={houseLogo} alt="House view" />
            <h5>House #1</h5>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to={"/house-detail"}>
            <button type="button">Reserv</button>
            </Link>
            <Link to={"/house-detail"}>
            <button type="button">Add to fovorite</button>
            </Link>
            <Link to={"/house-detail"}>
            <button type="button">Close</button>
            </Link>
        </div>
    </div>
  )
}

export default HouseDetail;
