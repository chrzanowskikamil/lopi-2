import { FC } from 'react';

import style from '../tileShop.module.scss';

type StatusProps = {
  status: string | undefined;
};

const Status: FC<StatusProps> = ({ status }) => {
  return (
    <>
      <div className={style.tileStatus}>
        {status === 'new' ? (
          <div className={style.new}>{status}</div>
        ) : (
          <div className={style.price}>{status}</div>
        )}
      </div>
    </>
  );
};

export default Status;
