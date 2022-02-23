import React from "react";
import './Home.css';

const Home = () => {
  return (
    <div>
        <div className="item">
            <h5>House #1</h5>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button type="button">View</button>
        </div>
        <div className="item">
            <h5>House #2</h5>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a>Go somewhere</a>
        </div>
        <div className="item">
            <h5>House #3</h5>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a>Go somewhere</a>
        </div>
    </div>
  )
}

export default Home;
