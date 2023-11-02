'use client';
import { FC } from 'react';
import { exhaustiveCheck, usePasswordReset } from '@lopi-2/common';
import { ResetPasswordForm } from './ResetPasswordForm';
import { SuccessReset } from './SuccessReset';

export const ResetPassword: FC = () => {
  const { status } = usePasswordReset();

  const CurrentComponent = () => {
    switch (status) {
      case 'pending':
        return <ResetPasswordForm />;
      case 'success':
        return <SuccessReset />;
      default:
        return exhaustiveCheck(status);
    }
  };

  return <CurrentComponent />;
};
