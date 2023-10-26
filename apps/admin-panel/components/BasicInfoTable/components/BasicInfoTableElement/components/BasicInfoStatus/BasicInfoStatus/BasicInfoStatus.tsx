import { Col } from 'react-bootstrap';
import { FC } from 'react';
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
      const exhaustiveCheck: never = status;

      return exhaustiveCheck;
    }
  }

  return <Col className={statusStyle}>{statusText}</Col>;
};
