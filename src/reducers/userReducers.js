import loginService from '../services/login';
import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      return action.payload;
    }
  }
});

export const { setUser, logout } = userSlice.actions;

export const loginUser = (credentials) => {
  return async (dispatch) => {
    const user = await loginService.login(credentials);

    console.log('user', user);

    window.localStorage.setItem('loggedInUser', JSON.stringify(user));
    dispatch(setUser(user));
  };
};

export const setUserFromLocalStorage = (loggedInUserJSON) => {
  return async (dispatch) => {
    const user = JSON.parse(loggedInUserJSON);
    dispatch(setUser(user));
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    window.localStorage.removeItem('loggedInUser');
    dispatch(setUser(initialState));
  };
};

export default userSlice.reducer;
