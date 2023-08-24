'use client';

import style from '../ProductManagment.module.scss';

import Button from 'react-bootstrap/Button';

interface ButtonDisabledProps {
  children: string;
}

export const ButtonDisabled: React.FC<ButtonDisabledProps> = ({ children }) => {
  return (
    <div className={style.buttonsFlex}>
      <Button disabled className={style.button}>
        {children}
      </Button>
    </div>
  );
};
