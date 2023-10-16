import style from './PromotionsSection.module.scss';
import { FC } from 'react';
import Image from 'next/image';
import { Button } from '@lopi-2/common';
import {
  FetchedPromotionResponse,
  Promotion,
} from '../../../../../shop/actions/getPromotions';

interface PromotionsSectionProps {
  promotionsData: FetchedPromotionResponse;
}

interface PromotionTileProps {
  promotion: Promotion;
}

const PromotionTile: FC<PromotionTileProps> = ({ promotion }) => {
  return (
    <div className={style.promotionTile}>
      <Image
        src={promotion.imageSrc}
        alt={promotion.title}
        width={600}
        height={411}
      />
      <div>
        <h3>{promotion.title}</h3>
        <p>{promotion.description}</p>
        <Button title={promotion.buttonText} />
      </div>
    </div>
  );
};

export const PromotionsSection: FC<PromotionsSectionProps> = ({
  promotionsData,
}) => {
  return (
    <div className={style.container}>
      {promotionsData.promotions.map((promotion, id) => (
        <PromotionTile key={id} promotion={promotion} />
      ))}
    </div>
  );
};
