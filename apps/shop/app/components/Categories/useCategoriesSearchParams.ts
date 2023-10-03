import { usePathname, useSearchParams } from 'next/navigation';
// import { useState } from 'react';

export const useCategoriesSearchParams = () => {
  // const [currentParams, setCurrentParams] = useState('');
  //

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setParam = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams as unknown as any);
    params.set(name, value);

    return params.toString();
  };

  const getParam = (name: string) => {
    return searchParams.get(name);
  };

  const createHref = (name: string, value: string) => {
    return pathname + '?' + setParam(name, `${value}`);
  };

  const getUrlParam = (value: string) => {
    const url = new URL(location.href);

    return url.searchParams.get(`${value}`);
  };

  return { getParam, setParam, pathname, createHref, getUrlParam };
};

// const createQueryString = useCallback(
//   (value: string) => {
//     const params = new URLSearchParams(searchParams as unknown as any);
//     params.set('sort', value);

//     return params.toString();
//   },
//   [searchParams]
// );
// pathname + '?' + useParams.set('sort', `${item}`)
