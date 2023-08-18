import style from '../NavBar.module.scss';

import { useState, useEffect } from 'react';

import { CartIcon } from '../../../assets/SvgIcons/CartIcon';
import { HeartIcon } from 'apps/shop/app/assets/SvgIcons/HeartIcon';
import { SearchIcon } from 'apps/shop/app/assets/SvgIcons/SearchIcon';
import { UserIcon } from 'apps/shop/app/assets/SvgIcons/UserIcon';

import { FC } from 'react';

const Socials: FC = () => {
  const [matches, setMatches] = useState<boolean>();

  useEffect(() => {
    window
      .matchMedia('(min-width: 992px)')
      .addEventListener('change', (e) => setMatches(e.matches));
  }, []);

  const icoWidth = !matches ? 22 : 24;
  const icoHeight = !matches ? 22 : 24;

  return (
    <div className={style.socials}>
      <div className={style.searchIcon}>
        <div className={style.searchDesktop}>
          <SearchIcon width={icoWidth} height={icoHeight} />
        </div>
      </div>
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
