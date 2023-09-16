import styles from './Breadcrumbs.module.scss';
import { Breadcrumb } from 'react-bootstrap';
import { IoHomeOutline } from 'react-icons/io5';
import { FC } from 'react';
import Link from 'next/link';

interface BreadcrumbsProps {
  category: string;
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ category }) => {
  console.log(category);

  return (
    <Breadcrumb className={styles.breadcrumb}>
      <div className={styles.icon}>
        <IoHomeOutline />
      </div>
      <Breadcrumb.Item href="/" linkAs={Link}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item active>{category}</Breadcrumb.Item>
    </Breadcrumb>
  );
};
