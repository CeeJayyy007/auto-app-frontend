import { configureStore } from '@reduxjs/toolkit';

import vehicleReducer from '../reducers/vehicleReducers';

const store = configureStore({
  reducer: {
    vehicle: vehicleReducer
  }
});

export default store;
