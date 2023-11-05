'use client';
import { useEffect, useState } from 'react';

type ProgressBarConfig = {
  initialValue: number;
  decrement: number;
  intervalTime: number;
};

export const useProgressBar = (config: ProgressBarConfig) => {
  const [progress, setProgress] = useState<number>(config.initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => Math.max(prev - config.decrement, 0));
    }, config.intervalTime);

    return () => clearInterval(interval);
  }, [config.decrement, config.intervalTime]);

  return progress;
};
