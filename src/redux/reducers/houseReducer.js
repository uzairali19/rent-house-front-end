import { GET_HOUSES } from '../types';

const initialState = [];

const houseReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOUSES:
      return action.payload;
    default:
      return state;
  }
};

export default houseReducer;
