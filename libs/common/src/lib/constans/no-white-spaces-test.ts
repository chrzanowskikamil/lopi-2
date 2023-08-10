const noWhiteSpacesRegex = /^\S+$/;

export const noWhiteSpacesTest = {
  name: 'no-whitespaces',
  testFunction: (value: string) => !!value.match(noWhiteSpacesRegex),
};
