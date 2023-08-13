import style from '../NavBar.module.scss';

import { CartIcon } from '../../../assets/SvgIcons/CartIcon';
import { HeartIcon } from 'apps/shop/app/assets/SvgIcons/HeartIcon';
// import { SearchIcon } from 'apps/shop/app/assets/SvgIcons/SearchIcon';
import { UserIcon } from 'apps/shop/app/assets/SvgIcons/UserIcon';

import { FC } from 'react';

const Socials: FC = () => {
  const icoWidth = 22;
  const icoHeight = 22;

  return (
    <div className={style.socials}>
      {/* <div className={style.searchIcon}>
        <SearchIcon />
      </div> */}
      <div className={style.userIcon}>
        <UserIcon width={icoWidth} height={icoHeight} />
      </div>
      <div className={style.heartIcon}>
        <div className={style.socialsCounter}>
          <span>0</span>
        </div>
        <HeartIcon width={icoWidth} height={icoHeight} />
      </div>

      <div className={style.cartIcon}>
        <div className={style.socialsCounter}>
          <span>0</span>
        </div>
        <CartIcon width={icoWidth} height={icoHeight} />
      </div>
    </div>
  );
};
export default Socials;
