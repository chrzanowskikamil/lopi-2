import styles from './QuantityButton.module.scss';
import { FC } from 'react';
import { Button } from '@lopi-2/common';

interface QuantityButtonProps {
  title: string;
  onClick: () => void;
}

export const QuantityButton: FC<QuantityButtonProps> = ({ title, onClick }) => {
  return (
    <Button title={title} onClick={onClick} className={styles.quantityButton} />
  );
};
