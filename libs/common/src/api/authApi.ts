import { SignupValues } from '../lib/hooks';

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
