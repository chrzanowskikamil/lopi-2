import Link from 'next/link';
import styles from './SortDropdown.module.scss';
import { FC } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { usePathname } from 'next/navigation';
import { SortParams } from '../../CategoriesEnums';
import { useSearchParams } from '../../../../hooks/useSearchParams';

interface SortDropdownProps {
  sortedProducts: (item: string) => void;
}

export const SortDropdown: FC<SortDropdownProps> = ({ sortedProducts }) => {
  const pathname = usePathname();

  const { getParam, createSortQueryString } = useSearchParams();

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
      href={pathname + '?' + createSortQueryString(item)}
      onClick={() => sortedProducts(item)}
    >
      {item}
    </Dropdown.Item>
  ));

  return (
    <DropdownButton
      bsPrefix={styles.dropdown}
      id="sort-button"
      title={getParam.sort === null ? 'Sortowanie' : getParam.sort}
    >
      {items}
    </DropdownButton>
  );
};
