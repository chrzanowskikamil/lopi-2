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
  if (!allCategories.length) {
    return <h1>There are no categories</h1>;
  }

  if (!allCategories.length) {
    return (
      <h1 className="d-flex justify-content-center pt-4">
        There are no categories
      </h1>
    );
  }

  const getCategoryUUID = (): string | undefined => {
    if (
      allCategories.filter((el) => el.name === params.category)[0] !== undefined
    ) {
      return allCategories.filter((el) => el.name === params.category)[0].uid;
    } else return undefined;
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

  if (!products) {
    return (
      <h1 className="d-flex justify-content-center pt-4">
        There are no products in this category
      </h1>
    );
  } else if (categoryUUID !== undefined) {
    {
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
    }
  }
};

export default CategoriesPage;
