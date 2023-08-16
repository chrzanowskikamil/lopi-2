'use client';

import style from './NavBar.module.scss';

import { Navbar } from 'react-bootstrap';

import Slider from './components/Slider';
import Socials from './components/Socials';
import { Menu } from './components/Menu';

import { FC } from 'react';
import Link from 'next/link';

interface NavBarProps {
  categories: string[];
}

const NavBar: FC<NavBarProps> = ({ categories }) => {
  return (
    <>
      <Navbar expand="lg" className={style.navbar} data-bs-theme="dark">
        <Menu categories={categories} />
        <Navbar.Brand href="/" className={style.navbarLogo} as={Link} passHref>
          Logo
        </Navbar.Brand>
        <Socials />
      </Navbar>

      <Slider />
    </>
  );
};
export default NavBar;
