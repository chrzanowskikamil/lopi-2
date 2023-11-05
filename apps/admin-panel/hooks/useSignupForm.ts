import { SignupFormSchema, SignupValues } from '@lopi-2/common';
import { useRegistration } from './useRegistration';

export const useSignupForm = () => {
  const { register } = useRegistration();

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
