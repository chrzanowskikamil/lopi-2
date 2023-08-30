'use client';

import { NavDropdown } from 'react-bootstrap';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getCategoriesName } from '../../../actions/getCategoriesName';

export const CategoryDropdown = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    getCategoriesName().then((res) => setCategories(res));
  }, []);

  return (
    <NavDropdown title="Kategorie" id="basic-nav-dropdown">
      {categories.map((category) => (
        <NavDropdown.Item
          key={category}
          as={Link as any}
          href={`category/${category}`}
          passHref
        >
          {category}
        </NavDropdown.Item>
      ))}
      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    </NavDropdown>
  );
};
