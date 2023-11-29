import { Product } from '../../../../shop/types/ProductsResponse';
import { SearchParamTypes } from '@lopi-2/common';
import { getProducts } from '../../../../shop/actions/getProducts';

export const loadMoreProducts = async (
  params: Partial<SearchParamTypes>,
  onLoadMoreProducts: {
    currentPage: number;
    allProducts: Product[] | undefined;
    onShowMore: (allProducts: Product[], pageNumber: number) => void;
  },
  categoryUUID: string
) => {
  const nextPage = onLoadMoreProducts.currentPage + 1;

  const newProducts = await getProducts(categoryUUID, {
    page: nextPage,
    sortType: params.sortType,
    sortOrder: params.sortOrder,
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
