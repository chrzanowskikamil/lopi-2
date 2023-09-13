import { getProducts } from '../../../../shop/actions/getProducts';
import { DEFAULT_PAGE_SIZE } from './CategoriesVariables';
import { Product } from '../../../../shop/types/ProductsResponse';

export const loadMoreProducts = async (onLoadMoreProducts: {
  sortOrder: string;
  sortType: string;
  currentPage: number;
  allProducts: Product[];

  onShowMore: (allProducts: Product[], pageNumber: number) => void;
}) => {
  const nextPage = onLoadMoreProducts.currentPage + 1;

  const newProducts = await getProducts(
    DEFAULT_PAGE_SIZE,
    nextPage,
    onLoadMoreProducts.sortType,
    onLoadMoreProducts.sortOrder
  );

  onLoadMoreProducts.onShowMore(
    [...onLoadMoreProducts.allProducts, ...newProducts.products],
    nextPage
  );
};
