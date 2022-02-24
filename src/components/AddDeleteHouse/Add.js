import React from 'react';
import Header from '../Header';
import './Add.css';

const Add = () => (
  <div>
    <Header />
    <form className="add-form">
      <h2>This is a new house adding form</h2>
      <label>
        House name:
        <input type="text" />
      </label>
      <label>
        Rooms:
        <input type="text" />
      </label>
      <label>
        Beds:
        <input type="text" />
      </label>
      <label>
        Baths:
        <input type="text" />
      </label>
      <label>
        Price:
        <input type="text" />
      </label>
      <label>
        Image:
        <input type="text" />
      </label>
      <label>
        Description:
        <textarea type="text" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
);

export default Add;
