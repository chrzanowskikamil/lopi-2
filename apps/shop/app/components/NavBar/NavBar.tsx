'use client';

import { Container, Nav } from 'react-bootstrap';

import { CategoryDropdown } from './CategoryDropdown';
import { FC } from 'react';
import Link from 'next/link';
import { Logo } from '../../assets/SvgIcons/Logo';
import Navbar from 'react-bootstrap/Navbar';
import { RightNavIcons } from './RightNavIcons';
import { SearchComponent } from './SearchComponent';

const NavBar: FC = () => {
  return (
    <Navbar expand="lg" variant={'dark'} className={'lopi-navbar'}>
      <Container fluid>
        <Navbar.Toggle aria-controls="lopi-nav" className={''} />

        {/*FOR LARGE SCREEN ONLY*/}
        <SearchComponent className={'ms-2 me-auto d-block d-sm-none'} />

        {/*FOR SMALL SCREENS*/}
        <RightNavIcons className={'d-flex align-items-center d-sm-none'} />

        <Navbar.Collapse id="lopi-nav">
          <Nav>
            <CategoryDropdown />

            <NavLogo />
          </Nav>
        </Navbar.Collapse>

        {/*LARGE SCREENS*/}
        <RightNavIcons className={'d-none d-sm-flex align-items-center'} />
      </Container>
    </Navbar>
  );
};

const NavLogo = () => (
  <Navbar.Brand
    href="/"
    as={Link as any}
    passHref
    className={'d-none d-md-block position-absolute lopi-nav-logo'}
  >
    <Logo />
  </Navbar.Brand>
);

export default NavBar;
