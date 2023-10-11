import { Categories } from '../../../components/Categories/Categories';
import { getCategories } from '../../../../actions/getCategories';
import { getCategoryUUIDByName } from '../../../../actions/getCategoryUUIDByName';
import { getProducts } from '../../../../actions/getProducts';

export async function generateStaticParams() {
  const categories = await getCategories();

  return categories
    .map((category) => category.name)
    .map((categoryName) => ({
      category: categoryName,
    }));
}

const CategoriesPage = async ({ params }: { params: { category: string } }) => {
  const allCategories = await getCategories();
  const categoryUUID = await getCategoryUUIDByName(params.category);
  const products = await getProducts(categoryUUID);

  return (
    <>
      <Categories
        title={params.category}
        content={allCategories}
        products={products}
        categoryUUID={categoryUUID}
      />
    </>
  );
};

export default CategoriesPage;
