import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const activitiesSlice = createSlice({
  name: 'activities',
  initialState,
  reducers: {
    setActivities(state, action) {
      return action.payload;
    }
  }
});

export const { setActivities } = activitiesSlice.actions;

export default activitiesSlice.reducer;
