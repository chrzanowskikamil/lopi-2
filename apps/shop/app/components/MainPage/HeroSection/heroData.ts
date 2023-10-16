import { CarouselItemsProps } from '@lopi-2/common';

export const carouselItems: CarouselItemsProps[] = [
  {
    image: {
      src: '/hero-image-0.png',
      alt: 'hero_image',
      width: 1440,
      height: 883,
    },
    caption: {
      cafeName: 'Bean Nook',
      title: 'Udoskonal swoje kawowe rytułały z naszymi akcesoriami',
    },
    button: {
      buttonText: 'Kup Akcesoria',
    },
  },
  {
    image: {
      src: '/hero-image-1.png',
      alt: 'hero_image',
      width: 1440,
      height: 883,
    },
    caption: {
      cafeName: 'Bean Nook',
      title: 'Aromatyczne ukojenie dla Twoich zmysłów',
    },
    button: {
      buttonText: 'Kup kawę',
    },
  },
  {
    image: {
      src: '/hero-image-2.png',
      alt: 'hero_image',
      width: 1440,
      height: 883,
    },
    caption: {
      cafeName: 'Bean Nook',
      title: 'Twoje magiczne miejsce na chwile rozkoszy',
    },
    button: {
      buttonText: 'Odwiedź naszą kawiarnię',
    },
  },
];

interface discoverySectionTextsProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

export const discoverySectionTexts: discoverySectionTextsProps = {
  title: 'Odkryj Raj dla miłośników kawy',
  subtitle: `Bean Nook to kawiarnia i sklep stworzony z pasji do kawy. Jesteśmy dumni
  z naszych świeżo palonych ziaren, najwyższej jakości kaw mielonych oraz
  bogatej oferty akcesoriów. U nas każda filiżanka ma swój unikalny smak,
  a każdy klient znajdzie coś specjalnego dla siebie.`,
  buttonText: 'Kupuj',
};
