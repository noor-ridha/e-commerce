'use client'; //this is a client side component

import { createSlice } from '@reduxjs/toolkit';

const initialState: { items: any[]; totalAmount: number } = {
  items: [],
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { payload } = action;
      const updatedAmount = state.totalAmount + payload.price;
      const existingItemIndex = state.items.findIndex(
        (item) => item._id === payload._id,
      ); 

      const existingItem = state.items[existingItemIndex];
      let updatedItems;
      if (existingItem) {
        if (typeof (existingItem.amount) !== 'number') existingItem.amount = 1;
          const updatedItem = {
            ...existingItem,
            amount: existingItem.amount + 1,
          };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
        state.items = updatedItems;
      } else {
        state.items = [...state.items, {...payload, amount: 1}];
      }
      state.totalAmount = updatedAmount;
      
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
