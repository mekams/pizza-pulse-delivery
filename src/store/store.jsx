import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './shop-cart/CartSlice';
import cartUiSlice from './shop-cart/CartUiSlice';
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUI: cartUiSlice.reducer,
  },
});

export default store;
