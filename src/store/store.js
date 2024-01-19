import { configureStore } from '@reduxjs/toolkit';
import vehicleReducer from '../reducers/vehicleReducers';
import appointmentReducer from '../reducers/appointmentReducers';
import activitiesReducers from '@/reducers/activitiesReducers';
import serviceReducers from '@/reducers/serviceReducers';
import inventoryReducers from '@/reducers/inventoryReducers';
import profileReducers from '@/reducers/profileReducers';

const store = configureStore({
  reducer: {
    vehicle: vehicleReducer,
    appointment: appointmentReducer,
    activities: activitiesReducers,
    service: serviceReducers,
    inventory: inventoryReducers,
    profile: profileReducers
  }
});

export default store;
