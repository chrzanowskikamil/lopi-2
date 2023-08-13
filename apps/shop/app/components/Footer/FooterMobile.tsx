import style from './Footer.module.scss';

import Socials from './components/Socials';
import Subscription from './components/Subscription';
import FooterList from './components/FooterList';

import { FC } from 'react';

const FooterMoblie: FC = () => {
  return (
    <footer className={style.footerMobile}>
      <div className={style.footerTop}>
        <FooterList title="kontakt">
          <li>
            ul.Wensu 1/6 <br />
            90-005 Mars
          </li>
          <li className={style.footerContactInfo}>Email:galaxy@gmail.com</li>
          <li>Tel.:123-456-789</li>
          <li>
            <Socials />
          </li>
        </FooterList>

        <FooterList title="kategorie">
          <li>Kategoria</li>
          <li>Kategoria</li>
          <li>Kategoria</li>
          <li>Kategoria</li>
        </FooterList>
      </div>
      <div className={style.footerMiddle}>
        <FooterList title="centrum pomocy">
          <li>Regulamin</li>
          <li>RODO</li>
          <li>Polityka prywatności &quot;cookies&quot;</li>
          <li>Polityka prywatności</li>
        </FooterList>

        <FooterList title="my">
          <li>O nas</li>
          <li>Blog</li>
        </FooterList>
      </div>
      <div className={style.element}>
        <FooterList className={style.footerBottom} title="Subskrypcja">
          <li>
            Zapisz się do naszej subskrypcji, a otrzymasz 10% <br />
            rabaty na pierwsze zakupy.
          </li>
          <li>
            <Subscription />
          </li>
        </FooterList>
      </div>
    </footer>
  );
};
export default FooterMoblie;
