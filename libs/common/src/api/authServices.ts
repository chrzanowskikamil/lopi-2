import apiClient from './apiClient';

export const register = async (values) => {
  const response = await apiClient.post('/auth/signup', {
    firstName: values.name,
    lastName: values.lastName,
    email: values.email,
    password: values.password,
  });
  return response.data.token;
};

export const login = async (values) => {
  const response = await apiClient.post('/auth/signin', {
    username: values.email,
    userPass: values.password,
  });
  const token = response.data.token;
  localStorage.setItem('token', token); // Zapisz token w local storage
  return token;
};