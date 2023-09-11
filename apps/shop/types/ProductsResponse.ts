interface ImageUrl{
  imageUrl:string;
}

export interface Product {
  name: string;
  description: string;
  uid: string;
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
  categories: string[];
  imageUrls: ImageUrl[];
}
export interface ProductsResponse {
  products: Product[];
  totalPages: number;
  totalProducts: number;
}
