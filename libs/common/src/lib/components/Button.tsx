'use client';
import { FC, MouseEvent, ReactNode } from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';
import { ButtonVariant } from 'react-bootstrap/types';

interface ButtonProps {
  title: string | ReactNode;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariant;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<ButtonProps> = ({ title, type, variant, ...props }) => {
  return (
    <BootstrapButton
      className={props?.className || ''}
      disabled={props?.disabled || false}
      type={type || 'button'}
      variant={variant}
      onClick={(event) => props?.onClick && props.onClick(event)}
    >
      {title}
    </BootstrapButton>
  );
};
