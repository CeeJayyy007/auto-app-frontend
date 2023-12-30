/* eslint-disable indent */
import { createContext, useReducer, useContext } from 'react';

const initialState = null;

const profileReducer = (state, action) => {
  switch (action.type) {
    case 'EDIT_PROFILE':
      return action.payload;
    case 'ADD_VEHICLE':
      return action.payload;
    case 'EDIT_VEHICLE':
      return action.payload;
    case 'DELETE_PROFILE':
      return null;
    case 'DELETE_VEHICLE':
      return null;
    default:
      return state;
  }
};

const ProfileContext = createContext();

export const ProfileContextProvider = (props) => {
  const [profile, profileDispatch] = useReducer(profileReducer, initialState);

  return (
    <ProfileContext.Provider value={[profile, profileDispatch]}>
      {props.children}
    </ProfileContext.Provider>
  );
};

export const useProfileValue = () => {
  const profileAndDispatch = useContext(ProfileContext);
  return profileAndDispatch[0];
};

export const useProfileDispatch = () => {
  const profileAndDispatch = useContext(ProfileContext);
  return profileAndDispatch[1];
};

export default ProfileContext;
