import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Routes from '../routes/Router.jsx';
import Carts from '../components/UI/ShopCart.jsx';
import { useSelector } from 'react-redux';
const Layout = () => {
  const showCart = useSelector((state) => state.cartUI.cartIsVisable);
  return (
    <div>
      <Header />

      {showCart && <Carts />}
      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;