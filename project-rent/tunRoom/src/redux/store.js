// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer';

const rootReducer = {
  user: userReducer,
  
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
