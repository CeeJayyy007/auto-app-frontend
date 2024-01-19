import storePersist from '@/store/storePersist';
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    setService(state, action) {
      storePersist.set('service', action.payload);
      return action.payload;
    }
  }
});

export const { setService } = serviceSlice.actions;

export default serviceSlice.reducer;
