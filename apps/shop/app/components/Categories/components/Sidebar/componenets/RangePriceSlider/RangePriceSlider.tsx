'use client';
import styles from './RangePriceSlider.module.scss';
import { Form } from 'react-bootstrap';
import FormRange from 'react-bootstrap/esm/FormRange';
import { useState } from 'react';

export const RangePriceSlider = () => {
  const [lowerValue, setLowerValue] = useState<number>(0);
  const [upperValue, setUpperValue] = useState<number>(160);

  const handleLowerChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(value);
    setLowerValue(Math.min(inputValue, upperValue));
  };

  const handleUpperChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(value);
    setUpperValue(Math.max(inputValue, lowerValue));
  };

  return (
    <div className={styles.priceContainer}>
      <h3 className={styles.title}>Cena</h3>
      <div className={styles.slider}>
        <FormRange
          aria-label="Lower price range slider"
          min="0" //INFO: mock, in feature it will be fetched from API
          max="160" //INFO: mock, in feature it will be fetched from API
          value={lowerValue}
          onChange={handleLowerChange}
          className={styles.rangeInput}
        />
        <FormRange
          aria-label="Upper price range slider"
          min="0" //INFO: mock, in feature it will be fetched from API
          max="160" //INFO: mock, in feature it will be fetched from API
          value={upperValue}
          onChange={handleUpperChange}
          className={styles.rangeInput}
        />
      </div>
      <Form.Label className={styles.label}>
        Cena: {lowerValue} PLN - {upperValue} PLN
      </Form.Label>
    </div>
  );
};
