'use client';
import { useCallback, useState } from 'react';
import {
  IPasswordResetHook,
  PasswordResetStatus,
} from '../types/IPasswordResetHook';
import { ResetPasswordCredentials } from '../models';
import { initResetPassword, resetPassword } from '../../api';
import { AppRoutes } from '../utils';
import { useToast } from '../contexts';
import { useRouter, useSearchParams } from 'next/navigation';

export const useResetPassword = (): IPasswordResetHook => {
  const params = useSearchParams();
  const router = useRouter();
  const { showToast } = useToast();
  const [status, setStatus] = useState<PasswordResetStatus>('pending');

  const initializePasswordReset = useCallback(
    async (credentials: Pick<ResetPasswordCredentials, 'username'>) => {
      try {
        await initResetPassword(credentials.username);
        showToast(
          'Na Twój adres email został wysłany link do resetowania hasła.',
          'success'
        );
        router.push(AppRoutes.getLoginPath());
      } catch (error) {
        if (error instanceof Error) {
          showToast(error.message, 'warning');
        }
        console.error(error);
      }
    },
    [showToast]
  );

  const confirmResetPassword = useCallback(
    async (password: string) => {
      try {
        const encodedUsername = params.get('email');
        const tokenValue = params.get('token');
        const encodedPassword = btoa(password);

        if (!encodedUsername || !tokenValue) {
          throw new Error('Brak danych do resetowania hasła');
        }

        const response = await resetPassword({
          encodedUsername,
          tokenValue,
          encodedPassword,
        });
        setStatus('success');
        showToast(response.message, 'success');
      } catch (error) {
        if (error instanceof Error) {
          showToast(error.message, 'warning');
        }
        console.error(error);
      }
    },
    [showToast, params]
  );

  return {
    status,
    initializePasswordReset,
    confirmResetPassword,
  };
};
