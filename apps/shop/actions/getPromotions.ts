export interface Promotion {
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
}

export interface FetchedPromotionResponse {
  promotions: Promotion[];
}

export const getPromotions = (): Promise<FetchedPromotionResponse> => {
  return new Promise((resolve) => {
    resolve({
      promotions: [
        {
          imageSrc: '/promotion-image-0.png',
          title: 'Kawy w promocji do -20%',
          description:
            'Niezwykłe smaki w wyjątkowych cenach - odkryj naszą promocyjną palletę kawowych rozkoszy!',
          buttonText: 'Kup',
        },
        {
          imageSrc: '/promotion-image-1.png',
          title: 'Akcesoria w promocji do -15%',
          description:
            'Twoje kawowe must-have w super cenach - wyposaż się we wspaniałe akcesoria do parzenia w korzystnych cenach!',
          buttonText: 'Kup',
        },
      ],
    });
  });
};
