import { CategoriesReducerProps } from '../Categories/useCategoriesReducer';

export type ProductRatingProps = {
  starsCount: number;
};

export type StatusProps = {
  status?: string;
};

export type PriceProps = {
  price: number;
  currentPrice?: number;
};
interface ImageUrl {
  imageUrl: string;
}
export type ProductTileColProps = {
  name: string;
  imageUrls: ImageUrl[];
  sku: string;
  regularPrice: number;
  discountPrice: number;
};

export interface ProductsDisplayProps {
  categoriesReducer: CategoriesReducerProps;
}
