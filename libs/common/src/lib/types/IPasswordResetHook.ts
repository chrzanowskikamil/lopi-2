import { ResetPasswordCredentials } from '../models';

export type PasswordResetStatus = 'pending' | 'success';

export type IPasswordResetHook = {
  status: PasswordResetStatus;

  initializePasswordReset: (
    username: Pick<ResetPasswordCredentials, 'username'>
  ) => void;

  confirmResetPassword: (password: string) => void;
};
