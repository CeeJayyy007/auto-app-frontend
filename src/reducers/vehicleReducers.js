import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const vehicleSlice = createSlice({
  name: 'vehicle',
  initialState,
  reducers: {
    setVehicle(state, action) {
      window.localStorage.setItem('vehicle', JSON.stringify(action.payload));
      return action.payload;
    }
  }
});

export const { setVehicle } = vehicleSlice.actions;

export default vehicleSlice.reducer;
