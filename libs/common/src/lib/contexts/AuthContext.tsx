'use client';
import { createContext, useContext } from 'react';
import { IAuthHook } from '../types/IAuthHook';
import { ChildrenFC } from '../models';

interface AuthProviderProps {
  authHook: () => IAuthHook;
}

const AuthContext = createContext<IAuthHook | null>(null);

export const AuthProvider: ChildrenFC<AuthProviderProps> = ({
  authHook,
  children,
}) => {
  const { user, login, logout, register, isAuthenticated } = authHook();

  const providerValue = {
    user,
    login,
    logout,
    register,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext<IAuthHook | null>(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return context;
};
