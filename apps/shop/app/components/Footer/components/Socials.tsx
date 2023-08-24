import style from '../Footer.module.scss';

import { InstagramIcon } from '../../../assets/SvgIcons/InstagramIcon';
import { FacebookIcon } from '../../../assets/SvgIcons/FacebookIcon';
import { TwitterIcon } from '../../../assets/SvgIcons/TwitterIcon';
import { YoutubeIcon } from '../../../assets/SvgIcons/YoutubeIcon';

import { FC } from 'react';

const Socials: FC = () => {
  return (
    <div className={style.footerSocial}>
      <div className={style.footerSocialElements}>
        <InstagramIcon />
      </div>
      <div className={style.footerSocialElements}>
        <FacebookIcon />
      </div>
      <div className={style.footerSocialElements}>
        <TwitterIcon />
      </div>
      <div className={style.footerSocialElements}>
        <YoutubeIcon />
      </div>
    </div>
  );
};
export default Socials;
