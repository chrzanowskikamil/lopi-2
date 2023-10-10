import { CrumbsBuilder } from '../BreadcrumbsBuilder';

describe('CrumbsBuilder', () => {
  const initialCrumb = { label: 'Home', href: '/', isActive: true };

  it('should initialize with a crumb', () => {
    const builder = new CrumbsBuilder(initialCrumb);
    const result = builder.build();

    expect(result).toEqual([initialCrumb]);
  });

  it('should add a crumb', () => {
    const newCrumb = { label: 'Category', href: '/category' };
    const builder = new CrumbsBuilder(initialCrumb).addCrumb(newCrumb);
    const result = builder.build();

    expect(result).toEqual([
      { ...initialCrumb, isActive: false },
      { ...newCrumb, isActive: true },
    ]);
  });

  it('should add multiple crumbs', () => {
    const newCrumb = { label: 'Category', href: '/category' };
    const anotherCrumb = {
      label: 'Subcategory',
      href: '/category/subcategory',
    };
    const builder = new CrumbsBuilder(initialCrumb)
      .addCrumb(newCrumb)
      .addCrumb(anotherCrumb);
    const result = builder.build();

    expect(result).toEqual([
      { ...initialCrumb, isActive: false },
      { ...newCrumb, isActive: false },
      { ...anotherCrumb, isActive: true },
    ]);
  });
});
