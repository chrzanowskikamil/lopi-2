import style from '../NavBar.module.scss';

import { CartIcon } from '../../../assets/SvgIcons/CartIcon';
import { HeartIcon } from '../../../assets/SvgIcons/HeartIcon';
import { SearchIcon } from '../../../assets/SvgIcons/SearchIcon';
import { UserIcon } from '../../../assets/SvgIcons/UserIcon';

import { FC } from 'react';

const Socials: FC = () => {
  return (
    <div className={style.socials}>
      <div className={style.searchIcon}>
        <div className={style.searchDesktop}>
          <SearchIcon />
        </div>
      </div>
      <div className={style.userIcon}>
        <UserIcon />
      </div>
      <div className={style.heartIcon}>
        <div className={style.socialsCounter}>
          <span>0</span>
        </div>
        <HeartIcon />
      </div>

      <div className={style.cartIcon}>
        <div className={style.socialsCounter}>
          <span>0</span>
        </div>
        <CartIcon />
      </div>
    </div>
  );
};
export default Socials;
