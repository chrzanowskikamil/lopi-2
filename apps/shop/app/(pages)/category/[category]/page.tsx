import { Categories } from '../../../components/Categories/Categories';
import { getCategories } from '../../../../actions/getCategories';
import { getProducts } from '../../../../actions/getProducts';

export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map((categoryName) => ({
    category: categoryName.name,
  }));
}

const CategoriesPage = async ({ params }: { params: { category: string } }) => {
  const allCategories = await getCategories();

  const categoryUUID = allCategories.filter(
    (el) => el.name === params.category
  )[0].uid;

  const products = await getProducts(categoryUUID);

  return (
    <>
      <Categories
        title={params.category}
        categories={allCategories}
        products={products}
        categoryUUID={categoryUUID}
      />
    </>
  );
};

export default CategoriesPage;
