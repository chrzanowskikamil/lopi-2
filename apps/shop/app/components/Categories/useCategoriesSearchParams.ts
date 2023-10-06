import { setParamNameType } from './CategoriesTypes';

export const useCategoriesSearchParams = (searchParams: URLSearchParams) => {
  const getParam = {
    sort: () => {
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

  return { getParam, setParam };
};
