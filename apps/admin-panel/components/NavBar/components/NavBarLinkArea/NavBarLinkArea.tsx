import { FC } from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavBarLink } from './components/NavBarLink/NavBarLink';
import style from './NavBarLinkArea.module.scss';

type NavBarLinkArea = {
  active: string;
  setActive: (href: string) => void;
};
export const NavBarLinkArea: FC<NavBarLinkArea> = ({ active, setActive }) => {
  return (
    <Nav
      className={`${style.navbarNav} pe-auto flex-column align-items-start w-100`}
    >
      <NavBarLink
        pageName="Strona główna"
        href="/"
        active={active}
        setActive={setActive}
        bootstrapIcon="bi bi-house-door"
      />
      <NavBarLink
        pageName="Produkty"
        href="/products"
        active={active}
        setActive={setActive}
        bootstrapIcon="bi bi-box"
      />
      <NavBarLink
        pageName="Kategorie"
        href="/category"
        active={active}
        setActive={setActive}
        bootstrapIcon="bi bi-card-list"
      />
      <NavBarLink
        pageName="Ustawienia"
        href="/settings"
        active={active}
        setActive={setActive}
        bootstrapIcon="bi bi-gear"
      />
    </Nav>
  );
};
