import { Col, Row } from 'react-bootstrap';

import { BasicInfoStatus } from './components/BasicInfoStatus/BasicInfoStatus';
import { BasicInfoTableDataProps } from '../../basicInfoTableData';
import { FC } from 'react';
import style from './BasicInfoTableElement.module.scss';

type BasicInfoTableElementProps = {
  item: BasicInfoTableDataProps;
};

export const BasicInfoTableElement: FC<BasicInfoTableElementProps> = ({
  item,
}) => {
  return (
    <Row className={`${style.infoList} align-items-center`}>
      <Col>{item.picture}</Col>
      <Col>{item.category}</Col>
      <Col>{item.count}</Col>
      <Col>{item.soldCount}</Col>
      <Col>
        <BasicInfoStatus status={item.status} />
      </Col>
      <Col>
        <i className={`${style.tableDataIcon} bi bi-pencil`}></i>
      </Col>
    </Row>
  );
};
