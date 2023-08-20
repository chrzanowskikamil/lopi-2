'use client';

import style from './NavBar.module.scss';
import BootstrapNavbar from 'react-bootstrap/Navbar';

import Slider from './components/Slider';
import Socials from './components/Socials';
import { Menu } from './components/Menu';

import { Logo } from '../../assets/SvgIcons/Logo';
import { FC } from 'react';
import Link from 'next/link';

interface NavBarProps {
  categories: string[];
}

const NavBar: FC<NavBarProps> = ({ categories }) => {
  return (
    <>
      <BootstrapNavbar
        expand="lg"
        className={style.navbar}
        data-bs-theme="dark"
      >
        <Menu categories={categories} />
        <BootstrapNavbar.Brand href="/" className={style.navbarLogo} as={Link} passHref>
          <Logo />
        </BootstrapNavbar.Brand>
        <Socials />
      </BootstrapNavbar>
      <Slider />
    </>
  );
};
export default NavBar;
