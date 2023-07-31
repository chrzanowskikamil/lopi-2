import { object, string } from 'yup';
import { validationMessages } from '@lopi-2/common';

export const signInFormSchema = object({
  email: string()
    .email(validationMessages.INVALID_EMAIL)
    .required(validationMessages.REQUIRED_FIELD),
  password: string()
    .required(validationMessages.REQUIRED_FIELD)
    .min(8, validationMessages.PASSWORD_MIN_LENGTH)
    .test('no-whitespaces', validationMessages.PASSWORD_MIN_LENGTH, (value) =>
      value ? value.trim().length !== 0 : true
    ),
});
