import { createSlice } from '@reduxjs/toolkit';

const CartUiSlice = createSlice({
  name: 'cartUI',
  initialState: { cartIsVisable: false },

  reducers: {
    toggle(state) {
      state.cartIsVisable = !state.cartIsVisable;
    },
  },
});

export const cartUiActions = CartUiSlice.actions;
export default CartUiSlice;
