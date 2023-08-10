import { login } from '@lopi-2/common';
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

  const onSubmit = async (values: LoginFormValues) => {
    try {
      const token = await login(values);
      console.log(`Zalogowano: ${token}`);
    } catch (error) {
      console.error('Błąd logowania' + error);
    }
    // const resposne = await fetch(
    //   'https://lopi2.azurewebsites.net/api/auth/signin',
    //   {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       username: values.email,
    //       userPass: values.password,
    //     }),
    //   }
    // );
    // console.log(values);
    // const data = await resposne.json();
    // console.log(data);

    openToast();
    closeModal();
  };

  return { initialValues, validationSchema, onSubmit };
};
