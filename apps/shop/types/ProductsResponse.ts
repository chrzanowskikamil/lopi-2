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
  categories: [
    {
      name: string;
      description: string;
      subcategories: [];
      uid: string;
    }
  ];
  imageUrls: [
    {
      imageUrl: string;
    }
  ];
}
export interface ProductsResponse {
  totalPages: number;
  totalProducts: number;
  pageable: {
    pageNumber: number;
    pageSize: number;
    offset: number;
    sort: {
      sorted: boolean;
      empty: boolean;
      unsorted: boolean;
    };
    paged: boolean;
    unpaged: boolean;
  };
  size: number;
  content: Product[];
  number: number;
  first: boolean;
  last: boolean;
  numberOfElements: number;
  empty: boolean;
}
