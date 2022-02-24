import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from '../types';
import * as api from '../../api/index';

export const signUp = (user) => async (dispatch) => {
  const data = await api.signUp(user);
  try {
    const action = { type: REGISTER_USER, payload: data };
    dispatch(action);
  } catch (err) {
    console.log(err.message);
  }
};

export const loginUser = (user) => async (dispatch) => {
  const data = await api.loginUser(user);
  try {
    const action = { type: LOGIN_USER, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};

export const logoutUser = (user) => async (dispatch) => {
  await api.logoutUser();
  user.loggedIn = false;
  try {
    const action = { type: LOGOUT_USER, payload: user };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
