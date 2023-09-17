import { IconWrapper } from '../../../../../../../shop/app/components/Icons/IconWrapper';
import style from './socialsArea.module.scss';
import { FC } from 'react';

export const SocialsArea: FC = () => {
  return (
    <div className={style.detailsIconsArea}>
      <div className={style.detailsIconsHeart}>
        <IconWrapper
          icon={<i className="bi bi-heart"></i>}
          className={style.detailsIcon}
        />
      </div>
      <div className={style.detailsIconsSocials}>
        <IconWrapper
          icon={<i className={`${style.detailsIcon} bi bi-envelope`}></i>}
        />
        <IconWrapper
          icon={<i className={`${style.detailsIcon} bi bi-facebook`}></i>}
        />
        <IconWrapper
          icon={<i className={`${style.detailsIcon} bi bi-instagram`}></i>}
        />
        <IconWrapper
          icon={<i className={`${style.detailsIcon} bi bi-twitter`}></i>}
        />
      </div>
    </div>
  );
};
