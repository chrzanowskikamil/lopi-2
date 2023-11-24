import { Categories } from '../../../components/Categories/Categories';
import { getCategories } from '../../../../actions/getCategories';
import { getCategoryQuantityByUUID } from '../../../../actions/getCategoryQuantityByUUID';
import { getProducts } from '../../../../actions/getProducts';

export async function generateStaticParams() {
  const categories = await getCategories();

  if (!categories.length) {
    return [];
  }

  return categories
    .map((categoryName) => {
      if (categoryName.name === 'name' || categoryName.name === null) {
        return;
      } else
        return {
          category: categoryName.name,
        };
    })
    .filter(Boolean);
}

const CategoriesPage = async ({ params }: { params: { category: string } }) => {
  const allCategories = await getCategories();
  const categoryName = decodeURI(params.category);

  const getCategoryUUID = (): string | undefined => {
    const category = allCategories.find((el) => el.name === categoryName);

    return category?.uid;
  };

  const categoryUUID = getCategoryUUID();

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

  if (categoryUUID) {
    {
      return (
        <>
          <Categories
            title={categoryName}
            categories={allCategories}
            products={products}
            categoryUUID={categoryUUID}
            productCounts={productCounts}
          />
        </>
      );
    }
  }
};

export default CategoriesPage;
