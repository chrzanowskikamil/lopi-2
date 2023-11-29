import { FC } from 'react';
import Link from 'next/link';
import { AppRoutes } from '@lopi-2/common';

export const CompletedPayment: FC = () => {
  return (
    <>
      <p>Płatność została zrealizowana! Dziękujemy i zapraszamy ponownie!</p>
      <Link href={AppRoutes.getHomePath()}>&lt; powrót do strony głównej</Link>
    </>
  );
};
