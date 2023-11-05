import { AppRoutes } from '../../utils';
import { Crumb } from '../../models';
import { CrumbsBuilder } from './BreadcrumbsBuilder';

interface Product {
  uid: string;
  name: string;
}

export abstract class CrumbsFactory {
  static createHomeCrumb(): Crumb[] {
    return new CrumbsBuilder({
      label: 'Home',
      href: AppRoutes.getHomePath(),
    }).build();
  }

  static createSpecifedCategoryCrumb(dynamicParam: string): Crumb[] {
    return new CrumbsBuilder({
      label: 'Home',
      href: AppRoutes.getHomePath(),
    })
      .addCrumb({
        label: dynamicParam,
        href: AppRoutes.getSpecifedCategoryPath(dynamicParam),
      })
      .build();
  }

  static createProductCrumb(product: Product, dynamicParam: string): Crumb[] {
    return new CrumbsBuilder({
      label: 'Home',
      href: AppRoutes.getHomePath(),
    })
      .addCrumb({
        label: dynamicParam,
        href: AppRoutes.getSpecifedCategoryPath(dynamicParam),
      })
      .addCrumb({
        label: product.name,
        href: AppRoutes.getSpecifedProductPath(product.uid),
      })
      .build();
  }
}
