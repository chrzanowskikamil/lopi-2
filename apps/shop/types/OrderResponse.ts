export interface OrderResponse {
  orderUid: string;
  deliveryMethod: string;
  customerEmail: string;
  deliveryAddress: {
    street: string;
    houseNumber: string;
    apartmentNumber: string;
    postalCode: string;
    city: string;
    country: string;
  };
  paymentMethod: string;
  orderDate: string;
  customerPhone: string;
}
