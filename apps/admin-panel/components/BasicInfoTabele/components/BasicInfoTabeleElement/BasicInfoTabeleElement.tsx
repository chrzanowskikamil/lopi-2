import { Col, Row } from 'react-bootstrap';

import { BasicInfoStatus } from './components/BasicInfoStatus/BasicInfoStatus/BasicInfoStatus';
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
      <Col>
        <BasicInfoStatus status={item.status} />
      </Col>
      <Col>
        <i className={`${style.tabeleDataIcon} bi bi-pencil`}></i>
      </Col>
    </Row>
  );
};
