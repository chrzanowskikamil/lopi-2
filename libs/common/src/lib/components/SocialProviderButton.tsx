import { FC, ReactNode } from 'react';

interface SocialProviderButtonProps {
  Icon?: ReactNode;
  title: string;
  className?: string;
}

export const SocialProviderButton: FC<SocialProviderButtonProps> = ({
  Icon,
  title,
  className,
}) => {
  return (
    <button className={className}>
      {Icon}
      <span>{title}</span>
    </button>
  );
};
