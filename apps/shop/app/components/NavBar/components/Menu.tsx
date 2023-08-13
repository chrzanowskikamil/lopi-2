import style from '../NavBar.module.scss';

import { SearchIcon } from 'apps/shop/app/assets/SvgIcons/SearchIcon';
import { MenuIconMobile } from 'apps/shop/app/assets/SvgIcons/MenuIconMobile';

import { FC } from 'react';

// import MenuDropdownMobile from './MenuDropdownMobile';

const Menu: FC = () => {
  const icoWidth = 22;
  const icoHeight = 22;

  return (
    <div className={style.menu}>
      <div className={style.menuIconMobile}>
        <MenuIconMobile />
      </div>
      <div className={style.socialsElements}>
        <SearchIcon width={icoWidth} height={icoHeight} />
      </div>
    </div>
  );
};

export default Menu;
