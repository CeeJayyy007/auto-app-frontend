import storePersist from '@/store/storePersist';
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    setAppointment(state, action) {
      storePersist.set('appointment', action.payload);
      return action.payload;
    }
  }
});

export const { setAppointment } = appointmentSlice.actions;

export default appointmentSlice.reducer;
