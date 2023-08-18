'use client';

import style from '../ProductManagment.module.scss';

import { useState } from 'react';

import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import RemoveProductChoice from './RemoveProductChoice';

const RemoveCategoryChoice: React.FC = () => {
  const [toEdit, setToEdit] = useState('');

  return (
    <>
      <Container>
        <h1>Edit product:</h1>
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => setToEdit(e.target.value)}
        >
          <option value={undefined}>
            Choose category you want add product to.
          </option>
          <option>Shoes</option>
          <option>T-shirts</option>
          <option>Throusers</option>
        </Form.Select>
        {toEdit == '' || toEdit == 'Choose product you want to edit.' ? (
          <>
            <Button disabled type="submit" className={style.soloButton}>
              Change product
            </Button>
          </>
        ) : (
          ''
        )}
      </Container>
      <RemoveProductChoice product={toEdit} />
    </>
  );
};

export default RemoveCategoryChoice;
