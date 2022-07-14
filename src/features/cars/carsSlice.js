import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';

import axios from 'axios';

// const CARS_URL = 'http://localhost:5000';

const carsAdapter = createEntityAdapter({
  selectId: car => car.id_car,
  sortComparer: (a, b) => b.position - a.position,
});

const initialState = carsAdapter.getInitialState({
  status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
});

export const fetchCars = createAsyncThunk('api/cars', async () => {
  const response = await axios.get('http://localhost:5000/api/cars');
  return response.data;
});

export const addNewCar = createAsyncThunk('api/addCar', async data => {
  const response = await axios.post('http://localhost:5000/api/cars', data);
  return response.data;
});

export const updateCar = createAsyncThunk('api/cars/:id', async data => {
  const response = await axios.put(
    `http://localhost:5000/api/cars/${data.id_car}`,
    data
  );
  return response.data;
});

export const deleteCar = createAsyncThunk('api/deleteCar/', async data => {
  const response = await axios.delete(
    `http://localhost:5000/api/cars/${data.id_car}`
  );
  if (response?.status === 204) return data.id_car;
  return `${response?.status}: ${response?.statusText}`;
});

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCars.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        const loadedCars = action.payload.map(car => {
          return car;
        });
        state.status = 'succeeded';

        carsAdapter.upsertMany(state, loadedCars);
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addNewCar.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(addNewCar.fulfilled, (state, action) => {
        carsAdapter.addOne(state, action.payload[0]);
        state.status = 'succeeded';
      })
      .addCase(updateCar.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(updateCar.fulfilled, (state, action) => {
        carsAdapter.upsertOne(state, action.payload[0]);
        state.status = 'succeeded';
      })
      .addCase(deleteCar.fulfilled, (state, action) => {
        carsAdapter.removeOne(state, action.payload);
      });
  },
});

export const {
  selectAll: selectAllCars,
  selectById: selectCarById,
  selectIds: selectCarsIds,
} = carsAdapter.getSelectors(state => state.cars);

export const getCarsStatus = state => state.cars.status;
export const getCarsError = state => state.cars.error;

export default carsSlice.reducer;
