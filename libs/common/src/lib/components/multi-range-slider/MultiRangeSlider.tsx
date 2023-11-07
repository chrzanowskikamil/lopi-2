'use client';

import React, { FC, useEffect, useRef, useState, useTransition } from 'react';
import style from './multiRangeSlider.module.scss';

export interface RangeSliderValues {
  minValue: number;
  maxValue: number;
}

interface MultiRangeSliderProps extends RangeSliderValues {
  onChange: (value: RangeSliderValues) => void;
  maxValueLimit: number;
}

const DEFAULT_MIN_VALUE = 0;

export const MultiRangeSlider: FC<MultiRangeSliderProps> = ({
  minValue,
  maxValue,
  maxValueLimit,
  onChange,
}) => {
  const [minVal, setMinVal] = useState<number>(minValue);
  const [maxVal, setMaxVal] = useState<number>(maxValue);

  const [, startTransition] = useTransition();

  const minInputRef = useRef<HTMLInputElement>(null);
  const maxInputRef = useRef<HTMLInputElement>(null);
  const rangeInputRef = useRef<HTMLInputElement>(null);

  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startTransition(() => {
      if (timeoutId) clearTimeout(timeoutId);

      const newTimeoutId = setTimeout(() => {
        onChange({ minValue: minVal, maxValue: maxVal });
      }, 1000);

      setTimeoutId(newTimeoutId);
    });
  }, [minVal, maxVal]);

  // const getPercent = useCallback(
  //   (value: number) =>
  //     Math.round(((value - minValue) / (maxValue - minValue)) * 100),
  //   [minValue, maxValue]
  // );

  // TODO: find more clear way of counting this
  // useEffect(() => {
  //   if (maxInputRef.current) {
  //     const minPercent = getPercent(minVal);
  //     const maxPercent = getPercent(+maxInputRef.current.value);
  //
  //     if (rangeInputRef.current) {
  //       rangeInputRef.current.style.left = `${minPercent}%`;
  //       rangeInputRef.current.style.width = `${maxPercent - minPercent}%`;
  //     }
  //   }
  // }, [minVal, getPercent]);

  // useEffect(() => {
  //   if (minInputRef.current) {
  //     const minPercent = getPercent(+minInputRef.current.value);
  //     const maxPercent = getPercent(maxVal);
  //
  //     if (rangeInputRef.current) {
  //       rangeInputRef.current.style.width = `${maxPercent - minPercent}%`;
  //     }
  //   }
  // }, [maxVal, getPercent]);

  return (
    <div className={style.containerSlider}>
      <input
        type="range"
        min={DEFAULT_MIN_VALUE}
        value={minVal}
        ref={minInputRef}
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
        value={maxVal}
        ref={maxInputRef}
        onChange={(event) => {
          const value = Math.max(+event.target.value, minVal + 1);
          setMaxVal(value);
        }}
        className={`${style.thumb}`}
        style={{ zIndex: 4 }}
      />

      <div className={`${style.slider}`}>
        <div className={`${style.sliderTrack}`} />
        <div ref={rangeInputRef} className={`${style.sliderRange}`} />
      </div>

      <div className={`${style.label}`}>
        Cena: {minVal} PLN - {maxVal}
        PLN
      </div>
    </div>
  );
};
