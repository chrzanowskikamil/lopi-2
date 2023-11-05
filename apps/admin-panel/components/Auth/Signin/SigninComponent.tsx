import style from './SigninComponent.module.scss';
import { SocialProviderButton } from '@lopi-2/common';
import { FC } from 'react';
import { SigninForm } from './SigninForm';

const socialProviders = [
  {
    Icon: <i className="bi bi-facebook" />,
    title: 'Zarejestruj przez Facebook',
  },
  {
    Icon: <i className="bi bi-google" />,
    title: 'Zarejestruj przez Google',
  },
];

export const SigninComponent: FC = () => {
  return (
    <>
      <div className={style.container}>
        <h1>Logowanie</h1>
        {socialProviders.map((provider) => (
          <SocialProviderButton
            key={provider.title}
            Icon={provider.Icon}
            title={provider.title}
            className={style.socialButton}
          />
        ))}
        <div className={style.divider}>
          <span>lub</span>
        </div>
        <SigninForm />
      </div>
    </>
  );
};
