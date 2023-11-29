import { SortKeys, SortParams, SortType } from './searchParamsEnums';
import {
  useSearchParams as useNextSearchParams,
  usePathname,
  useRouter,
} from 'next/navigation';

import { SearchParamTypes } from './searchParametersModels';

interface SearchParamsHook {
  params: SearchParamTypes;
  applyParams: (
    newParams: Partial<SearchParamTypes>,
    replace?: boolean
  ) => void;
}

export const useSearchParams = (): SearchParamsHook => {
  const searchParams = useNextSearchParams()!;
  const router = useRouter();
  const pathname = usePathname();

  const applyParams = (
    newParams: Partial<SearchParamTypes>,
    replace?: boolean
  ) => {
    const currentParamsObj = paramsToObject(searchParams.entries());
    const parameters = replace
      ? newParams
      : { ...currentParamsObj, ...newParams };

    const queryToSet = new URLSearchParams(parameters as URLSearchParams);
    router.push(pathname + '?' + queryToSet);
  };

  return {
    params: {
      sortName: sortControler(searchParams?.get(SortKeys.SORT_NAME)),
      sortType: sortTypeControler(searchParams?.get(SortKeys.SORT_NAME)),
      sortOrder: sortOrderControler(searchParams?.get(SortKeys.SORT_NAME)),
      availability: coerceBoolean(searchParams?.get(SortKeys.AVAILABILITY)),
      minPrice: Math.max(Number(searchParams?.get(SortKeys.MIN_PRICE)), 0),
      maxPrice: Math.max(Number(searchParams?.get(SortKeys.MAX_PRICE)), 0),
    },
    applyParams,
  };
};

const coerceBoolean = (param: string | null) => {
  switch (param) {
    case 'true':
      return true;
    case 'false':
      return false;
    default:
      return true;
  }
};

const sortControler = (sort: string | null): string => {
  switch (sort) {
    case SortParams.PRICE_ASC:
      return SortParams.PRICE_ASC;
    case SortParams.PRICE_DSC:
      return SortParams.PRICE_DSC;
    case SortParams.PRODUCT_NAME_ASC:
      return SortParams.PRODUCT_NAME_ASC;
    case SortParams.PRODUCT_NAME_DSC:
      return SortParams.PRODUCT_NAME_DSC;
    default:
      return SortParams.PRICE_ASC;
  }
};

export const sortTypeControler = (sort: string | null): string => {
  switch (sort) {
    case SortParams.PRICE_ASC:
      return SortType.PRICE;
    case SortParams.PRICE_DSC:
      return SortType.PRICE;
    case SortParams.PRODUCT_NAME_ASC:
      return SortType.NAME;
    case SortParams.PRODUCT_NAME_DSC:
      return SortType.NAME;
    default:
      return SortType.PRICE;
  }
};

export const sortOrderControler = (sort: string | null) => {
  switch (sort) {
    case SortParams.PRICE_ASC:
      return true;
    case SortParams.PRICE_DSC:
      return false;
    case SortParams.PRODUCT_NAME_ASC:
      return true;
    case SortParams.PRODUCT_NAME_DSC:
      return false;
    default:
      return true;
  }
};

const paramsToObject = (entries: IterableIterator<[string, string]>) => {
  const result: { [key: string]: string } = {};

  for (const [key, value] of entries) {
    result[key] = value;
  }

  return result;
};
