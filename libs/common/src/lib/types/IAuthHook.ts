import { AuthCredentials } from '../models';
import { User } from '../models/User';

export type IAuthHook = {
  user: User | null;
  isAuthenticated: boolean;
  logout: VoidFunction;
  login: (credentials: AuthCredentials) => void;
};
