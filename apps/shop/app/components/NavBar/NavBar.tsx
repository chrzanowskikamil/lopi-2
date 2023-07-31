'use client';

import './NavBar.modules.scss';

import Navbar from 'react-bootstrap/Navbar';

import Slider from './components/Slider';
import Socials from './components/Socials';
import Menu from './components/Menu';
import { ChildrenFC, CustomButton } from '@lopi-2/common';

const NavBar: ChildrenFC<any> = () => {
  return (
    <>
      <div className="navbar">
        <Navbar expand="lg" className="bg-black white" data-bs-theme="dark">
          <Menu />
          <Navbar.Brand href="#home" className="navbar-logo">
            Logo
          </Navbar.Brand>
          <CustomButton>afs</CustomButton>
          <Socials />
        </Navbar>
      </div>
      <Slider />
    </>
  );
};

export default NavBar;
