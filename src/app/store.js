import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/car/CarSliese'
import likeReducer from '../features/lists/ListNames'
export const store = configureStore({
  reducer: {
    car: carReducer,
    like: likeReducer
    }
});
