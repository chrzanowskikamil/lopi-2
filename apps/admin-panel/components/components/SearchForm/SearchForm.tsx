import { Button, Form } from 'react-bootstrap';
import { FC, useRef } from 'react';

import style from './SearchForm.module.scss';

type SearchFormProps = {
  buttonClassName?: string;
};

export const SearchForm: FC<SearchFormProps> = ({ buttonClassName }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={style.userBarSearchContainer}>
      <i
        className={`${style.searchIcon} bi bi-search`}
        onClick={() => {
          inputRef.current?.focus();
        }}
      ></i>
      <Form.Control
        type="text"
        placeholder="Wyszukaj"
        className={style.searchBar}
        ref={inputRef}
      />

      <Button type="submit" className={` ${style.button} ${buttonClassName}  `}>
        szukaj
      </Button>
    </div>
  );
};
