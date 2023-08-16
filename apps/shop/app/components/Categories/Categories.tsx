'use client';
import styles from './Categories.module.scss';
import { FC } from 'react';
import { Breadcrumbs } from './components/Breadcrumb';
import { SortDropdown } from './components/SortDropdown';
import { Sidebar } from './components/Sidebar';
import { Products } from './components/Products';
import { Button } from 'react-bootstrap';

interface CategoriesProps {
  title: string;
  content: string[];
}

export const Categories: FC<CategoriesProps> = ({ title, content }) => {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <main className={styles.main}>
        <Breadcrumbs category={title} />
        <SortDropdown />
        <aside className={styles.aside}>
          <Sidebar activeCategory={title} list={content} />
          <Products product={title} />
          <Button className={styles.loadMoreButton}>pokaż więcej</Button>
        </aside>
      </main>
    </>
  );
};
