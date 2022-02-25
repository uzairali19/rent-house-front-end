import axios from 'axios';

const baseApi = 'https://whispering-forest-32723.herokuapp.com';
const baseApp = 'api/v1';

export const signUp = async (user) => {
  const response = await axios.post(`${baseApi}/users/signup`, {
    user
  });

  const data = JSON.parse(localStorage.getItem('token'));
  let localState;
  if (data === null) {
    localState = [];
  } else {
    localState = data;
  }

  const authToken = response.headers.authorization;
  const currentUser = response.data;
  localState.push({ authToken, user: currentUser, loggedIn: false });
  console.log(response);
  localStorage.setItem('token', JSON.stringify(localState));

  return currentUser;
};

export const loginUser = async (user) => {
  const data = JSON.parse(localStorage.getItem('token'));
  let token = '';
  data.forEach((item) => {
    if (item.user.email === user.email) {
      token = item.authToken;
    }
  });

  const response = await axios.post(
    `${baseApi}/users/signin`,
    {
      user
    },
    {
      headers: {
        Authorization: `${token}`
      }
    }
  );
  const authToken = response.headers.authorization;
  const currentUser = response.data;

  data.forEach((item) => {
    if (item.user.email === user.email) {
      item.authToken = authToken;
      item.loggedIn = true;
    }
  });

  const localState = data;
  localStorage.setItem('token', JSON.stringify(localState));

  return currentUser;
};

export const logoutUser = async () => {
  await axios.delete(`${baseApi}/users/signout`);
};

export const getHouses = async (user) => {
  const data = JSON.parse(localStorage.getItem('token'));
  let token = '';

  data.forEach((item) => {
    if (item.user.email === user.user.email) {
      token = item.authToken;
    }
  });

  const response = await axios.get(`${baseApi}/${baseApp}/houses`, {
    Headers: {
      Authorization: `${token}`
    }
  });
  const authToken = response.headers.authorization;

  console.log(authToken);
  return response.data;
};

export const createHouse = async (house) => {
  await axios.post('http://localhost:3000/api/v1/houses', house);
};

export const deleteHouse = async (houseId) => {
  await axios.delete(`http://localhost:3000/api/v1/houses/${houseId}`);
};

export const getReservations = async () => {
  await axios.get('http://localhost:3000/api/v1/reservations');
};

export const createReservation = async (reserve) => {
  await axios.get('http://localhost:3000/api/v1/reservations', reserve);
};

export const deleteReservation = async (reserveId) => {
  await axios.get(`http://localhost:3000/api/v1/reservations/${reserveId}`);
};
