'use client';

import { FC } from 'react';

import style from '../tileProduct.module.scss';

type StatusProps = {
  status?: string;
};
const Status: FC<StatusProps> = ({ status }) => {
  return (
    <>
      <div className={style.tileStatus}>
        {status === 'statusNew' ? (
          <div className={style.statusNew}>
            <span>new</span>
          </div>
        ) : (
          <div className={style.price}>{status}</div>
        )}
      </div>
    </>
  );
};

export default Status;
