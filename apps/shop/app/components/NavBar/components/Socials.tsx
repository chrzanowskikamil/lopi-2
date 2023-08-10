import style from '../NavBar.module.scss';

import { CartIcon } from '../../../assets/SvgIcons/CartIcon';
import { HeartIcon } from 'apps/shop/app/assets/SvgIcons/HeartIcon';
import { SearchIcon } from 'apps/shop/app/assets/SvgIcons/SearchIcon';
import { UserIcon } from 'apps/shop/app/assets/SvgIcons/UserIcon';

import { FC } from 'react';

const Socials: FC = () => {
  return (
    <div className={style.socials}>
      <div className={style.socialsElements}>
        <SearchIcon />
      </div>
      <div className={style.socialsElements}>
        <UserIcon />
      </div>
      <div className={style.socialsElements}>
        <div className={style.socialsCounter}>
          <span>0</span>
        </div>
        <HeartIcon />
      </div>

      <div className={style.socialsElements}>
        <div className={style.socialsCounter}>
          <span>0</span>
        </div>
        <CartIcon />
      </div>
    </div>
  );
};
export default Socials;
