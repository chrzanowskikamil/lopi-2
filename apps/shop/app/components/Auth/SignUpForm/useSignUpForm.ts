import { register } from '@lopi-2/common';
import { signUpFormSchema } from './SignUpForm.schema';

export interface RegisterFormValues {
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

  const onSubmit = async (values: RegisterFormValues) => {
    console.log(values);
    try {
      await register(values);
      console.log(`Zarejestrowano z tymi danymi: ${values}`);
    } catch (error) {
      console.error(`Błąd rejestracji ${error}`);
    }

    // const resposne = await fetch('/security/signin', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(values),
    // });
    // const data = await resposne.json();
    // console.log(data);
  };

  return { initialValues, validationSchema, onSubmit };
};
