import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Header from './components/Header';

import Home from './components/Home/Home';
import HouseDetail from './components/Home/House-detail';
import Favorites from './components/Favorites/Favorites';
import Reservation from './components/Reservation/Reservation';
import Add from './components/AddDeleteHouse/Add';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="sign-in" element={<Login />} />
      <Route path="sign-up" element={<SignUp />} />
      {/* <Route path="/home" element={<Home />} /> */}
      <Route path="/house-detail" element={<HouseDetail />} />
      <Route path="/wishlist" element={<Favorites />} />
      <Route path="/reservations" element={<Reservation />} />
      <Route path="/add-house" element={<Add />} />
    </Routes>
  </BrowserRouter>
);

export default App;
