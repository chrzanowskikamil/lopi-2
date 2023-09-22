import style from './OrderDetails.module.scss';
import { FC, useMemo } from 'react';
import { useOrder } from '../../../../../contexts/OrderContext';

export const OrderDetails: FC = () => {
  const { orderData } = useOrder();

  const OrderInfoList = useMemo(
    () => [
      { label: 'Numer zamówienia', value: orderData?.orderUid },
      { label: 'Dostawa', value: orderData?.deliveryMethod },
      { label: 'Email', value: orderData?.customerEmail },
      { label: 'Forma płatności', value: orderData?.paymentMethod },
      {
        label: 'Data zamówienia',
        value: orderData?.orderDate
          ? new Date(orderData?.orderDate).toLocaleString()
          : '-',
      },
      { label: 'Nr telefonu', value: orderData?.customerPhone || '-' },
      {
        label: 'Adres dostawy',
        value: `${orderData?.deliveryAddress.country}, ${orderData?.deliveryAddress.postalCode} ${orderData?.deliveryAddress.city}, ${orderData?.deliveryAddress.street} ${orderData?.deliveryAddress?.houseNumber}/${orderData?.deliveryAddress?.apartmentNumber}`,
      },
    ],
    [orderData]
  );

  return (
    <div className={style.orderDetailsContainer}>
      <h2>Szczegóły zamówienia</h2>
      <div className={style.detailsGrid}>
        {OrderInfoList.map((item) => (
          <div key={item.label} className={style.detailItem}>
            <span className={style.detailLabel}>{item.label}</span>
            <span className={style.detailValue}>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
