import { FC } from 'react';
import { IconWrapper } from '../Icons/IconWrapper';

export const SearchComponent: FC<{ className?: string }> = (props) => (
  <IconWrapper
    className={props.className}
    icon={<i className="bi bi-search"></i>}
  />
);
