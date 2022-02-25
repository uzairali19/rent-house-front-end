import {
  DELETE_HOUSES,
  DELETE_RESERVATION,
  GET_HOUSES,
  GET_RESERVATIONS,
  POST_HOUSES,
  POST_RESERVATION
} from '../types';
import * as api from '../../api/index';

export const getHouses = (user) => async (dispatch) => {
  const data = await api.getHouses(user);
  try {
    const action = { type: GET_HOUSES, payload: data };
    dispatch(action);
  } catch (err) {
    console.log(err);
  }
};

export const createHouse = (house) => async (dispatch) => {
  const data = await api.createHouse(house);
  try {
    const action = { type: POST_HOUSES, payload: data };
    dispatch(action);
  } catch (err) {
    console.log(err);
  }
};

export const deleteHouse = (houseId) => async (dispatch) => {
  const data = await api.deleteHouse(houseId);
  try {
    const action = { type: DELETE_HOUSES, payload: data };
    dispatch(action);
  } catch (err) {
    console.log(err);
  }
};

export const getReservations = () => async (dispatch) => {
  const data = await api.getReservations();
  try {
    const action = { type: GET_RESERVATIONS, payload: data };
    dispatch(action);
  } catch (err) {
    console.log(err);
  }
};

export const createReservation = (reserve) => async (dispatch) => {
  const data = await api.createReservation(reserve);
  try {
    const action = { type: POST_RESERVATION, payload: data };
    dispatch(action);
  } catch (err) {
    console.log(err);
  }
};

export const deleteReservation = (houseId) => async (dispatch) => {
  const data = await api.deleteReservation(houseId);
  try {
    const action = { type: DELETE_RESERVATION, payload: data };
    dispatch(action);
  } catch (err) {
    console.log(err);
  }
};
