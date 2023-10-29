import { SignupFormSchema } from '../../lib/schemas/SignupForm.schema';
import { useAuth } from '../contexts/AuthContext';
import { SignupValues } from '../models';

export const useSignup = () => {
  const { register } = useAuth();

  const initialValues: SignupValues = {
    firstName: '',
    lastName: '',
    username: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  };

  const onSubmit = async (values: SignupValues) => {
    await register(values);
  };

  const validationSchema = SignupFormSchema;

  return { initialValues, onSubmit, validationSchema };
};
