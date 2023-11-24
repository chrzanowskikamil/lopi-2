import { Product } from '../../../../shop/types/ProductsResponse';
import { getProducts } from '../../../../shop/actions/getProducts';

export const loadMoreProducts = async (
  onLoadMoreProducts: {
    sortOrder: boolean;
    sortType: string;
    currentPage: number;
    allProducts: Product[] | undefined;
    onShowMore: (allProducts: Product[], pageNumber: number) => void;
  },
  categoryUUID: string
) => {
  const nextPage = onLoadMoreProducts.currentPage + 1;

  const newProducts = await getProducts(categoryUUID, {
    page: nextPage,
    sortOrder: onLoadMoreProducts.sortType,
    ascending: onLoadMoreProducts.sortOrder,
  });

  if (
    newProducts !== undefined &&
    onLoadMoreProducts.allProducts !== undefined
  ) {
    onLoadMoreProducts.onShowMore(
      [...onLoadMoreProducts.allProducts, ...newProducts.content],
      nextPage
    );
  }
};
