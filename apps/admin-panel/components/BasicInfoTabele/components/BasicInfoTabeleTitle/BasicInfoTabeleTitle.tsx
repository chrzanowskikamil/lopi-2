import { Col, Row } from 'react-bootstrap';

import { FC } from 'react';
import style from './BasicInfoTabeleTitle.module.scss';

export const BasicInfoTabeleTitle: FC = () => {
  return (
    <Row className={`${style.titleRow} d-flex align-items-center`}>
      <Col>Zdjęcie</Col>
      <Col>Kategorie</Col>
      <Col>Ilość</Col>
      <Col>Sprzedano</Col>
      <Col>Status</Col>
      <Col></Col>
    </Row>
  );
};
