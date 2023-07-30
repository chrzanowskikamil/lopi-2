import { FC } from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';

interface ButtonProps {
  title: string;
  className: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: string;
}

export const Button: FC<ButtonProps> = ({
  title,
  className,
  disabled,
  type,
  variant,
}) => {
  return (
    <BootstrapButton
      className={className}
      disabled={disabled}
      type={type}
      variant={variant}
    >
      {title}
    </BootstrapButton>
  );
};
