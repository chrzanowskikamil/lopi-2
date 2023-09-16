import style from './OrderDetails.module.scss';
import { FC, useMemo } from 'react';

export const OrderDetails: FC = () => {
  const OrderInfoList = useMemo(
    () => [
      { label: 'Numer zamówienia', value: '123456789' },
      { label: 'Dostawa', value: 'InPost' },
      { label: 'Email', value: 'john.d@gmail.com' },
      { label: 'Forma płatności', value: 'Przelew bankowy' },
      { label: 'Data zamówienia', value: '11.08.2023r' },
      { label: 'Nr telefonu', value: '+48 8749790988' },
      {
        label: 'Adres dostawy',
        value:
          'Paczkomat ALL06M, Wojska Polskiego 153 95-070 Aleksandrów Łódzki',
      },
    ],
    []
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
