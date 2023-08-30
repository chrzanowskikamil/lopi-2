import Link from 'next/link';
import styles from './SortDropdown.module.scss';
import { FC } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

import { usePathname, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

interface SortDropdownProps {
  sort: (item: string) => void;
}

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
    'Cena rosnaca',
    'Cena malejaca',
    'Alfabetycznie A do Z',
    'Alfabetycznie Z do A',
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
