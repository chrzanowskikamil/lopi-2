import { object, string } from 'yup';
import { validationConstans, noWhiteSpacesTest } from '@lopi-2/common';

export const signInFormSchema = object({
  email: string()
    .email(validationConstans.INVALID_EMAIL_MESSAGE)
    .required(validationConstans.REQUIRED_FIELD_MESSAGE),
  password: string()
    .required(validationConstans.REQUIRED_FIELD_MESSAGE)
    .min(
      validationConstans.MIN_PASSWORD_LENGTH,
      validationConstans.PASSWORD_MIN_LENGTH_MESSAGE
    )
    .test(
      noWhiteSpacesTest.name,
      validationConstans.PASSWORD_MIN_LENGTH_MESSAGE,
      noWhiteSpacesTest.testFunction
    ),
});
