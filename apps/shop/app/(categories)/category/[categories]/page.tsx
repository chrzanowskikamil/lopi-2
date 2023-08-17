import Footer from '../../../components/Footer/Footer';
import NavBar from '../../../components/NavBar/NavBar';
import { Categories } from '../../../components/Categories/Categories';
import { getCategoriesName } from '../../../../actions/getCategoriesName';
import { GetServerSideProps } from 'next';

interface CategoriesPageProps {
  categories: string[];
  params: {
    categories: string;
  };
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const repo = await res.json();
  return { props: { repo } };
};

const CategoriesPage = async ({ params }: CategoriesPageProps) => {
  const categories = await getCategoriesName();
  console.log(params.categories);
  return (
    <>
      <NavBar categories={categories} />
      <Categories title={params.categories} content={categories} />
      <Footer />
    </>
  );
};

export default CategoriesPage;
