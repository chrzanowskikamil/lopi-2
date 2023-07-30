import { signInFormSchema } from './SignInForm.schema';

interface LoginFormValues {
  email: string;
  password: string;
}

export const useSignInForm = () => {
  const initialValues: LoginFormValues = {
    email: '',
    password: '',
  };

  const validationSchema = signInFormSchema;

  const onSubmit = (values: LoginFormValues) => {
    console.log(values);
  };

  return { initialValues, validationSchema, onSubmit };
};
