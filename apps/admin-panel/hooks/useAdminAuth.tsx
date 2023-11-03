'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  AppRoutes,
  AuthCredentials,
  createUser,
  IAuthHook,
  loginUser,
  SignupValues,
  User,
  useToast,
} from '@lopi-2/common';

export const useAdminAuth = (): IAuthHook => {
  const { showToast } = useToast();
  const router = useRouter();

  const getStorageUser = () => {
    if (typeof window !== 'undefined') {
      return !!localStorage.getItem('user');
    }

    return false;
  };

  const [user, setUser] = useState<User | null>(null);

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    getStorageUser()
  );

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user') || 'null');
    setUser(storedUser);
    setIsAuthenticated(!!storedUser);
  }, [isAuthenticated]);

  const login = useCallback(
    async (credentials: AuthCredentials) => {
      const response = await loginUser(credentials);
      if (response instanceof Error) {
        showToast(response.message, 'warning');
        throw new Error(response.message);
      } else {
        setUser(response);
        setIsAuthenticated(true);
        showToast('Zostałeś zalogowany', 'success');
        router.push(AppRoutes.getHomePath());
      }
    },
    [router, showToast]
  );

  const logout = useCallback(() => {
    showToast('Zostałeś wylogowany', 'success');
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
    router.push(AppRoutes.getLoginPath());
  }, [router, showToast]);

  const register = useCallback(
    async (values: SignupValues) => {
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
    },
    [router, showToast]
  );

  return { user, login, logout, register, isAuthenticated };
};
