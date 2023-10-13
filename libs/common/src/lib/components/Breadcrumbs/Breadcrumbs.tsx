'use client';

import styles from './Breadcrumbs.module.scss';
import { Breadcrumb } from 'react-bootstrap';
import { IoHomeOutline } from 'react-icons/io5';
import { FC } from 'react';
import Link from 'next/link';
import { Crumb } from '../../models';

interface BreadcrumbsProps {
  crumbs: Crumb[];
  className?: string;
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ crumbs, className }) => {
  return (
    <div className={className}>
      <Breadcrumb className={styles.breadcrumb}>
        <div className={styles.icon}>
          <IoHomeOutline data-testid="home-icon" />
        </div>
        <BreadcrumbsItems crumbs={crumbs} />
      </Breadcrumb>
    </div>
  );
};

const BreadcrumbsItems: FC<BreadcrumbsProps> = ({ crumbs }) => {
  return crumbs.map((crumb, index) => (
    <Breadcrumb.Item
      linkAs={Link}
      key={index}
      href={crumb.href}
      active={crumb.isActive}
    >
      {crumb.label}
    </Breadcrumb.Item>
  ));
};
