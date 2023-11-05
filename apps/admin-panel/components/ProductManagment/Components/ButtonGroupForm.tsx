'use client';

import { useFormikContext } from 'formik';

import style from '../ProductManagment.module.scss';

import Button from 'react-bootstrap/Button';

interface ButtonGroupFormProps {
  children: string;
}

export const ButtonGroupForm: React.FC<ButtonGroupFormProps> = ({
  children,
}) => {
  const { handleReset, handleSubmit } = useFormikContext();

  return (
    <div className={style.buttonsFlex}>
      <Button className={style.button} onClick={() => handleSubmit()}>
        {children}
      </Button>
      <Button
        variant="secondary"
        className={style.button}
        onClick={handleReset}
      >
        Reset form
      </Button>
    </div>
  );
};
