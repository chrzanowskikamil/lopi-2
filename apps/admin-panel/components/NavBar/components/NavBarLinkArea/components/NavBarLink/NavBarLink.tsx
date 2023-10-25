import { FC } from 'react';
import Link from 'next/link';
import { Nav } from 'react-bootstrap';
import style from './NavBarLink.module.scss';

type NavBarLinkType = {
  pageName: string;
  href: string;
  active: string;
  setActive: (href: string) => void;
  bootstrapIcon: string;
};
export const NavBarLink: FC<NavBarLinkType> = ({
  pageName,
  href,
  active,
  setActive,
  bootstrapIcon,
}) => {
  return (
    <Nav.Link
      href={`${href}`}
      as={Link}
      onClick={() => setActive(href)}
      className={`${style.navbarNavElement} ${
        active === href ? style.active : style.inactive
      }`}
    >
      <i className={`${style.navbarIcon} ${bootstrapIcon}`}></i> {pageName}
    </Nav.Link>
  );
};
