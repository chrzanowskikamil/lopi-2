import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { setParamNameType } from './CategoriesTypes';

export const useCategoriesSearchParams = () => {
  const searchParams = useSearchParams();

  const getParam = {
    sort: () => {
      console.log(searchParams.get('sort'));

      return searchParams.get('sort');
    },
    availability: () => {
      return searchParams.get('availability');
    },
    filterPriceLow: () => {
      return searchParams.get('filterPriceLow');
    },
    filterPriceHigh: () => {
      return searchParams.get('filterPriceHigh');
    },
  };

  const setParam = (name: setParamNameType, value: string) => {
    const url = new URL(location.href);
    url.searchParams.set(name, value);
    history.pushState({}, '', url);
  };

  const createQueryString = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams as unknown as any);
      params.set('sort', value);

      return params.toString();
    },
    [searchParams]
  );

  return { getParam, setParam, createQueryString, searchParams };
};
