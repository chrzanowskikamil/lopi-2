import styles from './SortDropdown.module.scss';
import { FC } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

export const SortDropdown: FC = () => {
  const dropdownItems = [
    'Trafność',
    'Ręczne',
    'Alfabetycznie Z do A',
    'Cena malejąca',
    'Cena od najniższej do najwyższej',
    'Od najnowszych do najstarszych',
    'Alfabetycznie A do Z',
    'Od najstarszych do najnowszych',
    'Bestsellery',
  ];

  const items = dropdownItems.map((item) => (
    <Dropdown.Item key={item}>{item}</Dropdown.Item>
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
