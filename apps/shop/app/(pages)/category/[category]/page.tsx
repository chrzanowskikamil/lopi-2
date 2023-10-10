import { Categories } from '../../../components/Categories/Categories';
import { getCategoriesName } from '../../../../actions/getCategoriesName';
import { getCategoryUUIDByName } from '../../../../actions/getCategoryUUIDByName';
import { getProducts } from '../../../../actions/getProducts';

export async function generateStaticParams() {
  const categories = await getCategoriesName();

  return categories.map((categoryName) => ({
    category: categoryName,
  }));
}

const CategoriesPage = async ({ params }: { params: { category: string } }) => {
  const allCategories = await getCategoriesName();
  const categoruUUID = await getCategoryUUIDByName(params.category);
  const products = await getProducts(categoruUUID);

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
