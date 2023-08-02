export const noWhiteSpacesTest = {
  name: 'no-whitespaces',
  testFunction: (value: string) => (value ? value.trim().length !== 0 : true),
};
