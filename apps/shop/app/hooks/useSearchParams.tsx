import { useSearchParams } from 'next/navigation';
import { setParamNameType } from '../components/Categories/CategoriesTypes';
import { GetParams } from '../components/Categories/CategoriesEnums';

export const useCategoriesSearchParams = () => {
  const searchParams = useSearchParams();

  const getParam = {
    sort: () => {
      return searchParams.get(GetParams.SORT);
    },
    availability: () => {
      return searchParams.get(GetParams.AVAILABILITY);
    },
    filterPriceLow: () => {
      return searchParams.get(GetParams.FILTER_PRICE_LOW);
    },
    filterPriceHigh: () => {
      return searchParams.get(GetParams.FILTER_PRICE_HIGH);
    },
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
