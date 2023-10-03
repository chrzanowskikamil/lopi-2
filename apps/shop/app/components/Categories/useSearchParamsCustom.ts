export const useSearchParamsCustom = () => {
  const set = () => {
    console.log('seter');
  };
  const get = () => {
    console.log('getter');
  };

  return { get, set };
};
