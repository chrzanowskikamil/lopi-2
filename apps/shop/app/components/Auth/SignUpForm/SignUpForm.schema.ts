import { object, ref, string } from 'yup';
import { validationConstans, noWhiteSpacesTest } from '@lopi-2/common';

export const signUpFormSchema = object({
  name: string()
    .required(validationConstans.REQUIRED_FIELD_MESSAGE)
    .min(
      validationConstans.MIN_NAME_LENGTH,
      validationConstans.REQUIRED_FIELD_MESSAGE
    )
    .test(
      noWhiteSpacesTest.name,
      validationConstans.REQUIRED_FIELD_MESSAGE,
      noWhiteSpacesTest.testFunction
    ),
  lastName: string(),
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
  confirmPassword: string()
    .required(validationConstans.REQUIRED_FIELD_MESSAGE)
    .min(
      validationConstans.MIN_PASSWORD_LENGTH,
      validationConstans.PASSWORD_MIN_LENGTH_MESSAGE
    )
    .oneOf([ref('password')], validationConstans.PASSWORD_NOT_MATCH_MESSAGE)
    .test(
      noWhiteSpacesTest.name,
      validationConstans.PASSWORD_MIN_LENGTH_MESSAGE,
      noWhiteSpacesTest.testFunction
    ),
});
