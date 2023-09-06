import style from '../Footer.module.scss';
import { IconWrapper } from '../../Icons/IconWrapper';
import { FC } from 'react';

const Socials: FC = () => {
  return (
    <div className={style.footerSocial}>
      <div className={style.footerSocialElements}>
        <IconWrapper
          icon={<i className={`${style.footerIcon} bi bi-instagram`}></i>}
        />
      </div>
      <div className={style.footerSocialElements}>
        <IconWrapper
          icon={<i className={`${style.footerIcon} bi bi-facebook`}></i>}
        />
      </div>
      <div className={style.footerSocialElements}>
        <IconWrapper
          icon={<i className={`${style.footerIcon} bi bi-twitter`}></i>}
        />
      </div>
      <div className={style.footerSocialElements}>
        <IconWrapper
          icon={<i className={`${style.footerIcon} bi bi-youtube `}></i>}
        />
      </div>
    </div>
  );
};
export default Socials;
