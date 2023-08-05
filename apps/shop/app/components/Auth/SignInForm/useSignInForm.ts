import { signInFormSchema } from './SignInForm.schema';
interface LoginFormValues {
  email: string;
  password: string;
}

export const useSignInForm = (
  openToast: VoidFunction,
  closeModal: VoidFunction
) => {
  const initialValues: LoginFormValues = {
    email: '',
    password: '',
  };

  const validationSchema = signInFormSchema;

  const onSubmit = (values: LoginFormValues) => {
    console.log(values);
    openToast();
    closeModal();
  };

  return { initialValues, validationSchema, onSubmit };
};
