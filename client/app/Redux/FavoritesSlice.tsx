'use client'; //this is a client side component

import { createSlice } from '@reduxjs/toolkit';

let fav: any[] = [];

fav = localStorage.getItem('favs')
  ? JSON.parse(localStorage.getItem('favs') as any)
  : fav;

const initialState: { watches: any[] } = {
  watches: fav,
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const { payload } = action;
      const temp = [...state.watches, payload];
      localStorage.setItem("favs", JSON.stringify(temp));
      state.watches = temp;
    },

    removeFromFavorites: (state, action) => {
      const { payload } = action;
      const temp = state.watches.filter(
        (watch) => watch._id !== payload._id,
      );
      localStorage.setItem('favs', JSON.stringify(temp));
      state.watches = temp;
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
