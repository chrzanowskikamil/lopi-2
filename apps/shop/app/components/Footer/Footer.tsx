'use client';

import style from './Footer.module.scss';

import { FC } from 'react';

// import FooterMobile from './FooterMobile';
// import FooterDesktop from './FooterDesktop';
import Socials from './components/Socials';
import Subscription from './components/Subscription';
// import FooterList from './components/FooterList';
import { Col, Container, Row } from 'react-bootstrap';
import { FooterList } from './components/FooterList';

export const Footer: FC = () => {
  return (
    <footer className={style.footer + ' pt-4'}>
      <Container fluid>
        <Row className={style.footerRow}>
          <Col className={style.footerCol} xs={6} md={3}>
            <ContactColumn />
          </Col>
          <Col className={style.footerCol} xs={6} md={2}>
            <CategoriesColumn />
          </Col>
          <Col className={style.footerCol} xs={6} md={2}>
            <HelpColumn />
          </Col>
          <Col className={style.footerCol} xs={6} md={1}>
            <AboutColumn />
          </Col>
          <Col className={style.footerCol} xs md={{ span: 3, offset: 1 }}>
            <SubscribeColumn />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

const AboutColumn = () => (
  // <FooterList title="my" className={style.about}>
  <FooterList title="My" className={'style.about'}>
    <li>O nas</li>
    <li>Przepisy</li>
    <li>Kawiarnia</li>
  </FooterList>
);

const HelpColumn = () => (
  <FooterList title="Centrum Pomocy">
    <li>Regulamin</li>
    <li>RODO</li>
    <li>Polityka prywatności &quot;cookies&quot;</li>
    <li>Polityka prywatności</li>
  </FooterList>
);

const CategoriesColumn = () => (
  <FooterList title="Kategorie">
    <li>Etiopia</li>
    <li>Wietnam</li>
    <li>Kolumbia</li>
    <li>Kostaryka</li>
    <li>Akcesoria</li>
  </FooterList>
);

const ContactColumn = () => (
  <FooterList title="Kontakt">
    <li>
      ul.Wensu 1/6 <br />
      90-005 Mars
    </li>
    <li className={style.footerContactInfo}>Email:galaxy@gmail.com</li>
    <li>Tel.:123-456-789</li>
    <li>
      <Socials />
    </li>
  </FooterList>
);

const SubscribeColumn = () => (
  <div className={style.footerBottom}>
    <FooterList title="Subskrypcja">
      <li>
        Zapisz się do naszej subskrypcji, a otrzymasz 10% rabaty na pierwsze
        zakupy.
      </li>
      <li>
        <Subscription />
      </li>
    </FooterList>
  </div>
);
