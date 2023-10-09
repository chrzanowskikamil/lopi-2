import { useSearchParams as nextSearchParams } from 'next/navigation';
import { setParamNameType } from './AppSearchParams';
import { GetParams } from './AppSearchParams';

export const useSearchParams = () => {
  const searchParams = nextSearchParams();

  const getParam = {
    sort: searchParams.get(GetParams.SORT),
    availability: searchParams.get(GetParams.AVAILABILITY),
    filterPriceLow: searchParams.get(GetParams.FILTER_PRICE_LOW),
    filterPriceHigh: searchParams.get(GetParams.FILTER_PRICE_HIGH),
  };

  const setParam = (name: setParamNameType, value: string) => {
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
