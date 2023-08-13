import { FC } from 'react';
import style from '../NavBar.module.scss';
import { ArrowDown } from 'apps/shop/app/assets/SvgIcons/ArrowDown';

export const MenuDropdownMobile: FC = () => {
  return (
    <section className={style.dropdownMobile}>
      <div className={style.categories}>
        <p> </p>
        Kategorie
        <div className={style.arrowDown}>
          <ArrowDown />
        </div>
      </div>
      <div className={style.about}>
        <p>O nas</p>
        <div className={style.arrowDown}>
          <ArrowDown />
        </div>
      </div>
    </section>
  );
};

export default MenuDropdownMobile;
