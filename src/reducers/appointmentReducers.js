import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    setAppointment(state, action) {
      return action.payload;
    }
  }
});

export const { setAppointment } = appointmentSlice.actions;

export default appointmentSlice.reducer;
