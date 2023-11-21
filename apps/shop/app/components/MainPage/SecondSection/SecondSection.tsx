import {
  FetchedPromotionResponse,
  getPromotions,
} from '../../../../../shop/actions/getPromotions';

import { CategoriesCarousel } from './CategoriesCarousel';
import { CuriositySection } from './CuriositySection';
import { FC } from 'react';
import { FetchedCategoryResponse } from '../../../../../shop/types/FetchedCategoryResponse';
import { PromotionsSection } from './PromotionsSection';
import { getCategories } from '../../../../../shop/actions/getCategories';

export const SecondSection: FC = async () => {
  const categories: FetchedCategoryResponse[] = await getCategories();
  const promotions: FetchedPromotionResponse = await getPromotions();

  return (
    <section className="d-flex-col">
      <CategoriesCarousel categories={categories} />
      <PromotionsSection promotionsData={promotions} />
      <CuriositySection />
    </section>
  );
};
