import React, { useCallback, useEffect, useState, useRef, FC } from 'react';
import PropTypes from 'prop-types';
import style from './multiRangeSlider.module.scss';
import { useSearchParams } from '../../../../hooks/useSearchParams';

export interface RangeSliderValues {
  min: number;
  max: number;
}

interface MultiRangeSliderProps extends RangeSliderValues {
  onChange: (value: RangeSliderValues) => void;
}

const MultiRangeSlider: FC<MultiRangeSliderProps> = ({
  min,
  max,
  onChange,
}) => {
  const { getParam } = useSearchParams();

  const initialMinVal = getParam.filterPriceLow;
  const initialMaxVal = getParam.filterPriceHigh;

  const [minVal, setMinVal] = useState<number>(
    initialMinVal ? +initialMinVal : min
  );
  const [maxVal, setMaxVal] = useState<number>(
    initialMaxVal ? +initialMaxVal : max
  );

  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLInputElement>(null);

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div className={style.containerSlider}>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={(event) => {
          const value = Math.min(+event.target.value, maxVal - 1);
          setMinVal(value);
          event.target.value = value.toString();
        }}
        className={`${style.thumb} ${style.thumbZindexThree}
           ${minVal > max - 100 ? style.thumbZindexFive : ''}`}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={(event) => {
          const value = Math.max(+event.target.value, minVal + 1);
          setMaxVal(value);
          event.target.value = value.toString();
        }}
        className={`${style.thumb} ${style.thumbZindexFour}`}
      />

      <div className={`${style.slider}`}>
        <div className={`${style.sliderTrack}`} />
        <div ref={range} className={`${style.sliderRange}`} />
      </div>
      <div className={`${style.label}`}>
        Cena: {minVal} PLN - {maxVal}
        PLN
      </div>
    </div>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MultiRangeSlider;
