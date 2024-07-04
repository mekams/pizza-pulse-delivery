import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import Home from '../components/pages/Home';
import AllFoods from '../components/pages/AllFoods';
import FoodDetails from '../components/pages/FoodDetails';
import Cart from '../components/pages/Cart';
import Checkout from '../components/pages/Checkout';
import Contact from '../components/pages/Contact';
import Login from '../components/pages/Login';
import Register from '../components/pages/Register';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/foods' element={<AllFoods />} />
      <Route path='/foods/:id' element={<FoodDetails />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  );
};

export default Router;
