import {
  AuthProvider,
  ChildrenFC,
  CommonProviders,
  PasswordResetProvider,
} from '@lopi-2/common';
import { useAdminAuth } from '../hooks/useAdminAuth';
import { useResetPassword } from '../hooks/useResetPassword';

export const Providers: ChildrenFC = ({ children }) => {
  return (
    <CommonProviders>
      <PasswordResetProvider passwordResetHook={useResetPassword}>
        <AuthProvider authHook={useAdminAuth}>{children}</AuthProvider>
      </PasswordResetProvider>
    </CommonProviders>
  );
};
