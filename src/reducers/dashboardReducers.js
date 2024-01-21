import storePersist from '@/store/storePersist';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  appointmentsDetails: {},
  activitiesByUser: {},
  allServices: {},
  allInventory: {},
  allUsers: {},
  result: {},
  allVehicles: {}
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setDashboardData(state, action) {
      storePersist.set('dashboard', action.payload);
      return action.payload;
    }
  }
});

export const { setDashboardData } = dashboardSlice.actions;

export default dashboardSlice.reducer;
