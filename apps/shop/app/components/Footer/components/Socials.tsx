import {
  InstagramIco,
  FacebookIco,
  TwitterIco,
  YoutubeIco,
} from '../../../assets/SvgIcons/SvgsFooter';

export default function Socials() {
  return (
    <div className="footer-social flex-row">
      <div className="footer-social--elements">
        <InstagramIco />
      </div>
      <div className="footer-social--elements">
        <FacebookIco />
      </div>
      <div className="footer-social--elements">
        <TwitterIco />
      </div>
      <div className="footer-social--elements">
        <YoutubeIco />
      </div>
    </div>
  );
}
