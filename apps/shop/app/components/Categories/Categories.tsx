'use client';
import styles from './Categories.module.scss';
import { FC, useState } from 'react';
import { Breadcrumbs } from './components/Breadcrumb';
import { SortDropdown } from './components/SortDropdown';
import { Sidebar } from './components/Sidebar';
import { Products } from './components/Products';
import { Button } from 'react-bootstrap';

interface CategoriesProps {
  title: string;
  content: string[];
}

const products = [
  { id: 1, name: 'Coffe', description: 'Coffe description', price: 10 },
  { id: 2, name: 'Tea', description: 'Tea description', price: 10 },
  { id: 3, name: 'Coffe', description: 'Coffe description', price: 10 },
  { id: 4, name: 'Tea', description: 'Tea description', price: 10 },
  { id: 5, name: 'Coffe', description: 'Coffe description', price: 10 },
  { id: 6, name: 'Tea', description: 'Tea description', price: 10 },
  { id: 7, name: 'Coffe', description: 'Coffe description', price: 10 },
  { id: 8, name: 'Tea', description: 'Tea description', price: 10 },
  { id: 9, name: 'Coffe', description: 'Coffe description', price: 10 },
  { id: 10, name: 'Tea', description: 'Tea description', price: 10 },
  { id: 11, name: 'Coffe', description: 'Coffe description', price: 10 },
  { id: 13, name: 'Tea', description: 'Tea description', price: 10 },
  { id: 14, name: 'Tea', description: 'Tea description', price: 10 },
  { id: 15, name: 'Tea', description: 'Tea description', price: 10 },
  { id: 16, name: 'Tea', description: 'Tea description', price: 10 },
  { id: 17, name: 'Tea', description: 'Tea description', price: 10 },
  { id: 18, name: 'Tea', description: 'Tea description', price: 10 },
  { id: 19, name: 'Tea', description: 'Tea description', price: 10 },
  { id: 20, name: 'Tea', description: 'Tea description', price: 10 },
  { id: 21, name: 'Tea', description: 'Tea description', price: 10 },
  { id: 22, name: 'Tea', description: 'Tea description', price: 10 },
  { id: 23, name: 'Tea', description: 'Tea description', price: 10 },
  { id: 24, name: 'Tea', description: 'Tea description', price: 10 },
  { id: 25, name: 'Tea', description: 'Tea description', price: 10 },
  { id: 26, name: 'Tea', description: 'Tea description', price: 10 },
];

export const Categories: FC<CategoriesProps> = ({ title, content }) => {
  const [visibleProducts, setVisibleProducts] = useState(products.slice(0, 6));

  const loadMoreProducts = () => {
    const nextProducts = products.slice(
      visibleProducts.length,
      visibleProducts.length + 6
    );
    setVisibleProducts([...visibleProducts, ...nextProducts]);
  };

  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <main className={styles.main}>
        <Breadcrumbs category={title} />
        <SortDropdown />
        <aside className={styles.aside}>
          <Sidebar activeCategory={title} list={content} />
          <Products product={title} visibleProducts={visibleProducts} />
          <Button className={styles.loadMoreButton} onClick={loadMoreProducts}>
            pokaż więcej
          </Button>
        </aside>
      </main>
    </>
  );
};
