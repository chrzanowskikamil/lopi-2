'use client';

import style from './NavBar.module.scss';

import Navbar from 'react-bootstrap/Navbar';

// import Slider from './components/Slider';
import Socials from './components/Socials';
import Menu from './components/Menu';

import { Logo } from '../../assets/SvgIcons/Logo';
import { FC } from 'react';
import MenuDropdownMobile from './components/MenuDropdownMobile';

const NavBar: FC = () => {
  return (
    <>
      <Navbar expand="lg" className={style.navbar} data-bs-theme="dark">
        <Menu />
        <Navbar.Brand href="#home" className={style.navbarLogo}>
          <Logo />
        </Navbar.Brand>
        <Socials />
      </Navbar>
      <MenuDropdownMobile />
      {/* <Slider /> */}
    </>
  );
};
export default NavBar;
