import { renderHook } from '@testing-library/react';
import { useCategoriesSearchParams } from '../useCategoriesSearchParams';

describe('useCategoriesSearchParams', () => {
  test('schould render', () => {
    renderHook(useCategoriesSearchParams);

    expect(useCategoriesSearchParams().getParam.sort()).toBe(null);
  });
});

// describe('check getParam function', () => {
//   test('getParam sort parameter', () => {

//   });
// });

// describe('useCategoriesSeathchPrams secound verison.', () => {
//   jest.mock('next/navigation', () => ({
//     ...jest.requireActual('next/navigation'),
//     useSearchParams: () => [new URLSearchParams({})],
//   }));

//   test('Schould render the initial count', () => {
//     const { result } = renderHook(useCategoriesSearchParams);
//     console.log(result.current);
//   });
// });

// describe('testing jest', () => {});
