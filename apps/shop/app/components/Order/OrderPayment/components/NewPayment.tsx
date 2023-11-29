import { FC } from 'react';
import Link from 'next/link';
import { AppRoutes } from '@lopi-2/common';

export const NewPayment: FC = () => {
  return (
    <>
      <p>Płatność nie została zrealizowana!</p>
      <Link href={AppRoutes.getHomePath()}>
        <span>&#60;</span>
        ponów płatność
      </Link>
    </>
  );
};
