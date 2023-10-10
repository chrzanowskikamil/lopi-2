import { SearchParams } from './AppSearchParams';
import { useSearchParams as nextSearchParams } from 'next/navigation';
import { sortParamTypes } from './AppSearchParams';

export const useSearchParams = () => {
  const searchParams = nextSearchParams();

  const getParam = {
    sort: searchParams.get(SearchParams.SORT),
    availability: searchParams.get(SearchParams.AVAILABILITY),
    filterPriceLow: searchParams.get(SearchParams.FILTER_PRICE_LOW),
    filterPriceHigh: searchParams.get(SearchParams.FILTER_PRICE_HIGH),
  };

  const setParam = (name: sortParamTypes, value: string) => {
    const url = new URL(location.href);
    url.searchParams.set(name, value);
    history.pushState({}, '', url);
  };

  const createSortQueryString = (value: string) => {
    const url = new URL(location.href);
    url.searchParams.set('sort', value);

    return url.searchParams.toString();
  };

  return { getParam, setParam, createSortQueryString };
};
