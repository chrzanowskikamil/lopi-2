import { getCategoriesName } from '../../../../actions/getCategoriesName';
import { getProducts } from '../../../../actions/getProducts';
import { Categories } from '../../../components/Categories/Categories';

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
      <Categories
        title={params.category}
        content={allCategories}
        products={products}
      />
    </>
  );
};

export default CategoriesPage;
