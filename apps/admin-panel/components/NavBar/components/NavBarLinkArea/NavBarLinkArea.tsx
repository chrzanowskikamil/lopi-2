import { FC } from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavBarLink } from './components/NavBarLink/NavBarLink';
import { navBarLinkAreaData } from './NavBarLinkAreaData';
import style from './NavBarLinkArea.module.scss';

type NavBarLinkArea = {
  active: string;
  setActive: (href: string) => void;
};
export const NavBarLinkArea: FC<NavBarLinkArea> = ({ active, setActive }) => {
  const outcome = () => {
    return navBarLinkAreaData.map((item, i) => (
      <NavBarLink
        key={i}
        pageName={item.pageName}
        href={item.href}
        active={active}
        setActive={setActive}
        bootstrapIcon={item.bootstrapIcon}
      />
    ));
  };

  return (
    <Nav
      className={`${style.navbarNav} pe-auto flex-column align-items-start w-100`}
    >
      {outcome()}
    </Nav>
  );
};
