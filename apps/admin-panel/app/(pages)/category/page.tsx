'use client';

import Accordion from 'react-bootstrap/Accordion';
import AddCategory from '../../../components/CategoryManagment/AddCategory/AddCategory';
import EditCategoryChoice from '../../../components/CategoryManagment/EditCategory/EditCategoryChoice';
import RemoveCategory from '../../../components/CategoryManagment/RemoveCategory/RemoveCategory';

const Categories: React.FC = () => {
  return (
    <>
      <Accordion defaultActiveKey="0" className="w-100 h-100">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Adding category area.</Accordion.Header>
          <Accordion.Body>
            <AddCategory />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Editing category area.</Accordion.Header>
          <Accordion.Body>
            <EditCategoryChoice />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Removing category area.</Accordion.Header>
          <Accordion.Body>
            <RemoveCategory />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Categories;
