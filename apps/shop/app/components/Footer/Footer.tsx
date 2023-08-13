import FooterMobile from './FooterMobile';
import FooterDesktop from './FooterDesktop';

import { FC } from 'react';

const Footer: FC = () => {
  return (
    <>
      <FooterMobile />
      <FooterDesktop />
    </>
  );
};
export default Footer;
