import { Col } from 'react-bootstrap';
import { FC } from 'react';
import { exhaustiveCheck } from '@lopi-2/common';
import style from './BasicInfoStatus.module.scss';

type BasicInfoStatusProps = { status: 'Active' | 'Inactive' };

export const BasicInfoStatus: FC<BasicInfoStatusProps> = ({ status }) => {
  let statusText = '';
  let statusStyle = '';

  switch (status) {
    case 'Active': {
      statusText = 'Aktywny';
      statusStyle = `${style.status} ${style.activeStatus}`;
      break;
    }
    case 'Inactive': {
      statusText = 'Nieaktywy';
      statusStyle = `${style.status} ${style.inactiveStatus}`;
      break;
    }
    default: {
      exhaustiveCheck(status);
    }
  }

  return <Col className={statusStyle}>{statusText}</Col>;
};
