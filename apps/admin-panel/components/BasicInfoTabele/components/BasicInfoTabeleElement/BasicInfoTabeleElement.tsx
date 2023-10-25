import { Col, Row } from 'react-bootstrap';

import { BasicInfoTabeleDataProps } from '../../basicInfoTabeleData';
import { FC } from 'react';
import style from './BasicInfoTabeleElement.module.scss';

type BasicInfoTabeleElementProps = {
  item: BasicInfoTabeleDataProps;
};

export const BasicInfoTabeleElement: FC<BasicInfoTabeleElementProps> = ({
  item,
}) => {
  return (
    <Row className={`${style.infoList} d-flex align-items-center`}>
      <Col>{item.picture}</Col>
      <Col>{item.category}</Col>
      <Col>{item.count}</Col>
      <Col>{item.soldCount}</Col>
      {item.status === 'Active' ? (
        <Col className={`${style.status} ${style.activeStatus} `}>Aktywny</Col>
      ) : (
        <Col className={`${style.status} ${style.inactiveStatus}`}>
          Nieaktywy
        </Col>
      )}
      <Col>
        <i className={`${style.tabeleDataIcon} bi bi-pencil`}></i>
      </Col>
    </Row>
  );
};
