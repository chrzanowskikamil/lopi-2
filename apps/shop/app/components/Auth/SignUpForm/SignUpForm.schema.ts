import { object, ref, string } from 'yup';
import { validationMessages, noWhiteSpacesTest } from '@lopi-2/common';

export const signUpFormSchema = object({
  name: string()
    .required(validationMessages.REQUIRED_FIELD)
    .min(2, validationMessages.REQUIRED_FIELD)
    .test(
      noWhiteSpacesTest.name,
      validationMessages.REQUIRED_FIELD,
      noWhiteSpacesTest.testFunction
    ),
  lastName: string(),
  email: string()
    .email(validationMessages.INVALID_EMAIL)
    .required(validationMessages.REQUIRED_FIELD),
  password: string()
    .required(validationMessages.REQUIRED_FIELD)
    .min(8, validationMessages.PASSWORD_MIN_LENGTH)
    .test(
      noWhiteSpacesTest.name,
      validationMessages.REQUIRED_FIELD,
      noWhiteSpacesTest.testFunction
    ),
  confirmPassword: string()
    .required(validationMessages.REQUIRED_FIELD)
    .min(8, validationMessages.PASSWORD_MIN_LENGTH)
    .oneOf([ref('password')], validationMessages.PASSWORD_NOT_MATCH)
    .test(
      noWhiteSpacesTest.name,
      validationMessages.REQUIRED_FIELD,
      noWhiteSpacesTest.testFunction
    ),
});
