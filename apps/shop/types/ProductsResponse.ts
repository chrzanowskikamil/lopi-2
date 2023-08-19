interface Category {
  name: string;
  description: string;
  uid: string;
}

interface Product {
  name: string;
  sku: string;
  regularPrice: number;
  discountPrice: number;
  discountPriceEndDate: string;
  lowestPrice: number;
  description: string;
  shortDescription: string;
  note: string;
  status: string;
  productscol: string;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  archivedAt: string;
  categories: Category[];
  uid: string;
}

export interface ProductsResponse {
  products: Product[];
  totalPages: number;
  totalProducts: number;
}
