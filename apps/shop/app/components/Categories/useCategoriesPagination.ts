import { DEFAULT_PAGE_SIZE } from './CategoriesVariables';
import { Product } from '../../../../shop/types/ProductsResponse';
import { getProducts } from '../../../../shop/actions/getProducts';

export const loadMoreProducts = async (
  onLoadMoreProducts: {
    sortOrder: string;
    sortType: string;
    currentPage: number;
    allProducts: Product[];
    onShowMore: (allProducts: Product[], pageNumber: number) => void;
  },
  categoryUUID: string
) => {
  const nextPage = onLoadMoreProducts.currentPage + 1;

  const newProducts = await getProducts(
    categoryUUID,
    DEFAULT_PAGE_SIZE,
    nextPage,
    onLoadMoreProducts.sortType,
    onLoadMoreProducts.sortOrder
  );
  if (newProducts !== undefined) {
    onLoadMoreProducts.onShowMore(
      [...onLoadMoreProducts.allProducts, ...newProducts.content],
      nextPage
    );
  }
};
