import apiClient from './apiClient';

export const register = async (values: any) => {
  const response = await apiClient.post('/auth/signup', {
    firstName: values.name,
    lastName: values.lastName,
    username: values.email,
    password: values.password,
  });

  return response.data.token;
};

export const login = async (values: any) => {
  const response = await apiClient.post('/auth/signin', {
    username: values.email,
    password: values.password,
  });
  const token = response.data.token;
  localStorage.setItem('token', token); // Zapisz token w local storage

  return token;
};
