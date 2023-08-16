import styles from '../Categories.module.scss';
import { Dropdown, DropdownButton } from 'react-bootstrap';

export const SortDropdown = () => {
  return (
    <DropdownButton
      bsPrefix={styles.sortButton}
      id="sort-button"
      title="Sortowanie"
    >
      <Dropdown.Item>Trafność</Dropdown.Item>
      <Dropdown.Item>Ręczne</Dropdown.Item>
      <Dropdown.Item>Alfabetycznie Z do A</Dropdown.Item>
      <Dropdown.Item>Cena malejąca</Dropdown.Item>
      <Dropdown.Item>Cena od najniższej do najwyższej</Dropdown.Item>
      <Dropdown.Item>Od najnowszych do najstarszych</Dropdown.Item>
      <Dropdown.Item>Alfabetycznie A do Z</Dropdown.Item>
      <Dropdown.Item>Od najstarszych do najnowszych</Dropdown.Item>
      <Dropdown.Item>Bestsellery</Dropdown.Item>
    </DropdownButton>
  );
};
