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
        {item.status === 'Active' ? (
          <Col className={`${style.status} ${style.activeStatus} `}>
            Aktywny
          </Col>
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
  });

  return (
    <Container
      className={`${style.basicInfoSectionContainer} d-flex flex-column justify-content-center`}
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
            <Button className={style.paginationRowButton}>poprzednia</Button>
          </Col>
          <Col className="text-center">1 z 2</Col>
          <Col className="d-flex justify-content-end">
            <Button className={style.paginationRowButton}>następna</Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
