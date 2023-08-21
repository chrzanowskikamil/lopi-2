import style from '../NavBar.module.scss';

import { FC } from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Menu } from './Menu';

const MenuDesktop: FC = () => {
  return (
    <div className={style.menu}>
      <div className={style.menuDesktop}>
        <Container className={style.container}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className={style.color} id="basic-navbar-nav">
            <Nav className="me-auto">
              <Menu />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </div>
    </div>
  );
};

export default MenuDesktop;
