'use client';
import { AppRoutes, SignupValues, createUser, useToast } from '@lopi-2/common';
// import { AppRoutes } from '../utils';
// import { SignupValues } from '../models';
// import { createUser } from '../security';
import { useRouter } from 'next/navigation';
// import { useToast } from '../contexts';

export const useRegistration = () => {
  const { showToast } = useToast();
  const router = useRouter();

  const register = async (values: SignupValues) => {
    const response = await createUser(values);
    if (response instanceof Error) {
      showToast(response.message, 'warning');
      throw new Error(response.message);
    } else {
      showToast(
        'Rejestracja przebiegła pomyślnie. Sprawdź swoją pocztę aby aktywować konto',
        'success'
      );
      router.push(AppRoutes.getLoginPath());
    }
  };

  return { register };
};
