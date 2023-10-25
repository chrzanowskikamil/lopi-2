import { Button, Col, Row } from 'react-bootstrap';

import { FC } from 'react';
import style from './BasicInfoTabelePagination.module.scss';

export const BasicInfoTabelePagination: FC = () => {
  return (
    <Row className={`${style.paginationRow}  d-flex align-items-center`}>
      <Col>
        <Button className={style.paginationRowButton}>poprzednia</Button>
      </Col>
      <Col className="text-center">1 z 2</Col>
      <Col className="d-flex justify-content-end">
        <Button className={style.paginationRowButton}>następna</Button>
      </Col>
    </Row>
  );
};
