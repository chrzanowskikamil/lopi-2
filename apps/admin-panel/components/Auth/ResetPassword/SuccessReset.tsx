import style from './SuccessReset.module.scss';
import { AppRoutes, Button } from '@lopi-2/common';
import { useRouter } from 'next/navigation';

export const SuccessReset = () => {
  const router = useRouter();

  return (
    <article className={style.container}>
      <div>
        <span className="bi bi-hand-thumbs-up"></span>
        <h1>Udało się!</h1>
      </div>
      <p>
        Gratulacje! Twoje hasło zostało pomyślnie zresetowane. Teraz możesz
        zalogować się na swoje konto za pomocą nowego hasła. Upewnij się, że
        klikniesz w link przesłany na Twój adres e-mail, aby potwierdzić
        resetowanie hasła i uzyskać dostęp do swojego konta. Jeśli potrzebujesz
        dodatkowej pomocy, skontaktuj się z nami.
      </p>
      <Button
        title="Powrót do logowania"
        onClick={() => router.push(AppRoutes.getLoginPath())}
      />
    </article>
  );
};
