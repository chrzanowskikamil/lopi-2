import '@testing-library/jest-dom/';
import { render } from '@testing-library/react';
import { Breadcrumbs } from '../Breadcrumbs';

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Product 1', href: '/products/1', isActive: true },
];

describe('Breadcrumbs', () => {
  it('should render home icon', () => {
    const { getByTestId } = render(<Breadcrumbs crumbs={crumbs} />);

    expect(getByTestId('home-icon')).toBeInTheDocument();
  });

  it('should render breadcrumbs', () => {
    const { getByText } = render(<Breadcrumbs crumbs={crumbs} />);

    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('Products')).toBeInTheDocument();
    expect(getByText('Product 1')).toBeInTheDocument();
  });

  it('should contains proper hrefs', () => {
    const { getByText } = render(<Breadcrumbs crumbs={crumbs} />);

    crumbs.slice(0, -1).forEach((crumb) => {
      const linkElement = getByText(crumb.label).closest('a');

      expect(linkElement).toHaveAttribute('href', crumb.href);
    });
  });

  it('should check if the last crumb is active', () => {
    const { getByText } = render(<Breadcrumbs crumbs={crumbs} />);
    const lastCrumb = getByText(crumbs[crumbs.length - 1].label);

    expect(lastCrumb.closest('li')).toHaveClass('active');
  });
});
