'use client';

import { FC, useState } from 'react';

import BootstrapNavbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { Logo } from '../../public/svg/Logo';
import { NavBarLinkArea } from './components/NavBarLinkArea/NavBarLinkArea';
import style from './NavBar.module.scss';
import { useAuth } from '@lopi-2/common';

const NavBar: FC = () => {
  const [active, setActive] = useState<string>('/');
  const { logout } = useAuth();

  return (
    <BootstrapNavbar
      collapseOnSelect
      className={`${style.navbar} d-flex flex-column h-100 d-inline-block justify-content-between`}
    >
      <BootstrapNavbar.Brand
        href="/"
        as={Link}
        className=" w-100 d-flex justify-content-center"
        onClick={() => setActive('/')}
      >
        <Logo
          className={`${style.logo} d-flex flex-row justify-content-around align-items-around`}
        />
      </BootstrapNavbar.Brand>

      <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />

      <BootstrapNavbar.Collapse
        id="responsive-navbar-nav"
        className={`${style.navBarColapse} d-flex flex-column justify-content-start w-100`}
      >
        <NavBarLinkArea active={active} setActive={setActive} />
      </BootstrapNavbar.Collapse>

      <Button
        onClick={logout}
        variant="outline-success"
        className={style.logoutButton}
      >
        <i className={`${style.navbarIcon} bi bi-box-arrow-right`}></i>
        <span className={style.logoutButtonText}>Wyloguj</span>
      </Button>
    </BootstrapNavbar>
  );
};

export default NavBar;
