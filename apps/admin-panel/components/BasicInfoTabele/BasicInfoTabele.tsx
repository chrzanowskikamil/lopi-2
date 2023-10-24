'use client';

import { Button, Col, Container, Form, Row } from 'react-bootstrap';

import style from './BasicInfoTabele.module.scss';

export const BasicInfoTabele = () => {
  const infoList = () => {
    const outcomeArray = [];

    for (let i = 0; i < 5; i++) {
      outcomeArray.push(
        <Row className={style.infoList}>
          <Col>Image.jpg</Col>
          <Col>KategoryTitle</Col>
          <Col>Count</Col>
          <Col>SoldCount</Col>
          <Col>ActiveBar</Col>
          <Col>
            <i className="bi bi-pencil"></i>
          </Col>
        </Row>
      );
    }

    return outcomeArray;
  };

  return (
    <Container
      className={`${style.basicInfoSectionContainer}  d-flex justify-content-center flex-column`}
    >
      <Row>
        <Col>
          <Button>
            <i className="bi bi-plus"></i>Dodaj
          </Button>
        </Col>
        <Col
          className={`${style.basicInfoTableSearchContainer} d-flex align-items-center`}
        >
          <i className={`${style.searchIcon} bi bi-search`}></i>
          <Form.Control
            type="text"
            placeholder={'Search'}
            className={style.searchBar}
          />

          <Button type="submit" className={style.button}>
            Szukaj
          </Button>
        </Col>
      </Row>
      <Container className={`${style.basicInfoTabele}`}>
        <Row className={style.titleRow}>
          <Col>Zdjęcie</Col>
          <Col>Kategorie</Col>
          <Col>Ilość</Col>
          <Col>Sprzedano</Col>
          <Col>Status</Col>
          <Col></Col>
        </Row>

        {infoList()}

        <Row className={style.paginationRow}>
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
