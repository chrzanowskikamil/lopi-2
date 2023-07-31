'use client';

import { Button } from 'react-bootstrap';
import { ChildrenFC } from '../models';

export const CustomButton: ChildrenFC = (props) => {
  return <Button>{props.children}</Button>;
};
