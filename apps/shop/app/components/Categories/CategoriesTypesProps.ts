import { ProductsResponse } from '../../../types/ProductsResponse';
import { CategoriesReducerProps } from './useCategoriesReducer';

export interface CategoriesProps {
  title: string;
  content: string[];
  products: ProductsResponse;
}

export interface SortDropdownProps {
  productsSortOrder: (item: string) => void;
}

export interface SidebarProps {
  categoriesReducer: CategoriesReducerProps;
  activeCategory: string;
  list: string[];
}

export interface RangePriceSliderProps {
  categoriesReducer: CategoriesReducerProps;
}

export interface RangeSliderValues {
  min: number;
  max: number;
}

export interface MultiRangeSliderProps {
  min: number;
  max: number;
  onChange: (value: RangeSliderValues) => void;
}
