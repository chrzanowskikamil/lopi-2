import * as ErrorTypes from '../types/ApiErrors';

import { REVALIDATE_TIME } from '@lopi-2/common';
import wretch from 'wretch';

export const wrenchCredencials = wretch(process.env.NEXT_PUBLIC_API_BASE_URL, {
  credentials: 'include',
}).catcherFallback((error: unknown) => {
  if (error instanceof TypeError) {
    console.error(ErrorTypes.API_CONNECTION_ERROR);
    throw new Error(ErrorTypes.API_CONNECTION_ERROR);
  }
  console.error(`Fetching error: ${error}`);
  throw error;
});

export const wrenchRevalidate = wretch(process.env.NEXT_PUBLIC_API_BASE_URL, {
  next: { revalidate: REVALIDATE_TIME },
}).catcherFallback((error: unknown) => {
  if (error instanceof TypeError) {
    console.error(ErrorTypes.API_CONNECTION_ERROR);
    throw new Error(ErrorTypes.API_CONNECTION_ERROR);
  }
  console.error(`Fetching error: ${error}`);
  throw error;
});

export const wrenchRevalidateFalse = wretch(
  process.env.NEXT_PUBLIC_API_BASE_URL,
  {
    next: { revalidate: false },
  }
).catcherFallback((error: unknown) => {
  if (error instanceof TypeError) {
    console.error(ErrorTypes.API_CONNECTION_ERROR);
    throw new Error(ErrorTypes.API_CONNECTION_ERROR);
  }
  console.error(`Fetching error: ${error}`);
  throw error;
});

export const wrenchAppJson = wretch(process.env.NEXT_PUBLIC_API_BASE_URL, {
  headers: {
    'Content-Type': 'application/json',
  },
}).catcherFallback((error: unknown) => {
  if (error instanceof TypeError) {
    console.error(ErrorTypes.API_CONNECTION_ERROR);
    throw new Error(ErrorTypes.API_CONNECTION_ERROR);
  }
  console.error(`Fetching error: ${error}`);
  throw error;
});

export const wrenchCredencialsAppJSON = wretch(
  process.env.NEXT_PUBLIC_API_BASE_URL,
  {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  }
).catcherFallback((error: unknown) => {
  if (error instanceof TypeError) {
    console.error(ErrorTypes.API_CONNECTION_ERROR);
    throw new Error(ErrorTypes.API_CONNECTION_ERROR);
  }
  console.error(`Fetching error: ${error}`);
  throw error;
});
