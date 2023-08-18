'use client';

import style from '../ProductManagment.module.scss';

import { useState } from 'react';

import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import EditProductChoice from './EditProduct';

const EditCategoryChoice: React.FC = () => {
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
      <EditProductChoice product={toEdit} />
    </>
  );
};

export default EditCategoryChoice;
