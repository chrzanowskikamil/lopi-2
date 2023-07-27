'use client';

import './NavBar.modules.scss';

import Navbar from 'react-bootstrap/Navbar';

import Slider from './components/Slider';
import Socials from './components/Socials';
import Menu from './components/Menu';

export default function NavBar() {
  return (
    <>
      <div className="navbar">
        <Navbar expand="lg" className="bg-black white" data-bs-theme="dark">
          <Menu />
          <Navbar.Brand href="#home" className="navbar-logo">
            Logo
          </Navbar.Brand>
          <Socials />
        </Navbar>
      </div>
      <Slider />
    </>
  );
}
