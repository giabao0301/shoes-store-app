import {ConfigureStore} from '@reduxjs/toolkit';
import {productsSlice} from './productsSlice';

export const store = ConfigureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});
