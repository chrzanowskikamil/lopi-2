import style from './Footer.module.scss';

import { FC } from 'react';

import { FooterProps } from './FooterProps';

const FooterMoblie: FC<FooterProps> = ({
  contact,
  categories,
  help,
  about,
  subscribe,
}) => {
  return (
    <div className={style.footerMobile}>
      <div className={style.footerTop}>
        {contact}
        {categories}
      </div>
      <div className={style.footerMiddle}>
        {help}
        {about}
      </div>
      <div className={style.element}>{subscribe}</div>
    </div>
  );
};
export default FooterMoblie;
