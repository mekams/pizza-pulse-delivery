import React from 'react';
import Header from './Header.jsx'; // Importing Header component
import Footer from './Footer.jsx'; // Importing Footer component
import Routes from '../routes/Router.jsx'; // Importing Routes component
import ShopCart from '../components/UI/ShopCart.jsx'; // Importing ShopCart component
import { useSelector } from 'react-redux'; // Importing useSelector from react-redux

const Layout = () => {
  // Using useSelector to access Redux state
  const showCart = useSelector((state) => state.cartUI.cartIsVisable);

  return (
    <div>
      <Header /> {/* Render Header component */}
      
      {/* Conditional rendering of ShopCart component based on Redux state */}
      {showCart && <ShopCart />}
      
      <div>
        <Routes /> {/* Render Routes component */}
      </div>
      
      <Footer /> {/* Render Footer component */}
    </div>
  );
};

export default Layout; // Exporting Layout component
