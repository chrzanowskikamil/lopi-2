import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import { Categories } from '../../components/Categories/Categories';
import { fetchCategories } from '../../api/services/categoriesService';

interface CategoriesPageProps {
  categories: string[];
  params: {
    categories: string;
  };
}

const CategoriesPage = async ({ params }: CategoriesPageProps) => {
  console.log(params);
  const categories = await fetchCategories();
  return (
    <>
      <NavBar categories={categories} />
      <Categories title={params.categories} content={categories} />
      <Footer />
    </>
  );
};

export default CategoriesPage;
