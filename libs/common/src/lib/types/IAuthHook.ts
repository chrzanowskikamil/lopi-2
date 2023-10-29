import { AuthCredentials, SignupValues } from '../models';
import { User } from '../models/User';

export type IAuthHook = {
  user: User | null;
  isAuthenticated: boolean;
  logout: VoidFunction;
  login: (credentials: AuthCredentials) => void;
  register: (values: SignupValues) => void;
};
