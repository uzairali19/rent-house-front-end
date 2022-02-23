import axios from 'axios';

export const signUp = async (user) => {
  const response = await axios.post('http://localhost:3000/users/signup', {
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
  localState.push({ authToken, user: currentUser });
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
    'http://localhost:3000/users/signin',
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
    }
  });

  const localState = data;

  localStorage.setItem('token', JSON.stringify(localState));

  return currentUser;
};

export const logoutUser = async () => {
  const token = localStorage.getItem('token');
  await axios.delete('/users/signout');
};
