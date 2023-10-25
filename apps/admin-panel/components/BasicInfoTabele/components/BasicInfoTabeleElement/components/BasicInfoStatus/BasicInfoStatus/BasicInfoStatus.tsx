import { Col } from 'react-bootstrap';
import { FC } from 'react';
import style from './BasicInfoStatus.module.scss';

type BasicInfoStatusProps = { status: 'Active' | 'Inactive' };

export const BasicInfoStatus: FC<BasicInfoStatusProps> = ({ status }) => {
  return status === 'Active' ? (
    <Col className={`${style.status} ${style.activeStatus} `}>Aktywny</Col>
  ) : (
    <Col className={`${style.status} ${style.inactiveStatus}`}>Nieaktywy</Col>
  );
};
