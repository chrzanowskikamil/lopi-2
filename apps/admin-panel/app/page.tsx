import { BasicInfoTabele } from '../components/BasicInfoTabele/BasicInfoTabele';
import { ToastProvider } from '@lopi-2/common';
// import styles from './page.module.scss';

export default async function Index() {
  return (
    <ToastProvider>
      <BasicInfoTabele />
    </ToastProvider>
  );
}
