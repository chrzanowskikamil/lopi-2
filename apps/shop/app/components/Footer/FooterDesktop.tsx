import style from './Footer.module.scss';

import { FC } from 'react';

import { FooterProps } from './FooterProps';

const FooterDesktop: FC<FooterProps> = ({
  contact,
  categories,
  help,
  about,
  subscribe,
}) => {
  return (
    <div className={style.footerDesktop}>
      <div className={style.footerGroup}>
        {contact}
        {categories}
        {help}
        {about}
      </div>
      {subscribe}
    </div>
  );
};
export default FooterDesktop;
