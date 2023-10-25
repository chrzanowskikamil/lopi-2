import { BasicInfoTabele } from '../components/BasicInfoTabele/BasicInfoTabele';
import { ToastProvider } from '@lopi-2/common';

export default async function Index() {
  return (
    <ToastProvider>
      <BasicInfoTabele />
    </ToastProvider>
  );
}
