import { ChildrenFC, SearchParamTypes } from '@lopi-2/common';
import { createContext, useContext } from 'react';

import { useCategoriesReducer } from '../components/Categories/useCategoriesReducer';

type CategoriesContextType = {
  categoriesReducer: ReturnType<typeof useCategoriesReducer>;
  handleChangeParams: (
    params: Partial<SearchParamTypes>,
    categoryUUID?: string
  ) => void;
};

const CategoriesContext = createContext<CategoriesContextType | null>(null);

export const useCategoriesContext = () => {
  const context = useContext(CategoriesContext);

  if (!context) {
    throw new Error(
      'useCategoriesContext must be used within a CategoriesProvider'
    );
  }

  return context;
};

export const CategoriesProvider: ChildrenFC = ({ children }) => {
  const categoriesReducer = useCategoriesReducer({ content: [] });

  const handleChangeParams = (
    params: Partial<SearchParamTypes>,
    categoryUUID?: string
  ) => {
    categoriesReducer.onChangeParams(params, categoryUUID);
  };

  return (
    <CategoriesContext.Provider
      value={{
        categoriesReducer,
        handleChangeParams,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
