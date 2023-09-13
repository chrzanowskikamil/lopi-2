export const displayPrice = (price: number | undefined): string => {
  if (price === undefined) {
    return '';
  }

  return `${price.toFixed(2)} zł`;
};
