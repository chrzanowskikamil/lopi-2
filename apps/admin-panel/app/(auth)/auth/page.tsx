import { AppRoutes } from '@lopi-2/common';
import Link from 'next/link';

export default async function AuthPage() {
  return (
    <>
      <h1>Logowanie</h1>
      <Link href={AppRoutes.getRegisterPath()}>Rejestracja </Link>
    </>
  );
}
