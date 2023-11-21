'use client';

import { AppRoutes } from '../utils';
import router from 'next/router';

export const getToken = () => {
  if (localStorage !== undefined) {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const userObject = JSON.parse(storedUser);
      const token = userObject.token;

      return token;
    } else {
      router.push(AppRoutes.getLoginPath());
    }
  } else {
    console.log('localStorage is not available');

    return null;
  }
};
