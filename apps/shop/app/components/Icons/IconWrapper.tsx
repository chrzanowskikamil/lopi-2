import { FC } from 'react';
import styles from './IconWrapper.module.scss';

interface IconWrapper {
  icon: JSX.Element;
  className?: string;
}

export const IconWrapper: FC<IconWrapper> = (props) => {
  return (
    <div
      className={
        styles.wrapper + ' lopi-icon-wrapper ' + props?.className || ''
      }
    >
      {props.icon}
    </div>
  );
};
