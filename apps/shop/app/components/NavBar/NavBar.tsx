'use client';

import style from './NavBar.module.scss';

import BootstrapNavbar from 'react-bootstrap/Navbar';

// import Slider from './components/Slider';
import Socials from './components/Socials';
import Menu from './components/Menu';

import { Logo } from '../../assets/SvgIcons/Logo';
import { FC } from 'react';
import MenuDropdownMobile from './components/MenuDropdownMobile';

const NavBar: FC = () => {
  return (
    <>
      <BootstrapNavbar
        expand="lg"
        className={style.navbar}
        data-bs-theme="dark"
      >
        <Menu />
        <BootstrapNavbar.Brand href="#home" className={style.navbarLogo}>
          <Logo />
        </BootstrapNavbar.Brand>
        <Socials />
      </BootstrapNavbar>
      <Slider />
    </>
  );
};
export default NavBar;
