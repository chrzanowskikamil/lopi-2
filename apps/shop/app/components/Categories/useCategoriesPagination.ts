import { getProducts } from '../../../../shop/actions/getProducts';
import { DEFAULT_PAGE_SIZE } from './CategoriesVariables';
import { Product } from '../../../../shop/types/ProductsResponse';

export const loadMoreProducts = async (categoriesReducer: {
  state: {
    sortOrder: string;
    sortType: string;
    currentPage: number;
    allProducts: Product[];
  };
  onShowMore: (allProducts: Product[], pageNumber: number) => void;
}) => {
  const nextPage = categoriesReducer.state.currentPage + 1;

  const newProducts = await getProducts(
    DEFAULT_PAGE_SIZE,
    nextPage,
    categoriesReducer.state.sortType,
    categoriesReducer.state.sortOrder
  );

  categoriesReducer.onShowMore(
    [...categoriesReducer.state.allProducts, ...newProducts.products],
    nextPage
  );
};
