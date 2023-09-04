import { useReducer } from 'react';
import { ProductsResponse } from '../../../types/ProductsResponse';

interface StateProps {
  allProducts: ProductsResponse;
}
const PRODUCTS_PER_PAGE = 4;

interface ActionProps {
  type: 'on_product_set';
  values: {
    allProducts: ProductsResponse;
    newSort: ProductsResponse;
  };
}

const categoriesReducer = (state: StateProps, action: ActionProps) => {
  switch (action.type) {
    case 'on_product_set': {
      return {
        ...state,
        allProducts: action.values.newSort,
      };
    }
    default: {
      return state;
    }
  }
};

interface ValuesOnDispatchProps {
  allProducts: string;
}

export const useCategoriesReducer = ({ products }) => {
  const initialState = {
    allProducts: products,
  };

  const [state, dispatch] = useReducer(categoriesReducer, initialState);

  const onProductsSet = async (values: ValuesOnDispatchProps) => {
    dispatch({
      type: 'on_product_set',
      values,
    });
  };

  return { state, onProductsSet };
};
