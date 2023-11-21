'use client';

import { ChildrenFC } from '@lopi-2/common';
import { Provider } from 'react-redux';
import { store } from './reduxStore';

export const ReduxProvider: ChildrenFC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
