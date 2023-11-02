export interface ResetPasswordCredentials {
  username: string;
  encodedUsername: string;
  tokenValue?: string;
  password: string;
  encodedPassword?: string;
}
