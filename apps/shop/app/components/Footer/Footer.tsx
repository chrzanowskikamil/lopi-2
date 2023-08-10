import style from './Footer.module.scss';

import Socials from './components/Socials';
import Subscription from './components/Subscription';
import FooterList from './components/FooterList';

import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className={style.footer}>
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

      <FooterList title="Subskrypcja" className={style.footerSubscription}>
        <li>
          Zapisz się do naszej <br />
          subskrypcji, a otrzymasz <br />
          10% rabaty na pierwsze <br />
          zakupy.
        </li>
        <li>
          <Subscription />
        </li>
      </FooterList>
    </footer>
  );
};
export default Footer;
