import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'; 
import webCamSlice from '../features/webCamSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    camera: webCamSlice
  },
});
