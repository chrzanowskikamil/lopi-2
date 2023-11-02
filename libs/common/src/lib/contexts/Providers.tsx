'use client';

import { ChildrenFC } from '../models';
import { AuthProvider } from './AuthContext';
import { ToastProvider } from './ToastContext';
import { useAdminAuth } from '../hooks/useAdminAuth';
import { PasswordResetProvider } from './PasswordResetContext';
import { useResetPassword } from '../hooks';

export const Providers: ChildrenFC = ({ children }) => {
  return (
    <ToastProvider>
      <AuthProvider authHook={useAdminAuth}>
        <PasswordResetProvider passwordResetHook={useResetPassword}>
          {children}
        </PasswordResetProvider>
      </AuthProvider>
    </ToastProvider>
  );
};
