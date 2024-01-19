import storePersist from '@/store/storePersist';
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    setInventory(state, action) {
      storePersist.set('inventory', action.payload);
      return action.payload;
    }
  }
});

export const { setInventory } = inventorySlice.actions;

export default inventorySlice.reducer;
