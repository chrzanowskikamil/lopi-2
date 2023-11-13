import { Categories } from '../../../components/Categories/Categories';
import { getCategories } from '../../../../actions/getCategories';
import { getCategoryQuantityByUUID } from '../../../../actions/getCategoryQuantityByUUID';
import { getProducts } from '../../../../actions/getProducts';

export async function generateStaticParams() {
  const categories = await getCategories();

  if (!categories.length) {
    return [];
  }

  return categories.map((categoryName) => ({
    category: categoryName.name,
  }));
}

const CategoriesPage = async ({ params }: { params: { category: string } }) => {
  const allCategories = await getCategories();
  if (!allCategories.length) {
    return <h1>There are no categories</h1>;
  }

  const categoryUUID = allCategories.filter(
    (el) => el.name === params.category
  )[0].uid;

  const productCountInCategoriesArray = async () => {
    const data = [];
    for (let i = 0; i < allCategories.length; i++) {
      const number = await getCategoryQuantityByUUID(allCategories[i].uid);
      data.push({ count: number });
    }

    return data;
  };

  const productCounts = await productCountInCategoriesArray();
  const products = await getProducts(categoryUUID);

  return (
    <>
      <Categories
        title={params.category}
        categories={allCategories}
        products={products}
        categoryUUID={categoryUUID}
        productCounts={productCounts}
      />
    </>
  );
};

export default CategoriesPage;
