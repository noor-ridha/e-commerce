'use client'; //this is a client side component

import { createSlice } from '@reduxjs/toolkit';

const initialState: { items: any[] } = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { payload } = action;
      state.items = [...state.items, payload];
    },

    removeFromCart: (state, action) => {
      const { payload } = action;
      state.items = state.items.filter((watch) => watch._id !== payload._id);
    },

    emptyTheCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, emptyTheCart } = cartSlice.actions;

export default cartSlice.reducer;
