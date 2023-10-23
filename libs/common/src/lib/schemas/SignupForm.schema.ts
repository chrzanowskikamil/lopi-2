import { object, ref, string } from 'yup';
import { noWhiteSpacesTest, validationConstans } from '../constans';

export const SignupFormSchema = object({
  firstName: string()
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
  lastName: string()
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
  phoneNumber: string(),
  username: string()
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
