export type CarouselElementsData = {
  starCount: number;
  opinion: string;
  author: string;
};

export const carouselElementsData: CarouselElementsData[] = [
  {
    starCount: 5,
    opinion:
      '“Znaleźliście wielki skarb! Duża różnorodność kapsułek pozwala mi na eksperymentowanie z różnymi smakami kawy. Jesteście najlepsi!”',
    author: 'Marta S., Gdańsk',
  },
  {
    starCount: 5,
    opinion:
      '"Bean Nook to prawdziwy zakątek dla miłośników kawy. Ich ekspresy do kawy są znakomite, a wybór kaw mielonych mnie zachwycił. Polecam wszystkim!"',
    author: 'Karolina K., Warszawa',
  },
  {
    starCount: 5,
    opinion:
      '"To moje ulubione miejsce na poranną kawę! Ziarna z Bean Nook mają niesamowity smak i zawsze mogę liczyć na przyjazną obsługę."',
    author: 'Mateusz B., Kraków',
  },
];
