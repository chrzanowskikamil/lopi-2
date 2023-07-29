'use client';

import style from './NavBar.module.scss';

import Navbar from 'react-bootstrap/Navbar';

import Slider from './components/Slider';
import Socials from './components/Socials';
import Menu from './components/Menu';

const NavBar: FC = () => {
  return (
    <>
      <Navbar expand="lg" className={style.navbar} data-bs-theme="dark">
        <Menu />
        <Navbar.Brand href="#home" className={style.navbarLogo}>
          Logo
        </Navbar.Brand>
        <Socials />
      </Navbar>

      <Slider />
    </>
  );
};
export default NavBar;
