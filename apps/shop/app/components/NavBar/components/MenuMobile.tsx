import style from '../NavBar.module.scss';

import { FC } from 'react';

import { SearchIcon } from 'apps/shop/app/assets/SvgIcons/SearchIcon';
import { MenuIconMobile } from 'apps/shop/app/assets/SvgIcons/MenuIconMobile';

interface MenuProps {
  handleMenuSwitch: VoidFunction;
}

const Menu: FC<MenuProps> = ({ handleMenuSwitch }) => {
  const handleClick = () => {
    handleMenuSwitch();
  };

  return (
    <>
      <div className={style.menuMobile}>
        <div className={style.menuIconMobile} onClick={handleClick}>
          <MenuIconMobile />
        </div>
        <div>
          <SearchIcon />
        </div>
      </div>
    </>
  );
};

export default Menu;
