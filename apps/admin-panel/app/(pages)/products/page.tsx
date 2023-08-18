'use client';

import AddProduct from '../../../components/ProductManagment/AddProduct/AddProduct';
import EditCategoryChoice from '../../../components/ProductManagment/EditProduct/EditProductChoice';
import RemoveCategoryChoice from '../../../components/ProductManagment/RemoveProduct/RemoveProductChoice';

import Accordion from 'react-bootstrap/Accordion';

const Products: React.FC = () => {
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Adding product area.</Accordion.Header>
          <Accordion.Body>
            <AddProduct />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Editing product area.</Accordion.Header>
          <Accordion.Body>
            <EditCategoryChoice />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Removing product area.</Accordion.Header>
          <Accordion.Body>
            <RemoveCategoryChoice />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Products;
