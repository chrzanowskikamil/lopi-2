'use client';

import style from './NavBar.module.scss';

import BootstrapNavbar from 'react-bootstrap/Navbar';

import { useState, FC } from 'react';

import Slider from './components/Slider';
import Socials from './components/Socials';

import MenuDesktop from './components/MenuDesktop';
import MenuMobile from './components/MenuMobile';
import MenuDropdownMobile from './components/MenuDropdownMobile';

import { Logo } from '../../assets/SvgIcons/Logo';

const NavBar: FC = () => {
  const [menuMobileActive, setMenuMobileActive] = useState(false);

  const mobileFlag = () => setMenuMobileActive(!menuMobileActive);

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
