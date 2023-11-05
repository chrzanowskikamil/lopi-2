import { FC } from 'react';
import { FetchedCategoryResponse } from '../../../../../shop/types/FetchedCategoryResponse';
import { CategoriesCarousel } from './CategoriesCarousel';
import { PromotionsSection } from './PromotionsSection';
import { getCategories } from '../../../../../shop/actions/getCategories';
import {
  FetchedPromotionResponse,
  getPromotions,
} from '../../../../../shop/actions/getPromotions';
import { CuriositySection } from './CuriositySection';

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
