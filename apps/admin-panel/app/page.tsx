import { BasicInfoTable } from '../components/BasicInfoTable/BasicInfoTable';
import NavBar from '../components/NavBar/NavBar';
import { UserBar } from '../components/UserBar/UserBar';

export default async function Index() {
  return (
    <>
      <NavBar />
      <main className="d-flex w-100 h-100 flex-column align-items-center">
        <UserBar />
        <BasicInfoTable />
      </main>
    </>
  );
}
