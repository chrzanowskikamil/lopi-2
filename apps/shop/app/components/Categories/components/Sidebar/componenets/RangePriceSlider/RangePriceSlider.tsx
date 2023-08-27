'use client';

import styles from './RangePriceSlider.module.scss';
import { Form } from 'react-bootstrap';
import FormRange from 'react-bootstrap/esm/FormRange';
import { usePathname, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { useState } from 'react';

export const RangePriceSlider = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [lowerValue, setLowerValue] = useState<string | 0 | null | number>(
    searchParams.get('filterPriceLow') !== null
      ? searchParams.get('filterPriceLow')
      : 0
  );
  const [upperValue, setUpperValue] = useState<string | 0 | null | number>(
    searchParams.get('filterPriceHight') !== null
      ? searchParams.get('filterPriceHight')
      : 160
  );

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  const handleUpperChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(value);
    setUpperValue(Math.max(inputValue, lowerValue));
  };
  const handleLowerChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(value);
    setLowerValue(Math.min(inputValue, upperValue));
  };

  // const handleSearchParams ()

  return (
    <div className={styles.priceContainer}>
      <h3 className={styles.title}>Cena</h3>
      <div className={styles.slider}>
        <FormRange
          aria-label="Lower price range slider"
          min="0" //INFO: mock, in future it will be fetched from API
          max="160" //INFO: mock, in future it will be fetched from API
          value={lowerValue}
          onChange={handleLowerChange}
          onMouseUp={() =>
            (window.location.href =
              pathname +
              '?' +
              createQueryString('filterPriceLow', `${lowerValue}`))
          }
          className={styles.rangeInput}
        />
        <FormRange
          aria-label="Upper price range slider"
          min="0" //INFO: mock, in future it will be fetched from API
          max="160" //INFO: mock, in future it will be fetched from API
          value={upperValue}
          onChange={handleUpperChange}
          className={styles.rangeInput}
          onMouseUp={() =>
            (window.location.href =
              pathname +
              '?' +
              createQueryString('filterPriceHight', `${upperValue}`))
          }
        />
      </div>
      <Form.Label className={styles.label}>
        Cena: {lowerValue} PLN - {upperValue} PLN
      </Form.Label>
    </div>
  );
};
