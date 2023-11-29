export interface PayUOrderStatusResponse {
  orders: {
    orderId: string;
    extOrderId: string;
    orderCreateDate: string;
    notifyUrl: string;
    customerIp: string;
    merchantPosId: string;
    description: string;
    currencyCode: string;
    totalAmount: string;
    status: string;
    products: {
      name: string;
      unitPrice: string;
      quantity: string;
    }[];
  }[];
  status: {
    statusCode: string;
    statusDesc: string;
  };
  properties: {
    name: string;
    value: string;
  }[];
}
