'use client';

import styles from './RangePriceSlider.module.scss';
import { Form } from 'react-bootstrap';

import { usePathname, useSearchParams } from 'next/navigation';
import { useCallback, useState, useRef, FC } from 'react';

export const RangePriceSlider: FC = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [result, setResult] = useState(
    searchParams.get('filterPriceLow') !== null
      ? parseInt(searchParams.get('filterPriceLow'))
      : 0
  );
  const dragging = useRef(false);
  const previousClientX = useRef(0);

  const [upperValue, setUpperValue] = useState(
    searchParams.get('filterPriceHigh') !== null
      ? parseInt(searchParams.get('filterPriceHigh'))
      : 247
  );
  const draggingUpperValue = useRef(false);
  const previousClientXUpperValue = useRef(0);

  const handleMouseDown = useCallback(
    (e) => {
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('mousemove', handleMouseMove);
      previousClientX.current = e.clientX;
      dragging.current = true;
    },
    [upperValue]
  );

  const handleMouseDownUpperValue = useCallback(
    (e) => {
      window.addEventListener('mousedown', handleMouseDownUpperValue);
      window.addEventListener('mouseup', handleMouseUpUpperValue);
      window.addEventListener('mousemove', handleMouseMoveUpperValue);
      previousClientXUpperValue.current = e.clientX;
      draggingUpperValue.current = true;
    },
    [result]
  );

  const handleMouseMove = (e) => {
    if (!dragging.current) {
      return;
    }
    console.log(upperValue);
    setResult((result) => {
      if (result >= 0 && result < upperValue) {
        const change = e.clientX - previousClientX.current;
        previousClientX.current = e.clientX;

        return result + change;
      } else if (result < 0) {
        return (result = 0);
      } else if (result >= upperValue) {
        return (result = upperValue - 1);
      }
    });
  };

  const handleMouseMoveUpperValue = (e) => {
    if (!draggingUpperValue.current) {
      return;
    }

    setUpperValue((upperValue) => {
      if (upperValue <= 247 && upperValue > result) {
        const change = e.clientX - previousClientXUpperValue.current;
        previousClientXUpperValue.current = e.clientX;
        console.log(upperValue);

        return upperValue + change;
      } else if (upperValue > 247) {
        return (upperValue = 247);
      } else if (upperValue <= result) {
        return (upperValue = result + 1);
      }
    });
  };

  const handleMouseUp = useCallback(
    (e) => {
      dragging.current = false;
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
    },
    [upperValue]
  );

  const handleMouseUpUpperValue = useCallback(
    (e) => {
      draggingUpperValue.current = false;
      window.removeEventListener('mousedown', handleMouseDownUpperValue);
      window.removeEventListener('mouseup', handleMouseUpUpperValue);
      window.removeEventListener('mousemove', handleMouseMoveUpperValue);
    },
    [result]
  );

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const displayLowValue = () => {
    if (result > 0 && result < upperValue) return result;
    else if (result <= 0) return 0;
    else if (result >= upperValue) return upperValue - 1;
  };

  const displayHighValue = () => {
    if (upperValue < 274 && result < upperValue) return upperValue;
    else if (upperValue >= 274) return 274;
    else if (upperValue <= result) return result + 1;
  };

  return (
    <div className={styles.priceContainer}>
      <h3 className={styles.title}>Cena</h3>
      <div className={styles.slider}>
        <div
          className={styles.dotLeft}
          style={{ marginLeft: `${result}px` }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={(e) => {
            handleMouseUp(e);
            window.location.href =
              pathname + '?' + createQueryString('filterPriceLow', `${result}`);
          }}
        ></div>

        <div
          className={styles.dotRight}
          style={{ marginLeft: `${upperValue}px` }}
          onMouseDown={handleMouseDownUpperValue}
          onMouseMove={handleMouseMoveUpperValue}
          onMouseUp={(e) => {
            handleMouseUpUpperValue(e);
            window.location.href =
              pathname +
              '?' +
              createQueryString('filterPriceHigh', `${upperValue}`);
          }}
        ></div>
      </div>
      <Form.Label className={styles.label}>
        Cena: {displayLowValue()} PLN - {displayHighValue()}
        PLN
      </Form.Label>
    </div>
  );
};
