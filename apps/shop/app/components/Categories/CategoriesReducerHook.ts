import { useReducer } from 'react';
import { Product } from '../../../types/ProductsResponse';

const THE_HIGHEST_MONEY_VALUE = 160;
const THE_LOWEST_MONEY_VALUE = 0;
const CURRENT_PAGE = 0;

// const PRODUCTS_PER_PAGE = 4;

export interface CategoriesReducerProps {
  state: StateProps;
  onProductsSort: (
    allProducts: Product[],
    sortType: string,
    sortOrder: string
  ) => void;
  onShowMore: (allProducts: Product[], pageNumber: number) => void;
  onHigherMoneyValueFilterChange: (higherMoneyValue: number) => void;
  onLowerMoneyValueFilterChange: (lowerMoneyValue: number) => void;
  onAvailabilityFilterChange: (availabilityValue: boolean) => void;
}
interface StateProps {
  higherMoneyValueFilter: number;
  sortType: string;
  sortOrder: string;
  currentPage: number;
  lowerMoneyValueFilter: number;
  availability: boolean;
  allProducts: Product[];
}

interface ActionProps {
  type:
    | 'on_product_sort'
    | 'on_show_more'
    | 'on_higher_money_value_filter_change'
    | 'on_lower_money_value_filter_change'
    | 'on_availability_filter_change';

  sortType: string;
  sortOrder: string;
  pageNumber: number;
  higherMoneyValue: number;
  lowerMoneyValue: number;
  allProducts: Product[];
  availabilityValue: boolean;
}

const categoriesReducer = (state: StateProps, action: ActionProps) => {
  switch (action.type) {
    case 'on_product_sort': {
      return {
        ...state,
        currentPage: 0,
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
        higherMoneyValueFilter: action.higherMoneyValue,
      };
    }
    case 'on_lower_money_value_filter_change': {
      return {
        ...state,
        lowerMoneyValueFilter: action.lowerMoneyValue,
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

export const useCategoriesReducer = ({ products }: { products: Product[] }) => {
  const initialState = {
    allProducts: products,
    sortType: 'regularPrice',
    sortOrder: 'asc',
    currentPage: CURRENT_PAGE,
    lowerMoneyValueFilter: THE_LOWEST_MONEY_VALUE,
    higherMoneyValueFilter: THE_HIGHEST_MONEY_VALUE,
    availability: true,
  };

  const [state, dispatch] = useReducer(categoriesReducer, initialState);

  const onProductsSort = (
    allProducts: Product[],
    sortType: string,
    sortOrder: string
  ) => {
    dispatch({
      type: 'on_product_sort',
      allProducts,
      sortType,
      sortOrder,
      pageNumber: state.currentPage,
      higherMoneyValue: state.higherMoneyValueFilter,
      lowerMoneyValue: state.lowerMoneyValueFilter,
      availabilityValue: state.availability,
    });
  };

  const onShowMore = (allProducts: Product[], pageNumber: number) => {
    dispatch({
      type: 'on_show_more',
      allProducts,
      pageNumber,
      sortType: state.sortType,
      sortOrder: state.sortOrder,
      higherMoneyValue: state.higherMoneyValueFilter,
      lowerMoneyValue: state.lowerMoneyValueFilter,
      availabilityValue: state.availability,
    });
  };
  const onHigherMoneyValueFilterChange = (higherMoneyValue: number) => {
    dispatch({
      type: 'on_higher_money_value_filter_change',
      higherMoneyValue,
      sortType: state.sortType,
      sortOrder: state.sortOrder,
      pageNumber: state.currentPage,
      lowerMoneyValue: state.lowerMoneyValueFilter,
      allProducts: state.allProducts,
      availabilityValue: false,
    });
  };
  const onLowerMoneyValueFilterChange = (lowerMoneyValue: number) => {
    dispatch({
      type: 'on_lower_money_value_filter_change',
      lowerMoneyValue,
      sortType: state.sortType,
      sortOrder: state.sortOrder,
      pageNumber: state.currentPage,
      higherMoneyValue: state.higherMoneyValueFilter,
      allProducts: state.allProducts,
      availabilityValue: false,
    });
  };
  const onAvailabilityFilterChange = (availabilityValue: boolean) => {
    dispatch({
      type: 'on_availability_filter_change',
      availabilityValue,
      sortType: state.sortType,
      sortOrder: state.sortOrder,
      pageNumber: state.currentPage,
      higherMoneyValue: state.higherMoneyValueFilter,
      lowerMoneyValue: state.lowerMoneyValueFilter,
      allProducts: state.allProducts,
    });
  };

  return {
    state,
    onProductsSort,
    onShowMore,
    onHigherMoneyValueFilterChange,
    onLowerMoneyValueFilterChange,
    onAvailabilityFilterChange,
  };
};
