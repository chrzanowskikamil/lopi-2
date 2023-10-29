'use client';

import { ChildrenFC } from '../models';
import { AuthProvider } from './AuthContext';
import { ToastProvider } from './ToastContext';
import { useAdminAuth } from '../hooks/useAdminAuth';

export const Providers: ChildrenFC = ({ children }) => {
  return (
    <ToastProvider>
      <AuthProvider authHook={useAdminAuth}>{children}</AuthProvider>
    </ToastProvider>
  );
};
