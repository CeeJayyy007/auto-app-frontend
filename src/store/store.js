import { configureStore } from '@reduxjs/toolkit';
import vehicleReducer from '../reducers/vehicleReducers';
import appointmentReducer from '../reducers/appointmentReducers';
import activitiesReducers from '@/reducers/activitiesReducers';
import serviceReducers from '@/reducers/serviceReducers';
import inventoryReducers from '@/reducers/inventoryReducers';
import profileReducers from '@/reducers/profileReducers';
import dashboardReducers from '@/reducers/dashboardReducers';

const store = configureStore({
  reducer: {
    dashboard: dashboardReducers,
    user: profileReducers
  }
});

export default store;
