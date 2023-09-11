import Link from 'next/link';
import styles from './SortDropdown.module.scss';
import { FC } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

import { usePathname, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { SortParams } from '../../CategoriesEnums';
import { SortDropdownProps } from '../../CategoriesTypesProps';

type paramsValuesType =
  | 'Cena rosnaca'
  | 'Cena malejaca'
  | 'Alfabetycznie A do Z'
  | 'Alfabetycznie Z do A';

export const SortDropdown: FC<SortDropdownProps> = ({ productsSortOrder }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (value: paramsValuesType) => {
      const params = new URLSearchParams(searchParams);
      params.set('sort', value);

      return params.toString();
    },
    [searchParams]
  );

  const dropdownItems = [
    SortParams.PRICE_ASC,
    SortParams.PRICE_DSC,
    SortParams.PRODUCT_NAME_ASC,
    SortParams.PRODUCT_NAME_DSC,
  ];

  const items = dropdownItems.map((item) => (
    <Dropdown.Item
      key={item}
      as={Link}
      href={pathname + '?' + createQueryString(`${item}`)}
      onClick={() => productsSortOrder(item)}
    >
      {item}
    </Dropdown.Item>
  ));

  return (
    <DropdownButton
      bsPrefix={styles.dropdown}
      id="sort-button"
      title="Sortowanie"
    >
      {items}
    </DropdownButton>
  );
};
