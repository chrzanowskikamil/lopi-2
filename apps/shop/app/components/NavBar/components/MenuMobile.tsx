import style from '../NavBar.module.scss';

import { FC } from 'react';

import { SearchIcon } from 'apps/shop/app/assets/SvgIcons/SearchIcon';
import { MenuIconMobile } from 'apps/shop/app/assets/SvgIcons/MenuIconMobile';

interface MenuProps {
  mobileFlag: VoidFunction;
}

const Menu: FC<MenuProps> = ({ mobileFlag }) => {
  const icoWidth = 22;
  const icoHeight = 22;

  const handleClick = () => {
    mobileFlag();
  };
  return (
    <>
      <div className={style.menuMobile}>
        <div className={style.menuIconMobile} onClick={handleClick}>
          <MenuIconMobile />
        </div>
        <div>
          <SearchIcon width={icoWidth} height={icoHeight} />
        </div>
      </div>
    </>
  );
};

export default Menu;
