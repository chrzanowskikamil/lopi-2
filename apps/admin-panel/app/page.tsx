import { BasicInfoTable } from '../components/BasicInfoTable/BasicInfoTable';
import { ToastProvider } from '@lopi-2/common';

export default async function Index() {
  return (
    <ToastProvider>
      <BasicInfoTable />
    </ToastProvider>
  );
}
