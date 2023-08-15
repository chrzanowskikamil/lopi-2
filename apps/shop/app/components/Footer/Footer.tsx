import style from './Footer.module.scss';

import { FC } from 'react';

import FooterMobile from './FooterMobile';
import FooterDesktop from './FooterDesktop';

import Socials from './components/Socials';
import Subscription from './components/Subscription';
import FooterList from './components/FooterList';

const Footer: FC = () => {
  const contact = (
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
  );

  const categories = (
    <FooterList title="kategorie">
      <li>Etiopia</li>
      <li>Wietnam</li>
      <li>Kolumbia</li>
      <li>Kostaryka</li>
      <li>Akcesoria</li>
    </FooterList>
  );

  const help = (
    <FooterList title="centrum pomocy">
      <li>Regulamin</li>
      <li>RODO</li>
      <li>Polityka prywatności &quot;cookies&quot;</li>
      <li>Polityka prywatności</li>
    </FooterList>
  );

  const about = (
    <FooterList title="my" className={style.about}>
      <li>O nas</li>
      <li>Przepisy</li>
      <li>Kawiarnia</li>
    </FooterList>
  );

  const subscribe = (
    <div className={style.footerBottom}>
      <FooterList title="Subskrypcja">
        <li>
          Zapisz się do naszej subskrypcji, a otrzymasz 10% rabaty na pierwsze
          zakupy.
        </li>
        <li>
          <Subscription />
        </li>
      </FooterList>
    </div>
  );

  return (
    <footer className={style.footer}>
      <FooterMobile
        contact={contact}
        categories={categories}
        help={help}
        about={about}
        subscribe={subscribe}
      />
      <FooterDesktop
        contact={contact}
        categories={categories}
        help={help}
        about={about}
        subscribe={subscribe}
      />
    </footer>
  );
};
export default Footer;
