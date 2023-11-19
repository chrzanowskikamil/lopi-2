'use client';
import { useEffect, useRef, useState } from 'react';

type ProgressBarConfig = {
  initialValue: number;
  decrement: number;
  intervalTime: number;
  shouldShowProgress: boolean;
};

const MINIMUM_PROGRESS = 0;

export const useProgressBar = (config: ProgressBarConfig) => {
  const { shouldShowProgress, decrement, intervalTime } = config;
  const [progress, setProgress] = useState<number>(config.initialValue);

  const intervalId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (shouldShowProgress && intervalId.current === null) {
      intervalId.current = setInterval(() => {
        setProgress((prev) => {
          const nextValue = Math.max(prev - decrement, MINIMUM_PROGRESS);
          if (nextValue === MINIMUM_PROGRESS) {
            clearInterval(intervalId.current as NodeJS.Timeout);
            intervalId.current = null;
          }

          return nextValue;
        });
      }, intervalTime);
    }

    return () => {
      if (intervalId.current !== null) {
        clearInterval(intervalId.current);
        intervalId.current = null;
      }
    };
  }, [shouldShowProgress, decrement, intervalTime]);

  return progress;
};
