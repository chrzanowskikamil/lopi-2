import style from '../tileShop.module.scss';

import { FC } from 'react';

import { StarIcon } from '../../../assets/SvgIcons/StarIcon';

type StarsProps = {
  starsCount: number;
};

const Stars: FC<StarsProps> = ({ starsCount }) => {
  return (
    <>
      <StarIcon color={'var(--theme-orange)'} className={style.star} />
      <StarIcon color={'var(--theme-orange)'} className={style.star} />
      <StarIcon color={'var(--theme-orange)'} className={style.star} />
      <StarIcon color={'var(--theme-orange)'} className={style.star} />
      <StarIcon color={'var(--theme-grey)'} className={style.star} />
    </>
  );
};

export default Stars;
