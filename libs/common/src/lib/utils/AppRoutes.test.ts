import { AppRoutes } from './AppRoutes';

describe('AppRoutes', () => {
  describe('should invoke getHomePath', () => {
    it('should return the home path', () => {
      expect(AppRoutes.getHomePath()).toEqual('/');
    });
  });

  describe('should invoke getCategoryPath', () => {
    it('should return the category path', () => {
      expect(AppRoutes.getCategoryPath()).toEqual('/category');
    });
  });

  describe('should invoke getProductPath', () => {
    it('should return the product details path', () => {
      expect(AppRoutes.getProductPath()).toEqual('/productdetails');
    });
  });

  describe('should invoke getSpecifedCategoryPath', () => {
    it('should return the specified category path', () => {
      const dynamicParam = '123';

      expect(AppRoutes.getSpecifedCategoryPath(dynamicParam)).toEqual(
        '/category/123'
      );
    });
  });

  describe('should invoke getSpecifedProductPath', () => {
    it('should return the specified product path', () => {
      const productId = '456';

      expect(AppRoutes.getSpecifedProductPath(productId)).toEqual(
        '/productdetails/456'
      );
    });
  });
});
