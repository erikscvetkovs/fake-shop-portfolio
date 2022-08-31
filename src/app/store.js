import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import orderReducer from '../features/order/orderSlice';
import apiReducer from '../features/api/apiSlicer'
import categoryReducer from '../features/category/categorySlice';
import cartReducer from '../features/cart/cartSlicer';
import stepsReducer from '../features/steps/stepsSlice'
import checkoutFormReducer from '../features/checkout-form/checkoutFormSlicer';
import errorReducer from '../features/error/errorSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['cart', 'category', 'steps', 'error', 'api']
}

const rootReducer = combineReducers({
  steps: stepsReducer,
  counter: counterReducer,
  orders: orderReducer,
  api: apiReducer,
  category: categoryReducer,
  cart: cartReducer,
  checkoutForm: checkoutFormReducer,
  error:errorReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)