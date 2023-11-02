'use client';

import { createContext, useContext } from 'react';
import { IPasswordResetHook } from '../types/IPasswordResetHook';
import { ChildrenFC } from '../models';

interface PasswordResetProviderProps {
  passwordResetHook: () => IPasswordResetHook;
}

const PasswordResetContext = createContext<IPasswordResetHook | null>(null);

export const PasswordResetProvider: ChildrenFC<PasswordResetProviderProps> = ({
  passwordResetHook,
  children,
}) => {
  const { status, initializePasswordReset, confirmResetPassword } =
    passwordResetHook();

  const providerValue = {
    status,
    initializePasswordReset,
    confirmResetPassword,
  };

  return (
    <PasswordResetContext.Provider value={providerValue}>
      {children}
    </PasswordResetContext.Provider>
  );
};

export const usePasswordReset = () => {
  const context = useContext<IPasswordResetHook | null>(PasswordResetContext);

  if (!context) {
    throw new Error(
      'usePasswordReset must be used within PasswordResetProvider'
    );
  }

  return context;
};
