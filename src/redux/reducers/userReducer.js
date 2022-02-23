import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from '../types';

const initialState = [];

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { user: action.payload, loggedIn: true };
    case REGISTER_USER:
      return { user: action.payload, loggedIn: false };
    case LOGOUT_USER:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
