'use client';

import Link from 'next/link';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar: React.FC = () => {
  return (
    <BootstrapNavbar
      collapseOnSelect
      expand="lg"
      data-bs-theme="dark"
      bg="dark"
    >
      <Container>
        <BootstrapNavbar.Brand href="/" as={Link}>
          &lt;AdminPanel/&gt;
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <BootstrapNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/category" as={Link}>
              Category Edit
            </Nav.Link>
            <Nav.Link href="/page">Page</Nav.Link>
            <NavDropdown title="Empty" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Empty</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Empty</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Empty</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Empty</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Empty</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Empty
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default NavBar;
