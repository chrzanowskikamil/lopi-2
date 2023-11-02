import { usePasswordReset } from '../contexts';
import { ResetPasswordCredentials } from '../models';
import {
  ResetPasswordFormSchema,
  ResetPasswordInitialFormSchema,
} from '../schemas/ResetPasswordForm.schema';

export const useResetPasswordInitialForm = () => {
  const { initializePasswordReset } = usePasswordReset();
  const validationSchema = ResetPasswordInitialFormSchema;
  const initialValues: Pick<ResetPasswordCredentials, 'username'> = {
    username: '',
  };

  const onSubmit = (username: Pick<ResetPasswordCredentials, 'username'>) => {
    initializePasswordReset(username);
  };

  return { initialValues, validationSchema, onSubmit };
};

export const useResetPasswordForm = () => {
  const { confirmResetPassword } = usePasswordReset();
  const validationSchema = ResetPasswordFormSchema;
  const initialValues: Pick<ResetPasswordCredentials, 'password'> = {
    password: '',
  };

  const onSubmit = (values: Pick<ResetPasswordCredentials, 'password'>) => {
    confirmResetPassword(values.password);
  };

  return { initialValues, validationSchema, onSubmit };
};
