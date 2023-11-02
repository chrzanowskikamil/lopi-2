interface ValidationConstansType {
  MIN_NAME_LENGTH: number;
  MIN_PASSWORD_LENGTH: number;
  INVALID_EMAIL_MESSAGE: string;
  REQUIRED_FIELD_MESSAGE: string;
  PASSWORD_MIN_LENGTH_MESSAGE: string;
  PASSWORD_NOT_MATCH_MESSAGE: string;
  PHONE_NUMBER_MIN_LENGTH: number;
  PHONE_NUMBER_MESSAGE: string;
}

export const validationConstans: ValidationConstansType = {
  MIN_NAME_LENGTH: 2,
  MIN_PASSWORD_LENGTH: 8,
  INVALID_EMAIL_MESSAGE: 'Błędny adres e-mail.',
  REQUIRED_FIELD_MESSAGE: 'Uzupełnij pole.',
  PASSWORD_MIN_LENGTH_MESSAGE: 'Hasło musi posiadać co najmniej 8 znaków.',
  PASSWORD_NOT_MATCH_MESSAGE: 'Wprowadzone hasła nie są identyczne.',
  PHONE_NUMBER_MIN_LENGTH: 9,
  PHONE_NUMBER_MESSAGE: 'Podaj poprawny numer telefonu.',
};
