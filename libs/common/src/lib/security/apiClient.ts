// import useSWR from 'swr';
// const API = 'https://lopi2.azurewebsites.net/api';

// const fetcher = async () => {
//   const response = await fetch(`${API}/products`);
//   const data = await response.json();
//   return data;
// };

// export const useUser = () => {
//   const { data, error } = useSWR(`${API}`, fetcher);

//   return {
//     data,
//     error,
//   };
// };

import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token;
  }

  return config;
});

export default apiClient;
