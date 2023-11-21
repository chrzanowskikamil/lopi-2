import {
  AuthProvider,
  ChildrenFC,
  CommonProviders,
  PasswordResetProvider,
} from '@lopi-2/common';

import { ReduxProvider } from '../redux/reduxProvider';
import { useAdminAuth } from '../hooks/useAdminAuth';
import { useResetPassword } from '../hooks/useResetPassword';

export const Providers: ChildrenFC = ({ children }) => {
  return (
    <ReduxProvider>
      <CommonProviders>
        <PasswordResetProvider passwordResetHook={useResetPassword}>
          <AuthProvider authHook={useAdminAuth}>{children}</AuthProvider>
        </PasswordResetProvider>
      </CommonProviders>
    </ReduxProvider>
  );
};
