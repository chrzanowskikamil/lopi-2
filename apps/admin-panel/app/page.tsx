import { AppRoutes, Common, ToastProvider } from '@lopi-2/common';

import { BasicInfoTabele } from '../components/BasicInfoTabele/BasicInfoTabele';
import Link from 'next/link';
import styles from './page.module.scss';

export default async function Index() {
  return (
    <ToastProvider>
      <div className={styles.page}>
        <Link href={AppRoutes.getLoginPath()} passHref>
          Go to auth
        </Link>
        <Common />
      </div>
      <BasicInfoTabele />
    </ToastProvider>
  );
}
