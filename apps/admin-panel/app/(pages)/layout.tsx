import NavBar from '../../components/NavBar/NavBar';
import { UserBar } from '../../components/UserBar/UserBar';

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <main className="d-flex h-100 w-100 flex-column align-items-center">
        <UserBar />

        {children}
      </main>
    </>
  );
}
