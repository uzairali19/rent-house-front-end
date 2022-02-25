import React from 'react';
import Header from '../Header';
import './Add.css';

const Add = () => (
  <div>
    <Header />
    <form className="add-form">
      <h2 className="form-header">A new house adding form</h2>
      <input type="text" placeholder="Item name" className="house-input" maxLength={50} />
      <input type="text" placeholder="Rooms" className="house-input" maxLength={10} />
      <input type="text" placeholder="Beds" className="house-input" maxLength={10} />
      <input type="text" placeholder="Baths" className="house-input" />
      <input type="text" placeholder="Price" className="house-input" />
      <input type="text" placeholder="Image" className="house-input" />
      <textarea type="text" placeholder="Enter item description" className="house-desc" maxLength={200} />
      <input type="submit" value="Submit" className="form-submit-btn" />
    </form>
  </div>
);

export default Add;
