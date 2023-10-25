import { Button, Col, Row } from 'react-bootstrap';

import { FC } from 'react';
import { SearchForm } from '../../../components/SearchForm/SearchForm';
import style from './BasicInfoTabeleMenu.module.scss';

export const BasicInfoTabeleMenu: FC = () => {
  return (
    <Row>
      <Col>
        <Button className={style.addButton}>
          <i className={`${style.plusIcon} bi bi-plus-lg`}></i>dodaj
        </Button>
      </Col>
      <Col
        className={`${style.basicInfoTableSearchContainer} d-flex align-items-center justify-content-end`}
      >
        <SearchForm buttonClassName={style.buttonColor} />
      </Col>
    </Row>
  );
};
