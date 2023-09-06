import Link from 'next/link';
import styles from './SortDropdown.module.scss';
import { FC } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

import { usePathname, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { SortParams } from '../../CategoriesEnums';
import { SortDropdownProps } from '../../CategoriesTypesProps';

export const SortDropdown: FC<SortDropdownProps> = ({ sort }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const dropdownItems = [
    SortParams.PRICE_INCREASING,
    SortParams.PRICE_DECREASING,
    SortParams.ALFABEICLY_INCREASING,
    SortParams.ALFABEICLY_DECREASING,
  ];

  const items = dropdownItems.map((item) => (
    <Dropdown.Item
      key={item}
      as={Link}
      href={pathname + '?' + createQueryString('sort', `${item}`)}
      onClick={() => sort(item)}
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
