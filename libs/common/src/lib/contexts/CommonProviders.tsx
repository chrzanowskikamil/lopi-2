'use client';

import { ChildrenFC } from '../models';
import { ToastProvider } from './ToastContext';

export const CommonProviders: ChildrenFC = ({ children }) => {
  return <ToastProvider>{children}</ToastProvider>;
};
