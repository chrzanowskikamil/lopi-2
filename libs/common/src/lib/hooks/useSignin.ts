import { useAuth } from '../contexts/AuthContext';
import { AuthCredentials } from '../models';
import { SigninFormSchema } from '../schemas/SigninForm.schema';

export const useSignin = () => {
  const { login } = useAuth();
  const validationSchema = SigninFormSchema;

  const initialValues: AuthCredentials = {
    username: '',
    password: '',
  };

  const onSubmit = async (values: AuthCredentials) => {
    await login(values);
  };

  return { initialValues, onSubmit, validationSchema };
};
