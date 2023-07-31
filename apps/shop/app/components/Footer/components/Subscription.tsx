import style from '../Footer.module.scss';

import { MailIcon } from 'apps/shop/app/assets/SvgIcons/MailIcon';

import { FC } from 'react';

const SubscriptionForm: FC = () => {
  return (
    <div className={style.footerSubscriptionForm}>
      <input
        type="email"
        name="email"
        id=""
        className={style.footerSubscriptionFormInput}
        placeholder="Emali"
      />
      <div className={style.footerSubscriptionFormButton}>
        <MailIcon />
      </div>
    </div>
  );
};
export default SubscriptionForm;
