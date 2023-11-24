import { SortOrder, SortParams } from './CategoriesEnums';

import { INITIAL_CURRENT_PAGE } from './CategoriesVariables';
import { Product } from '../../../types/ProductsResponse';
import { useReducer } from 'react';
import { useSearchParams } from '@lopi-2/common';
import { useSearchParams as useSearchParamsOld } from '../../hooks/useSearchParams';

export interface StateProps {
  maxPriceFilterValue: number;
  sortType: string;
  sortOrder: boolean;
  currentPage: number;
  minPriceFilterValue: number;
  availability: boolean;
  allProducts: Product[] | undefined;
}

type ActionProps =
  | {
      type: 'on_product_sort';
      allProducts: Product[];
      sortType: string;
      sortOrder: boolean;
    }
  | { type: 'on_show_more'; allProducts: Product[]; pageNumber: number }
  | { type: 'on_higher_money_value_filter_change'; maxPriceFilterValue: number }
  | { type: 'on_lower_money_value_filter_change'; minPriceFilterValue: number }
  | { type: 'on_availability_filter_change'; availabilityValue: boolean };

const categoriesReducer = (state: StateProps, action: ActionProps) => {
  switch (action.type) {
    case 'on_product_sort': {
      return {
        ...state,
        currentPage: INITIAL_CURRENT_PAGE,
        allProducts: action.allProducts,
        sortType: action.sortType,
        sortOrder: action.sortOrder,
      };
    }
    case 'on_show_more': {
      return {
        ...state,
        allProducts: action.allProducts,
        currentPage: action.pageNumber,
      };
    }
    case 'on_higher_money_value_filter_change': {
      return {
        ...state,
        maxPriceFilterValue: action.maxPriceFilterValue,
      };
    }
    case 'on_lower_money_value_filter_change': {
      return {
        ...state,
        minPriceFilter: action.minPriceFilterValue,
      };
    }
    case 'on_availability_filter_change': {
      return {
        ...state,
        availability: action.availabilityValue,
      };
    }

    default: {
      return state;
    }
  }
};

export const useCategoriesReducer = (content: Product[] | undefined) => {
  const { getParam } = useSearchParamsOld();
  const searchParams = useSearchParams();

  const initialState = {
    allProducts: content,
    sortType:
      getParam.sort === SortParams.PRODUCT_NAME_ASC ||
      getParam.sort === SortParams.PRODUCT_NAME_DSC
        ? SortOrder.NAME
        : SortOrder.PRICE,
    sortOrder:
      getParam.sort === SortParams.PRODUCT_NAME_DSC ||
      getParam.sort === SortParams.PRICE_DSC
        ? false
        : true,
    currentPage: INITIAL_CURRENT_PAGE,
    minPriceFilterValue: searchParams.params.minPrice,
    maxPriceFilterValue: searchParams.params.maxPrice,
    availability: searchParams.params.availability,
  };

  const [state, dispatch] = useReducer(categoriesReducer, initialState);

  const onProductsSort = (
    allProducts: Product[],
    sortType: string,
    sortOrder: boolean
  ) => {
    dispatch({
      type: 'on_product_sort',
      allProducts,
      sortType,
      sortOrder,
    });
  };

  const onShowMore = (allProducts: Product[], pageNumber: number) => {
    dispatch({
      type: 'on_show_more',
      allProducts,
      pageNumber,
    });
  };

  const onHigherMoneyValueFilterChange = (maxPrice: number) => {
    searchParams.applyParams({ maxPrice });
    dispatch({
      type: 'on_higher_money_value_filter_change',
      maxPriceFilterValue: maxPrice,
    });
  };

  const onLowerMoneyValueFilterChange = (minPrice: number) => {
    searchParams.applyParams({ minPrice });
    dispatch({
      type: 'on_lower_money_value_filter_change',
      minPriceFilterValue: minPrice,
    });
  };

  const onAvailabilityFilterChange = (availabilityValue: boolean) => {
    searchParams.applyParams({ availability: availabilityValue });

    dispatch({
      type: 'on_availability_filter_change',
      availabilityValue,
    });
  };

  return {
    onLoadMoreProducts: {
      sortOrder: state.sortOrder,
      sortType: state.sortType,
      currentPage: state.currentPage,
      allProducts: state.allProducts,
      onShowMore,
    },

    onProductsDisplay: {
      minPriceFilterValue: state.minPriceFilterValue,
      maxPriceFilterValue: state.maxPriceFilterValue,
      availability: state.availability,
      allProducts: state.allProducts,
    },

    onSidebarFilter: {
      onAvailabilityFilterChange,
      minPriceFilterValue: state.minPriceFilterValue,
      maxPriceFilterValue: state.maxPriceFilterValue,
      onLowerMoneyValueFilterChange,
      onHigherMoneyValueFilterChange,
      availability: state.availability,
    },

    onProductsSort,
  };
};
