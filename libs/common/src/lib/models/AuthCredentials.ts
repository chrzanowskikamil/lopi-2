export interface AuthCredentials {
  username: string;
  password: string;
}

export interface SignupValues extends AuthCredentials {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  confirmPassword: string;
}
