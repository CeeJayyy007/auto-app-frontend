import storePersist from '@/store/storePersist';
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile(state, action) {
      storePersist.set('profile', action.payload);
      return action.payload;
    },
    setResult(state, action) {
      storePersist.set('result', action.payload);
      return action.payload;
    }
  }
});

export const { setProfile, setResult } = profileSlice.actions;

export default profileSlice.reducer;
