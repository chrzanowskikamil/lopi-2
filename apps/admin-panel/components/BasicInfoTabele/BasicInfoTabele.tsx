'use client';

import { Button, Col, Container, Row } from 'react-bootstrap';

import { SearchForm } from '../components/SearchForm/SearchForm';
import { basicInfoTabeleData } from './basicInfoTabeleData';
import style from './BasicInfoTabele.module.scss';

export const BasicInfoTabele = () => {
  const infoList = basicInfoTabeleData.map((item, i) => {
    return (
      <Row className={`${style.infoList} d-flex align-items-center`} key={i}>
        <Col>{item.picture}</Col>
        <Col>{item.category}</Col>
        <Col>{item.count}</Col>
        <Col>{item.soldCount}</Col>
        <Col>{item.status}</Col>
        <Col>
          <i className="bi bi-pencil"></i>
        </Col>
      </Row>
    );
  });

  return (
    <Container
      className={`${style.basicInfoSectionContainer}  d-flex justify-content-center flex-column`}
    >
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
      <Container className={`${style.basicInfoTabele}`}>
        <Row className={`${style.titleRow} d-flex align-items-center`}>
          <Col>Zdjęcie</Col>
          <Col>Kategorie</Col>
          <Col>Ilość</Col>
          <Col>Sprzedano</Col>
          <Col>Status</Col>
          <Col></Col>
        </Row>

        {...infoList}

        <Row className={`${style.paginationRow}  d-flex align-items-center`}>
          <Col>
            <Button>poprzednia</Button>
          </Col>
          <Col>1 z 2</Col>
          <Col>
            <Button>następne</Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
