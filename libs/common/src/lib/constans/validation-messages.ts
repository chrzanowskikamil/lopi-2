interface ValidationMessagesType {
  INVALID_EMAIL: string;
  REQUIRED_FIELD: string;
  PASSWORD_MIN_LENGTH: string;
  PASSWORD_NOT_MATCH: string;
}

export const validationMessages: ValidationMessagesType = {
  INVALID_EMAIL: 'Błędny adres e-mail',
  REQUIRED_FIELD: 'Uzupełnij pole',
  PASSWORD_MIN_LENGTH: 'Hasło musi posiadać co najmniej 8 znaków',
  PASSWORD_NOT_MATCH: 'Wprowadzone hasła nie są identyczne',
};
