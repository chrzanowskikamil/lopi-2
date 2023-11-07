import {
  usePathname,
  useRouter,
  useSearchParams as useNextSearchParams,
} from 'next/navigation';
import { SearchParamTypes } from './searchParametersModels';

interface SearchParamsHook {
  params: SearchParamTypes;
  applyParams: (
    newParams: Partial<SearchParamTypes>,
    replace?: boolean
  ) => void;
}

const AVAILABILITY_KEY = 'availability';
const MIN_PRICE = 'minPrice';
const MAX_PRICE = 'maxPrice';

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
      availability: coerceBoolean(
        searchParams?.get(AVAILABILITY_KEY) || 'true'
      ),
      minPrice: Math.max(Number(searchParams?.get(MIN_PRICE)), 0),
      maxPrice: Math.max(Number(searchParams?.get(MAX_PRICE)), 100),
    },
    applyParams,
  };
};

const coerceBoolean = (param: string | null): boolean => {
  switch (param) {
    case 'true':
      return true;
    case 'false':
      return false;
    default:
      return false;
  }
};

const paramsToObject = (entries: IterableIterator<[string, string]>) => {
  const result: { [key: string]: string } = {};

  for (const [key, value] of entries) {
    result[key] = value;
  }

  return result;
};
