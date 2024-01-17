import { configureStore } from '@reduxjs/toolkit';
import vehicleReducer from '../reducers/vehicleReducers';
import appointmentReducer from '../reducers/appointmentReducers';
import activitiesReducers from '@/reducers/activitiesReducers';

const store = configureStore({
  reducer: {
    vehicle: vehicleReducer,
    appointment: appointmentReducer,
    activities: activitiesReducers
  }
});

export default store;
