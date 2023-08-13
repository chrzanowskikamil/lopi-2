import { FC } from 'react';
import { SvgNavPropsTypes } from './SvgNavPropsTypes';

export const UserIcon: FC<SvgNavPropsTypes> = ({ width, height }) => {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 12C15.3137 12 18 9.31371 18 6C18 2.68629 15.3137 0 12 0C8.68629 0 6 2.68629 6 6C6 9.31371 8.68629 12 12 12ZM16 6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6Z"
        fill="white"
      />
      <path
        d="M24 22C24 24 22 24 22 24H2C2 24 0 24 0 22C0 20 2 14 12 14C22 14 24 20 24 22ZM22 21.993C21.9971 21.4995 21.6924 20.0209 20.3358 18.6642C19.0313 17.3597 16.5782 16 12 16C7.42176 16 4.96871 17.3597 3.66419 18.6642C2.30751 20.0209 2.00285 21.4995 2 21.993H22Z"
        fill="white"
      />
    </svg>
  );
};
