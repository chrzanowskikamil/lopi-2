'use client';

import { NavDropdown } from 'react-bootstrap';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getCategoriesName } from '../../../actions/getCategoriesName';
import { AppRoutes } from '@lopi-2/common';

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
          as={Link}
          href={AppRoutes.getSpecifedCategoryPath(category)}
          passHref
        >
          {category}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
};
