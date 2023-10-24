import { Button, Form } from 'react-bootstrap';

import style from './SearchForm.module.scss';

export const SearchForm = () => {
  return (
    <div className={style.userBarSearchContainer}>
      <i className={`${style.searchIcon} bi bi-search`}></i>
      <Form.Control
        type="text"
        placeholder="Wyszukaj"
        className={style.searchBar}
      />

      <Button type="submit" className={style.button}>
        szukaj
      </Button>
    </div>
  );
};
