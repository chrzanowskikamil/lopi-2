import { object, string } from 'yup';

export const signInFormSchema = object({
  email: string().email('Błędny adres e-mail').required('Uzupełnij pole'),
  password: string()
    .required('Uzupełnij pole')
    .min(8, 'Hasło musi posiadać co najmniej 8 znaków'),
});
