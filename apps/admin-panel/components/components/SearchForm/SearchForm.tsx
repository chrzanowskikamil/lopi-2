import { Button, Form } from 'react-bootstrap';

import { FC } from 'react';
import style from './SearchForm.module.scss';

type SearchFormProps = {
  buttonClassName?: string;
};

export const SearchForm: FC<SearchFormProps> = ({ buttonClassName }) => {
  return (
    <div className={style.userBarSearchContainer}>
      <i className={`${style.searchIcon} bi bi-search`}></i>
      <Form.Control
        type="text"
        placeholder="Wyszukaj"
        className={style.searchBar}
      />

      <Button type="submit" className={` ${style.button} ${buttonClassName}  `}>
        szukaj
      </Button>
    </div>
  );
};
