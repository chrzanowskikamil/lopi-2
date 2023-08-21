'use client';

import style from './NavBar.module.scss';

import Navbar from 'react-bootstrap/Navbar';

import { useState, FC } from 'react';
import Link from 'next/link';

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
        <Navbar.Brand href="/" className={style.navbarLogo} as={Link} passHref>
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
