import { FC } from 'react';

import NavDropdown from 'react-bootstrap/NavDropdown';

const Menu: FC = () => {
  return (
    <>
      <NavDropdown title="Kategorie" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Etiopia</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Wietnam</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Kolumbia</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Kostaryka</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Akcesoria</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown
        title="O nas"
        id="basic-nav-dropdown"
        className="hi menu-about"
      >
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </>
  );
};

export default Menu;
