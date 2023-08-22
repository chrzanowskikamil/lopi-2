'use client';

import style from './NavBar.module.scss';

import Navbar from 'react-bootstrap/Navbar';

import { FC, useState } from 'react';

import Slider from './components/Slider';
import Socials from './components/Socials';

import MenuDesktop from './components/MenuDesktop';
import MenuMobile from './components/MenuMobile';
import MenuDropdownMobile from './components/MenuDropdownMobile';

import { Logo } from '../../assets/SvgIcons/Logo';

const NavBar: FC = () => {
  const [menuMobileActive, setMenuMobileActive] = useState<boolean>();

  const handleMenuSwitch = () => setMenuMobileActive(!menuMobileActive);

  return (
    <>
      <Navbar expand="lg" className={style.navbar}>
        <MenuMobile handleMenuSwitch={handleMenuSwitch} />
        <MenuDesktop />
        <Navbar.Brand href="#home" className={style.navbarLogo}>
          <Logo />
        </Navbar.Brand>
        <Socials />
      </Navbar>
      {menuMobileActive ? <MenuDropdownMobile /> : ''}
      <Slider />
    </>
  );
};
export default NavBar;
