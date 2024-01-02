/* eslint-disable indent */
import storePersist from '@/store/storePersist';
import { createContext, useReducer, useContext } from 'react';

const initialState = null;

const vehicleReducer = (state, action) => {
  switch (action.type) {
    case 'SET_VEHICLE':
      storePersist.set('vehicle', action.payload);
      return action.payload;
    default:
      return state;
  }
};

const VehicleContext = createContext();

export const VehicleContextProvider = (props) => {
  const [vehicle, vehicleDispatch] = useReducer(vehicleReducer, initialState);

  return (
    <VehicleContext.Provider value={[vehicle, vehicleDispatch]}>
      {props.children}
    </VehicleContext.Provider>
  );
};

export const useVehicleValue = () => {
  //   const vehicle = storePersist.get('vehicle');
  const vehicleAndDispatch = useContext(VehicleContext);
  return vehicleAndDispatch[0];
};

export const useVehicleDispatch = () => {
  const vehicleAndDispatch = useContext(VehicleContext);
  return vehicleAndDispatch[1];
};

export default VehicleContext;
