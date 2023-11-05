interface DeliveryMethod {
  name: string;
  description: string;
  cost: number;
}

export type DeliveryMethodResponse = DeliveryMethod[];
