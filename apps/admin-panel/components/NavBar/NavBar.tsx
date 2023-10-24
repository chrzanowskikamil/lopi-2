'use client';

import BootstrapNavbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { Logo } from '../../public/svg/Logo';
import Nav from 'react-bootstrap/Nav';
import style from './NavBar.module.scss';
import { useState } from 'react';

const NavBar: React.FC = () => {
  const [active, setActive] = useState<string>('');

  return (
    <BootstrapNavbar
      collapseOnSelect
      className={`${style.navbar} d-flex flex-column h-100 d-inline-block justify-content-between`}
    >
      <BootstrapNavbar.Brand
        href="/"
        as={Link}
        className=" w-100 d-flex justify-content-center"
        onClick={() => setActive('')}
      >
        <Logo
          className={`${style.logo} d-flex flex-row justify-content-around align-items-around `}
        />
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
      <BootstrapNavbar.Collapse
        id="responsive-navbar-nav"
        className={`${style.navbarCollapse} d-flex flex-column justify-content-start w-100`}
      >
        <Nav
          className={`${style.navbarNav} pe-auto flex-column align-items-start w-100`}
        >
          <Nav.Link
            href="/"
            as={Link}
            className={`${style.navbarNavElement} ${
              active === '' ? style.active : ''
            }`}
            onClick={() => setActive('')}
          >
            <i className={`${style.navbarIcon} bi bi-house`}></i> Strona główna
          </Nav.Link>
          <Nav.Link
            href="/products"
            as={Link}
            className={`${style.navbarNavElement} ${
              active === 'products' ? style.active : ''
            }`}
            onClick={() => setActive('products')}
          >
            <i className={`${style.navbarIcon} bi bi-box`}></i> Produkty
          </Nav.Link>
          <Nav.Link
            href="/category"
            as={Link}
            onClick={() => setActive('category')}
            className={`${style.navbarNavElement} ${
              active === 'category' ? style.active : ''
            }`}
          >
            <i className={`${style.navbarIcon} bi bi-card-list`}></i> Kategorie
          </Nav.Link>
          <Nav.Link
            href="/settings"
            as={Link}
            onClick={() => setActive('settings')}
            className={`${style.navbarNavElement} ${
              active === 'settings' ? style.active : ''
            }`}
          >
            <i className={`${style.navbarIcon} bi bi-gear`}></i> Ustawienia
          </Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
      <Button variant="outline-success" className={style.logoutButton}>
        <i className={`${style.navbarIcon} bi bi-box-arrow-right`}></i>
        <span className={style.logoutButtonText}>Wyloguj</span>
      </Button>
    </BootstrapNavbar>
  );
};

export default NavBar;
