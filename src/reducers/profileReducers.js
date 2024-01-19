import storePersist from '@/store/storePersist';
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setAllUsers(state, action) {
      storePersist.set('allUsers', action.payload);
      return action.payload;
    },
    setResult(state, action) {
      storePersist.set('profile', action.payload);
      return action.payload;
    },
    setVehicles(state, action) {
      storePersist.set('vehicles', action.payload);
      return action.payload;
    }
  }
});

export const { setAllUsers, setResult, setVehicles } = profileSlice.actions;

export default profileSlice.reducer;
