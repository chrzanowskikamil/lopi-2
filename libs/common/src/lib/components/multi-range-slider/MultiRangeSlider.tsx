'use client';

import { FC, useEffect, useRef, useState, useTransition } from 'react';

import { Product } from '@lopi-2/common';
import style from './multiRangeSlider.module.scss';

export interface RangeSliderValues {
  minValue: number;
  maxValue: number;
}

interface MultiRangeSliderProps {
  categoriesReducer: { onProductsDisplay: { allProducts: Product[] } };
  params: { maxPrice: number };
  onChange: (value: RangeSliderValues) => void;
}

const DEFAULT_MIN_VALUE = 0;

export const MultiRangeSlider: FC<MultiRangeSliderProps> = ({
  categoriesReducer,
  params,
  onChange,
}) => {
  const [minVal, setMinVal] = useState<number>(0);
  const [maxVal, setMaxVal] = useState<number>(params.maxPrice);

  const [, startTransition] = useTransition();

  const minInputRef = useRef<HTMLInputElement>(null);
  const maxInputRef = useRef<HTMLInputElement>(null);
  const rangeInputRef = useRef<HTMLInputElement>(null);
  const rangeFullInputRef = useRef<HTMLInputElement>(null);

  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const getHighestPriceProducts = () => {
    const highestPrice = categoriesReducer.onProductsDisplay.allProducts.reduce(
      (highest, product) => {
        const { regularPrice } = product;
        const price = regularPrice;

        return price > highest ? price : highest;
      },
      0
    );

    return highestPrice;
  };

  const maxValueLimit = getHighestPriceProducts();

  useEffect(() => {
    setMaxVal(maxValueLimit);
  }, [maxValueLimit]);

  useEffect(() => {
    startTransition(() => {
      if (timeoutId) clearTimeout(timeoutId);

      const newTimeoutId = setTimeout(() => {
        onChange({ minValue: minVal, maxValue: maxVal });
      }, 1000);

      setTimeoutId(newTimeoutId);
    });
  }, [minVal, maxVal]);

  useEffect(() => {
    const fillRange = (
      maxValueLimit: number,
      maxVal: number,
      minVal: number,
      dependency: number
    ) => {
      const percentage =
        (maxVal / maxValueLimit) * dependency -
        (minVal / maxValueLimit) * dependency;

      return `${percentage}px`;
    };

    const leftSpace = (
      maxValueLimit: number,
      minVal: number,
      dependency: number
    ) => {
      return (minVal / maxValueLimit) * dependency + 'px';
    };

    if (rangeInputRef.current && rangeFullInputRef.current) {
      rangeInputRef.current.style.width = fillRange(
        maxValueLimit,
        maxVal,
        minVal,
        rangeFullInputRef.current.clientWidth
      );

      rangeInputRef.current.style.left = leftSpace(
        maxValueLimit,
        minVal,
        rangeFullInputRef.current.clientWidth
      );
    }
  }, [minVal, maxVal, rangeFullInputRef]);

  return (
    <div className={style.containerSlider}>
      <input
        type="range"
        min={DEFAULT_MIN_VALUE}
        value={minVal}
        ref={minInputRef}
        max={maxValueLimit}
        onChange={(event) => {
          const value = Math.min(+event.target.value, maxVal - 1);
          setMinVal(value);
        }}
        className={`${style.thumb}`}
        style={{ zIndex: 3 }}
      />
      <input
        type="range"
        max={maxValueLimit}
        value={maxVal !== 0 ? maxVal : maxValueLimit}
        ref={maxInputRef}
        onChange={(event) => {
          const value = Math.max(+event.target.value, minVal + 1);
          setMaxVal(value);
        }}
        className={`${style.thumb}`}
        style={{ zIndex: 4 }}
      />

      <div className={`${style.slider}`}>
        <div ref={rangeFullInputRef} className={`${style.sliderTrack}`} />
        <div ref={rangeInputRef} className={`${style.sliderRange}`} />
      </div>

      <div className={`${style.label}`}>
        Cena: {minVal} PLN - {maxVal !== 0 ? maxVal : maxValueLimit}
        PLN
      </div>
    </div>
  );
};
