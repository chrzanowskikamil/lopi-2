export abstract class AppRoutes {
  static readonly getHomePath = () => '/';
  static readonly getLoginPath = () => '/auth/';

  static readonly getRegisterPath = () => `${AppRoutes.getLoginPath()}/signup`;

  static readonly getCategoryPath = () => '/category';
  static readonly getProductPath = () => '/productdetails';

  static readonly getSpecifedCategoryPath = (dynamicParam: string) =>
    `${AppRoutes.getCategoryPath()}/${dynamicParam}`;

  static readonly getSpecifedProductPath = (productId: string) =>
    `${AppRoutes.getProductPath()}/${productId}`;
}
