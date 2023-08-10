'use client';
import { FC } from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';

interface ButtonProps {
  title: string;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  variant?: string;
  onClick?: VoidFunction;
}

export const Button: FC<ButtonProps> = ({
  title,
  className,
  disabled,
  type,
  variant,
  onClick,
}) => {
  return (
    <BootstrapButton
      className={className}
      disabled={disabled}
      type={type}
      variant={variant}
      onClick={onClick}
    >
      {title}
    </BootstrapButton>
  );
};
