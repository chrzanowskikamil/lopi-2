import './footerStyle.scss';

import Socials from './components/Socials';
import Subscription from './components/Subscription';
export default function Footer() {
  return (
    <>
      <div className="footer flex-row">
        <div>
          <ul>
            <li className="footer-title">Kontakt</li>
            <li>
              ul.Wensu 1/6 <br />
              90-005 Mars
            </li>

            <li className="footer-contact__info">Email:galaxy@gmail.com</li>
            <li>Tel.:123-456-789</li>
            <li>
              <div>
                <Socials />
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="footer-title">Kategorie</li>
            <li>Kategoria</li>
            <li>Kategoria</li>
            <li>Kategoria</li>
            <li>Kategoria</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="footer-title">Centrum pomocy</li>
            <li>Regulamin</li>
            <li>RODO</li>
            <li>Polityka prywatności &quot;cookies&quot;</li>
            <li>Polityka prywatności</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="footer-title">My</li>
            <li>O nas</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footer-subscription">
          <ul>
            <li className="footer-title">Subskrypcja</li>
            <li>
              Zapisz się do naszej <br />
              subskrypcji, a otrzymasz <br />
              10% rabaty na pierwsze <br />
              zakupy.
            </li>
            <li>
              <Subscription />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
