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
  // categotyUUID: string;

  content: Product[];
  pageable: {
    sort: {
      sorted: boolean;
      empty: boolean;
      unsorted: boolean;
    };
    pageNumber: number;
    pageSize: number;
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalPages: number;
  totalProducts: number;
  last: boolean;
  size: number;
  number: number;
  sort: {
    sorted: boolean;
    empty: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}
