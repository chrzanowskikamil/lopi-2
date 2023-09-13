export interface ProductCart {
  name: string;
  sku: string;
  regularPrice: number;
  discountPrice?: number;
  discountPriceEndDate: string | null;
  lowestPrice: number;
  description: string;
  shortDescription: string;
  note: string | null;
  status: string;
  productscol: string | null;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  archivedAt: string | null;
  imageUrl: string;
}
