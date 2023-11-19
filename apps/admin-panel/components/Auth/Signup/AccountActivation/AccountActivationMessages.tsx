import { useReactivateAccount } from '../../../../hooks/useReactivateAccount';
import style from './AccountActivationMessages.module.scss';
import { AppRoutes, Button } from '@lopi-2/common';
import Link from 'next/link';
import { FC } from 'react';
import { ProgressBar, Spinner } from 'react-bootstrap';

export const AccountActivationMessage: FC = () => {
  return (
    <>
      <h1>Twoje konto jest aktywowane...</h1>
      <Spinner animation="grow" role="status" className={style.spinner} />
    </>
  );
};

interface SuccessMessageProps {
  countdown: number;
}

export const AccountActivationSuccessMessage: FC<SuccessMessageProps> = ({
  countdown,
}) => {
  return (
    <>
      <h1>Twoje konto zostało aktywowane!</h1>
      <p>
        Za chwile zostaniesz przeniesiony/a do
        <Link className={style.successMessage} href={AppRoutes.getLoginPath()}>
          strony logowania
        </Link>
      </p>
      <ProgressBar now={countdown} className={style.progressBar} />
    </>
  );
};

interface AccountActivationErrorMessageProps {
  encodedUsername: string;
  tokenValue: string;
}

export const AccountActivationErrorMessage: FC<
  AccountActivationErrorMessageProps
> = ({ encodedUsername, tokenValue }) => {
  const { reactiveAccount } = useReactivateAccount();

  return (
    <>
      <h1>Wystąpił błąd podczas aktywacji konta</h1>
      <Button
        title="Spróbuj jeszcze raz"
        onClick={() => reactiveAccount(encodedUsername, tokenValue)}
      ></Button>
    </>
  );
};
