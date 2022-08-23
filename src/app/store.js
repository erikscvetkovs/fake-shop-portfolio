import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import orderReducer from '../features/order/orderSlice';
import apiReducer from '../features/api/apiSlicer'
import categorySlice from '../features/category/categorySlice';
import cartSlicer from '../features/cart/cartSlicer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    orders: orderReducer,
    api: apiReducer,
    category: categorySlice,
    cart: cartSlicer
  },
});
