import { configureStore } from '@reduxjs/toolkit';
import carsReducer from '../features/cars/carsSlice';

export const store = configureStore({
  reducer: { cars: carsReducer },
});
