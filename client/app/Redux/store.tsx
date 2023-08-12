'use client';
import { configureStore } from '@reduxjs/toolkit';
import favoritesSlice from './FavoritesSlice';
import cartSlice from './CartSlice';

export const store = configureStore({
  reducer: {
    favorites: favoritesSlice,
    carts: cartSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
