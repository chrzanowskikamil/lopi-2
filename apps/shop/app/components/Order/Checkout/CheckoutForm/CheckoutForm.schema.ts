import * as Yup from 'yup';
import { validationConstans, noWhiteSpacesTest } from '@lopi-2/common';

export const CheckoutFormSchema = Yup.object().shape({
  customerType: Yup.string()
    .required(validationConstans.REQUIRED_FIELD_MESSAGE)
    .oneOf(
      ['INDIVIDUAL', 'COMPANY'],
      validationConstans.REQUIRED_FIELD_MESSAGE
    ),
  companyName: Yup.string().when('customerType', {
    is: 'COMPANY',
    then: (CheckoutFormSchema) =>
      CheckoutFormSchema.required(
        validationConstans.REQUIRED_FIELD_MESSAGE
      ).test(
        noWhiteSpacesTest.name,
        validationConstans.REQUIRED_FIELD_MESSAGE,
        noWhiteSpacesTest.testFunction
      ),
  }),
  nip: Yup.string().when('customerType', {
    is: 'COMPANY',
    then: (CheckoutFormSchema) =>
      CheckoutFormSchema.required(
        validationConstans.REQUIRED_FIELD_MESSAGE
      ).test(
        noWhiteSpacesTest.name,
        validationConstans.REQUIRED_FIELD_MESSAGE,
        noWhiteSpacesTest.testFunction
      ),
  }),
  salutation: Yup.string()
    .required(validationConstans.REQUIRED_FIELD_MESSAGE)
    .oneOf(['MR', 'MRS'], validationConstans.REQUIRED_FIELD_MESSAGE),
  firstName: Yup.string()
    .required(validationConstans.REQUIRED_FIELD_MESSAGE)
    .test(
      noWhiteSpacesTest.name,
      validationConstans.REQUIRED_FIELD_MESSAGE,
      noWhiteSpacesTest.testFunction
    ),
  lastName: Yup.string()
    .required(validationConstans.REQUIRED_FIELD_MESSAGE)
    .test(
      noWhiteSpacesTest.name,
      validationConstans.REQUIRED_FIELD_MESSAGE,
      noWhiteSpacesTest.testFunction
    ),
  email: Yup.string()
    .email(validationConstans.INVALID_EMAIL_MESSAGE)
    .required(validationConstans.REQUIRED_FIELD_MESSAGE),
  deliveryMethodName: Yup.string().required(
    validationConstans.REQUIRED_FIELD_MESSAGE
  ),
  shippingAddress: Yup.object().shape({
    street: Yup.string()
      .required(validationConstans.REQUIRED_FIELD_MESSAGE)
      .test(
        noWhiteSpacesTest.name,
        validationConstans.REQUIRED_FIELD_MESSAGE,
        noWhiteSpacesTest.testFunction
      ),
    houseNumber: Yup.string()
      .required(validationConstans.REQUIRED_FIELD_MESSAGE)
      .test(
        noWhiteSpacesTest.name,
        validationConstans.REQUIRED_FIELD_MESSAGE,
        noWhiteSpacesTest.testFunction
      ),
    postalCode: Yup.string()
      .required(validationConstans.REQUIRED_FIELD_MESSAGE)
      .test(
        noWhiteSpacesTest.name,
        validationConstans.REQUIRED_FIELD_MESSAGE,
        noWhiteSpacesTest.testFunction
      ),
    city: Yup.string()
      .required(validationConstans.REQUIRED_FIELD_MESSAGE)
      .test(
        noWhiteSpacesTest.name,
        validationConstans.REQUIRED_FIELD_MESSAGE,
        noWhiteSpacesTest.testFunction
      ),
    country: Yup.string()
      .required(validationConstans.REQUIRED_FIELD_MESSAGE)
      .test(
        noWhiteSpacesTest.name,
        validationConstans.REQUIRED_FIELD_MESSAGE,
        noWhiteSpacesTest.testFunction
      ),
    phoneNumber: Yup.string()
      .required(validationConstans.REQUIRED_FIELD_MESSAGE)
      .test(
        noWhiteSpacesTest.name,
        validationConstans.REQUIRED_FIELD_MESSAGE,
        noWhiteSpacesTest.testFunction
      ),
  }),
  useSameAddress: Yup.boolean(),
  billingAddress: Yup.object().when('useSameAddress', {
    is: false,
    then: () =>
      Yup.object().shape({
        street: Yup.string()
          .required(validationConstans.REQUIRED_FIELD_MESSAGE)
          .test(
            noWhiteSpacesTest.name,
            validationConstans.REQUIRED_FIELD_MESSAGE,
            noWhiteSpacesTest.testFunction
          ),
        houseNumber: Yup.string()
          .required(validationConstans.REQUIRED_FIELD_MESSAGE)
          .test(
            noWhiteSpacesTest.name,
            validationConstans.REQUIRED_FIELD_MESSAGE,
            noWhiteSpacesTest.testFunction
          ),
        postalCode: Yup.string()
          .required(validationConstans.REQUIRED_FIELD_MESSAGE)
          .test(
            noWhiteSpacesTest.name,
            validationConstans.REQUIRED_FIELD_MESSAGE,
            noWhiteSpacesTest.testFunction
          ),
        city: Yup.string()
          .required(validationConstans.REQUIRED_FIELD_MESSAGE)
          .test(
            noWhiteSpacesTest.name,
            validationConstans.REQUIRED_FIELD_MESSAGE,
            noWhiteSpacesTest.testFunction
          ),
        country: Yup.string()
          .required(validationConstans.REQUIRED_FIELD_MESSAGE)
          .test(
            noWhiteSpacesTest.name,
            validationConstans.REQUIRED_FIELD_MESSAGE,
            noWhiteSpacesTest.testFunction
          ),
        phoneNumber: Yup.string()
          .required(validationConstans.REQUIRED_FIELD_MESSAGE)
          .test(
            noWhiteSpacesTest.name,
            validationConstans.REQUIRED_FIELD_MESSAGE,
            noWhiteSpacesTest.testFunction
          ),
      }),
  }),
  paymentMethodName: Yup.string()
    .required(validationConstans.REQUIRED_FIELD_MESSAGE)
    .oneOf(
      ['Przelew bankowy', 'Płatność przy odbiorze', 'BLIK', 'PayPal'],
      validationConstans.REQUIRED_FIELD_MESSAGE
    ),
  termsAccepted: Yup.boolean().oneOf(
    [true],
    validationConstans.REQUIRED_FIELD_MESSAGE
  ),
});
