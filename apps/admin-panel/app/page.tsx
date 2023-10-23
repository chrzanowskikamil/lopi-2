import Link from 'next/link';
import styles from './page.module.scss';
import { AppRoutes, Common, ToastProvider } from '@lopi-2/common';
import NavBar from '../components/NavBar/NavBar';

export default async function Index() {
  return (
    <ToastProvider>
      <NavBar />
      <div className={styles.page}>
        <Link href={AppRoutes.getLoginPath()} passHref>
          Go to auth
        </Link>
        <span>Hello World Admin Panel: LOPI-2</span>
        <Common />
      </div>
    </ToastProvider>
  );
}
