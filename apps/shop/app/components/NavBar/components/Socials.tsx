import {
  CartIco,
  HeartIco,
  SearchIco,
  UserIco,
} from '../../../assets/SvgIcons/SvgsNavBar';

export default function Socials() {
  return (
    <div className="socials flex-row">
      <div className="socials-elements">
        <SearchIco />
      </div>
      <div className="socials-elements">
        <UserIco />
      </div>
      <div className="socials-elements">
        <div className="socials-counter">
          <span>0</span>
        </div>
        <HeartIco />
      </div>

      <div className="socials-elements">
        <div className="socials-counter">
          <span>0</span>
        </div>
        <CartIco />
      </div>
    </div>
  );
}
