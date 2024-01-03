import {createSlice} from '@reduxjs/toolkit';
import useCartData from '../hook/useCartData';

const initialState = {
  products: response,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {},
});
