'use client';

import AddProduct from '../../../components/ProductManagment/AddProduct/AddProduct';
import EditProduct from '../../../components/ProductManagment/EditProduct/EditProduct';
import RemoveProduct from '../../../components/ProductManagment/RemoveProduct/RemoveProduct';

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
            <EditProduct />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Removing product area.</Accordion.Header>
          <Accordion.Body>
            <RemoveProduct />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Products;
