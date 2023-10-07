import { Crumb } from '../../models';

export class CrumbsBuilder {
  private readonly crumbs: Crumb[] = [];

  constructor(private readonly crumb: Crumb) {
    this.crumbs.push({ label: crumb.label, href: crumb.href, isActive: false });
  }

  public addCrumb(nextCrumb: Crumb): CrumbsBuilder {
    this.crumbs.push({ ...nextCrumb, isActive: false });

    return this;
  }

  public build(): Crumb[] {
    this.crumbs[this.crumbs.length - 1].isActive = true;

    return this.crumbs;
  }
}
