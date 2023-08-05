import { signUpFormSchema } from './SignUpForm.schema';
interface RegisterFormValues {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const useSignUpForm = () => {
  const initialValues: RegisterFormValues = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = signUpFormSchema;

  const onSubmit = (values: RegisterFormValues) => {
    console.log(values);
  };

  return { initialValues, validationSchema, onSubmit };
};
