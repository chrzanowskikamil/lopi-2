import { AppRoutes } from '@lopi-2/common';
import { FC } from 'react';
import { FetchedCategoryResponse } from '../../../../../shop/types/FetchedCategoryResponse';
import Image from 'next/image';
import Link from 'next/link';
import style from './CategoryTile.module.scss';

interface CategoryTileProps {
  category: FetchedCategoryResponse;
}

export const CategoryTile: FC<CategoryTileProps> = ({ category }) => {
  return (
    <div className={style.categoryTile}>
      <Image
        src={`/category-image-${category.name}.png`}
        alt={category.name}
        width={500}
        height={534}
      />
      <Link href={AppRoutes.getSpecifedCategoryPath(category.name)}>
        {category.name}
      </Link>
    </div>
  );
};
