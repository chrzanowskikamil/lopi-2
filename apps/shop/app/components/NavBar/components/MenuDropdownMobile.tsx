import style from '../NavBar.module.scss';

import { FC } from 'react';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Nav from 'react-bootstrap/Nav';

import Menu from './Menu';

interface MenuDropdownMobileProps {
  visible: boolean;
}

const MenuDropdownMobile: FC<MenuDropdownMobileProps> = ({ visible }) => {
  return visible ? (
    <section className={style.dropdownMobile}>
      <Nav className="me-auto">
        <ButtonGroup className={style.dropdownGroup}>
          <Menu />
        </ButtonGroup>
      </Nav>
    </section>
  ) : (
    ''
  );
};

export default MenuDropdownMobile;
