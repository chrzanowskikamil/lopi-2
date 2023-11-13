'use client';

import { useEffect, useState } from 'react';

import { AppRoutes } from '@lopi-2/common';
import Link from 'next/link';
import { NavDropdown } from 'react-bootstrap';
import { getCategories } from '../../../actions/getCategories';

export const CategoryDropdown = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    getCategories().then((res) =>
      setCategories(res.map((category) => category.name))
    );
  }, []);

  return (
    <NavDropdown title="Kategorie" id="basic-nav-dropdown" autoClose={true}>
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
