import {
  ChildrenFC,
  SortParams,
  sortOrderControler,
  sortTypeControler,
  useSearchParams,
} from '@lopi-2/common';
import { Dropdown, DropdownButton } from 'react-bootstrap';

import styles from './SortDropdown.module.scss';
import { useCategoriesContext } from '../../../../contexts/CategoriesContext';

export const SortDropdown: ChildrenFC = () => {
  const { params, applyParams } = useSearchParams();
  const { handleChangeParams } = useCategoriesContext();

  const dropdownItems = [
    SortParams.PRICE_ASC,
    SortParams.PRICE_DSC,
    SortParams.PRODUCT_NAME_ASC,
    SortParams.PRODUCT_NAME_DSC,
  ];

  const handleClick = ({ item }: { item: string }) => {
    handleChangeParams({
      ...params,
      sortType: sortTypeControler(item),
      sortOrder: sortOrderControler(item),
    });
    applyParams({ sortName: item });
  };

  const items = dropdownItems.map((item) => (
    <Dropdown.Item key={item} onClick={() => handleClick({ item })}>
      {item}
    </Dropdown.Item>
  ));
  console.log(params.sortName);

  return (
    <DropdownButton
      bsPrefix={styles.dropdown}
      id="sort-button"
      title={params.sortName}
    >
      {items}
    </DropdownButton>
  );
};
