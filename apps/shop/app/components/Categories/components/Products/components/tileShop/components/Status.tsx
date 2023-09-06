'use client';

import { FC } from 'react';

import style from '../tileShop.module.scss';

import { StatusProps } from '../../../../../CategoriesTypesProps';

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
