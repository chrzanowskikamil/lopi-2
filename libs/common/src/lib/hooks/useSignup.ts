import { createUser } from '../../api';
import { SignupFormSchema } from '../../lib/schemas/SignupForm.schema';
import { useToast } from '../contexts';

export interface SignupValues {
  firstName: string;
  lastName: string;
  username: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

export const useSignup = (onSuccess: () => void) => {
  const { showToast } = useToast();

  const initialValues: SignupValues = {
    firstName: '',
    lastName: '',
    username: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  };

  const onSubmit = async (values: SignupValues) => {
    const response = await createUser(values);

    if (response instanceof Error) {
      showToast(response.message, 'warning');
    } else {
      onSuccess();
      showToast('User created successfully', 'success');
    }
  };

  const validationSchema = SignupFormSchema;

  return { initialValues, onSubmit, validationSchema };
};
