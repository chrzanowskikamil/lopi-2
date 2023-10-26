import { Button, Col, Row } from 'react-bootstrap';

import { FC } from 'react';
import style from './BasicInfoTablePagination.module.scss';

export const BasicInfoTablePagination: FC = () => {
  return (
    <Row className={`${style.paginationRow} align-items-center`}>
      <Col>
        <Button className={style.paginationRowButton}>poprzednia</Button>
      </Col>
      <Col className="text-center">1 z 2</Col>
      <Col>
        <div className="d-flex justify-content-end">
          <Button className={style.paginationRowButton}>następna</Button>
        </div>
      </Col>
    </Row>
  );
};
