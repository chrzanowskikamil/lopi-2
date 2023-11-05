import { AppRoutes } from '../../../utils';
import { CrumbsFactory } from '../BreadcrumbsFactory';

describe('BreadcrumbsFactory', () => {
  describe('should invoke createHomeCrumb', () => {
    it('should create a single crumb pointing to the home page', () => {
      const crumb = CrumbsFactory.createHomeCrumb();

      expect(crumb).toHaveLength(1);
      expect(crumb[0].label).toEqual('Home');
      expect(crumb[0].href).toEqual(AppRoutes.getHomePath());
    });
  });

  describe('should invoke createSpecifedCategoryCrumb', () => {
    it('should create a crumb pointing to the home page and a specified category', () => {
      const dynamicParam = 'SpecifedCategory';
      const crumbs = CrumbsFactory.createSpecifedCategoryCrumb(dynamicParam);

      expect(crumbs).toHaveLength(2);

      expect(crumbs[0].label).toEqual('Home');
      expect(crumbs[0].href).toEqual(AppRoutes.getHomePath());

      expect(crumbs[1].label).toEqual(dynamicParam);
      expect(crumbs[1].href).toEqual(
        AppRoutes.getSpecifedCategoryPath(dynamicParam)
      );
    });
  });

  describe('should invoke createProductCrumb', () => {
    it('should create a crumb pointing to the home page, a specified category, and a specified product', () => {
      const dynamicParam = 'SpecifedCategory';
      const product = {
        uid: '123',
        name: 'SpecifedProduct',
      };
      const crumbs = CrumbsFactory.createProductCrumb(product, dynamicParam);

      expect(crumbs).toHaveLength(3);

      expect(crumbs[0].label).toEqual('Home');
      expect(crumbs[0].href).toEqual(AppRoutes.getHomePath());

      expect(crumbs[1].label).toEqual(dynamicParam);
      expect(crumbs[1].href).toEqual(
        AppRoutes.getSpecifedCategoryPath(dynamicParam)
      );

      expect(crumbs[2].label).toEqual(product.name);
      expect(crumbs[2].href).toEqual(
        AppRoutes.getSpecifedProductPath(product.uid)
      );
    });
  });
});
