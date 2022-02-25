import {
  DELETE_HOUSES,
  DELETE_RESERVATION,
  GET_HOUSES,
  GET_RESERVATIONS,
  POST_HOUSES,
  POST_RESERVATION
} from '../types';

const initialState = [];

const houseReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOUSES:
      return action.payload;
    case POST_HOUSES:
      return [...state, action.payload];
    case DELETE_HOUSES:
      return state.filter((house) => house.id !== action.payload);
    case GET_RESERVATIONS:
      return action.payload;
    case POST_RESERVATION:
      return [...state, action.payload];
    case DELETE_RESERVATION:
      return state.filter((reservation) => reservation.id !== action.payload);
    default:
      return state;
  }
};

export default houseReducer;
