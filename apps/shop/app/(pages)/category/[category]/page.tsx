import Footer from '../../../components/Footer/Footer';
import NavBar from '../../../components/NavBar/NavBar';
import { Categories } from '../../../components/Categories/Categories';
import { getCategoriesName } from '../../../../actions/getCategoriesName';
import { getProducts } from '../../../../actions/getProducts';

export async function generateStaticParams() {
  const categories = await getCategoriesName();
  return categories.map((categoryName) => ({
    category: categoryName,
  }));
}

const CategoriesPage = async ({ params }: { params: { category: string } }) => {
  const allCategories = await getCategoriesName();
  const products = await getProducts();
  return (
    <>
      <NavBar categories={allCategories} />
      <Categories
        title={params.category}
        content={allCategories}
        products={products}
      />
      <Footer />
    </>
  );
};

export default CategoriesPage;