import storePersist from '@/store/storePersist';
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const activitiesSlice = createSlice({
  name: 'activities',
  initialState,
  reducers: {
    setActivities(state, action) {
      storePersist.set('activities', action.payload);
      return action.payload;
    },
    setActivitiesById(state, action) {
      storePersist.set('activitiesById', action.payload);
      return action.payload;
    }
  }
});

export const { setActivities, setActivitiesById } = activitiesSlice.actions;

export default activitiesSlice.reducer;
