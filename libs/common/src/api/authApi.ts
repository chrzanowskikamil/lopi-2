import { AuthCredentials, SignupValues } from '../lib/models';

export async function createUser(body: SignupValues) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}auth/signup`,
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...body, role: 'ROLE_USER' }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      return new Error(data.message);
    }

    if (res.status >= 200 && res.status < 300) {
      return data;
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('Something went wrong');
    }
  }
}

export async function loginUser(credentials: AuthCredentials) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}auth/signin`,
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      return new Error(data.message);
    }

    if (res.status >= 200 && res.status < 300) {
      localStorage.setItem('user', JSON.stringify(data));

      return data;
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('Something went wrong');
    }
  }
}
