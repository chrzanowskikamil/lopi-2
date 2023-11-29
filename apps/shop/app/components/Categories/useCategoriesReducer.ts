import { INITIAL_CURRENT_PAGE } from './CategoriesVariables';
import { Product } from '../../../types/ProductsResponse';
import { getProducts } from '../../../actions/getProducts';
import { useReducer } from 'react';

export interface StateProps {
  currentCategoryUUID: string;
  currentPage: number;
  allProducts: Product[];
}

type ActionProps =
  | {
      type: 'on_change_filter';
      allProducts: Product[];
      currentCategoryUUID: string;
    }
  | {
      type: 'on_show_more';
      allProducts: Product[];
      pageNumber: number;
    };

const categoriesReducer = (state: StateProps, action: ActionProps) => {
  switch (action.type) {
    case 'on_change_filter': {
      return {
        ...state,
        allProducts: action.allProducts,
        currentCategoryUUID: action.currentCategoryUUID,
        currentPage: INITIAL_CURRENT_PAGE,
      };
    }
    case 'on_show_more': {
      return {
        ...state,
        allProducts: action.allProducts,
        currentPage: action.pageNumber,
      };
    }

    default: {
      return state;
    }
  }
};

export const useCategoriesReducer = ({ content }: { content: Product[] }) => {
  const initialState = {
    currentCategoryUUID: '',
    currentPage: INITIAL_CURRENT_PAGE,
    allProducts: content,
  };

  const [state, dispatch] = useReducer(categoriesReducer, initialState);

  const onChangeParams = async (
    params: { sortType: string; sortOrder: boolean; availability: boolean },
    categoryUUID: string = state.currentCategoryUUID
  ) => {
    try {
      const allProducts = await getProducts(categoryUUID, {
        sortType: params.sortType,
        sortOrder: params.sortOrder,
        available: params.availability,
      });
      dispatch({
        type: 'on_change_filter',
        allProducts: allProducts?.content || [],
        currentCategoryUUID: categoryUUID,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const onShowMore = (allProducts: Product[], pageNumber: number) => {
    dispatch({
      type: 'on_show_more',
      allProducts,
      pageNumber,
    });
  };

  return {
    onLoadMoreProducts: {
      currentPage: state.currentPage,
      allProducts: state.allProducts,
      onShowMore,
    },

    onProductsDisplay: {
      allProducts: state.allProducts,
    },

    onChangeParams,
    state,
  };
};
