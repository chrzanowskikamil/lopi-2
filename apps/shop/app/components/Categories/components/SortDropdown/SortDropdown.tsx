import Link from 'next/link';
import styles from './SortDropdown.module.scss';
import { FC, useCallback } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

import { usePathname, useSearchParams } from 'next/navigation';
import { SortParams } from '../../CategoriesEnums';

interface SortDropdownProps {
  sortedProducts: (item: string) => void;
}

export const SortDropdown: FC<SortDropdownProps> = ({ sortedProducts }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams as unknown as any);
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
      onClick={() => sortedProducts(item)}
    >
      {item}
    </Dropdown.Item>
  ));

  return (
    <DropdownButton
      bsPrefix={styles.dropdown}
      id="sort-button"
      title={
        searchParams.get('sort') === null
          ? 'Sortowanie'
          : searchParams.get('sort')
      }
    >
      {items}
    </DropdownButton>
  );
};
