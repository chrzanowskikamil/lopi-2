'use client';

import style from '../ProductManagment.module.scss';

import { useState } from 'react';

import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import EditProduct from './EditProduct';

const EditProductChoice: React.FC = () => {
  const [toEdit, setToEdit] = useState('');

  return (
    <>
      <Container>
        <h1>Edit product:</h1>
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => setToEdit(e.target.value)}
        >
          <option value={undefined}>Choose product you want to edit.</option>
          <option>Shoes 3 true file.jpg</option>
          <option>T-shirts 7 false file.png</option>
          <option>Throusers 0 false file.svg</option>
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
      <EditProduct product={toEdit} />
    </>
  );
};

export default EditProductChoice;
