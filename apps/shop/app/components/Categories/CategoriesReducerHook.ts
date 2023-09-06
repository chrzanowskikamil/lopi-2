import { useReducer } from 'react';
import { Product } from '../../../types/ProductsResponse';

import {
  THE_HIGHEST_MONEY_VALUE,
  THE_LOWEST_MONEY_VALUE,
  INITIAL_CURRENT_PAGE,
} from './CategoriesVariables';

import { SortType, SortOrder, ActionTypes } from './CategoriesEnums';

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
  type: string;
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
    case ActionTypes.ON_PRODUCT_SORT: {
      return {
        ...state,
        currentPage: INITIAL_CURRENT_PAGE,
        allProducts: action.allProducts,
        sortType: action.sortType,
        sortOrder: action.sortOrder,
      };
    }
    case ActionTypes.ON_SHOW_MORE: {
      return {
        ...state,
        allProducts: action.allProducts,
        currentPage: action.pageNumber,
      };
    }
    case ActionTypes.ON_HIGHER_MONEY_VALUE_FILTER_CHANGE: {
      return {
        ...state,
        higherMoneyValueFilter: action.higherMoneyValue,
      };
    }
    case ActionTypes.ON_LOWER_MONEY_VALUE_FILTER_CHANGE: {
      return {
        ...state,
        lowerMoneyValueFilter: action.lowerMoneyValue,
      };
    }
    case ActionTypes.ON_AVAILABILITY_FILTER_CHANGE: {
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
    sortType: SortType.PRICE,
    sortOrder: SortOrder.ASCENDING,
    currentPage: INITIAL_CURRENT_PAGE,
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
      type: ActionTypes.ON_PRODUCT_SORT,
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
      type: ActionTypes.ON_SHOW_MORE,
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
      type: ActionTypes.ON_HIGHER_MONEY_VALUE_FILTER_CHANGE,
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
      type: ActionTypes.ON_LOWER_MONEY_VALUE_FILTER_CHANGE,
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
      type: ActionTypes.ON_AVAILABILITY_FILTER_CHANGE,
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
