enum UserRole {
  USER = 'ROLE_USER',
  ADMIN = 'ROLE_ADMIN',
}

export interface User {
  username: string;
  role: UserRole;
  firstName: string;
  lastName: string;
  token: string;
}
