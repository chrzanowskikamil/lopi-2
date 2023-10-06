import { renderHook } from '@testing-library/react';
import { useCategoriesSearchParams } from '../useCategoriesSearchParams';

describe('useCategoriesSearchParams', () => {
  test('schould render', () => {
    renderHook(useCategoriesSearchParams);
  });
  test('getParam.sort should return the sort parameter', () => {
    const mockGet = jest.fn();
    const searchParams = { get: mockGet };
    const { result } = renderHook(() =>
      useCategoriesSearchParams(searchParams as any)
    );

    mockGet.mockReturnValue('someSortValue');

    expect(result.current.getParam.sort()).toBe('someSortValue');
    expect(mockGet).toHaveBeenCalledWith('sort');
  });

  test('getParam.availability should return the availability parameter', () => {
    const mockGet = jest.fn();
    const searchParams = { get: mockGet };
    const { result } = renderHook(() =>
      useCategoriesSearchParams(searchParams as any)
    );

    mockGet.mockReturnValue('true');

    expect(result.current.getParam.availability()).toBe('true');
    expect(mockGet).toHaveBeenCalledWith('availability');
  });

  test('getParam.filterPriceLow should return the filterPriceLow parameter', () => {
    const mockGet = jest.fn();
    const searchParams = { get: mockGet };
    const { result } = renderHook(() =>
      useCategoriesSearchParams(searchParams as any)
    );

    mockGet.mockReturnValue('50');

    expect(result.current.getParam.filterPriceLow()).toBe('50');
    expect(mockGet).toHaveBeenCalledWith('filterPriceLow');
  });

  test('getParam.filterPriceHigh should return the filterPriceHigh parameter', () => {
    const mockGet = jest.fn();
    const searchParams = { get: mockGet };
    const { result } = renderHook(() =>
      useCategoriesSearchParams(searchParams as any)
    );

    mockGet.mockReturnValue('100');

    expect(result.current.getParam.filterPriceHigh()).toBe('100');
    expect(mockGet).toHaveBeenCalledWith('filterPriceHigh');
  });

  test('setParam should set the specified parameter in the URL', () => {
    const mockGet = jest.fn();
    const searchParams = { get: mockGet };
    const { result } = renderHook(() =>
      useCategoriesSearchParams(searchParams as any)
    );

    result.current.setParam('availability', 'newSortValue');

    expect(mockGet).not.toHaveBeenCalled();
    expect(window.location.search).toContain('availability=newSortValue');
  });
});
