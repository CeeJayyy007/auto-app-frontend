import storePersist from '@/store/storePersist';
import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const vehicleSlice = createSlice({
  name: 'vehicle',
  initialState,
  reducers: {
    setVehicle(state, action) {
      storePersist.set('vehicle', action.payload);
      return action.payload;
    }
  }
});

export const { setVehicle } = vehicleSlice.actions;

export default vehicleSlice.reducer;
