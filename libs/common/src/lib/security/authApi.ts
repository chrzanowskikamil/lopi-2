import {
  AuthCredentials,
  ResetPasswordCredentials,
  SignupValues,
} from '../models';
import { wrenchAppJson, wrenchCredencialsAppJSON } from '../helpers';

export async function createUser(body: SignupValues) {
  return wrenchCredencialsAppJSON
    .url('auth/signup')
    .body(JSON.stringify({ ...body, role: 'ROLE_ADMIN' }))
    .post()
    .res(async (res) => {
      const data = await res.json();

      if (!res.ok) {
        return new Error(data.message);
      }

      if (res.status >= 200 && res.status < 300) {
        return data;
      }
    })
    .catch((error) => {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('Something went wrong');
      }
    });
}

export async function activateUser(
  encodedUsername: string,
  tokenValue: string
) {
  return wrenchAppJson
    .url('auth/activate')
    .body(JSON.stringify({ encodedUsername, tokenValue }))
    .post()
    .res(async (res) => {
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      if (res.status >= 200 && res.status < 300) {
        return data;
      }
    })
    .catch((error) => {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('Something went wrong');
      }
    });
}

export async function reactivateUser(
  encodedUsername: string,
  tokenValue: string
) {
  return wrenchAppJson
    .url('auth/reactivate')
    .body(JSON.stringify({ encodedUsername, tokenValue }))
    .post()
    .res(async (res) => {
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      if (res.status >= 200 && res.status < 300) {
        return data;
      }
    })
    .catch((error) => {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('Something went wrong');
      }
    });
}

export async function loginUser(credentials: AuthCredentials) {
  return wrenchCredencialsAppJSON
    .url('auth/signin')
    .body(JSON.stringify(credentials))
    .post()
    .res(async (res) => {
      const data = await res.json();

      if (!res.ok) {
        return new Error(data.message);
      }

      if (res.status >= 200 && res.status < 300) {
        localStorage.setItem('user', JSON.stringify(data));

        return data;
      }
    })
    .catch((error) => {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('Something went wrong');
      }
    });
}

export async function initResetPassword(username: string) {
  return wrenchCredencialsAppJSON
    .url('auth/password-reset-link')
    .body(JSON.stringify({ username }))
    .post()
    .res(async (res) => {
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      if (res.status >= 200 && res.status < 300) {
        return data;
      }
    })
    .catch((error) => {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('Something went wrong');
      }
    });
}

export async function resetPassword(
  credentials: Omit<ResetPasswordCredentials, 'username' | 'password'>
) {
  return wrenchAppJson
    .url('auth/reset-password')
    .body(JSON.stringify(credentials))
    .post()
    .res(async (res) => {
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      if (res.status >= 200 && res.status < 300) {
        return data;
      }
    })
    .catch((error) => {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('Something went wrong');
      }
    });
}
