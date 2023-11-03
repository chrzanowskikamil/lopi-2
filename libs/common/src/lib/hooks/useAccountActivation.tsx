'use client';
import { useEffect, useState } from 'react';
import { activateUser } from '../security';

type ActivationStatus = 'pending' | 'success' | 'error';

export const useAccountActivation = (
  encodedUsername: string,
  tokenValue: string
) => {
  const [status, setStatus] = useState<ActivationStatus>('pending');

  useEffect(() => {
    async function activateAccount() {
      try {
        await activateUser(encodedUsername, tokenValue);
        setStatus('success');
      } catch (error) {
        if (error instanceof Error) {
          setStatus('error');
          console.error(error.message);
        } else {
          setStatus('error');
          throw new Error('Something went wrong');
        }
      }
    }
    activateAccount();
  }, [encodedUsername, tokenValue]);

  return status;
};
