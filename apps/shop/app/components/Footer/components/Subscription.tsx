import style from '../Footer.module.scss';
import { IconWrapper } from '../../Icons/IconWrapper';
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
        <IconWrapper
          icon={<i className={`${style.mailIcon} bi bi-envelope`}></i>}
        />
      </div>
    </div>
  );
};
export default SubscriptionForm;
