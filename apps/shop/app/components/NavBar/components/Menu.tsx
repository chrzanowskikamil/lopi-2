import style from '../NavBar.module.scss';

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import { FC } from 'react';
import Link from 'next/link';
import { getCategoriesName } from 'apps/shop/actions/getCategoriesName';

const getData = async () => {
  const res = await getCategoriesName();
  const data = res;
  return data;
};

export const Menu: FC = async () => {
  const categories = await getData();
  const renderedCategories = categories.map((category) => (
    <NavDropdown.Item
      key={category}
      as={Link}
      href={`/category/${category}`}
      passHref
    >
      {category}
    </NavDropdown.Item>
  ));

  return (
    <div className={style.menu}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className={style.color} id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Kategorie" id="basic-nav-dropdown">
              {renderedCategories}
            </NavDropdown>
            <NavDropdown
              title="O nas"
              id="basic-nav-dropdown"
              className="hi menu-about"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </div>
  );
};
