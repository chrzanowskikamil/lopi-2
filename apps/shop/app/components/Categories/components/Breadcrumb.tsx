import styles from '../Categories.module.scss';
import { Breadcrumb } from 'react-bootstrap';
import { FC } from 'react';
import Link from 'next/link';
import { IoHomeOutline } from 'react-icons/io5';

interface BreadcrumbProps {
  category: string;
}

export const Breadcrumbs: FC<BreadcrumbProps> = ({ category }) => {
  return (
    <Breadcrumb className={styles.breadcrumb}>
      <div className={styles.breadcrumbIcon}>
        <IoHomeOutline />
      </div>
      <Breadcrumb.Item href="/" linkAs={Link}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item active>{category}</Breadcrumb.Item>
    </Breadcrumb>
  );
};
