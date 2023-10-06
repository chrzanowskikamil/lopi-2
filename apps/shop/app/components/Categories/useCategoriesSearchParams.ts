import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type pathTypes =
  | Record<string, never>
  | {
      pathname: string;
      sort: string;
      filterPriceLow: string;
      filterPriceHigh: string;
      availablity: string;
    };

export const useCategoriesSearchParams = () => {
  const [currentPath, setCurrentPath] = useState<pathTypes>({});

  const pathname = usePathname();
  const searchParams = useSearchParams();
  // console.log(searchParams);

  // useEffect(() => {
  //   const queryParams = currentPath;
  //   queryParams['pathname'] = pathname;

  //   setCurrentPath(queryParams);
  // }, [pathname]);

  // useEffect(() => {
  //   const queryParams = currentPath;
  //   for (const [key, value] of searchParams) {
  //     queryParams[key] = value;
  //   }

  //   setCurrentPath(queryParams);
  // }, [searchParams]);

  const addPathParameter = (name: string, value: string) => {
    const queryParams = currentPath;
    queryParams[name] = value;

    setCurrentPath(queryParams);

    return;
  };

  const getParam = (name: string) => {
    return searchParams.get(name);
  };

  const setParam = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams as unknown as any);
    params.set(name, value);

    return params.toString();
  };

  const setParamNoReload = (query: string, value: string) => {
    const queryParams = currentPath;
    queryParams[query] = value;

    const url = new URL(location.href);
    url.searchParams.set(query, value);
    history.pushState({}, '', url);
    setParam(query, value);

    // const params = new URLSearchParams(searchParams as unknown as any);
    // router.push(`${pathname} + '?' + ${params}`);

    return setCurrentPath(queryParams), console.log(currentPath);
  };

  const createHref = (name: string, value: string) => {
    return pathname + '?' + setParam(name, `${value}`);
  };

  const createHrefCategory = (value: string) => {
    return `/category/${value}` + '?' + searchParams;
  };

  return {
    currentPath,
    getParam,
    setParamNoReload,
    createHref,
    createHrefCategory,
  };
};
