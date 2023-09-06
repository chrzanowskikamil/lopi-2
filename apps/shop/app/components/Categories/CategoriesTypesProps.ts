import { ProductsResponse } from '../../../types/ProductsResponse';
import { CategoriesReducerProps } from './CategoriesReducerHook';

export interface CategoriesProps {
  title: string;
  content: string[];
  products: ProductsResponse;
}

export interface SortDropdownProps {
  sort: (item: string) => void;
}

export interface SidebarProps {
  categoriesReducer: CategoriesReducerProps;
  activeCategory: string;
  list: string[];
}

export interface RangePriceSliderProps {
  categoriesReducer: CategoriesReducerProps;
}

export interface ProductsProps {
  categoriesReducer: CategoriesReducerProps;
}

interface Image {
  imageUrl: string;
}

export type ProductTileProps = {
  name: string;
  imageUrls: Image[];
  sku: string;
  regularPrice: number;
  discountPrice: number;
};

export type StatusProps = {
  status?: string;
};

export type ProductRatingProps = {
  starsCount: number;
};

export type PriceProps = {
  price: number;
  currentPrice?: number;
};
