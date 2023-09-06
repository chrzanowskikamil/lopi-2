interface ItemDetails {
  name: string;
  description: string;
  uid: string;
}
interface Category extends ItemDetails {
  subCategories: string[];
}
interface Image {
  imageUrl: string;
}
export interface Product extends ItemDetails {
  sku: string;
  regularPrice: number;
  discountPrice: number;
  discountPriceEndDate: string;
  lowestPrice: number;
  shortDescription: string;
  note: string;
  status: string;
  productscol: string;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  archivedAt: string;
  categories: Category[];
  imageUrls: Image[];
}

export interface ProductsResponse {
  products: Product[];
  totalPages: number;
  totalProducts: number;
}
