interface CommonEntityDetails {
  name: string;
  description: string;
  uid: string;
}
interface Category extends CommonEntityDetails {
  subcategories: string[];
}

interface ImageUrls {
  imageUrl: string;
}

interface Product extends CommonEntityDetails {
  sku: string;
  regularPrice: number;
  discountPrice?: number | null;
  discountPriceEndDate: string | null;
  lowestPrice: number;
  shortDescription: string;
  note: string | null;
  status: string;
  productscol: string | null;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  archivedAt: string | null;
  categories: Category[];
  imageUrls: ImageUrls[];
}

export interface CartProduct {
  product: Product;
  quantity: number;
}

export interface CartProductsResponse {
  uuid: string;
  cartItems: CartProduct[];
  totalPrice: number;
  totalQuantity: number;
}
