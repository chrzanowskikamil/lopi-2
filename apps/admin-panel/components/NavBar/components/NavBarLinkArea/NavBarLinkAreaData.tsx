export type NavBarLinkAreaDataProps = {
  pageName: string;
  href: string;
  bootstrapIcon: string;
};

export const navBarLinkAreaData: NavBarLinkAreaDataProps[] = [
  {
    pageName: 'Strona główna',
    href: '/',
    bootstrapIcon: 'bi bi-house-door',
  },
  {
    pageName: 'Produkty',
    href: '/products',
    bootstrapIcon: 'bi bi-box',
  },
  {
    pageName: 'Kategorie',
    href: '/category',
    bootstrapIcon: 'bi bi-card-list',
  },
  {
    pageName: 'Ustawienia',
    href: '/settings',
    bootstrapIcon: 'bi bi-gear',
  },
];
