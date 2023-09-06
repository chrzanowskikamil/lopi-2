'use client';

import styles from './RangePriceSlider.module.scss';

import { useState, useRef, FC } from 'react';
import { Form } from 'react-bootstrap';
import { CategoriesReducerProps } from '../../../../CategoriesReducerHook';
interface RangePriceSlider {
  categoriesReducer: CategoriesReducerProps;
}

export const RangePriceSlider: FC<RangePriceSlider> = ({
  categoriesReducer,
}) => {
  const THE_HIGHEST_MONEY_VALUE = 160;
  const PIXEL_WIDTH = 247;

  const pxValueToMoneyValue = (pxValue: number) => {
    const divider = Math.ceil((PIXEL_WIDTH * 100) / THE_HIGHEST_MONEY_VALUE);

    return Math.ceil((pxValue * 100) / divider);
  };

  const moneyValueToPixel = (moneyValue: number) => {
    const divider = Math.ceil((PIXEL_WIDTH * 100) / THE_HIGHEST_MONEY_VALUE);

    return Math.ceil((moneyValue * divider) / 100);
  };

  const [mouseDown, setMouseDown] = useState(false);
  const [lowerPXValue, setLowerPXValue] = useState(
    moneyValueToPixel(categoriesReducer.state.lowerMoneyValueFilter)
      ? moneyValueToPixel(categoriesReducer.state.lowerMoneyValueFilter)
      : 0
  );
  const dragging = useRef(false);
  const previousClientX = useRef(0);

  const [higherPXValue, setHigherPXValue] = useState(
    moneyValueToPixel(categoriesReducer.state.higherMoneyValueFilter)
  );
  const draggingUpperValue = useRef(false);
  const previousClientXUpperValue = useRef(0);

  const handleMouseDown = (e: { clientX: number }) => {
    previousClientX.current = e.clientX;
    dragging.current = true;
    setMouseDown(true);
  };

  const handleMouseDownUpperValue = (e: { clientX: number }) => {
    previousClientXUpperValue.current = e.clientX;
    draggingUpperValue.current = true;
    setMouseDown(true);
  };
  const handleMouseMove = (e: { clientX: number }) => {
    if (!dragging.current) {
      return;
    }

    setLowerPXValue((lowerPXValue) => {
      if (lowerPXValue >= 0 && lowerPXValue < higherPXValue) {
        const change = e.clientX - previousClientX.current;
        previousClientX.current = e.clientX;

        return lowerPXValue + change;
      } else if (lowerPXValue < 0) {
        return (lowerPXValue = 0);
      } else return (lowerPXValue = higherPXValue - 1);
    });

    categoriesReducer.onLowerMoneyValueFilterChange(
      pxValueToMoneyValue(lowerPXValue)
    );
  };

  const handleMouseMoveUpperValue = (e: { clientX: number }) => {
    if (!draggingUpperValue.current) {
      return;
    }

    setHigherPXValue((higherPXValue) => {
      if (higherPXValue <= PIXEL_WIDTH && higherPXValue > lowerPXValue) {
        const change = e.clientX - previousClientXUpperValue.current;
        previousClientXUpperValue.current = e.clientX;

        return higherPXValue + change;
      } else if (higherPXValue > PIXEL_WIDTH) {
        return (higherPXValue = PIXEL_WIDTH);
      } else return (higherPXValue = lowerPXValue + 1);
    });

    categoriesReducer.onHigherMoneyValueFilterChange(
      pxValueToMoneyValue(higherPXValue)
    );
  };

  const handleMouseUp = () => {
    dragging.current = false;
  };

  const handleMouseUpUpperValue = () => {
    draggingUpperValue.current = false;
  };

  const goToQueryStringHref = (query: string, value: number) => {
    const url = new URL(location.href);
    url.searchParams.set(`${query}`, `${value}`);
    history.pushState({}, '', url);
  };

  const displayLowValue = () => {
    if (lowerPXValue > 0 && lowerPXValue < higherPXValue)
      return pxValueToMoneyValue(lowerPXValue);
    else if (lowerPXValue <= 0) return 0;
    else if (lowerPXValue >= higherPXValue)
      return pxValueToMoneyValue(higherPXValue) - 1;
  };

  const displayHighValue = () => {
    if (higherPXValue <= PIXEL_WIDTH && lowerPXValue < higherPXValue)
      return pxValueToMoneyValue(higherPXValue);
    else if (higherPXValue >= PIXEL_WIDTH) return THE_HIGHEST_MONEY_VALUE;
    else if (higherPXValue <= lowerPXValue)
      return pxValueToMoneyValue(lowerPXValue) + 1;
  };

  return (
    <div className={styles.priceContainer}>
      <h3 className={styles.title}>Cena</h3>
      <div className={styles.slider}>
        <div
          className={styles.dotLeft}
          style={{ marginLeft: `${lowerPXValue}px` }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={() => {
            goToQueryStringHref(
              'filterPriceLow',
              pxValueToMoneyValue(lowerPXValue)
            );
            setMouseDown(false);

            setLowerPXValue(lowerPXValue);
            categoriesReducer.onLowerMoneyValueFilterChange(
              pxValueToMoneyValue(lowerPXValue)
            );

            handleMouseUp();
          }}
          onPointerLeave={() => {
            if (mouseDown) {
              handleMouseUp();
              goToQueryStringHref(
                'filterPriceLow',
                pxValueToMoneyValue(lowerPXValue)
              );

              setLowerPXValue(lowerPXValue);
              categoriesReducer.onLowerMoneyValueFilterChange(
                pxValueToMoneyValue(lowerPXValue)
              );

              setMouseDown(false);
            }
          }}
        ></div>

        <div
          className={styles.dotRight}
          style={{ marginLeft: `${higherPXValue}px` }}
          onMouseDown={handleMouseDownUpperValue}
          onMouseMove={handleMouseMoveUpperValue}
          onMouseUp={() => {
            handleMouseUpUpperValue();
            goToQueryStringHref(
              'filterPriceHigh',
              pxValueToMoneyValue(higherPXValue)
            );

            setHigherPXValue(higherPXValue);

            categoriesReducer.onHigherMoneyValueFilterChange(
              pxValueToMoneyValue(higherPXValue)
            );
            setMouseDown(false);
          }}
          onPointerLeave={() => {
            if (mouseDown) {
              handleMouseUpUpperValue();
              goToQueryStringHref(
                'filterPriceHigh',
                pxValueToMoneyValue(higherPXValue)
              );
              setMouseDown(false);
            }
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
