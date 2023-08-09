'use client'; //this is a client side component

import { createSlice } from '@reduxjs/toolkit';

const initialState: { watches: any[] } = {
  watches: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const { payload } = action;
      state.watches = [...state.watches, payload];
    },

    removeFromFavorites: (state, action) => {
      const { payload } = action;
      state.watches = state.watches.filter((watch) => watch.id !== payload.id);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
