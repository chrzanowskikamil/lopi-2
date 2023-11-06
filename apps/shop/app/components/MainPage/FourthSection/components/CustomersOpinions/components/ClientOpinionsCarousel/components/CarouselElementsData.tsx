export type CarouselElementsData = {
  starCount: number;
  opinion: JSX.Element;
  author: string;
};

export const carouselElementsData: CarouselElementsData[] = [
  {
    starCount: 5,
    opinion: (
      <span>
        &rdquo;Znaleźliście&nbsp;wielki skarb! Duża&nbsp;różnorodność
        kapsułek&nbsp;pozwala mi na&nbsp;eksperymentowanie
        z&nbsp;różnymi&nbsp;smakami kawy.
        <br />
        Jesteście&nbsp;najlepsi!&rdquo;
      </span>
    ),
    author: 'Marta S., Gdańsk',
  },
  {
    starCount: 5,
    opinion: (
      <span>
        &rdquo;Bean&nbsp;Nook&nbsp;to<br />prawdziwy&nbsp;zakątek&nbsp;dla
        miłośników&nbsp;kawy. Ich&nbsp;ekspresy&nbsp;do&nbsp;kawy
        są&nbsp;znakomite,<br />a wybór&nbsp;kaw&nbsp;mielonych mnie zachwycił.
        <br />
        Polecam wszystkim!&rdquo;
      </span>
    ),
    author: 'Karolina K., Warszawa',
  },
  {
    starCount: 5,
    opinion: (
      <span>
        &ldquo;To&nbsp;moje&nbsp;ulubione miejsce na&nbsp;poranną&nbsp;kawę!
        Ziarna&nbsp;z Bean Nook&nbsp;mają&nbsp;niesamowity smak i zawsze mogę
        liczyć na przyjazną obsługę.&rdquo;
      </span>
    ),
    author: 'Mateusz B., Kraków',
  },
];
