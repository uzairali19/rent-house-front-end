import axios from 'axios';

export const signUp = async (user) => {
  const response = await axios.post('http://localhost:3000/users/signup', {
    user
  });

  const authToken = response.headers.authorization;
  const currentUser = response.data;
  localStorage.setItem('token', authToken);

  return currentUser;
};

export const loginUser = async (user) => {
  const response = await axios.post(
    'http://localhost:3000/users/signin',
    {
      user
    },
    {
      headers: {
        Authorization: `${localStorage.getItem('token')}`
      }
    }
  );

  const authToken = response.headers.authorization;
  const currentUser = response.data;
  localStorage.setItem('token', authToken);

  return currentUser;
};
